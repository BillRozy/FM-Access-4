import { useId } from "react";
import desktopImg from "../assets/images/image-web-3-desktop.jpg";
import mobileImg from "../assets/images/image-web-3-mobile.jpg";

export default function Main() {
  const sectionLabelId = useId();
  return (
    <main aria-labelledby={sectionLabelId} className="flex gap-200 tablet:gap-x-[30px] tablet:gap-y-[28px] flex-wrap max-desktop:-mt-[28px]">
      <picture >
        <source media="(min-width:500px)" srcSet={desktopImg}></source>
        <img
          className="shrink-0 grow"
          src={mobileImg}
          alt="Abstract picture giving feel of web 3 technology"
        ></img>
      </picture>

      <h1
        id={sectionLabelId}
        className="mt-100 desktop:mt-[0] text-[40px] leading-[40px] font-extrabold grow shrink basis-[350px] desktop:text-[56px] desktop:leading-[56px] desktop:py-[7px]"
      >
        The Bright Future of Web 3.0?
      </h1>
      <div className="flex flex-col gap-300 grow shrink basis-[350px] justify-between">
        <p className="font-body text-blue-grayish-dark">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button className="text-sm leading-6 max-w-[185px] tracking-[4.38px] uppercase font-bold py-[12px] px-[31px] bg-red-soft cursor-pointer hover:bg-blue-dark hover:text-white-off">
          Read More
        </button>
      </div>
    </main>
  );
}
