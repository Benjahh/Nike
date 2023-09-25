import { headerLogo } from '../assets/images/';
import { hamburger } from '../assets/icons/';
import { navLinks } from '../constants';

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-contaner">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29}></img>
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((items) => (
            <li key={items.label}>
              <a
                className="font-montserrat leading-normal text-lg text-slate-gray"
                href={items.href}
              ></a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
