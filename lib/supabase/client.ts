import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    "https://udvjbnxqujipkgwotfaz.supabase.co",
    "sb_publishable_OaMoQvkIfnaITUsasbmFxw_aThfeJF6"
  );
}
