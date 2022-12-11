import { NextPage } from 'next'
import PhoneDemo from './components/PhoneDemo/PhoneDemo'

const Home: NextPage = () => {
  return (
    <>
      <div className='flex h-screen items-center justify-center'>
        <PhoneDemo />
      </div>
    </>
  )
}

export default Home
