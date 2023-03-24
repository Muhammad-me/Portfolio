import Image from "next/image";
import logo from "../assets/img/logo.png";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div>
      <Navbar />
      <div
        id="pg1"
        className="container mx-auto px-14 flex items-center h-screen"
      >
        <div className="flex items-center justify-between flex-wrap">
          <div className="text-white lg:w-1/2">
            <h1 className="font-semibold text-3xl lg:text-4xl">
              Muhammad Majidhanov
            </h1>
            <p className="font-normal text-base lg:text-lg mt-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
              in consequuntur aspernatur voluptatum quos corporis. Inventore,
              veritatis. Esse non suscipit iste nam, consequuntur
              necessitatibus, id aliquam, inventore repellat eius tenetur nobis
              laboriosam debitis facere numquam aspernatur ipsa fuga perferendis
              fugit qui?
            </p>
          </div>
          <div>
            <Image src={logo} alt={""} />
          </div>
        </div>
      </div>
    </div>
  );
}
