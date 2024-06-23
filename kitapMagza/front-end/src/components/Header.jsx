import React, { useContext, useState } from "react";
import { BooksContext, ThemeContext } from "../content";
import { FaBookReader } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import { IoIosMoon } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const { state, dispatch } = useContext(BooksContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const handleCartShow = () => {
    if (state.cartData.length > 0) {
      setShowCart(true);
    } else {
      setShowCart(false);
    }
  };
  return (
    <header>
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="/" className="flex gap-2 items-center">
          <FaBookReader className="w-10 h-10" />
          <span className="font-bold uppercase">Kitap Mağzası</span>
        </a>
        <ul className="flex items-center space-x-5">
          <li>
            <a
              href=""
              className="p-1 inline-block"
            >
              <FaRegBell />
            </a>
          </li>
          <li>
            <a
              className="p-1 inline-block"
              
              onClick={() => setDarkMode((darkMode) => !darkMode)}
            >
              {darkMode ? <IoIosSunny /> : <IoIosMoon />}
            </a>
          </li>
          <li>
            <a
              href=""
              className="p-1 inline-block"
            >
              <FaShoppingCart />
              {
                state.cartData.length > 0 && (
                    <span className="rounded-full absolute top-[-12px] bg-green-600 text-white text-center p-[2px] w-[30px] h-[30px]">
                        {state.cartData.length}
                    </span>
                )
              }
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
