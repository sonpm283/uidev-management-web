'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface INavLinkProps {
  href: string
  label: string
}

const NavLink = ({ href, label }: INavLinkProps) => {
  const pathname = usePathname()
  const isActive = pathname === href
  return (
    <li>
      <Link
        href={href}
        className={`${
          isActive ? 'text-[#0E9F6E]' : 'text-[#6B7280] '
        } hover:text-[#0E9F6E] font-medium transition-colors`}
      >
        {label}
      </Link>
    </li>
  )
}

export default NavLink
