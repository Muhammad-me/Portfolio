import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import js from "../../assets/img/Screenshot 2023-03-25 161834.png";

export default function Js() {
  return (
    <div className="bg-orange-600">
      <Navbar />
      <div className="container mx-auto px-5 lg:px-96 py-20 text-zinc-300">
        <h1 className="font-semibold text-xl lg:text-4xl text-white">
          What is Java Script?
        </h1>
        <div>
          <p className="text-base font-medium mt-5 tracking-wider">
            JavaScript (JS) is a computer programming language used to make
            websites and applications dynamic and interactive.
          </p>
          <p className="text-base font-medium mt-5 tracking-wider">
            It’s unique because it can run directly in your browser, not just on
            a server.
          </p>
          <p className="text-base font-medium mt-5 tracking-wider">
            Along with hypertext markup language (HTML) and cascading style
            sheets (CSS), JavaScript is one of the most commonly used
            programming languages of the internet.
          </p>
          <p className="text-base font-medium mt-5 tracking-wider">
            In fact, 98.4% of all websites use JavaScript as of March 2023.
          </p>
          <p className="text-base font-medium mt-5 tracking-wider">
            JavaScript, CSS, and HTML work together to make up the user-facing
            elements of most websites and online applications.
          </p>
          <p className="text-base font-medium mt-5 tracking-wider">
            Think of these coding languages as the components of a house:
          </p>
          <ul>
            <li className="text-base font-medium mt-5 tracking-wider list-disc list-inside">
              HTML is the foundation of the house. It provides the basic layout,
              structure, and content of a website.
            </li>
            <li className="text-base font-medium mt-5 tracking-wider list-disc list-inside">
              CSS is the interior design. It provides design, fonts, colors,
              effects, and other visual elements.
            </li>
            <li className="text-base font-medium mt-5 tracking-wider list-disc list-inside">
              JavaScript is the electrical and plumbing systems. JS brings
              dynamism and interactivity to the website. For example, pop-ups,
              animations, video and social media embeds, drop-down menus, and
              many other website components are created using JavaScript.
            </li>
          </ul>
          <div className="my-5">
            <Image src={js} alt={""} />
          </div>
          <p className="text-base font-medium mt-5 tracking-wider">
            Without JavaScript, webpages would be mostly static and boring.
            JavaScript adds behavior and interactivity. But it can do so much
            more.
          </p>
          <h1 className="font-semibold text-xl lg:text-4xl text-white mt-8 lg:mt-12">
            History of JavaScript
          </h1>
          <p className="text-base font-medium mt-5 tracking-wider">
            Brendan Eich developed JavaScript in 1995 while working for
            Netscape. <br className="mt-10" />
          </p>
          <p className="text-base font-medium mt-5 tracking-wider">
            Netscape sought to develop a scripting language that could help make
            early versions of the World Wide Web more dynamic.
          </p>
          <p className="text-base font-medium mt-5 tracking-wider">
            JavaScript quickly gained popularity as developers realized its
            ability to add dynamism and interactivity to webpages.
          </p>
          <p className="text-base font-medium mt-5 tracking-wider">
            In 1996, Netscape submitted JavaScript to the European Computer
            Manufacturers Association (ECMA International), an organization that
            aims to standardize the use of information technology systems.
          </p>
          <p className="text-base font-medium mt-5 tracking-wider">
            This led to the creation of the ECMAScript standard, the formal
            specifications for JavaScript. Its growing popularity has
            facilitated the development of libraries and frameworks, dedicated
            JS engines such as V8 (which powers Chrome), and server-side
            environments.
          </p>
          <p className="text-base font-medium mt-5 tracking-wider">
            Despite similarities in name, JavaScript is entirely different from
            Java.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
