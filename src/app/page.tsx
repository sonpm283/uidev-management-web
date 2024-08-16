import Sidebar from '@/components/sidebar/sidebar'
import userService from '@/services/user-service'
import { cookies } from 'next/headers'

export default async function DashboardPage() {
  const cookieStore = cookies()
  // cookies on nextjs server
  const accessToken = cookieStore.get('accessToken')
  const user = await userService.getUser(accessToken?.value)

  return (
    <main className='min-h-screen flex gap-5 bg-[#f9fafb]'>
      <div>
        <Sidebar />
      </div>
      <div className='flex-1 bg-white p-4 shadow-md rounded-lg mt-5'>
        <p>
          <span className='font-bold'>{user?.data?.email.split('@')[0]}</span>
        </p>
        <div className='font-bold'>super admin</div>
        <h1>Dashboard Page</h1>
      </div>
    </main>
  )
}
