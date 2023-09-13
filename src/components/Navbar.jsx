import { Burger, Drawer, Group, Menu } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import i18next from "i18next";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import logo from "../assets/img/logo-removebg-preview.png";

const navigation = [
  { name: "about", href: "#pg1", current: true },
  { name: "expir", href: "#about", current: false },
  { name: "faq", href: "#faq", current: false },
  { name: "contact", href: "#pg4", current: false },
];

const languageMap = {
  "uz-UZ": { label: "Uzbek", dir: "ltr", active: true },
  "ru-RU": { label: "Русский", dir: "ltr", active: false },
  "en-EN": { label: "English", dir: "ltr", active: false },
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [opened, { open, close, toggle }] = useDisclosure(false);
  const label = opened ? "Close navigation" : "Open navigation";
  const { t } = useTranslation("translation");

  return (
    <div className="container mx-auto">
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
                {navigation.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className={classNames(
                      "font-semibold text-base text-white hover:scale-110 hover:bg-cyan-400",
                      "rounded-md px-3 py-2 font-semibold"
                    )}
                    aria-current={item.current ? "page" : undefined}>
                    {t(item.name)}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <Menu>
            <Menu.Target>
              <button className="p-3 rounded-xl bg-yellow-500 text-white">
                {t("lang")}
              </button>
            </Menu.Target>
            <Menu.Dropdown>
              {Object.keys(languageMap)?.map((item) => {
                return (
                  <>
                    <Menu.Item
                      component="button"
                      className="dropdown-item"
                      style={{ color: "black" }}
                      key={item}
                      onClick={() => {
                        i18next.changeLanguage(item);
                      }}>
                      {languageMap[item].label}
                    </Menu.Item>
                  </>
                );
              })}
            </Menu.Dropdown>
          </Menu>
          <div className="sm:hidden">
            <Drawer
              opened={opened}
              onClose={close}
              title="Menu"
              size={250}
              overlayProps={{ opacity: 0.5, blur: 4 }}
              className="w-2/3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    "font-bold text-base block border p-3 m-3 hover:bg-cyan-400",
                    "rounded-md px-3 py-2 font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}>
                  {item.name}
                </a>
              ))}
            </Drawer>

            <Group position="center">
              <Burger
                color="white"
                opened={opened}
                onClick={toggle}
                onChange={open}
                aria-label={label}
              />
            </Group>
          </div>
        </div>
      </div>
    </div>
  );
}
