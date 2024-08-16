import userService from '@/services/user-service'
import { IUserProfile } from '@/types/user.type'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

type UseProfileQueryOptions = Omit<UseQueryOptions<IBackendRes<IUserProfile>>, 'queryKey' | 'queryFn'>

export const useUserProfile = (options?: UseProfileQueryOptions) => {
  return useQuery({
    ...options,
    queryKey: ['profile'],
    queryFn: () => userService.getUser()
  })
}
