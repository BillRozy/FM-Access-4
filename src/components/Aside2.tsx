import retroImage from "../assets/images/image-retro-pcs.jpg";
import keyboardImage from "../assets/images/image-top-laptops.jpg";
import gamingImage from "../assets/images/image-gaming-growth.jpg";
import { useId } from "react";

const Link = ({
  index,
  topic,
  summary,
  imgPath,
  imgAlt
}: {
  index: number;
  topic: string;
  summary: string;
  imgPath: string;
  imgAlt: string
}) => {
  const sectionId = useId()
  return (
    <li className="flex gap-300 basis-[343px]">
      <img className="basis-[100px] max-w-[100px] grow-0 shrink-0" src={imgPath} alt={imgAlt}></img>
      <section className="flex flex-col gap-[12px] grow justify-between" aria-labelledby={sectionId}>
        <h2 className="text-red-soft text-[32px] leading-[32px] font-bold">0{index + 1}</h2>
        <a id={sectionId} className="font-extrabold text-lg leading-6 hover:text-red-soft" href="">{topic}</a>
        <p className="font-body text-blue-grayish-dark">{summary}</p>
      </section>
    </li>
  )
};

export default function Aside2() {
  const links = [
    {
      topic: "Reviving Retro PCs",
      summary: "What happens when old PCs are given modern upgrades?",
      imgPath: retroImage,
      imgAlt: "Retro computer on table"
    },
    {
      topic: "Top 10 Laptops of 2022",
      summary: "Our best picks for various needs and budgets.",
      imgPath: keyboardImage,
      imgAlt: "Keyboard of a laptop"
    },
    {
      topic: "The Growth of Gaming",
      summary: "How the pandemic has sparked fresh opportunities.",
      imgPath: gamingImage,
      imgAlt: "Hand with a gamepad in the air"
    },
  ];
  return (
    <aside className="desktop:mt-200" aria-label="Section with links to articles">
      <ol className="flex flex-wrap gap-x-[30px] gap-y-400 justify-between">
        {links.map((link, index) => <Link key={link.topic} {...link} index={index}></Link>)}
      </ol>
    </aside>
  );
}
