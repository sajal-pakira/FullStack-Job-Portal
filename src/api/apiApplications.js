import supabaseClient, { supabaseUrl } from "@/utils/supabase";

export async function applyToJob(token, _, jobData) {
  try {
    const supabase = await supabaseClient(token);

    const random = Math.floor(Math.random() * 90000);
    const fileName = `resume-${random}-${jobData.candidate_id}`;
    const { error: storageError } = await supabase.storage
      .from("resumes")
      .upload(fileName, jobData.resume);
    if (storageError) {
      console.log("Error uploading resumes", error);
      return [];
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
      console.log("Error in submitting Application", error);
      return [];
    }
    return data;
  } catch (error) {
    console.log("ERROR", error);
    return [];
  }
}
