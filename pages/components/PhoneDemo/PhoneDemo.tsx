import type { NextPage } from 'next'
import HomeBar from './HomeBar'
import MessageApp from './MessageApp'
import MessageSendField from './MessageSendField'
import StatusBar from './StatusBar'

export default function PhoneDemo(): JSX.Element {
  return (
    <div className='relative flex min-h-[525px] min-w-[280px] max-w-[280px] flex-col rounded-[40px] bg-white shadow-[0px_0px_0px_5px_#1f1f1f,0px_0px_0px_7px_#191919,0px_0px_0px_14px_#111]'>
      <StatusBar />
      <MessageApp />
      <MessageSendField />
      <HomeBar />
    </div>
  )
}
