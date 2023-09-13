import { Button, Group, Text, TextInput, Textarea, Title } from "@mantine/core";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Location from "@/assets/icon/Location";
import Phone from "@/assets/icon/Phone";
import Email from "@/assets/icon/Email";

export default function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const { t } = useTranslation("translation");

  const { name, email, number, message } = data;

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/binearybeast/google_sheets/muETCjsbtwGEdcsN?tabId=Лист1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [name, email, number, message, new Date().toLocaleString()],
          ]),
        }
      );
      await response.json();
      setData({ ...data, name: "", email: "", number: "", message: "" });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id="pg4" className="container mx-auto px-5 py-32">
      <div className="flex justify-between">
        <div className="w-1/3">
          <Title className="">{t("contact")} </Title>
          <Text className="text-xl font-semibold" mt="sm" mb={30}>
            {t("ct_txt")}
          </Text>
          <div className="flex gap-3 w-3/4">
            <Location />
            <div>
              <h1 className="text-xl font-semibold">{t("my_loc")}</h1>
              <p className="text-md font-medium">{t("my_txt")}</p>
            </div>
          </div>
          <div className="flex gap-3 mt-5">
            <Phone />
            <div>
              <h1 className="text-xl font-semibold">{t("ph_num")}</h1>
              <p className="text-md font-medium">{t("ph_numb")}</p>
            </div>
          </div>
          <div className="flex gap-3 mt-5">
            <Email stroke={"#00bfd8"} />
            <div>
              <h1 className="text-xl font-semibold">{t("mail")}</h1>
              <p className="text-md font-medium">{t("email_txt")}</p>
            </div>
          </div>
        </div>
        <div className="w-1/3 font-semibold">
          <form onSubmit={handleSubmit}>
            <TextInput
              label={t("nm")}
              placeholder={t("nm_txt")}
              onChange={handleChange}
              value={name}
              name="name"
            />
            <TextInput
              label={t("mail")}
              placeholder={t("mail_txt")}
              className="mt-5"
              onChange={handleChange}
              value={email}
              name="email"
            />
            <TextInput
              label={t("ph_num")}
              placeholder="+998 xx xxx xxxx"
              className="mt-5"
              onChange={handleChange}
              value={number}
              name="number"
            />
            <Textarea
              label={t("msg")}
              placeholder={t("msg_txt")}
              minRows={4}
              className="mt-5"
              onChange={handleChange}
              value={message}
              name="message"
            />
            <Group position="right" className="mt-5">
              <Button
                className="bg-blue-400 hover:bg-blue-900"
                onSubmit={handleSubmit}
                onClick={handleSubmit}>
                {t("snd")}
              </Button>
            </Group>
          </form>
        </div>
      </div>
    </div>
  );
}
