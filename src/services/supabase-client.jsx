import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_KEY;

const supabaseUrl = "https://wbubzxzlawinpnpsrgbd.supabase.co";
// const supabaseAnonKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndidWJ6eHpsYXdpbnBucHNyZ2JkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzOTg2MzAsImV4cCI6MjA2OTk3NDYzMH0.XrC21XFW - tprYxrW26sNMbxZBDzSrRw603CUMJP8jkc";
const supabaseAnonKey = "sb_publishable_wh9Eeb4DSzcy5r2O5IcVoQ_Mci8AWqa";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
