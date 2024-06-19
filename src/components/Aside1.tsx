import { useId } from "react";

const Link = ({ topic, summary }: { topic: string; summary: string }) => {
  const labelId = useId()
  return (
    <li
      className="flex flex-col gap-100 pt-400 pb-[27px] first:pt-[0] last:pb-[0]"
      key={topic}
    >
      <h2 className="text-white-off font-extrabold text-xl leading-6 hover:text-orange-soft cursor-pointer">
        <a
          href=""
          id={labelId}
        >
          {topic}
        </a>
      </h2>
      <p className="font-body text-blue-grayish">{summary}</p>
    </li>
  );
};

export default function Aside1() {
  const labelId = useId();
  const links = [
    {
      topic: "Hydrogen VS Electric Cars",
      summary: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      topic: "The Downsides of AI Artistry",
      summary:
        "What are the possible adverse effects of on‑demand AI image generation?",
    },
    {
      topic: "Is VC Funding Drying Up?",
      summary:
        "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];
  return (
    <aside
      aria-labelledby={labelId}
      className="flex flex-col p-300 bg-blue-dark gap-[35px] desktop:gap-[34px] desktop:py-400"
    >
      <h1
        className="text-[32px] leading-[32px] desktop:text-[40px] desktop:leading-[40px] font-bold text-orange-soft"
        id={labelId}
      >
        New
      </h1>
      <ul className="flex flex-col divide-y-[1px] divide-[#5E607A]">
        {links.map((link) => (
          <Link key={link.topic} {...link}></Link>
        ))}
      </ul>
    </aside>
  );
}
