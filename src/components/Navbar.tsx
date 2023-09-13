import ArrowUp from "@/assets/icon/ArrowUp";
import Bars3Icon from "@/assets/icon/Bars3Icon";
import XMarkIcon from "@/assets/icon/XMarkIcon";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/img/logo-removebg-preview.png";

const navigation = [
  { name: "About", href: "#pg1", current: true },
  { name: "Projects", href: "#about", current: false },
  { name: "FAQ", href: "#faq", current: false },
  { name: "Contact", href: "#pg4", current: false },
];
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <div className="container mx-auto">
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="mx-auto px-4 py-2 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between">
                <div>
                  <Link href={"/"}>
                    <Image src={logo} alt="" width={100} height={100} />
                  </Link>
                </div>
                <div className="flex items-center justify-between">
                  <div className="hidden sm:ml-6 md:block">
                    <div className="flex space-x-4 items-center">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            "font-bold text-base text-white hover:bg-cyan-400",
                            "rounded-md px-3 py-2 font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}>
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center md:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? <XMarkIcon /> : <Bars3Icon />}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden text-center">
              <div className="space-y-1 px-2 pt-2 pb-3 text-white">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={
                      (classNames(
                        "block rounded-md px-3 py-2 text-base font-medium"
                      ),
                      "flex items-center gap-3 justify-center py-2 rounded-lg border text-lg uppercase font-medium")
                    }
                    aria-current={item.current ? "page" : undefined}>
                    {item.name} <ArrowUp />
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
