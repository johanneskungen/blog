"use server";

import { prisma } from "./utils/prisma";
import { revalidatePath } from "next/cache";

export async function findAllAction() {
  return (await prisma.user.findMany()).reverse();
}

export async function findAllPosts() {
  return await prisma.post.findMany();
}

export async function createPost(title, user) {


  const [id] = await prisma.user.findMany({
    where: {
      name: user.name
    },
    select: {
      id: true
    }
  })
  const index = id.id


  const created = await prisma.user.update({
    where: {
      id: index
    },
    data: {
      Posts: {
        create:{
          title
        }
      },
    }
  });

  revalidatePath("/");

  return created;
}

export async function likePost(post, user) {

  const [id] = await prisma.user.findMany({
    where: {
      name: user.name
    },
    select: {
      id: true
    }
  })
  const index = id.id.toString()

  const hasLiked = await prisma.post.findMany({
    where: {
      id: {
        equals: post.id,
      },
      liked: {
        has: index,
      },
    },
  });

  if (hasLiked[0]) {
    return null;
  } else {
    await prisma.post.update({
      where: {
        id: post.id,
      },
      data: {
        liked: {
          push: index,
        },
      },
    });
    revalidatePath("/");

    return true;
  }
}

