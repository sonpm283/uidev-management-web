'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import { LoginBody, LoginDataType } from '@/schemaValidations/auth.schema'
import authService from '@/services/auth-service'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function LoginForm() {
  const [error, setError] = useState<string>('')
  const { toast } = useToast()
  const router = useRouter()

  const form = useForm<LoginDataType>({
    resolver: zodResolver(LoginBody),
    defaultValues: {
      email: '',
      password: ''
    }
    // reValidateMode: "onSubmit",
  })

  useEffect(() => {
    const subscription = form.watch(() => {
      setError('')
    })
    return () => subscription.unsubscribe()
  }, [form])

  const loginMutation = useMutation({
    mutationFn: (data: LoginDataType) => authService.login(data),
    onSuccess: (data) => {
      router.push('/')
      toast({
        variant: 'default',
        description: data.message
      })
    },
    onError: (error: any) => {
      const status = error.status
      if (status === 401) {
        setError(error.payload.message)
      } else {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: error.payload.message
        })
      }
    }
  })

  function onSubmit(formData: LoginDataType) {
    loginMutation.mutate(formData)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3 max-w-full w-full'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type='password' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {error && <FormMessage>{error}</FormMessage>}
        <Button type='submit' className='w-full !mt-10'>
          Login
        </Button>
      </form>
    </Form>
  )
}
