import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex bg-teal-500 text-white p-3 text-xl">
      <Link to="/" className="mx-auto">
        Client Service
      </Link>
    </header>
  );
};

export default Header;
