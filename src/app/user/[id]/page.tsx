"use client";

enum Color {
  Blue,
  Red,
}
const product: {
  title: string;
  price: number;
  discount: [string, string];
  color: any;
} = {
  title: "clock",
  price: 90000,
  discount: ["atm", "smr"],
  color: Color.Blue,
};
type User = {
  id: number;
  name: string;
};
const users: User[] = [
  { id: 1, name: "amir" },
  { id: 2, name: "ali" },
];

import { useRouter } from "next/navigation";
import Link from "next/link";
function user({ params,searchParams }) {
  // console.log(searchParams)
  const rout = useRouter();
  return (
    <>
      <div>
        {users.map((item)=>(
            <Link href={`/user/${item.id}`}>{item.name}</Link>
            // <Link href={{
            //   pathname:"/user/[id]",
            //   query:{id:item.id}
            // }}>{item.name}</Link>
        ))}
        <h1>{searchParams.new}</h1>
        <button onClick={() => rout.push("/user/userAdmin")}>click</button>
        <Link href="/user/userAdmin">go to dashboad admin</Link>
        <span>{params.id}</span>
        <h1>{product.title}</h1>
        <span>{product.price}</span>
        {product.discount?.map((item, index) => (
          <h4 key={index}>{item}</h4>
        ))}
        {product.color === Color.Blue ? (
          <span>i have this color</span>
        ) : (
          <span>i dont have this color</span>
        )}
      </div>
    </>
  );
}
export default user;
