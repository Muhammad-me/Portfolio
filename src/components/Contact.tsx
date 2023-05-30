import Email from "@/assets/icon/Email";
import Location from "@/assets/icon/Location";
import Phone from "@/assets/icon/Phone";

export default function Contact() {
  return (
    <div id="pg4" className="container mx-auto px-5 py-12 lg:py-40">
      <div className="lg:flex justify-between">
        <div className="w-1/2 mx-auto">
          <div>
            <h1 className="font-bold text-xl lg:text-4xl">
              GET IN TOUCH WITH ME
            </h1>
            <p className="font-semibold text-base lg:text-lg mt-5">
              Feel free to contact me if you have any questions or want to
              collaborate on a project.
            </p>
            <div className="flex gap-4 mt-10">
              <div>
                <Location />
              </div>
              <div>
                <h1 className="font-bold text-base lg:text-lg">My Location</h1>
                <p className="font-medium text-sm lg:text-base">
                  64 S.t Saodat, Yangikurgan, <br /> Namangan, Uzbekistan
                </p>
              </div>
            </div>
            <div className="flex gap-4 mt-10">
              <div>
                <Phone />
              </div>
              <div>
                <h1 className="font-bold text-base lg:text-lg">Phone Number</h1>
                <p className="font-medium text-sm lg:text-base">
                  + 998 94 153 2266
                </p>
              </div>
            </div>
            <div className="flex gap-4 mt-10">
              <div>
                <Email />
              </div>
              <div>
                <h1 className="font-bold text-base lg:text-lg">
                  Email Address
                </h1>
                <p className="font-medium text-sm lg:text-base">
                  mmajidhanov@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <form className="w-full max-w-lg mx-auto mt-10">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
              <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                E-mail
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
              />
              <p className="text-gray-600 text-xs italic">
                Some tips - as long as needed
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Message
              </label>
              <textarea
                className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                id="message"
              ></textarea>
              <p className="text-gray-600 text-xs italic">
                Re-size can be disabled by set by resize-none / resize-y /
                resize-x / resize
              </p>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button
                className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
              >
                Send
              </button>
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </form>
      </div>
    </div>
  );
}
