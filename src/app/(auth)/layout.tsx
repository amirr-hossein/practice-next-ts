"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const users = [
  { id: 1, name: "login", href: "/login" },
  { id: 2, name: "register", href: "/register" },
  { id: 3, name: "forgot_password", href: "/forgot_password" },
];
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  return (
    <div>
      <div className="gap-x-2 flex">
        {users.map((item) => {
          const auth = path.startsWith(item.href);
          return (
            <Link className={`${auth?"font-bold text-2xl text-red-700":"font-normal text-xl text-black"}`} key={item.id} href={item.href}>
              {item.name}
            </Link>
          );
        })}
      </div>
      {children}
    </div>
  );
}
