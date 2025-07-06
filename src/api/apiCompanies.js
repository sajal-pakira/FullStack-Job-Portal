import supabaseClient, { supabaseUrl } from "@/utils/supabase";

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

export async function addNewCompany(token, _, companyData) {
  const supabase = supabaseClient(token);

  const random = Math.floor(Math.random() * 90000);
  const fileName = `resume-${random}-${companyData.name}`;
  const { error: storageError } = await supabase.storage
    .from("company-logo")
    .upload(fileName, companyData.logo);

  if (storageError) {
    console.log("Error uploading company logo", storageError);
    return { error: "Resume upload failed" };
  }

  const logo_url = `${supabaseUrl}/storage/v1/object/public/company-logo/${fileName}`;

  const { data, error } = await supabase
    .from("companies")
    .insert([
      {
        name: companyData.name,
        logo_url,
      },
    ])
    .select();
  if (error) {
    console.log("Error in submitting the companies", error);
    return null;
  }
  return data;
}
