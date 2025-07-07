import supabaseClient, { supabaseUrl } from "@/utils/supabase";

export async function applyToJob(token, _, jobData) {
  try {
    console.log("Upload token:", token);

    const supabase = supabaseClient(token);

    const random = Math.floor(Math.random() * 90000);
    const fileName = `resume-${random}-${jobData.candidate_id}`;
    const { error: storageError } = await supabase.storage
      .from("resumes")
      .upload(fileName, jobData.resume, {
        contentType: jobData.resume.type || "application/pdf",
      });

    if (storageError) {
      console.log("Error uploading resumes", storageError);
      return { error: "Resume upload failed" };
    }

    const resume = `${supabaseUrl}/storage/v1/object/public/resumes/${fileName}`;

    const { data, error } = await supabase
      .from("applications")
      .insert([
        {
          ...jobData,
          resume,
        },
      ])
      .select();
    if (error) {
      console.log("Error in submitting application:", error);
      return { success: false, error: "Application submission failed" };
    }

    return { success: true, data };
  } catch (err) {
    console.log("ERROR", err);
    return { success: false, error: "Unexpected error occurred" };
  }
}

export async function updateApplicationStatus(
  token,
  { job_id, candidate_id },
  status
) {
  const supabase = supabaseClient(token);

  const { data, error } = await supabase
    .from("applications")
    .update({ status })
    .eq("job_id", job_id)
    .eq("candidate_id", candidate_id)
    .select();
  if (error || !data || data.length === 0) {
    //
    console.log("Error in updating applications status :- ", error);
    console.log("❌ Update failed");

    console.log("Data:", data);
    return null;
  }
  return data;
}

export async function getApplications(token, { user_id }) {
  const supabase = supabaseClient(token);

  const { data, error } = await supabase
    .from("applications")
    .select("*, job:jobs(title, company:companies(name))")
    .eq("candidate_id", user_id);
  if (error || !data || data.length === 0) {
    console.log("Error in updating applications status :- ", error);
    console.log("❌ Update failed");

    console.log("Data:", data);
    return null;
  }
  return data;
}
