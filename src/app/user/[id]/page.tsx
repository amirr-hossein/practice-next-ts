enum Color {
  Blue,
  Red
}
const product: {
  title: string;
  price: number;
  discount: [string, string];
  color:any
} = {
  title: "clock",
  price: 90000,
  discount: ["atm", "smr"],
  color:Color.Blue
};
function user() {
  return <>
      <div>
        <h1>{product.title}</h1>
        <span>{product.price}</span>
        {product.discount?.map((item,index)=>(
          <h4 key={index}>{item}</h4>
        ))}
        {product.color===Color.Blue?<span>i have this color</span>:<span>i dont have this color</span>}
      </div>
  </>;
}
export default user;
