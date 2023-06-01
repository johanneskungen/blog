"use client"

import React from 'react'
import { signIn } from "next-auth/react"

function SignIn() {
  return (
    <button className='border shadow-lg py-1 text-base' onClick={() => signIn()}>
        join the team now
    </button>
  )
}

export default SignIn