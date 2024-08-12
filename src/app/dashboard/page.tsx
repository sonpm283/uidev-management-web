import envConfig from "@/config/env.config";
import { sendRequest } from "@/utils/api";
import { cookies } from "next/headers";

export default async function DashboardPage() {
  const cookieStore = cookies()
  // cookies on nextjs server
  const accessToken = cookieStore.get('accessToken')

  interface Response {
    data: {id: number, name: string, email: string},
    message: string
  }

  const user = await sendRequest<Response>({
    url: `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/user/me`,
    method: "GET",
    headers: {
      // 'Authorization': `Bearer ${accessToken?.value}`,
      //For Server Cookie Mode
      Cookie: `accessToken=${accessToken?.value}`,
    },
  });

  console.log('user:: >>>', user);
  

  return (
    <main className="min-h-screen p-10">
      {/* <p>Hello: <span className="font-bold">{user.data.email}</span></p> */}
      <h1>Dashboard Page</h1>
    </main>
  );
}
