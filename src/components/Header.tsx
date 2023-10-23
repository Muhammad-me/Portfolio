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
              <Image src={logo} alt={"logo"} />
            </div>
          </div>
          <div className="flex gap-5 justify-center lg:justify-between flex-wrap mt-20 text-white text-center">
            <div className="px-4 py-2 w-28 h-[43px] lg:h-16 lg:py-5 overflow-hidden relative border-0  bg-gradient-to-r from-red-300 to-orange-500 text-base lg:text-xl font-bold">
              <h1>HTML</h1>
              <span className="bordert"></span>
              <span className="borderr"></span>
              <span className="borderb"></span>
              <span className="borderl"></span>
            </div>
            <div className="px-4 py-2 w-32 h-[43px] lg:h-16 lg:py-5 overflow-hidden relative border-0 bg-gradient-to-r from-sky-500 to-blue-600 text-base lg:text-xl font-bold">
              <h1>CSS</h1>
              <span className="bordert"></span>
              <span className="borderr"></span>
              <span className="borderb"></span>
              <span className="borderl"></span>
            </div>
            <div className="px-4 py-2 w-32 h-[43px] lg:h-16 lg:py-5 overflow-hidden relative border-0  bg-gradient-to-r from-red-400 to-red-500 text-base lg:text-xl font-bold">
              SCSS
              <span className="bordert"></span>
              <span className="borderr"></span>
              <span className="borderb"></span>
              <span className="borderl"></span>
            </div>
            <div className="px-4 py-2 w-44 h-[43px] lg:h-16 lg:py-5 overflow-hidden relative border-0 bg-gradient-to-r from-orange-400 to-orange-600 text-base lg:text-xl font-bold">
              JavaScript
              <span className="bordert"></span>
              <span className="borderr"></span>
              <span className="borderb"></span>
              <span className="borderl"></span>
            </div>
            <div className="px-4 py-2 w-[150px] h-[43px] lg:h-16 lg:py-5 overflow-hidden relative border-0  bg-gradient-to-r from-sky-400 to-sky-600 text-base lg:text-xl font-bold">
              React js
              <span className="bordert"></span>
              <span className="borderr"></span>
              <span className="borderb"></span>
              <span className="borderl"></span>
            </div>
            <div className="px-4 py-2 w-36 h-[43px] lg:h-16 lg:py-5 overflow-hidden relative border-0 bg-zinc-900 text-base lg:text-xl font-bold">
              <span className="bordert"></span>
              <span className="borderr"></span>
              <span className="borderb"></span>
              <span className="borderl"></span>
              Next js
            </div>
            <div className="px-4 py-2 w-[200px] h-[43px] lg:h-16 lg:py-5 overflow-hidden relative border-0  bg-gradient-to-r from-blue-500 to-blue-600 text-base lg:text-xl font-bold">
              Tailwind CSS
              <span className="bordert"></span>
              <span className="borderr"></span>
              <span className="borderb"></span>
              <span className="borderl"></span>
            </div>
            <div className="px-4 py-2 w-[150px] h-[43px] lg:h-16 lg:py-5 overflow-hidden relative border-0 bg-gradient-to-r from-green-600 to-green-800 text-base lg:text-xl font-bold">
              Node js
              <span className="bordert"></span>
              <span className="borderr"></span>
              <span className="borderb"></span>
              <span className="borderl"></span>
            </div>
            <div className="px-4 py-2 w-28 h-[43px] lg:h-16 lg:py-5 overflow-hidden relative border-0  bg-gradient-to-r from-blue-700 to-blue-900 text-base lg:text-xl font-bold">
              Git
              <span className="bordert"></span>
              <span className="borderr"></span>
              <span className="borderb"></span>
              <span className="borderl"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
