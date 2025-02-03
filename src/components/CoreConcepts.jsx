export default function CoreConcepts(image, title, description) {
  //props 대신 {image,title,description}로 받아도 된다.
  //src={props.image} 대신 src={image}로 써도 된다.
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{title}</h3>
      <p>{props.description}</p>
    </li>
  );
}
