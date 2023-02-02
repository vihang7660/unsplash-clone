import { useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export default function Navbar() {
  const ref = useRef<HTMLUListElement>(null);

  return (
    <div className="flex items-center gap-5 text-sm text-gray-500">
      <div className=" flex items-center gap-4 border-r border-gray-300 pr-5  ">
        <a className="hover:text-black" href="#">
          Editorial
        </a>
        <a className="hover:text-black" href="#">
          Following
        </a>
      </div>

      <IoIosArrowBack
        size={30}
        onClick={() =>
          ref.current?.scrollBy({ top: 0, left: -200, behavior: "smooth" })
        }
        className="cursor-pointer"
      />
      <nav className=" overflow-x-scroll scrollbar-hide" ref={ref}>
        <ul className="flex items-center gap-5 whitespace-nowrap ">
          <li className="hover:text-black">Wallpapers</li>
          <li className="hover:text-black">3D Renders</li>
          <li className="hover:text-black">Travel</li>
          <li className="hover:text-black">Nature</li>
          <li className="hover:text-black">Street Photography</li>
          <li className="hover:text-black">Experimental</li>
          <li className="hover:text-black">Textures & Patterns</li>
          <li className="hover:text-black">Animals</li>
          <li className="hover:text-black">Architecture & Interior</li>
          <li className="hover:text-black">Fashion & Beauty</li>
          <li className="hover:text-black">Film</li>
          <li className="hover:text-black">Food and Drink</li>
          <li className="hover:text-black">People</li>
          <li className="hover:text-black">Spirituality</li>
          <li className="hover:text-black">Business & Work</li>
          <li className="hover:text-black">Athletics</li>
          <li className="hover:text-black">Health & Wellness</li>
        </ul>
      </nav>

      <IoIosArrowForward
        size={30}
        onClick={() =>
          ref.current?.scrollBy({ top: 0, left: 200, behavior: "smooth" })
        }
        className="cursor-pointer"
      />
    </div>
  );
}
