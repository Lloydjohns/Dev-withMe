import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ehaxelwadigpdhxqqjno.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_91Jsjrll4wtLN9YZNeUNsg_oemOpMMV'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)