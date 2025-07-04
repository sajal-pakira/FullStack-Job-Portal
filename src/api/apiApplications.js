import supabaseClient, { supabaseUrl } from "@/utils/supabase";

export async function applyToJob(token, _, jobData) {
  try {
    console.log("Upload token:", token);

    const supabase = await supabaseClient(token);

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
