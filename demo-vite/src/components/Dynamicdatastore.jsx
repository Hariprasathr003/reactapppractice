export default function Dynamicdatastore({ image, name, iplteam }) {
  return (
    <li>
      <img src={image} alt="..." />
      <h1>{name}</h1>
      <p>{iplteam}</p>
    </li>
  );
}
