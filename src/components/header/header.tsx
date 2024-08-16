import Link from 'next/link'
import Image from 'next/image'
import LogoIcon from '/public/Icons/logo.svg'
import LoginIcon from '/public/Icons/login.svg'
import NotificationIcon from '/public/Icons/notification_icon.svg'
import NavLink from './nav-link'
import { cookies } from 'next/headers'
import userService from '@/services/user-service'
import SearchInput from './search-input'
import { DropdownMenuNavigation } from './dropdown-menu'

async function Header() {
  const cookieStore = cookies()
  const accessToken = cookieStore.get('accessToken')
  let user = null

  if (accessToken) {
    const response = await userService.getUser(accessToken?.value)
    user = response?.data
  }

  const navItems = [
    { href: '/', label: 'Dashboard' },
    { href: '/teams', label: 'Team' },
    { href: '/projects', label: 'Projects' },
    { href: '/calendar', label: 'Calendar' },
  ]

  const authItems = [{ href: '/login', label: 'Login' }]

  return (
    <header className='h-16 bg-white border border-[#E5E7EB] px-5 text-center flex items-center'>
      <h1>
        <Link href='/' className='flex items-center'>
          <span className='text-[#1F2937] font-bold'>UI</span>
          <Image src={LogoIcon} alt='Logo' width={24} height={24} className='ml-2' />
          <span className='text-[#1F2937] font-bold'>ev</span>
        </Link>
      </h1>
      <ul className='flex gap-5 mx-8'>
        {navItems.map((item) => (
          <NavLink key={item.href} {...item} />
        ))}
      </ul>

      {user && (
        <div className='ml-auto flex items-center gap-2'>
          <SearchInput className='w-80' />
          <div className='flex items-center gap-2'>
            <Image className='ml-auto cursor-pointer' src={NotificationIcon} alt='Logo' width={32} height={32} />
            <DropdownMenuNavigation>
              <div className='uppercase cursor-pointer font-bold size-9 grid items-center rounded-full border-2 flex-shrink-0'>
                {user.email.split('@')[0][0]}
              </div>
            </DropdownMenuNavigation>
          </div>
        </div>
      )}

      {!accessToken && (
        <>
          <Image className='ml-auto' src={LoginIcon} alt='Logo' width={24} height={24} />
          <ul className='flex gap-3 ml-2'>
            {authItems.map((item) => (
              <NavLink key={item.href} {...item} />
            ))}
          </ul>
        </>
      )}
    </header>
  )
}

export default Header
