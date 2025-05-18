///<reference types="vite/client" />

interface ViteTypeOptions {

}

interface ImportMetaEnv {
  readonly VITE_PROYECT_SUPABASEKEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}