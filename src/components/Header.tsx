import Image from "next/image";
import logo from "../assets/img/logo-removebg-preview.png";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div>
      <Navbar />
      <div id="pg1" className="container mx-auto px-5 flex items-center">
        <div>
          <div className="flex items-center justify-between flex-wrap">
            <div className="text-white lg:w-1/2">
              <h1 className="font-semibold text-3xl lg:text-4xl mt-5 lg:mt-0">
                Muhammad Majidhanov
              </h1>
              <p className="font-normal text-base lg:text-lg mt-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
                in consequuntur aspernatur voluptatum quos corporis. Inventore,
                veritatis. Esse non suscipit iste nam, consequuntur
                necessitatibus, id aliquam, inventore repellat eius tenetur
                nobis laboriosam debitis facere numquam aspernatur ipsa fuga
                perferendis fugit qui?
              </p>
            </div>
            <div>
              <Image src={logo} alt={""} />
            </div>
          </div>
          <div className="flex gap-5 justify-center lg:justify-between flex-wrap mt-20 text-white">
            <div className="px-8 py-2 lg:py-5 ease-out duration-500 bg-gradient-to-r from-red-300 to-orange-500 shadow-md shadow-white text-base lg:text-xl font-bold">
              HTML
            </div>
            <div className="px-8 py-2 lg:py-5 ease-out duration-500 bg-gradient-to-r from-sky-500 to-blue-600 shadow-md shadow-white text-base lg:text-xl font-bold">
              CSS
            </div>
            <div className="px-8 py-2 lg:py-5 ease-out duration-500 bg-gradient-to-r from-red-400 to-red-500 shadow-md shadow-white text-base lg:text-xl font-bold">
              SCSS
            </div>
            <div className="px-8 py-2 lg:py-5 ease-out duration-500 bg-gradient-to-r from-orange-400 to-orange-600 shadow-md shadow-white text-base lg:text-xl font-bold">
              JavaScript
            </div>
            <div className="px-8 py-2 lg:py-5 ease-out duration-500 bg-gradient-to-r from-sky-400 to-sky-600 shadow-md shadow-white text-base lg:text-xl font-bold">
              React js
            </div>
            <div className="px-8 py-2 lg:py-5 ease-out duration-500 bg-zinc-900 shadow-md shadow-white text-base lg:text-xl font-bold">
              Next js
            </div>
            <div className="px-8 py-2 lg:py-5 ease-out duration-500 bg-gradient-to-r from-blue-500 to-blue-600 shadow-md shadow-white text-base lg:text-xl font-bold">
              Tailwind
            </div>
            <div className="px-8 py-2 lg:py-5 ease-out duration-500 bg-gradient-to-r from-green-600 to-green-800 shadow-md shadow-white text-base lg:text-xl font-bold">
              Node js
            </div>
            <div className="px-8 py-2 lg:py-5 ease-out duration-500 bg-gradient-to-r from-blue-700 to-blue-900 shadow-md shadow-white text-base lg:text-xl font-bold">
              Mui
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
