import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Accordion } from "@mantine/core";
import Image from "next/image";
import img1 from "../../assets/img/image-png-Oct-26-2021-12-27-56-76-PM.png";
import img2 from "../../assets/img/image-png-Oct-26-2021-12-29-29-01-PM.png";
import img3 from "../../assets/img/image-png-Oct-26-2021-12-29-59-68-PM.png";
import img4 from "../../assets/img/image-png-Oct-26-2021-12-30-56-69-PM.png";
import img5 from "../../assets/img/image-png-Oct-26-2021-12-31-31-58-PM.png";

export default function Code() {
  return (
    <div className="bg-blue-500">
      <Navbar />
      <div className="container mx-auto px-5 lg:px-96 py-20 text-zinc-300">
        <h1 className="font-semibold text-xl lg:text-4xl text-white">
          10 tips for writing cleaner code in any programming language
        </h1>
        <p className="text-base font-medium mt-10 tracking-wider">
          In retrospect, I understand what they were asking of me: that my code
          needed to be very descriptive so that anyone could understand it. If
          someone reviewed my code, they should realize quickly and easily how
          we solved the user stories of the client. The end result would be
          readable and maintainable code.
        </p>
        <p className="text-base font-medium mt-5 tracking-wider">
          And how could we achieve that? Well, it’s not all that complicated and
          the Tech Leads were right, we needed clean code. Since then I have had
          mentors that helped me a lot, and they helped uncover a desire for
          continuous learning that continues to this day using certain courses
          and books. And, the concept of writing clean code has stuck with me.
        </p>
        <p className="text-base font-medium mt-5 tracking-wider">
          In this post, I focus on some points that we need to have in mind when
          we write clean code, focusing on JavaScript.
        </p>
        <ul className="mt-10 lg:mt-20">
          <Accordion>
            <Accordion.Item value="1">
              <Accordion.Control>
                <li className="text-base font-medium text-white tracking-wider list-disc list-inside">
                  1. Use descriptive names
                </li>
              </Accordion.Control>
              <Accordion.Panel>
                <div>
                  <p className="text-base font-medium mt-5 tracking-wider text-zinc-300">
                    Make the names of the variables and the names of the
                    functions must be as descriptive as they can be. For
                    example, suppose you want to make some references to the
                    character and last name. In that case, you might use a
                    variable that calls “namePhysician” and “lastNamePhysician”
                    instead of using “name.” Even worse if you use “n.” Why?
                    Because with that syntax, anybody can understand what value
                    the variable contains.
                  </p>
                  <p className="text-base font-medium mt-5 tracking-wider text-zinc-300">
                    And what about a function? Well, the name of a function must
                    start with a verb. For example, if I have a function that
                    returns the physician’s name, I can create a function that
                    calls “getPhysicianName” instead of using a function that
                    only calls “name.”
                  </p>
                  <Image src={img1} alt={""} />
                </div>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="2">
              <Accordion.Control>
                <li className="text-base font-medium text-white tracking-wider list-disc list-inside">
                  2. Use empty lines to create a readable code
                </li>
              </Accordion.Control>
              <Accordion.Panel>
                <div>
                  <p className="text-base font-medium mt-5 tracking-wider text-zinc-300">
                    With empty lines, we can add legibility to our code. An
                    extra line will be beneficial to identify in an easy way
                    where the functions end. Also, we can use empty lines to
                    separate the variable’s declaration from the function’s
                    operation. Finally, we might add an extra line before the
                    returned value if you want.
                  </p>
                  <Image src={img2} alt={""} />
                </div>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="3">
              <Accordion.Control>
                <li className="text-base font-medium text-white tracking-wider list-disc list-inside">
                  3. Do not send more than three parameters into a function
                </li>
              </Accordion.Control>
              <Accordion.Panel>
                <div>
                  <p className="text-base font-medium mt-5 tracking-wider text-zinc-300">
                    Remember, we must make a readable function. It is easier to
                    have three parameters and follow their logic inside the
                    function than to have a bunch of parameters and try to find
                    where the parameters are used.
                  </p>
                  <p className="text-base font-medium mt-5 tracking-wider text-zinc-300">
                    If we need to use more than three parameters, we can send
                    one object to the function and use the keys of the object as
                    we need. Review the following point if you need to send many
                    parameters into a function.
                  </p>
                  <Image src={img3} alt={""} />
                </div>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="4">
              <Accordion.Control>
                <li className="text-base font-medium text-white tracking-wider list-disc list-inside">
                  4. Remember the functions must do only one thing
                </li>
              </Accordion.Control>
              <Accordion.Panel>
                <div>
                  <p className="text-base font-medium mt-5 tracking-wider text-zinc-300">
                    I know that sometimes we are in a hurry or want to solve our
                    problem with one function, and we write a function that does
                    many things. Avoid doing that. A function must do one thing.
                    It is better to have two or more short and easy functions
                    than to have one complex function.
                  </p>
                  <Image src={img4} alt={""} />
                </div>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="5">
              <Accordion.Control>
                <li className="text-base font-medium text-white tracking-wider list-disc list-inside">
                  5. Functions must be small
                </li>
              </Accordion.Control>
              <Accordion.Panel>
                <div>
                  <p className="text-base font-medium mt-5 tracking-wider text-zinc-300">
                    If you need to do a function with many lines, you must
                    consider that maybe it is more accurate to use a class
                    instead of a function. Remember your function must do only
                    one thing.
                  </p>
                </div>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="6">
              <Accordion.Control>
                <li className="text-base font-medium text-white tracking-wider list-disc list-inside">
                  6. Reduce the number of characters in a line
                </li>
              </Accordion.Control>
              <Accordion.Panel>
                <div>
                  <p className="text-base font-medium mt-5 tracking-wider text-zinc-300">
                    Keep in mind that we want to create a code that is easy to
                    read. Avoid having long lines of code. The size of a line
                    must fit in your screen so that you don’t need to do a
                    horizontal scroll. Remember, there are a lot of tools like
                    prettier that allow you to control the format of the code.
                  </p>
                </div>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="7">
              <Accordion.Control>
                <li className="text-base font-medium text-white tracking-wider list-disc list-inside">
                  7. Avoid using comments
                </li>
              </Accordion.Control>
              <Accordion.Panel>
                <div>
                  <p className="text-base font-medium mt-5 tracking-wider text-zinc-300">
                    Sometimes it is difficult to maintain the code. Imagine if
                    we have to maintain the comments too! How can we avoid using
                    a comment? We can use descriptive names. If our code is
                    understandable, we don’t need a comment. If we create a
                    comment and somebody has to change the code, we cannot
                    confirm that this person updated the comment. Remember that
                    if you are using a comment, it is because our code is not
                    clear enough. But maybe you think it is sometimes necessary
                    to add a comment, if that’s the case, use comments but only
                    in some exceptional cases.
                  </p>
                </div>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="8">
              <Accordion.Control>
                <li className="text-base font-medium text-white tracking-wider list-disc list-inside">
                  8. Create a descriptive message when you create a commit
                </li>
              </Accordion.Control>
              <Accordion.Panel>
                <div>
                  <p className="text-base font-medium mt-5 tracking-wider text-zinc-300">
                    When we create a commit, we have to write a descriptive
                    message. That message could be helpful if we want to
                    remember what our code is doing some months later. Avoid
                    messages that do not give us much information. If you only
                    write messages like “refactoring,” perhaps this could not be
                    clear enough for the following developers.
                  </p>
                  <Image src={img5} alt={""} />
                </div>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="9">
              <Accordion.Control>
                <li className="text-base font-medium text-white tracking-wider list-disc list-inside">
                  9. Use Unit Test and practice Test Driven Development
                </li>
              </Accordion.Control>
              <Accordion.Panel>
                <div>
                  <p className="text-base font-medium mt-5 tracking-wider text-zinc-300">
                    I know that sometimes we think that unit tests are a waste
                    of time. But believe me, it is false. Indeed, unit tests do
                    work. Imagine that somebody is working with the code you
                    created some months ago, and the new developer creates a
                    code that is solving a thing, but it is breaking other
                    functionality. How can you or the other developer know that
                    the code is breaking? Well, if the project has unit tests,
                    it could be easy to identify those problems. Yes, I know
                    that sometimes we have to deliver many things in a very
                    short time, but this extra time that you invest in unit
                    tests can save a lot of time in the future.
                  </p>
                  <p className="text-base font-medium mt-5 tracking-wider text-zinc-300">
                    As a good practice, first, create your unit test; obviously,
                    it will fail, continue creating your routine or update the
                    code, and finally rerun your unit test; this will run
                    successfully. The advantage of working in that way is that
                    you can have a better approach to solving the problem you
                    are facing.
                  </p>
                </div>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="10">
              <Accordion.Control>
                <li className="text-base font-medium text-white tracking-wider list-disc list-inside">
                  10. Learn Design Patterns
                </li>
              </Accordion.Control>
              <Accordion.Panel>
                <div>
                  <p className="text-base font-medium mt-5 tracking-wider text-zinc-300">
                    “Design Patterns” is a very broad topic. As an introduction,
                    if you study Design Patterns, you can know the solutions
                    that some master developers had found when facing some
                    common problems in their software. And it lets us avoid
                    reinventing the wheel.
                  </p>
                  <p className="text-base font-medium mt-5 tracking-wider text-zinc-300">
                    So I highly recommend reading the book: Design Patterns,
                    Elements of Reusable Object-Oriented Software, written by
                    Erich Gamma, Richard Helm, Ralph Johnson, and John
                    Vlissides.
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
