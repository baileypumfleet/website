import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "About | Bailey Pumfleet" },
    {
      name: "description",
      content:
        "Bailey is the co-founder and CEO of Cal.com, scheduling infrastruture for absolutely everyone.",
    },
  ];
};

export default function Index() {
  return (
    <div className="overflow-y-scroll h-screen">
      <div className="mt-32 bg-gradient-to-tr from-slate-900 to-slate-800 border border-slate-700 w-10/12 lg:w-1/3 mx-auto rounded-lg p-4">
        <div>
          <h1 className="text-4xl font-heading">About me</h1>
          <p className="text-slate-500">A little about my journey so far</p>
        </div>
        <p className="mt-4 text-slate-300 text-sm">
          Early on in life, I realised I wanted to build things. I learned to
          code when I was 8 - it was a great medium for me to be able to build
          something from scratch by myself. A good few years went on, and I was
          starting web hosting companies, and over the next few years, I
          transitioned into building SaaS, which was what I truly loved.
        </p>
      </div>
      <div className="mt-4 bg-gradient-to-tr from-slate-900 to-slate-800 border border-slate-700 w-10/12 lg:w-1/3 mx-auto rounded-lg p-4">
        <div>
          <h1 className="text-4xl font-heading">Starting Cal.com</h1>
          <p className="text-slate-500">The early days of building</p>
        </div>
        <p className="mt-4 text-slate-300 text-sm">
          Whilst building various SaaS apps, I realised that scheduling was a
          problem that was not being solved well. In direct response to this
          challenge, I started Cal.com with my co-founder Peer when I was 17,
          originally as a side project.
          <br />
          <br />
          However, shortly after,{" "}
          <a
            href="https://cal.com/blog/seed"
            className="text-slate-100 hover:underline"
          >
            we raised a seed round
          </a>{" "}
          from some of the best investors in the world to turn this into a
          commercial open source company. We then started building a small team
          of incredible developers and very quickly started to work with some of
          the biggest brands in the world.
        </p>
      </div>
      <div className="mt-4 bg-gradient-to-tr from-slate-900 to-slate-800 border border-slate-700 w-10/12 lg:w-1/3 mx-auto rounded-lg p-4">
        <div>
          <h1 className="text-4xl font-heading">Rebrand &amp; Series A</h1>
          <p className="text-slate-500">Our biggest milestone</p>
        </div>
        <p className="mt-4 text-slate-300 text-sm">
          Cal.com (originally named Calendso) was growing beyond all
          expectations, and starting to make a real dent in the market share for
          personal scheduling links. Hence, we looked at a rebrand and acquired
          the domain name Cal.com, and announced the rebrand alongside{" "}
          <a
            href="https://cal.com/blog/series-a-memo"
            className="text-slate-100 hover:underline"
          >
            our Series A round.
          </a>
          <br />
          <br />
          We&apos;d become the leading open-source scheduling platform and were
          trailblazing the way for the future of scheduling. We have always had
          ambitious plans for Cal.com, and the Series A was a great way to help
          acheive this. To quote directly from our Series A memo:
          <blockquote className="mt-4 pl-4 text-slate-400 border-l border-slate-700">
            We want to build the scheduling infrastructure of the web and
            believe this can only be achieved by being the most open,
            transparent, accessible, extensible, and developer-friendly product
            out there.
            <br />
            <br />
            To connect one billion people by 2031, we’re looking to hire the
            best engineers, designers, salespeople, marketers, and community
            managers the world has to offer.
          </blockquote>
        </p>
      </div>
      <div className="mt-4 bg-gradient-to-tr from-slate-900 to-slate-800 border border-slate-700 w-10/12 lg:w-1/3 mx-auto rounded-lg p-4">
        <div>
          <h1 className="text-4xl font-heading">What now?</h1>
          <p className="text-slate-500">
            Where we&apos;re at after the Series A
          </p>
        </div>
        <p className="mt-4 text-slate-300 text-sm">
          Cal.com is now one of the leading open-source companies and is growing
          faster than ever. With our tremendous marketing, sales, and
          engineering efforts, we are rapidly capturing market share and on our
          way to become the scheduling infrastructure of the entire web.
        </p>
      </div>
      <div className="mb-32 mt-4 grid grid-cols-3 gap-4 w-10/12 lg:w-1/3 mx-auto">
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
        <a
          href="https://cal.com"
          className="w-full text-center text-slate-400 hover:text-slate-300 text-sm bg-gradient-to-tr from-slate-900 to-slate-800 border border-slate-700 mx-auto rounded-lg py-2 px-4"
        >
          Cal.com
        </a>
        <Link
          to="/consulting"
          className="w-full text-center text-slate-400 hover:text-slate-300 text-sm bg-gradient-to-tr from-slate-900 to-slate-800 border border-slate-700 mx-auto rounded-lg py-2 px-4"
        >
          Consulting
        </Link>
      </div>
    </div>
  );
}
