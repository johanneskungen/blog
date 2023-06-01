import React from "react";
import { findAllAction } from "../_actions";
import Image from "next/image";

async function Users() {
  const users = await findAllAction();
  return (
    <main>
      <section>
        {users?.map((user) => (
          <div className="flex gap-2" key={user.id}>
            <Image src={user.image} width={25} height={25}/>
            <p className="font-bold underline">{user.name}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Users;
