import React, { useState } from "react";
import { FaUnsplash } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPhotos,
  resetPage,
  setQuery,
} from "../features/photos/photoSlice";
import { AppDispatch } from "../store";

interface State {
  users: {
    photos: any[];
    isLoading: boolean;
    page: number;
    query: string;
    newPicturesAvailable: boolean;
  };
}

export default function Header() {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const { page } = useSelector((state: State) => state.users);

  const handleSubmit = (/* event: React.MouseEvent<HTMLFormElement> */) => {
    /* event.preventDefault(); */
    dispatch(setQuery(searchText));
    if (page === 1) {
      dispatch(fetchPhotos());
    }
    dispatch(resetPage());
  };

  return (
    <header className="fixed w-full bg-white">
      <nav className="flex items-center gap-4 p-3 text-sm text-gray-500 md:gap-10">
        <FaUnsplash size={30} color="black" />
        <form className="flex-1 rounded-full">
          <input
            type="text"
            placeholder="Search high-resolution images"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full rounded-full bg-gray-200 p-2"
          />
          <button
            type="submit"
            className="submit-button hidden"
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            Submit
          </button>
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
        <IoMdNotifications
          size={30}
          className="hidden cursor-pointer hover:text-black md:block "
        />
        <MdAccountCircle size={30} className="cursor-pointer" />
      </nav>
    </header>
  );
}
