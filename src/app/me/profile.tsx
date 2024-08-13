'use client'

import { sendRequest } from '@/utils/api'
import { useAppContext } from '../AppProvider'
import envConfig from '@/config/env.config'
import userService from '@/services/user-service'

export default function Profile() {
  // const { sessionToken } = useAppContext();

  return (
    <div className='p-3 border'>
      {/* <p>Name: {userData?.data?.email.split('@')[0]}</p> */}
      {/* <p>Email: {userData?.data?.email}</p> */}
    </div>
  )
}
