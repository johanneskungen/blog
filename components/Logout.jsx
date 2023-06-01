"use client"

import React from 'react'
import { signOut } from 'next-auth/react'

function Logout() {
  return (
    <button onClick={() => signOut()} className='shadow-lg border bg-red-500 text-white py-2 w-fit px-3 rounded text-sm hover:scale-105 duration-105'>
        leave the team
    </button>
  )
}

export default Logout