"use client";
import UserCard from "@/components/UserCard/UserCard";
import { User } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function UsersClientVersion() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);
  async function fetchUsers() {
    const res = await fetch("https://api.escuelajs.co/api/v1/users");
    if (!res.ok) {
      throw new Error("Failed to fetch users");
    }
    const arr = await res.json();
    setUsers(arr);
  }
  return (
    <div className="list-none mx-auto w-fit">
      {users.map((user) => (
         <div key={user.id} className="mb-4">
       <UserCard user={user} key={user.id} /> 
      <Link href={`/users/client-version/${user.id}`}>Details</Link>
      </div>
      ))}
    </div>
  );
}
