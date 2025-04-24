import MenuItem from '../components/MenuItem'

const Navbar = () => {
  return (
    <nav className="h-16 bg-blue-900 text-white p-4 flex items-center justify-evenly"> 
      <ul className="flex space-x-4">
        <MenuItem title="Home" variant="default" link="/"/>
        <MenuItem title="Roster" variant="default" link="/roster"/>
        <MenuItem title="Schedule" variant="default" link="/upcoming-games"/>
        <MenuItem title="Gallery" variant="default" link="/gallery"/>
        <MenuItem title="Contact" variant="default" link="/"/>
      </ul>
    </nav>
  );
};

export default Navbar;
