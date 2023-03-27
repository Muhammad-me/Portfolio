import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Accordion } from "@mantine/core";
import stat from "../../assets/img/most-used-web-frameworks.png";

export default function React() {
  return (
    <div className="bg-black">
      <Navbar />
      <div className="container mx-auto px-5 lg:px-96 py-2r text-blue-400">
        <h1 className="font-semibold text-xl lg:text-4xl text-white">
          What is React JS?
        </h1>
        <p className="text-base font-medium mt-10 tracking-wider text-blue-500">
          React JS is basically a JavaScript library built and maintained by
          Facebook. According to the creator of React JS, Jordan Walke, React is
          an efficient, declarative, and flexible open-source JavaScript library
          for building simple, fast, and scalable frontends of web applications.
        </p>
        <p className="text-base font-medium mt-5 tracking-wider text-blue-500">
          Ever since its launch, it has taken the front-end development space by
          storm.
        </p>
        <p className="text-base font-medium mt-5 tracking-wider text-blue-500">
          As per the study made by statista in 2022, Node.js is the most used
          framework globally, React stands second while Angular ranked 5th on
          the same list.
        </p>
        <Image className="my-10" src={stat} alt={""} />
        <p className="text-base font-medium mt-5 tracking-wider text-blue-500">
          Today, there are over 220,000 live websites using React. Not only
          that, but industry giants like Apple, Netflix, Paypal, and many others
          have also already started using React JS in their software
          productions.
        </p>
        <h1 className="font-semibold text-xl lg:text-4xl mt-10 lg:mt-20 text-white">
          8 Main Advantages of ReactJS
        </h1>
        <ul>
          <Accordion chevron>
            <Accordion.Item value="script">
              <Accordion.Control>
                <li className="text-base font-medium tracking-wider list-disc list-inside text-blue-500">
                  Simplified Scripting
                </li>
              </Accordion.Control>
              <Accordion.Panel>
                <div>
                  <p className="text-base font-medium mt-5 tracking-wider text-blue-400">
                    React JS features a free syntax extension called JSX. This
                    makes your HTML markup within the library much easier. Its
                    writing shortcuts allow you to make your course code simpler
                    and cleaner, converting your HTML mockups into ReactElement
                    trees. JSX not only helps avert code injections, but it
                    makes your whole application run faster.
                  </p>
                </div>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="comp">
              <Accordion.Control>
                <li className="text-base font-medium tracking-wider list-disc list-inside text-blue-500">
                  Component basic
                </li>
              </Accordion.Control>
              <Accordion.Panel>
                <div>
                  <p className="text-base font-medium mt-5 tracking-wider text-blue-400">
                    One of the key ReactJS advantages is its modular design.
                    React.js uses a component-based architecture that allows
                    developers to create reusable components for the user
                    interface. This makes it easier to maintain and scale
                    applications.
                  </p>
                </div>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="render">
              <Accordion.Control>
                <li className="text-base font-medium tracking-wider list-disc list-inside text-blue-500">
                  Faster rendering
                </li>
              </Accordion.Control>
              <Accordion.Panel>
                <div>
                  <p className="text-base font-medium mt-5 tracking-wider text-blue-400">
                    Earlier in this article, this library’s Virtual DOM was
                    mentioned, and here is where this function truly shines.
                    React’s “tree” model means that a problem at the top of the
                    tree can cascade throughout the tree. To solve this problem,
                    the Facebook development team created the Virtual DOM, which
                    directs traffic and requests more efficiently. In any
                    consideration of React.js advantages and disadvantages, this
                    is a clear game point for the library. It provides key speed
                    and accuracy for high-volume apps.
                  </p>
                </div>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="structure">
              <Accordion.Control>
                <li className="text-base font-medium tracking-wider list-disc list-inside text-blue-500">
                  Stable Code Structure
                </li>
              </Accordion.Control>
              <Accordion.Panel>
                <div>
                  <p className="text-base font-medium mt-5 tracking-wider text-blue-400">
                    Again, this is an area where the library’s “tree” function
                    comes into play. In React, the data flows from the top to
                    the bottom of the tree. And this has an enormously
                    stabilizing effect on your code. Small changes or bugs in
                    the “child” structure don’t affect the “parent” code. This
                    type of data binding leads to code that’s more stable and
                    faster running. When evaluating the pros and cons of using
                    ReactJS, this is an important “pro” to remember.
                  </p>
                </div>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="seo">
              <Accordion.Control>
                <li className="text-base font-medium tracking-wider list-disc list-inside text-blue-500">
                  SEO-enabled
                </li>
              </Accordion.Control>
              <Accordion.Panel>
                <div>
                  <p className="text-base font-medium mt-5 tracking-wider text-blue-400">
                    Have you ever searched for something on Google or another
                    search engine, like “best pizza near me,” and noticed how
                    some websites show up at the top of the search results while
                    others are buried on page 10? That’s because the websites at
                    the top of the search results have better search engine
                    optimization (SEO). And one of the major React JS benefits
                    is that it can help make your site SEO-friendly with the
                    help of server-side rendering, dynamic rendering, and meta
                    tags.
                  </p>
                </div>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="tool">
              <Accordion.Control>
                <li className="text-base font-medium tracking-wider list-disc list-inside text-blue-500">
                  Handy developer tools
                </li>
              </Accordion.Control>
              <Accordion.Panel>
                <div>
                  <p className="text-base font-medium mt-5 tracking-wider text-blue-400">
                    Editing React code has become even easier with developer
                    tools designed as a dev extension in Chrome and Firefox.
                    This allows programmers to inspect the React component
                    hierarchies as they appear in the virtual DOM. You can also
                    isolate certain parts of your code and edit them
                    accordingly.
                  </p>
                </div>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="mobile">
              <Accordion.Control>
                <li className="text-base font-medium tracking-wider list-disc list-inside text-blue-500">
                  Mobile app development
                </li>
              </Accordion.Control>
              <Accordion.Panel>
                <div>
                  <p className="text-base font-medium mt-5 tracking-wider text-blue-400">
                    While React JS is primarily seen as a web application
                    library, it has been upgraded so the framework works for
                    developing mobile native applications for both iOS and
                    Android. In this case, great app performance is another
                    advantage of React JS.
                  </p>
                </div>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="easy">
              <Accordion.Control>
                <li className="text-base font-medium tracking-wider list-disc list-inside text-blue-500">
                  Easy to Learn, Easy to Use
                </li>
              </Accordion.Control>
              <Accordion.Panel>
                <div>
                  <p className="text-base font-medium mt-5 tracking-wider text-blue-400">
                    Most programmers with a good grasp of JavaScript can learn
                    to React within a few days. And in consideration of ReactJS
                    advantages and disadvantages, this one is a game point to
                    JS. Its widespread use means you can cast a wider net for
                    your development talent and find more qualified candidates.
                  </p>
                </div>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </ul>
      </div>
      <Footer />
    </div>
  );
}
