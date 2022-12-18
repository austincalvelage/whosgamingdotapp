import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HamburgerBtn from './HamburgerSVG'
import CloseBtn from './CloseSVG'

export default function Header(): JSX.Element {
  const [showNav, setShowNav] = useState(false)
  return (
    <header className='flex h-[90px] items-center justify-between bg-[#181717] px-6 py-6 shadow-xl md:px-12'>
      <div className='text-2xl font-bold text-white md:text-4xl'>WhosGaming</div>
      <nav className='hidden gap-8 text-xl font-bold text-white md:flex'>
        <Link href='#about' className='hover:text-[#F2C114]'>
          About
        </Link>
        <Link href='#dashboard' className='hover:text-[#F2C114]'>
          Dashboard
        </Link>
        <Link href='#contact' className='hover:text-[#F2C114]'>
          Contact Us
        </Link>
      </nav>
      <div className='relative cursor-pointer md:hidden' onClick={() => setShowNav((prevState) => !prevState)}>
        {!showNav ? <HamburgerBtn /> : <CloseBtn />}
      </div>
      <AnimatePresence>
        {showNav && (
          <motion.nav
            className='fixed inset-0 top-[88px] z-50 flex h-screen flex-col items-center gap-4 bg-white py-8 text-xl font-bold text-black md:hidden'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.25 }}
          >
            <Link href='#about' className='hover:text-[#F2C114]'>
              About
            </Link>
            <Link href='#dashboard' className='hover:text-[#F2C114]'>
              Dashboard
            </Link>
            <Link href='#contact' className='hover:text-[#F2C114]'>
              Contact Us
            </Link>
            <div className='min-h-full '></div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
