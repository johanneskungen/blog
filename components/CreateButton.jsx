"use client"

import React, { useState } from 'react'
import { createPost } from '../_actions'

function CreateButton(user) {
  const [input, setInput] = useState("")

    async function runAction(){
        const post = await createPost(input, user)
    }

  return (
    <form action={runAction}>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder='post' className='border px-3 py-2.5 text-sm w-72 rounded shadow-lg'/>
        <button type='submit' className='bg-blue-500 text-white px-2 py-2.5 rounded shadow-lg text-sm'>create post</button>
    </form>
  )
}

export default CreateButton