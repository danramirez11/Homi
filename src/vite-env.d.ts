///<reference types="vite/client" />



interface ImportMetaEnv {
  readonly VITE_PROYECT_SUPABASEKEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}