import { createClient } from '@supabase/supabase-js'
const VITE_PROYECT_SUPABASEKEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFodGduZmVjcmliZWpzeHdjcXF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyNzM4OTMsImV4cCI6MjA2Mjg0OTg5M30.5U1mV2V-2sypKYuWdAOzd0pE0Gc-08Cv_uUyVXmEzdg'
const VITE_SUPABASE_URL='https://ahtgnfecribejsxwcqqv.supabase.co/'

const supabaseUrl = VITE_SUPABASE_URL
const supabaseKey = VITE_PROYECT_SUPABASEKEY
const supabase = createClient(supabaseUrl, supabaseKey)



export default supabase
