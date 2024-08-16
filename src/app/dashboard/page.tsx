import userService from '@/services/user-service'
import { Sidebar } from 'lucide-react'
import { cookies } from 'next/headers'

export default async function DashboardPage() {
  const cookieStore = cookies()
  // cookies on nextjs server
  const accessToken = cookieStore.get('accessToken')
  const user = await userService.getUser(accessToken?.value)

  return (
    <main className='min-h-screen p-10'>
      <p>
        Hello: <span className='font-bold'>{user?.data?.email.split('@')[0]}</span>
      </p>
      <h1>Dashboard Page</h1>
    </main>
  )
}
