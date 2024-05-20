"use client";

import Link from "next/link";

enum Color {
  Blue,
  Red,
}

const product = {
  title: "clock",
  price: 90000,
  discount: ["atm", "smr"],
  color: Color.Blue,
};

const users = [
  { id: 1, name: "amir" },
  { id: 2, name: "ali" },
];

type Props = {
  params: {
    id: string;
  };
};

export default function UserPage({ params }: Props) {
  return (
    <>
      <h1>Hello User</h1>
      <div>
        {users.map((item) => (
          <Link key={item.id} href={`/user/${item.id}`}>
            {item.name}
          </Link>
        ))}
        <span>{params.id}</span>
        <h1>{product.title}</h1>
        <span>{product.price}</span>
        {product.discount?.map((item, index) => (
          <h4 key={index}>{item}</h4>
        ))}
        {product.color === Color.Blue ? (
          <span>I have this color</span>
        ) : (
          <span>I don't have this color</span>
        )}
      </div>
    </>
  );
}
