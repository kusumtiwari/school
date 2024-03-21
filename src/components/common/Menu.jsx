import { useState } from "react";

import { useMediaQuery } from "react-responsive";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { LiaSchoolSolid } from "react-icons/lia";

import { NavLink, Link } from "react-router-dom";

const menuItems = [
  {
    id: 1,
    name: "Students",
    navigation: "/student",
  },
  {
    id: 2,
    name: "Faculty",
    navigation: "/faculty",
  },
  {
    id: 3,
    name: "Semester",
    navigation: "/semester",
  },
  {
    id: 4,
    name: "Batch",
    navigation: "/batch",
  },
  {
    id: 5,
    name: "Section",
    navigation: "/section",
  },
];

function Menu() {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => setIsOpen(!isOpen);

  return (
    <div className="flex items-center px-4 md:px-12 lg:px-26 xl:px-24 justify-between py-8 bg-pink flex-wrap sticky top-0 z-30 shadow-lg font-mulish">
      {/* all screen logo  */}
      <Link to="/">
        <div className="flex items-center text-2xl font-bold text-gradient cursor-pointer">
          <h1 className="font-robotoSlab">School</h1>
          <LiaSchoolSolid className="cursor-pointer ease-in-out rotate transition duration-300 text-primary-btnColor" />
        </div>
      </Link>

      {/* small screen menu icon  */}
      <div
        className="md:hidden cursor-pointer my-auto"
        onClick={handleMenuClick}
      >
        {isOpen ? (
          <RxCross2 className="h-8 w-8 transition duration-500 ease-in-out opacity-100 hover:opacity-60" />
        ) : (
          <RxHamburgerMenu className="h-8 w-8 transition duration-500 ease-in-out opacity-60 hover:opacity-100" />
        )}
      </div>

      {/* menu items  */}
      <div className="hidden md:flex items-center justify-between w-[60%]">
        {menuItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.navigation}
            state={{ menuName: `${item.name}` }}
            className="font-bold text-base cursor-pointer hover:scale-110 transition duration-300 ease-in-out hover:text-white hover:bg-primary-headingColor px-2 py-1 rounded"
            activeClassName="text-black"
          >
            {item.name}
          </NavLink>
        ))}
      </div>
      {isOpen && (
        <div className="flex flex-col md:hidden items-center justify-between w-[100%]">
          {menuItems.map((item) => (
            <p className="my-4" onClick={handleMenuClick}>
              <NavLink
                key={item.id}
                to={item.navigation}
                state={{ menuName: `${item.name}` }}
                className="font-bold text-base cursor-pointer hover:scale-110 transition duration-300 ease-in-out hover:text-white hover:bg-primary-headingColor px-2 py-1 rounded"
                activeClassName="text-black"
              >
                {item.name}
              </NavLink>
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Menu;
