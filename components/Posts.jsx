import React from "react";
import { findAllAction, findAllPosts } from "../_actions";
import LikeButton from "./LikeButton";

async function Posts({ user }) {
  const posts = await findAllPosts();
  const users = await findAllAction();
  return (
    <div className="grid grid-cols-4 gap-4">
      {posts?.map((post) => (
        <div
          className="border p-4 shadow-lg rounded justify-between flex flex-col gap-8 w-72 h-80 text-sm"
          key={post.id}
        >
          <div>
          <p className="text-base font-bold">{post.title}</p>
          <p className="font-semibold text-gray-700">
            @{users.find((user) => user.id === posts[0].author_id).name}
          </p>
          </div>
          <div className="flex border bg-gray-200 text-sm items-center rounded shadow-lg py-0.5 px-1 w-fit">
            <p>{post.liked.length}</p>
            <LikeButton user={user} post={post} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
