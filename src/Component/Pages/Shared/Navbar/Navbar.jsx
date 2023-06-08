
import Container from "../Container";
// import DropDown from "./DropDown";
import Logo from "./Logo";
import NaviBarLink from "./NaviBarLink";



const Navbar = () => {
  return (
    <div className='fixed w-full bg-emerald-500  z-10  p-5'>
      <Container>
          <div className='flex flex-row  items-center justify-between gap-3 md:gap-0 h-10'>
            <Logo></Logo>
            <NaviBarLink></NaviBarLink>
          </div>
      </Container>
    </div>
  );
};

export default Navbar;