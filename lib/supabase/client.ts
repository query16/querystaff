import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    "https://udvjbnxquijpkgwotfaz.supabase.co",
    "sb_publishable_OaMoQvkIfnaITUsasbmFxw_aThfeJF6"
  );
}
