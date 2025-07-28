import UserCard from "@/components/UserCard/UserCard";
import { User } from "@/types";
import Link from "next/link";

// by default - server component
const UsersServerVersion = async () => {
const res = await fetch("https://api.escuelajs.co/api/v1/users", {
  headers: { "Api-key": "adsfasd fadsf asdf asdf asd fasd f"},
  // cache: "force-cache"
  next: {revalidate: 60},
}
)

  if (!res.ok) {
    throw new Error("Fetch users failed");
  }
  const users = await res.json();

  return (
    <div className="list-none mx-auto w-fit">
      {users.map((user: User) => (
         <div key={user.id} className="mb-4">
       <UserCard user={user} key={user.id} /> 
      <Link href={`/users/client-version/${user.id}`}>Details</Link>
      </div>
      ))}
    </div>
  );
};

export default UsersServerVersion;