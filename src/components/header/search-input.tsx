import React from 'react'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import SearchIcon from '/public/Icons/search.svg'

interface ISearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export default function SearchInput(props: ISearchInputProps) {
  return (
    <div className='relative bg-[#F9FAFB] border-[#E5E7EB] rounded-md'>
      <Image className="absolute left-2 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" src={SearchIcon} alt='Logo' width={32} height={32} />
      <Input {...props} className={`pl-8 pr-4 ${props.className}`} placeholder={props.placeholder || 'Search...'} />
    </div>
  )
}
