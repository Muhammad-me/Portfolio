import { FileInput } from "@mantine/core";

export default function Form() {
  return (
    <div className="text-black">
      <h1 className="font-extrabold lg:text-[40px] text-xl mt-8 text-center text-white">
        Contact me
      </h1>
      <div className="lg:flex gap-12 mt-16">
        <input
          type="text"
          className="py-4 px-6 outline-none border border-black rounded-[36px] w-full"
          placeholder="First name"
        />
        <input
          type="text"
          className="py-4 px-6 outline-none border border-black rounded-[36px] w-full mt-10 lg:mt-0"
          placeholder="Last name"
        />
      </div>
      <input
        type="text"
        className="py-4 px-6 outline-none border border-black rounded-[36px] w-full mt-10"
        placeholder="Email"
      />

      <textarea
        className="py-4 px-6 outline-none border border-black rounded-[36px] w-full mt-10"
        placeholder="Cover letter"
        rows={10}
      ></textarea>
    </div>
  );
}
