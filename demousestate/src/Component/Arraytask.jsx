const store = [
  {
    img: "https://imagemobiles.com/cdn/shop/files/mba13-midnight-select-202402.jpg?v=1715254566",
    name: "phone",
    price: 10000,
  },
  {
    img: "https://imagemobiles.com/cdn/shop/files/mba13-midnight-select-202402.jpg?v=1715254566",
    name: "laptop",
    price: 60000,
  },
  {
    img: "https://imagemobiles.com/cdn/shop/files/mba13-midnight-select-202402.jpg?v=1715254566",
    name: "Tv",
    price: 18000,
  },
];

export function ArraOfObject(props) {
  return (
    <>
      <img src={props.img} alt="1" />
      <h1>Product :{props.name}</h1>
      <p> price :{props.price}</p>
    </>
  );
}

export function Viewproduct() {
  return (
    <>
      <h1>View All Product</h1>
      <div>
        {store.map((val, index) => (
          <ArraOfObject key={index} {...val} />
        ))}
      </div>
    </>
  );
}
