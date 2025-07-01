import supabaseClient from "@/utils/supabase";

export async function applyToJob(token, _, jobData) {
  try {
    const supabase = await supabaseClient(token);
    const random = Math.floor(Math.random() * 90000);
    const fileName = `resume-${random}-${jobData.candidate_id}`;
    const { data, error } = await supabase.from("companies").select("*");
    if (error) {
      console.log("Error in fetching the companies", error);
      return [];
    }
    return data;
  } catch (error) {
    console.log("ERROR", error);
    return [];
  }
}
