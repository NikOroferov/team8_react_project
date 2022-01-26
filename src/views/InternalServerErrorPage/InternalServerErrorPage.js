import Error from '../../components/Error';

export default function InternalServerErrorPage() {
  return <Error errorContent="500 Internal Server Error..." />;
}
