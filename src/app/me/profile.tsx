'use client'

import { useUserProfile } from '@/hooks'

export default function Profile() {
  const { data: userProfile, isLoading, error } = useUserProfile()

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div className='p-3 border'>
      <p>Name: {userProfile?.data?.email.split('@')[0]}</p>
      <p>Email: {userProfile?.data?.email}</p>
    </div>
  )
}
