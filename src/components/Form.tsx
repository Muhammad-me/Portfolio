import { FileInput } from "@mantine/core";

export default function Form() {
  return (
    <div className="text-black w-full lg:w-1/3 mx-auto">
      <h1 className="font-extrabold lg:text-[40px] text-xl mt-8 text-center text-white">
        Contact me
      </h1>
      <input
        type="text"
        className="py-4 px-6 outline-none border border-black rounded-[36px] w-full mt-24"
        placeholder="First name"
      />
      <input
        type="text"
        className="py-4 px-6 outline-none border border-black rounded-[36px] w-full mt-10"
        placeholder="Last name"
      />
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
      <button
        type="submit"
        className="font-medium text-xl text-white border py-3 px-10 rounded-3xl flex mx-auto mt-5 hover:bg-white hover:text-black"
      >
        Send
      </button>
    </div>
  );
}
