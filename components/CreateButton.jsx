"use client";

import React, { useState } from "react";
import { createPost } from "../_actions";
import { Toaster, toast } from "react-hot-toast";

function CreateButton(user) {
  const [input, setInput] = useState("");

  async function runAction() {
    if(!input || input === "") {
      toast.error("Input field is empty", {
        duration: 3000,
        position: "top-center"
      })
      return
    }
    const post = await createPost(input, user);
    if (!post) return null;

    setInput("");
    toast.success("Post was created", {
      duration: 3000,
      position: "top-center",
    });
  }

  return (
    <>
      <Toaster />
      <form className="flex flex-col gap-1" action={runAction}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Title"
          className="border px-3 py-2.5 focus:outline-blue-500 text-xs md:text-sm w-72 rounded shadow-lg"
        />
        <button
          type="submit"
          className="bg-blue-500 text-xs text-white w-[7rem] px-3 py-2.5 rounded shadow-lg md:text-sm"
        >
          create post
        </button>
      </form>
    </>
  );
}

export default CreateButton;
