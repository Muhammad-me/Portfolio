import Link from "next/link";
import Image from "next/image";
import logo from "../assets/img/logo-removebg-preview.png";
import Instagramm from "@/assets/icon/Instagramm";
import Telegram from "@/assets/icon/Telegram";
import LinkedIn from "@/assets/icon/LinkedIn";
import Github from "@/assets/icon/Github";
import { useTranslation } from "react-i18next";
import Email from "@/assets/icon/Email";

const navigation = [
  { name: "about", href: "#pg1", current: true },
  { name: "expir", href: "#about", current: false },
  { name: "faq", href: "#faq", current: false },
  { name: "contact", href: "#pg4", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Footer() {
  const { t } = useTranslation("translation");

  return (
    <div className="container mx-auto px-5 py-5 lg:py-16 overflow-x-hidden">
      <div className="lg:flex justify-between">
        <div className="hidden lg:block">
          <Link href={"/"}>
            <Image src={logo} alt="" width={100} height={100} />
          </Link>
        </div>
        <div className="flex space-x-4 items-center justify-center">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={classNames(
                "font-bold text-base text-white hover:bg-cyan-400",
                "rounded-md px-3 py-2 font-medium"
              )}
              aria-current={item.current ? "page" : undefined}>
              {t(item.name)}
            </Link>
          ))}
        </div>
        <div className="flex space-x-4 items-center justify-center">
          <Link href={"https://www.instagram.com/majidhanov.muhammad"}>
            <Instagramm />
          </Link>
          <Link href={"https://t.me/muhammad_mhd"}>
            <Telegram />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/muhammad-majidhanov-864b61248/"}>
            <LinkedIn />
          </Link>
          <Link href={"https://github.com/Muhammad-me"}>
            <Github />
          </Link>
          <Link className="stroke-white" href={"mailto:mmajidhanov@gmail.com"}>
            <Email stroke={"white"} />
          </Link>
        </div>
      </div>
    </div>
  );
}
