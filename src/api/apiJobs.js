import supabaseClient from "@/utils/supabase";

export async function getJobs(token, { location, company_id, searchQuery }) {

  try {
    
const supabase = await supabaseClient(token);

  // const { data: userData } = await supabase.auth.getUser(); // 🧠 get user_id
  // const userId = userData?.user?.id;

  let query = supabase
    .from("jobs")
    .select("*, company:companies(name,logo_url), saved:saved_jobs(id)");

  if (location) {
    query = query.eq("location", location);
  }
  if (company_id) {
    query = query.eq("company_id", company_id);
  }
  if (searchQuery) {
    query = query.ilike("title", `%${searchQuery}%`);
  }

  const { data, error } = await query;
  // if (error) {
  //   console.error("Error in fetching jobs : ", error);
  //   return null;
  // }

  console.log("DATA:", data);
  console.log("ERROR:", error);
  if (error) {
    console.error("Supabase error:", error);
    return [];
  }

  //  isSaved flag
  // const jobsWithSaved = data.map((job) => ({
  //   ...job,
  //   isSaved: job.saved?.some((s) => s.user_id === userId),
  // }));

  return data || null;

  } catch (error) {
    console.error("Error fetching jobs:", error);
    return []; // Return empty array on error
  }
  
}

export async function saveJob(token, { alreadySaved }, saveData) {
  const supabase = await supabaseClient(token);

  // Decode and log the token
  const decoded = JSON.parse(atob(token.split(".")[1]));
  console.log("✅ DECODED JWT:", decoded);
  console.log("🧠 saveData.user_id =", saveData.user_id);
  console.log("🔑 JWT sub =", decoded.sub);

  if (alreadySaved) {
    const { data, error: deleteError } = await supabase
      .from("saved_jobs")
      .delete()
      .eq("job_id", saveData.job_id);

    console.log("DATA:", data);

    if (deleteError) {
      console.error("Error in deleting saved job", deleteError);
      return null;
    }

   return data ?? [];
  } else {
    const { data, error: insertError } = await supabase
      .from("saved_jobs")
      .insert([saveData])
      .select();

    console.log("DATA:", data);

    if (insertError) {
      console.error("Error in fetching jobs", insertError);
      return null;
    }

    return data;
  }

  //  isSaved flag
  // const jobsWithSaved = data.map((job) => ({
  //   ...job,
  //   isSaved: job.saved?.some((s) => s.user_id === userId),
  // }));
}
