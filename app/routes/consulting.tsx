import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Consulting | Bailey Pumfleet" },
    {
      name: "description",
      content:
        "Bailey is the co-founder and CEO of Cal.com, scheduling infrastruture for absolutely everyone.",
    },
  ];
};

export default function Index() {
  return (
    <div>
      <div className="bg-gradient-to-tr from-slate-900 to-slate-800 border border-slate-700 w-10/12 lg:w-1/3 mx-auto rounded-lg p-4">
        <div>
          <h1 className="text-4xl font-heading">Consulting</h1>
          <p className="text-slate-500">
            A little about how I can help your company
          </p>
        </div>
        <p className="mt-4 text-slate-300 text-sm">
          I have been doing some consulting work for a few years now, advising
          everything between startups and large enterprises. I typically advise
          on a wide range of topics, including:
          <ul className="mt-4 my-4 list-disc list-inside text-slate-400">
            <li>Engineering &amp; DevOps</li>
            <li>Security</li>
            <li>Compliance</li>
            <li>Product strategy &amp; design</li>
            <li>Business &amp; startups</li>
            <li>...and more</li>
          </ul>
          I am always happy to help out companies where I can, and I&apos;d love
          to explore where I can be helpful to you. If this is of interest,
          please reach out to{" "}
          <a
            href="mailto:bailey@pumfleet.co.uk"
            className="text-slate-100 hover:underline"
          >
            bailey@pumfleet.co.uk
          </a>
          .
          <br />
          <br />I am also available for speaking opportunities, and I have
          spoken at many events in the past, including:
          <ul className="mt-4 my-4 list-disc list-inside text-slate-400">
            <li>Collision</li>
            <li>Open Core Summit</li>
            <li>OSShack</li>
            <li>...and more</li>
          </ul>
          If you would like me to speak at your event, please drop me an email.
        </p>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-4 w-10/12 lg:w-1/3 mx-auto">
        <Link
          to="/"
          className="w-full text-center text-slate-300 hover:text-slate-100 text-sm bg-gradient-to-tr from-slate-800 to-slate-700 border border-slate-700 mx-auto rounded-lg py-2 px-4"
        >
          <svg
            className="w-4 h-4 inline mr-1 -mt-0.5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
          </svg>
          Go back
        </Link>
        <Link
          to="/about"
          className="w-full text-center text-slate-400 hover:text-slate-300 text-sm bg-gradient-to-tr from-slate-900 to-slate-800 border border-slate-700 mx-auto rounded-lg py-2 px-4"
        >
          About
        </Link>
        <a
          href="https://cal.com"
          className="w-full text-center text-slate-400 hover:text-slate-300 text-sm bg-gradient-to-tr from-slate-900 to-slate-800 border border-slate-700 mx-auto rounded-lg py-2 px-4"
        >
          Cal.com
        </a>
      </div>
    </div>
  );
}
