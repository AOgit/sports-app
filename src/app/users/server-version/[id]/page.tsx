import UserCard from "@/components/UserCard/UserCard";
import { User } from "@/types";
import { notFound } from "next/navigation";

export default async function UserDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id; 
    
  const res = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`);
  if (!res.ok) {
    if (res.status === 404) {
      notFound();
    }
      throw new Error("Failed to fetch user");
  }
  const user = await res.json();
  
  return (
    <div className="list-none mx-auto w-fit bg-secondary">
       <UserCard user={user as User} key={user?.id} /> 
    </div>
  )
}