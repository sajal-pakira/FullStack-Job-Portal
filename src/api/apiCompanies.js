import supabaseClient from "@/utils/supabase";

export async function getCompanies(token) {
  try {
    const supabase = supabaseClient(token);

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
