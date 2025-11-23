import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-gray-800 text-white px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="hover:text-yellow-400" to="/">
          Home
        </Link>
        <Link className="hover:text-yellow-400" to="/recipes">
          Recipes
        </Link>
        <Link className="hover:text-yellow-400" to="/recipe-box">
          Recipe Box
        </Link>
        <Link className="hover:text-yellow-400" to="/user">
          User
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
