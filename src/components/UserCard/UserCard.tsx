"use client";
import { User } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface UserCardProps {
  user: User;
}

export default function UserCard({ user }: UserCardProps) {

  return (
    <li key={user?.id} className="py-4">
      <span>{user?.name} </span>
      <span>{user?.email} </span>
      <span>{user?.role} </span>
      <img className="w-[300px]" src={user?.avatar} alt="user avatar" />
    </li>
  );
}
