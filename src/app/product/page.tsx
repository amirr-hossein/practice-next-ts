import Link from "next/link";
const productItem = () => {
  const users = [
    { id: 1, name: "amir" },
    { id: 2, name: "ali" },
  ];
  return (
    <>
      <div className="gap-x-2 flex">
        {users.map((item) => (
          <Link
            className="text-xl gap-x-4"
            key={item.id}
            href={`/user/${item.id}`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default productItem;
