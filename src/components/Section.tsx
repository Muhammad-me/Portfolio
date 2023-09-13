import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import pr1 from "../assets/img/Screenshot (146).png";
import pr2 from "../assets/img/jt.png";

export default function Section() {
  const { t } = useTranslation("translation");

  return (
    <>
      <div id="about" className="container mx-auto px-5 text-white mt-14">
        <h1 className="font-semibold text-3xl lg:text-4xl text-center">
          {t("project")}
        </h1>
        <div className="py-24">
          <div className="block md:flex flex-wrap justify-center md:justify-between items-center mt-10 lg:mt-20">
            <div className="w-full md:w-1/3">
              <h1 className="lg:font-extrabold text-2xl lg:text-5xl lg:tracking-widest text-center lg:text-left">
                VipTurizm
              </h1>
              <p className="font-medium text-lg lg:text-3xl lg:tracking-wider text-center lg:text-left mt-5">
                {t("vt_txt")}
              </p>
            </div>
            <div className="w-full md:w-1/2 mt-6 lg:mt-0 img duration-500">
              <Link href={"https://vipturizm-five.vercel.app/"}>
                <Image src={pr1} alt={""} />
              </Link>
            </div>
          </div>
          <div className="block md:flex flex-wrap justify-center md:justify-between items-center mt-10 lg:mt-20">
            <div className="w-full md:w-1/2 mt-6 lg:mt-0 img duration-500">
              <Link href={"https://jahon-tillari-two.vercel.app/"}>
                <Image src={pr2} alt={""} />
              </Link>
            </div>
            <div className="w-full md:w-1/3">
              <h1 className="lg:font-extrabold text-2xl lg:text-5xl lg:tracking-widest text-center lg:text-left">
                Jahon Tillari
              </h1>
              <p className="font-medium text-lg lg:text-3xl lg:tracking-wider text-center lg:text-left mt-5">
                {t("jt_txt")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="faq" className="container mx-auto px-5 text-white">
        <h1 className="font-semibold text-3xl lg:text-4xl text-center">
          {t("faq")}
        </h1>
        <div className="lg:flex flex-wrap justify-center gap-10 py-16">
          <div className="p-10 lg:w-1/3 shadow-lg shadow-neutral-500">
            <h1 className="font-semibold text-xl lg:text-2xl text-white">
              {t("js")}
            </h1>
            <button className="py-2 px-5 font-semibold rounded-lg bg-blue-600 mt-5 border">
              <Link href={"/js"}>{t("st")}</Link>
            </button>
          </div>
          <div className="p-10 lg:w-1/3 shadow-lg shadow-neutral-500 mt-10 lg:mt-0">
            <h1 className="font-semibold text-xl lg:text-2xl text-white">
              {t("reactjs")}
            </h1>
            <button className="py-2 px-5 font-semibold rounded-lg bg-blue-600 mt-5 border">
              <Link href={"/react"}>{t("st")}</Link>
            </button>
          </div>
          <div className="p-10 lg:w-1/3 shadow-lg shadow-neutral-500 mt-10 lg:mt-0">
            <h1 className="font-semibold text-xl lg:text-2xl text-white">
              {t("git")}
            </h1>
            <button className="py-2 px-5 font-semibold rounded-lg bg-blue-600 mt-5 border">
              <Link href={"/things"}>{t("st")}</Link>
            </button>
          </div>
          <div className="p-10 lg:w-1/3 shadow-lg shadow-neutral-500 mt-10 lg:mt-0">
            <h1 className="font-semibold text-xl lg:text-2xl text-white">
              {t("cln")}
            </h1>
            <button className="py-2 px-5 font-semibold rounded-lg bg-blue-600 mt-5 border">
              <Link href={"/code"}>{t("st")}</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
