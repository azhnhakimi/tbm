import { Redirect } from "expo-router";
import { supabase } from "../lib/supabase";

export async function testConnection() {
  const { data, error } = await supabase.auth.getSession();

  console.log("Session:", data);

  if (error) {
    console.error(error);
  }
}

export default function Index() {
  testConnection();
  return <Redirect href="/splash" />;
}
