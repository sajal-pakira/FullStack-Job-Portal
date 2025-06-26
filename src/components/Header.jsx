import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'

const Header = () => {
  return (
    <>
      <nav className='py-4 flex justify-between items-center'>
        <Link>
        <img className='h-20' src="logo.png" alt="logo image" />
        </Link>
        <Button variant="outline" >Login</Button>
      </nav>
      </>
  )
}

export default Header