import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className='flex flex-col gap-4 items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col items-center justify-center gap-2'>
        <h2 className='text-5xl font-bold'>404 Not Found</h2>
        <p>Could not find requested resource</p>
      </div>

      <Button variant='outline'>
        <Link href='/'>Return Home</Link>
      </Button>
    </main>
  )
}
