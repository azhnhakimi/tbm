import { Redirect } from "expo-router";

import { getSession } from "@lib/auth/getSession";

export async function testConnection() {
  const session = await getSession();
  console.log("Session:", session);
}

export default function Index() {
  testConnection();
  return <Redirect href="/splash" />;
}
