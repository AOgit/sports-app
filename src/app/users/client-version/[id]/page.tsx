'use client'
import UserCard from "@/components/UserCard/UserCard";
import { User } from "@/types";
import { use, useEffect, useState } from "react";

export default function UserDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params); 

    const [user, setUser] = useState<User | undefined>(undefined);
    
    const fetchUser = async (id: string) => {
      const res = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`);
      const user = await res.json();
      setUser(user);
    }

    useEffect(()=>{fetchUser(id)},[]);
  
  return (
    <div className="list-none mx-auto w-fit">
       <UserCard user={user as User} key={user?.id} /> 
    </div>
  )
}