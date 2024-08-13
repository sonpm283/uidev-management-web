'use client'

import { sendRequest } from '@/utils/api'
import { useAppContext } from '../AppProvider'
import envConfig from '@/config/env.config'
import userService from '@/services/user-service'
import { useQuery } from '@tanstack/react-query'

export default function Profile() {
  const { data: userData, isLoading, error } = useQuery({ queryKey: ['user'], queryFn: () => userService.getUser() })

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div className='p-3 border'>
      <p>Name: {userData?.data?.email.split('@')[0]}</p>
      <p>Email: {userData?.data?.email}</p>
    </div>
  )
}
