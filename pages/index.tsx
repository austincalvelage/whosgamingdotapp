import { NextPage } from 'next'
import Header from './components/Header/Header'
import PhoneDemo from './components/PhoneDemo/PhoneDemo'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div className='flex h-screen items-center justify-center'>
        <PhoneDemo />
      </div>
    </>
  )
}

export default Home
