import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Things() {
  return (
    <div className="bg-gradient-to-b from-blue-800 to-orange-500">
      <Navbar />
      <div className="container mx-auto px-5 lg:px-96 py-20 text-zinc-900">
        <h1 className="font-semibold text-3xl lg:text-5xl text-white">
          Git Github/Gitlab
        </h1>
        <div className="text-pink-400">
          <p className="text-xl lg:text-2xl font-medium mt-5 tracking-wider">
            Git is an open-source version control program used by DevOps teams
            to handle small and large software development projects.
          </p>
          <p className="text-xl lg:text-2xl font-medium mt-5 tracking-wider">
            Git has the ability to track changes and therefore supports
            non-linear development, allowing multiple members of a team to
            modify, add, or delete files at any time.
          </p>
          <p className="text-xl lg:text-2xl font-medium mt-5 tracking-wider">
            While Git is a standalone tool that doesn’t rely on central
            repositories, there are external Git repositories that you’ll most
            likely come across. These platforms significantly simplify data
            exchange between members of a development team, serve as an
            additional backup, and provide various additional functions like
            documentation, bug tracking, and quality assurance. For public
            projects, these repositories also act as an information and download
            page for anyone interested in the project. In essence, these modern
            web interfaces make it easy to begin and manage Git projects.
          </p>
          <p className="text-xl lg:text-2xl font-medium mt-5 tracking-wider">
            Let’s talk about two popular Git platforms.
          </p>
        </div>
        <h1 className="font-semibold text-3xl lg:text-5xl mt-10 lg:mt-20 text-white">
          GitHub and GitLab
        </h1>
        <div>
          <p className="text-xl lg:text-2xl font-medium mt-5 tracking-wider text-indigo-500">
            <Link className="font-bold" href={"https://github.com/"}>
              GitHub
            </Link>{" "}
            is one of the most popular Git hosting providers. It is an interface
            that has a large range of functions with quality performance and
            sufficient resources. Some of the main components of GitHub include
            Git repositories, collaborative work with forks and pull requests,
            GitHub Actions, automatic safety checks, and a ticket system with
            milestones.
          </p>
          <p className="text-xl lg:text-2xl font-medium mt-5 tracking-wider text-indigo-500">
            Users can choose to open a free account or select one of the
            multiple paid options. Recently, restrictions on private
            repositories were lifted, so you can now create unlimited projects
            that are visible only to selected users. The advantages of paid
            accounts are increased storage availability, the ability to include
            enterprise servers for authentication (single sign-on), and the
            additional support provided by GitHub.
          </p>
          <p className="text-xl lg:text-2xl font-medium mt-5 tracking-wider text-indigo-600">
            If you use GitHub for all your software projects, then you
            effectively have a cloud solution for your source code. You won’t
            have to search for project data on multiple computers or in old
            backups because you know you can find everything on GitHub.
          </p>
          <p className="text-xl lg:text-2xl font-medium mt-5 tracking-wider text-indigo-600">
            Then there’s{" "}
            <Link className="font-bold" href={"https://about.gitlab.com/"}>
              Gitlab
            </Link>
            , which is GitHub&apos;s direct competitor. Both platforms provide a
            variety of useful tools for software development, with the central
            element in both being a Git repository. A significant difference
            between the two is that GitLab maintains the source code of the
            application publicly on the internet under an open-source license.
          </p>
          <p className="text-xl lg:text-2xl font-medium mt-5 tracking-wider text-indigo-600">
            GitLab also gives you the option of running a GitLab server in your
            own data center, which can reduce costs. Users can install the
            GitLab platform on their own server to manage Git projects. They can
            then use the software to develop commercial or open-source projects
            without their code or business data falling into the wrong hands.
          </p>
          <p className="text-xl lg:text-2xl font-medium mt-5 tracking-wider text-indigo-800">
            If you’re taking a self-hosted GitLab approach, keep in mind that
            there are several components that must run on one or more servers.
            These include web applications based on Ruby on Rails, PostgreSQL
            database server, SSH server, Gitaly server, Redis database server,
            and Nginx web server.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
