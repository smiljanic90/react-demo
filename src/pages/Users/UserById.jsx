import { useParams } from 'react-router-dom';

const UserById = () => {
  const { id } = useParams();
  return <div>Korisnik sa ID-em: {id}</div>;
};

export default UserById;
