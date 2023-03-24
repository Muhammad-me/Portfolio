import Image from "next/image";
import Link from "next/link";
import pr1 from "../assets/img/Screenshot (83).png";
import pr2 from "../assets/img/Screenshot (84).png";

export default function Section() {
  return (
    <div id="pg2" className="container mx-auto px-5 text-white h-screen">
      <h1 className="font-semibold text-3xl lg:text-4xl text-center">
        Projects
      </h1>
      <div className="py-24">
        <div className="block lg:flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3">
            <h1 className="lg:font-extrabold text-2xl lg:text-5xl lg:tracking-widest text-center lg:text-left">
              On Time
            </h1>
            <p className="font-medium text-lg lg:text-3xl lg:tracking-wider text-center lg:text-left">
              In this project used Tailwind css, Mantine librearies, By the way
              it builds in next js.
            </p>
          </div>
          <div className="w-full md:w-1/2 mt-6 lg:mt-0">
            <Link href={"https://on-time-flame.vercel.app/"}>
              <Image src={pr1} alt={""} />
            </Link>
          </div>
        </div>
        <div className="block lg:flex flex-wrap justify-between items-center mt-10 lg:mt-20">
          <div className="w-full md:w-1/2">
            <Link href={"https://yu-pak.vercel.app/"}>
              <Image src={pr2} alt={""} />
            </Link>
          </div>
          <div className="w-full md:w-1/3">
            <h1 className="lg:font-extrabold text-2xl lg:text-5xl lg:tracking-widest mt-6 lg:mt-0 text-center lg:text-left">
              Yupak
            </h1>
            <p className="font-medium text-lg lg:text-3xl lg:tracking-wider text-center lg:text-left">
              In this project used Tailwind css, Mantine librearies, By the way
              it builds in next js.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
