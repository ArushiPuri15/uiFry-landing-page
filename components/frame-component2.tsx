import type { NextPage } from "next";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <header
      className={`w-[1198px] flex flex-row items-start justify-center max-w-full text-left text-8xs-2 text-black font-plus-jakarta-sans ${className}`}
    >
      <div className="w-[982px] flex flex-row items-start justify-between gap-[20px] max-w-full">
        <div className="w-[427px] flex flex-col items-start justify-start pt-[16.8px] px-0 pb-0 box-border max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start gap-[40px] max-w-full mq450:gap-[20px]">
            <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
              <b className="relative font-extrabold inline-block min-w-[9px] z-[8]">
                TM
              </b>
            </div>
            <nav className="m-0 flex-1 flex flex-row items-start justify-start gap-[24px] max-w-full text-left text-xl text-black font-playfair-display mq750:hidden">
              <a className="[text-decoration:none] relative leading-[26px] capitalize font-bold text-tomato-100 inline-block min-w-[60px] z-[8]">
                home
              </a>
              <a className="[text-decoration:none] flex-1 relative leading-[26px] capitalize font-medium text-[inherit] cursor-pointer whitespace-nowrap z-[8] hover:text-tomato-200">
                about us
              </a>
              <a className="[text-decoration:none] relative leading-[26px] capitalize font-medium text-[inherit] inline-block cursor-pointer min-w-[68px] z-[8]">
                pricing
              </a>
              <a className="[text-decoration:none] self-stretch flex-1 relative leading-[26px] capitalize font-medium text-[inherit] inline-block cursor-pointer min-w-[89px] z-[8] mq750:self-stretch mq750:h-auto mq750:cursor-pointer">
                features
              </a>
            </nav>
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-4 px-[46px] bg-black rounded flex flex-row items-start justify-start z-[8] hover:bg-darkslategray">
          <div className="h-[60px] w-[180px] relative rounded bg-black hidden" />
          <a className="[text-decoration:none] relative text-lg leading-[28px] capitalize font-medium font-playfair-display text-white text-left inline-block min-w-[88px] z-[1]">
            download
          </a>
        </button>
      </div>
    </header>
  );
};

export default FrameComponent2;
