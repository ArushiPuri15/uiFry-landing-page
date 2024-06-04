import type { NextPage } from "next";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: NextPage<GroupComponentType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[523.7px] left-[197.6px] w-[505.3px] h-[313.9px] z-[5] text-left text-xs-8 text-black font-playfair-display ${className}`}
    >
      <div className="absolute top-[237.3px] left-[392.8px] bg-black w-[1.3px] h-[71.2px] z-[1]" />
      <div className="absolute top-[237.3px] left-[318.3px] bg-black w-[1.3px] h-[71.2px] z-[2]" />
      <div className="absolute top-[9.8px] left-[208.3px] w-[297.5px] h-[302.6px]">
        <img
          className="absolute top-[228.6px] left-[64px] w-[56.4px] h-[57.1px] object-contain z-[1]"
          loading="lazy"
          alt=""
          src="/rectangle-5.svg"
        />
        <img
          className="absolute top-[242.5px] left-[127px] w-[41.8px] h-[41.8px] z-[1]"
          loading="lazy"
          alt=""
          src="/star-7-1.svg"
        />
        <img
          className="absolute top-[0px] left-[0px] rounded-lg w-full h-full object-contain z-[3]"
          alt=""
          src="/rectangle-3.svg"
        />
        <p className="m-0 absolute top-[216.37px] left-[72.8px] leading-[18.3px] capitalize font-semibold [transform:_rotate(-45.7deg)] [transform-origin:0_0] z-[4]">
          make the best financial decisions
        </p>
        <b className="absolute top-[243.8px] left-[201.5px] leading-[19px] capitalize font-semibold inline-block min-w-[86px] z-[6]">
          Uifry Premium
        </b>
        <a className="[text-decoration:none] absolute top-[263.4px] left-[201.5px] text-2xs-5 leading-[19px] capitalize font-medium text-[inherit] inline-block min-w-[49px] z-[6]">
          free trial
        </a>
      </div>
      <div className="absolute top-[calc(50%_+_93.89px)] left-[calc(50%_-_252.65px)] rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none bg-black w-[534.3px] h-[71.4px] [transform:_rotate(-28deg)] [transform-origin:0_0]" />
      <img
        className="absolute top-[calc(50%_-_127.35px)] left-[calc(50%_-_222.55px)] w-[440px] h-[257.6px] object-contain z-[1]"
        alt=""
        src="/group-35920@2x.png"
      />
      <img
        className="absolute top-[45.3px] left-[83.4px] w-[67.9px] h-[67.9px] object-contain z-[8]"
        loading="lazy"
        alt=""
        src="/star-8.svg"
      />
    </div>
  );
};

export default GroupComponent;
