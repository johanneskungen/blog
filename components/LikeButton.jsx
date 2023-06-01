"use client"

import React from 'react'
import { likePost } from '../_actions'
import { Toaster, toast } from 'react-hot-toast'
import { AiFillLike } from 'react-icons/ai'

function LikeButton({post, user}) {
    async function runLikeAction(){
        const success = await likePost(post, user)
        if(success) {
            toast.success("Successfully liked post", {
                duration: 3000,
                position: "top-center"
            })
        } else {
            toast.error("You have already liked this post!", {
                position: "top-center"
            })
        }
        
    }

  return (
    <>
    <Toaster />
    <form action={runLikeAction}>
        <button><AiFillLike size={25} className='text-blue-500'/></button>
    </form>
    </>
  )
}

export default LikeButton