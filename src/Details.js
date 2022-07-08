import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  return <h2>Pet Id: {id}</h2>;
};

export default Details;
