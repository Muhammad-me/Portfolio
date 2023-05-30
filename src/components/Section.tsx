import Image from "next/image";
import Link from "next/link";
import pr1 from "../assets/img/Screenshot (83).png";
import pr2 from "../assets/img/Screenshot (84).png";

export default function Section() {
  return (
    <>
      <div id="pg2" className="container mx-auto px-5 text-white mt-14">
        <h1 className="font-semibold text-3xl lg:text-4xl text-center">
          Projects
        </h1>
        <div className="py-24">
          <div className="block md:flex flex-wrap justify-center md:justify-between items-center">
            <div className="w-full md:w-1/3">
              <h1 className="lg:font-extrabold text-2xl lg:text-5xl lg:tracking-widest text-center lg:text-left">
                On Time
              </h1>
              <p className="font-medium text-lg lg:text-3xl lg:tracking-wider text-center lg:text-left">
                In this project used Tailwind css, Mantine librearies, By the
                way it builds in next js.
              </p>
            </div>
            <div className="w-full md:w-1/2 mt-6 lg:mt-0">
              <Link href={"https://on-time-flame.vercel.app/"}>
                <Image src={pr1} alt={""} />
              </Link>
            </div>
          </div>
          <div className="block md:flex flex-wrap flex-row-reverse lg:flex-row justify-center md:justify-between items-center mt-10 lg:mt-20">
            <div className="w-full md:w-1/3 lg:hidden mb-5">
              <h1 className="lg:font-extrabold text-2xl lg:text-5xl lg:tracking-widest mt-6 lg:mt-0 text-center lg:text-left">
                Yupak
              </h1>
              <p className="font-medium text-lg lg:text-3xl lg:tracking-wider text-center lg:text-left">
                In this project used Tailwind css, Mantine librearies, By the
                way it builds in next js.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <Link href={"https://yu-pak.vercel.app/"}>
                <Image src={pr2} alt={""} />
              </Link>
            </div>
            <div className="hidden lg:block w-full md:w-1/3">
              <h1 className="lg:font-extrabold text-2xl lg:text-5xl lg:tracking-widest mt-6 lg:mt-0 text-center lg:text-left">
                Yupak
              </h1>
              <p className="font-medium text-lg lg:text-3xl lg:tracking-wider text-center lg:text-left">
                In this project used Tailwind css, Mantine librearies, By the
                way it builds in next js.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="pg3" className="container mx-auto px-5 text-white">
        <h1 className="font-semibold text-3xl lg:text-4xl text-center">FAQ</h1>
        <div className="lg:flex flex-wrap justify-center gap-10 py-16">
          <div className="p-10 lg:w-1/3 shadow-lg shadow-neutral-500">
            <h1 className="font-semibold text-xl lg:text-2xl text-white">
              What is Java Script?
            </h1>
            <button className="py-2 px-5 font-semibold rounded-lg bg-blue-600 mt-5 border">
              <Link href={"/js"}> See it</Link>
            </button>
          </div>
          <div className="p-10 lg:w-1/3 shadow-lg shadow-neutral-500 mt-10 lg:mt-0">
            <h1 className="font-semibold text-xl lg:text-2xl text-white">
              Why developers always use React js?
            </h1>
            <button className="py-2 px-5 font-semibold rounded-lg bg-blue-600 mt-5 border">
              <Link href={"/react"}> See it</Link>
            </button>
          </div>
          <div className="p-10 lg:w-1/3 shadow-lg shadow-neutral-500 mt-10 lg:mt-0">
            <h1 className="font-semibold text-xl lg:text-2xl text-white">
              What is Git, Github / Gitlab?
            </h1>
            <button className="py-2 px-5 font-semibold rounded-lg bg-blue-600 mt-5 border">
              <Link href={"/things"}> See it</Link>
            </button>
          </div>
          <div className="p-10 lg:w-1/3 shadow-lg shadow-neutral-500 mt-10 lg:mt-0">
            <h1 className="font-semibold text-xl lg:text-2xl text-white">
              How to write clean code?
            </h1>
            <button className="py-2 px-5 font-semibold rounded-lg bg-blue-600 mt-5 border">
              <Link href={"/code"}> See it</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
