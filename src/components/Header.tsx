import React, { useState } from "react";
import { FaUnsplash } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";

export default function Header() {
  const [query, setQuery] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <header>
      <nav className="flex items-center gap-4 p-3 text-sm text-gray-500 md:gap-10">
        <FaUnsplash size={30} color='black' />
        <form
          className="flex-1 rounded-full"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            type="text"
            placeholder="Search high-resolution images"
            value={query}
            onChange={handleChange}
            className="w-full rounded-full bg-gray-200 p-2"
          />
        </form>
        <ul className=" hidden gap-5 md:flex">
          <li className="hover:text-black">
            <a href="#">Advertise</a>
          </li>
          <li className="hover:text-black">
            <a href="#">Blog</a>
          </li>
          <li className="hover:text-black">
            <a
              className="bg-gradient-to-r from-pink-400 to-teal-400 bg-clip-text text-[#0000] hover:text-black	 "
              href="#"
            >
              Unsplash+{" "}
            </a>
          </li>
        </ul>

        <button className="ml-2  hidden rounded  border  border-gray-300 p-2 hover:border-gray-700 hover:text-black md:block">
          Submit a photo
        </button>
        <IoMdNotifications size={30} className="hidden md:block hover:text-black cursor-pointer " />
        <MdAccountCircle size={30} className='cursor-pointer' />
      </nav>
    </header>
  );
}
