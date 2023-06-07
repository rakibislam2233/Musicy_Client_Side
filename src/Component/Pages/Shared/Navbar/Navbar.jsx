import Container from "../Container";
import DropDown from "./DropDown";
import Link from "./Link";
import Logo from "./Logo";


const Navbar = () => {
  return (
    <div className='fixed w-full bg-gray-900 z-10 shadow-sm p-5'>
      <Container>
          <div className='flex flex-row  items-center justify-between gap-3 md:gap-0 h-10'>
            <Logo></Logo>
            <Link></Link>
            <DropDown></DropDown>
          </div>
      </Container>
    </div>
  );
};

export default Navbar;