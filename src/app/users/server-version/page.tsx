import { User } from "@/types";

// by default - server component
const UsersServerVersion = async () => {
const res = await fetch("https://api.escuelajs.co/api/v1/users", {
  headers: { "Api-key": "adsfasd fadsf asdf asdf asd fasd f"},
  // cache: "force-cache"
  next: {revalidate: 60},
}
)

  // кэширование с фетч - только на серверных компонентах
  // 1. cache: "force-cache" - кэширование по умолчанию- при билде кэшировали данные, 
  // и дальше они не обновляются 
  //  - для страниц, которые не меняются (или крайне редко)

  // 2. cache: "no-store" - не использует кэширование
  
  // 3. Revalidate вариант
  // next: {revalidate: 60} - запросит обновление страницы каждые 60 сек
  // новости, курсы валют, продукты

  // 4. Ручное обновление
  // next: {tags: ["users"]} - внутри фетча чтобы вызывать обновления мы можем 
  // revalidateTag("users");

  if (!res.ok) {
    throw new Error("Fetch users failed");
  }
  const users = await res.json();

  return (
    <div>
      {users.map((user: User) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </div>
  );
};

export default UsersServerVersion;