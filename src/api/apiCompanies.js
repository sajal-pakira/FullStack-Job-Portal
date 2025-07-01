import supabaseClient from "@/utils/supabase";

export async function getCompanies(token) {
  const supabase = supabaseClient(token);
  const { data, error } = await supabase.from("companies").select("*");
  if (error) {
    console.log("Error in fetching the companies", error);
    return null;
  }
  return data;
}
