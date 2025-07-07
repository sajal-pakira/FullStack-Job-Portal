import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// const supabaseClient = (supabaseAccessToken) => {
//   // console.log("🔐 Creating Supabase client with token:", supabaseAccessToken);
//   const supabase = createClient(supabaseUrl, supabaseKey, {
//     global: { headers: { Authorization: `Bearer ${supabaseAccessToken}` } },
//   });

//   return supabase;
// };

let client = null;
let lastToken = null;

const supabaseClient = (supabaseAccessToken) => {
  if (!client || lastToken !== supabaseAccessToken) {
    console.log(
      "🔐 Creating new Supabase client with token:",
      supabaseAccessToken
    );

    client = createClient(supabaseUrl, supabaseKey, {
      global: {
        headers: {
          Authorization: `Bearer ${supabaseAccessToken}`,
        },
      },
    });

    lastToken = supabaseAccessToken;
  }

  return client;
};

export default supabaseClient;
