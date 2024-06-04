import type { NextPage } from "next";

export type FooterContentType = {
  className?: string;
};

const FooterContent: NextPage<FooterContentType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1059px] flex flex-row items-start justify-between max-w-full gap-[20px] text-left text-base text-black font-playfair-display lg:flex-wrap ${className}`}
    >
      <div className="w-[141px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border text-8xs-2 text-gray-300">
        <div className="self-stretch flex flex-col items-start justify-start gap-[35px]">
          <div className="self-stretch flex flex-row items-start justify-end py-0 px-14">
            <div className="relative font-medium inline-block min-w-[9px] z-[8]">
              TM
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[42px] relative gap-[16px] text-base text-black">
            <div className="relative leading-[26px] capitalize font-medium whitespace-nowrap">
              help@frybix.com
            </div>
            <div className="flex-1 absolute !m-[0] bottom-[0px] left-[0px] leading-[26px] capitalize font-medium whitespace-nowrap">
              +1 234 456 678 89
            </div>
          </div>
        </div>
      </div>
      <div className="w-[82px] flex flex-col items-start justify-start gap-[16px]">
        <h2 className="m-0 self-stretch relative text-13xl leading-[42px] capitalize font-medium font-inherit text-center inline-block min-w-[82px] z-[8] mq450:text-lgi mq450:leading-[25px] mq1050:text-7xl mq1050:leading-[34px]">
          links
        </h2>
        <div className="flex flex-row items-start justify-start py-0 px-[3px]">
          <a className="[text-decoration:none] relative leading-[26px] capitalize font-medium text-[inherit] inline-block min-w-[47px] z-[8]">
            home
          </a>
        </div>
        <div className="flex flex-row items-start justify-start py-0 pr-[7px] pl-[3px]">
          <a className="[text-decoration:none] relative leading-[26px] capitalize font-medium text-[inherit] inline-block min-w-[72px] z-[8]">
            about us
          </a>
        </div>
        <div className="flex flex-row items-start justify-start py-0 pr-[7px] pl-[3px]">
          <a className="[text-decoration:none] relative leading-[26px] capitalize font-medium text-[inherit] inline-block min-w-[72px] z-[8]">
            bookings
          </a>
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-[3px]">
          <a className="[text-decoration:none] relative leading-[26px] capitalize font-medium text-[inherit] inline-block min-w-[34px] z-[8]">
            blog
          </a>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[16px]">
        <h2 className="m-0 relative text-13xl leading-[42px] capitalize font-medium font-inherit inline-block min-w-[83px] z-[8] mq450:text-lgi mq450:leading-[25px] mq1050:text-7xl mq1050:leading-[34px]">
          legal
        </h2>
        <a className="[text-decoration:none] relative leading-[26px] capitalize font-medium text-[inherit] inline-block min-w-[106px] z-[8]">
          terms of use
        </a>
        <a className="[text-decoration:none] relative leading-[26px] capitalize font-medium text-[inherit] inline-block min-w-[108px] z-[8]">
          privacy policy
        </a>
        <a className="[text-decoration:none] relative leading-[26px] capitalize font-medium text-[inherit] inline-block min-w-[102px] z-[8]">
          cookie policy
        </a>
      </div>
      <div className="flex flex-col items-start justify-start gap-[16px]">
        <h2 className="m-0 relative text-13xl leading-[42px] capitalize font-medium font-inherit inline-block min-w-[128px] z-[8] mq450:text-lgi mq450:leading-[25px] mq1050:text-7xl mq1050:leading-[34px]">
          product
        </h2>
        <a className="[text-decoration:none] relative leading-[26px] capitalize font-medium text-[inherit] inline-block min-w-[80px] z-[8]">
          take tour
        </a>
        <a className="[text-decoration:none] relative leading-[26px] capitalize font-medium text-[inherit] inline-block min-w-[72px] z-[8]">
          live chat
        </a>
        <a className="[text-decoration:none] relative leading-[26px] capitalize font-medium text-[inherit] inline-block min-w-[66px] z-[8]">
          reveiws
        </a>
      </div>
      <div className="w-[340px] flex flex-col items-start justify-start gap-[16px] max-w-full text-13xl">
        <h2 className="m-0 w-[173px] relative text-inherit leading-[42px] capitalize font-medium font-inherit inline-block z-[8] mq450:text-lgi mq450:leading-[25px] mq1050:text-7xl mq1050:leading-[34px]">
          Newsletter
        </h2>
        <a className="[text-decoration:none] relative text-base leading-[26px] capitalize font-medium text-[inherit] inline-block min-w-[122px] z-[8]">
          Stay up to date
        </a>
        <div className="self-stretch shadow-[-13px_13px_104.09px_rgba(161,_161,_161,_0.1)] rounded bg-white flex flex-row items-start justify-between py-2.5 pr-2.5 pl-6 box-border max-w-full gap-[20px] z-[8] mq450:flex-wrap">
          <div className="h-[81px] w-[340px] relative shadow-[-13px_13px_104.09px_rgba(161,_161,_161,_0.1)] rounded bg-white hidden max-w-full" />
          <div className="w-[83px] flex flex-col items-start justify-start pt-[18px] px-0 pb-0 box-border">
            <input
              className="[border:none] [outline:none] font-medium font-playfair-display text-base bg-[transparent] self-stretch h-[26px] relative leading-[26px] text-gray-200 text-left inline-block min-w-[50px] p-0 z-[1]"
              placeholder="Your Email"
              type="text"
            />
          </div>
          <button className="cursor-pointer [border:none] pt-[18px] px-10 pb-[17px] bg-black rounded flex flex-row items-start justify-start z-[1] hover:bg-darkslategray">
            <div className="h-[61px] w-40 relative rounded bg-black hidden" />
            <div className="relative text-base leading-[26px] capitalize font-medium font-playfair-display text-white text-left inline-block min-w-[80px] z-[1]">
              Subscribe
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterContent;
