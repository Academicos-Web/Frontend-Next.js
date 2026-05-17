import { createClient } from "@supabase/supabase-js";
import { urlToHttpOptions } from "url";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient("https://vxlzznokjpwcfywvhexh.supabase.co", "sb_publishable_jWnCWjaS6QNJGH7NINmFDg_6NF09IMV");