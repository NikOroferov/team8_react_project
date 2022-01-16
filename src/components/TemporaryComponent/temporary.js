import { useParams } from 'react-router';

export default function Temporary() {
  const { category } = useParams();

  return <div>{category}</div>;
}
