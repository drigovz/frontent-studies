import useDataContext from '../hooks/useDataContext';

const Header = () => {
  const { data } = useDataContext();

  return (
    <>
      <header>{data && data.map(item => <p key={item.id}>{item.nome}</p>)}</header>
    </>
  );
};

export default Header;
