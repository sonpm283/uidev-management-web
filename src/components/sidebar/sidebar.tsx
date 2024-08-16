import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Image from 'next/image'
import ChartPieIcon from '/public/Icons/chart-pie.svg'
import DocumentReportIcon from '/public/Icons/document-report.svg'
import ShoppingBagIcon from '/public/Icons/shopping-bag.svg'
import InboxInIcon from '/public/Icons/inbox-in.svg'
import LockClosedIcon from '/public/Icons/lock-closed.svg'
import ClipboardListIcon from '/public/Icons/clipboard-list.svg'
import CollectionIcon from '/public/Icons/collection.svg'
import SupportIcon from '/public/Icons/support.svg'

function Sidebar() {
  return (
    <div className='w-[250px] h-full bg-white border px-2 border-x-[#E5E7EB] border-t-0'>
      <p className='text-green-500 font-medium flex py-2 px-3 items-center gap-4 mb-4'>
        <Image src={ChartPieIcon} alt='Logo' width={24} height={24} />
        Overview
      </p>
      <Accordion type='single' collapsible className='w-full border-b space-y-4'>
        <AccordionItem value='item-1' className='border-0'>
          <AccordionTrigger className='flex items-center py-2 px-3 hover:no-underline rounded-lg hover:bg-gray-100'>
            <div className='flex items-center gap-4 text-cool'>
              <Image src={DocumentReportIcon} alt='Logo' width={24} height={24} />
              Pages
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <ul className='px-4 space-y-3 mt-4'>
              <li>User</li>
              <li>Profile</li>
              <li>Settings</li>
              <li>Pricing</li>
              <li>Calendar</li>
              <li>Kanban</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2' className='border-0'>
          <AccordionTrigger className='flex items-center py-2 px-3 hover:no-underline rounded-lg hover:bg-gray-100'>
            <div className='flex items-center gap-4'>
              <Image src={DocumentReportIcon} alt='Logo' width={24} height={24} />
              Users
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <ul className='px-4 space-y-3 mt-4'>
              <li>User</li>
              <li>User Group</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-3' className='border-0'>
          <AccordionTrigger className='flex items-center py-2 px-3 hover:no-underline rounded-lg hover:bg-gray-100'>
            <div className='flex items-center gap-4'>
              <Image src={ShoppingBagIcon} alt='Logo' width={24} height={24} />
              Sales
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <ul className='px-4 space-y-3 mt-4'>
              <li>Product List</li>
              <li>Billing</li>
              <li>Invoice</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-4' className='border-0'>
          <AccordionTrigger className='flex items-center py-2 px-3 hover:no-underline rounded-lg hover:bg-gray-100'>
            <div className='flex items-center gap-4'>
              <Image src={InboxInIcon} alt='Logo' width={24} height={24} />
              Messages
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <ul className='px-4 space-y-3 mt-4'>
              <li>Message</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-5' className='border-0'>
          <AccordionTrigger className='flex items-center py-2 px-3 hover:no-underline rounded-lg hover:bg-gray-100'>
            <div className='flex items-center gap-4'>
              <Image src={LockClosedIcon} alt='Logo' width={24} height={24} />
              Authentication
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <ul className='px-4 space-y-3 mt-4'>
              <li>Product List</li>
              <li>Billing</li>
              <li>Invoice</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <ul className='space-y-6 mt-6 px-3'>
        <li>
          <div className='flex items-center gap-4'>
            <Image src={ClipboardListIcon} alt='Logo' width={24} height={24} />
            Docs
          </div>
        </li>
        <li>
          <div className='flex items-center gap-4'>
            <Image src={CollectionIcon} alt='Logo' width={24} height={24} />
            Documents
          </div>
        </li>
        <li>
          <div className='flex items-center gap-4'>
            <Image src={SupportIcon} alt='Logo' width={24} height={24} />
            Help
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
