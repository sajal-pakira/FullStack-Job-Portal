import supabaseClient from "@/utils/supabase";

export async function getJobs(token) { 
  // location, company_id, searchQuery
  const supabase = await supabaseClient(token);
  const query = supabase.from("jobs").select("*");
  const { data, error } = await query;
  if (error) {
    console.error("Error in fetching jobs : ", error);
    return null;
  }
  return data;
}
