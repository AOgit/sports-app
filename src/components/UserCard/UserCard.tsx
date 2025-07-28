"use client";
import { User } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface UserCardProps {
  user: User;
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <li key={user?.id} className="py-4 bg-secondary flex flex-col items-center gap-2 rounded">
      <div>
        <span>{user?.name} </span>
        <span>{user?.email} </span>
        <span>{user?.role} </span>
      </div>
      <img className="w-[300px]" src={user?.avatar} alt="user avatar" />
    </li>
  );
}
