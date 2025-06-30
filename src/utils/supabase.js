// import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// const supabaseClient = async (supabaseAccessToken) => {
//   const supabase = createClient(supabaseUrl, supabaseKey, {
//     global: {
//       headers: {
//         Authorization: `Bearer ${supabaseAccessToken}`,
//       },
//     },
//   });
//   return supabase;
// };

// export default supabaseClient;

// utils/supabase.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabase = null;

const supabaseClient = async (token) => {
  if (!supabase) {
    supabase = createClient(supabaseUrl, supabaseKey);
  }

  if (token) {
    console.log("🔁 Using Supabase client with token:", token?.slice(0, 10)); // ✅ Place this here
    await supabase.auth.setAuth(token);
  }

  return supabase;
};

export default supabaseClient;
