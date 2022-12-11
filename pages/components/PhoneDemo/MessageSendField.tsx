import { FaArrowCircleUp } from 'react-icons/fa'
import { IoIosCamera, IoIosAppstore } from 'react-icons/io'

export default function MessageSendField(): JSX.Element {
  return (
    <div className='flex items-center justify-between gap-2 p-2 px-4 pb-3'>
      <IoIosCamera className='h-7 w-7 text-[#999]' />
      <IoIosAppstore className='h-6 w-6 text-[#999]' />
      <div className='ml-auto w-[65%] self-center justify-self-end'>
        <div className='flex items-center rounded-xl border border-[#999] py-1 px-2'>
          <p className='text-xs text-[#999]'>Text Message</p>
          <FaArrowCircleUp className='ml-auto h-5 w-5 text-[#6ACE6B]/50' />
        </div>
      </div>
    </div>
  )
}
