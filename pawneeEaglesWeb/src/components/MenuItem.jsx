import {Link} from 'react-router-dom';

const MenuItem = ({ title, variant = "default", link }) => {
  const baseStyle = "text-center font-semibold";
  
  const styles = {
    default: "text-white hover:text-yellow-300 cursor-pointer px-4", // Navbar Style
    button: "block w-full bg-blue-900 text-white py-3 px-4 rounded-lg shadow-md hover:bg-blue-700 transition" // Sidebar Menu Style
  };

  return (
    <Link to={link} className={`${baseStyle} ${styles[variant]}`}>
      {title}
    </Link>
  );
};

export default MenuItem;

