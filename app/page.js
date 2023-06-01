import React from "react";
import Users from "../components/Users";
import CreateButton from "../components/CreateButton";
import Posts from "../components/Posts";
import SignIn from "@/components/SignIn";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Logout from "@/components/Logout";

async function page() {
  const session = await getServerSession(authOptions)

  if(!session) return <SignIn />

  return (
    <div className="p-12 flex flex-col gap-4">
      <h1 className="text-gray-700 text-xl font-semibold">Blogbuilder á la Eriksson</h1>
      <Users />
      <CreateButton user={session.user}/>
      <Posts user={session.user}/>
      <Logout />
    </div>
  );
}

export default page;
