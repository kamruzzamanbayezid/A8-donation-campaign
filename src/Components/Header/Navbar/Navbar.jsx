import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";

const Navbar = () => {
      return (
            <div className="flex justify-between items-center max-w-[1320px] mx-auto mt-8">
                  <Logo></Logo>
                  <Menu></Menu>
            </div>
      );
};

export default Navbar;