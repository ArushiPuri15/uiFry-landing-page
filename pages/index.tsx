import type { NextPage } from "next";
import { useEffect } from "react";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import Frame from "../components/frame";
import GroupComponent from "../components/group-component";
import FooterContent from "../components/footer-content";

const AppLandingPage: NextPage = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className="w-full relative rounded-[50px] bg-white overflow-hidden flex flex-col items-start justify-start pt-10 pb-[41.3px] pr-[25px] pl-[175px] box-border gap-[115px] tracking-[normal] leading-[normal] text-left text-lg text-black font-playfair-display mq750:gap-[57px] mq750:pl-[87px] mq750:box-border mq450:gap-[29px] mq450:pl-5 mq450:box-border">
      <FrameComponent2 />
      <div className="w-[638px] flex flex-row items-start justify-start relative max-w-full text-[106.4px]">
        <b className="h-[107px] w-[89px] absolute !m-[0] bottom-[62.02px] left-[-34px] leading-[106.38px] capitalize inline-block [transform:_rotate(-28deg)] [transform-origin:0_0] z-[6] mq450:text-13xl mq450:leading-[43px] mq1050:text-[53px] mq1050:leading-[64px]">
          a
        </b>
        <FrameComponent1 />
      </div>
      <FrameComponent />
      <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[179.7px] pr-0 pl-[432px] box-border max-w-full text-9xl mq750:pl-[108px] mq750:box-border mq450:pb-[117px] mq450:box-border mq1050:pl-[216px] mq1050:box-border">
        <div className="w-[562px] flex flex-col items-start justify-start gap-[33px] max-w-full mq750:gap-[16px]">
          <div className="w-[388px] flex flex-row items-start justify-start py-0 px-[63px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
            <b className="flex-1 relative leading-[28px] capitalize font-semibold z-[8] mq450:text-3xl mq450:leading-[22px]">
              fully customizable
            </b>
          </div>
          <p className="m-0 self-stretch relative text-lg leading-[28px] capitalize font-medium text-gray-500 z-[8]">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[129px] pr-0 pl-[168px] box-border max-w-full mq750:pl-[42px] mq750:box-border mq450:pb-[55px] mq450:box-border mq1050:pl-[84px] mq1050:pb-[84px] mq1050:box-border">
        <div className="w-[772px] flex flex-col items-start justify-start gap-[116px] max-w-full mq450:gap-[29px] mq1050:gap-[58px]">
          <div className="w-[455px] flex flex-col items-end justify-start pt-0 px-0 pb-[9px] box-border gap-[4px] max-w-full text-center">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-6">
              <div className="relative tracking-[0.16em] leading-[28px] uppercase font-medium z-[8]">
                testimonial
              </div>
            </div>
            <h1 className="m-0 self-stretch relative text-29xl leading-[48px] capitalize font-bold font-inherit z-[8] mq450:text-10xl mq450:leading-[29px] mq1050:text-19xl mq1050:leading-[38px]">
              what our users say about us?
            </h1>
          </div>
          <div className="self-stretch flex flex-row items-start justify-end max-w-full text-9xl">
            <div className="w-[442px] flex flex-col items-start justify-start gap-[24px] max-w-full">
              <h3 className="m-0 self-stretch relative text-inherit leading-[28px] capitalize font-semibold font-inherit z-[8] mq450:text-3xl mq450:leading-[22px]">
                the best financial accounting app ever!
              </h3>
              <blockquote className="m-0 self-stretch relative text-lg leading-[28px] capitalize font-medium text-gray-500 z-[8]">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                ac dolor neque lorem sapien, suspendisse aliquam.”
              </blockquote>
            </div>
          </div>
          <div className="w-[757px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <b className="relative leading-[28px] capitalize font-semibold inline-block min-w-[97px] z-[8]">
              nick jonas
            </b>
          </div>
        </div>
      </div>
      <div className="w-[1090px] flex flex-col items-start justify-start pt-0 px-0 pb-10 box-border gap-[40px] max-w-full text-tomato-100 mq750:gap-[20px]">
        <div className="w-[497px] flex flex-col items-start justify-start gap-[4px] shrink-0 [debug_commit:bf4bc93] max-w-full">
          <a className="[text-decoration:none] relative tracking-[0.16em] leading-[28px] uppercase font-medium text-[inherit] inline-block min-w-[44px] z-[8]">
            faq
          </a>
          <h1 className="m-0 self-stretch relative text-29xl leading-[48px] capitalize font-bold font-inherit text-black z-[8] mq450:text-10xl mq450:leading-[29px] mq1050:text-19xl mq1050:leading-[38px]">
            Frequently asked questions
          </h1>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] shrink-0 [debug_commit:bf4bc93] max-w-full z-[8] text-9xl text-white">
          <div className="flex-1 flex flex-col items-start justify-start gap-[20px] min-w-[348px] max-w-full mq750:min-w-full">
            <div className="self-stretch rounded-lg bg-tomato-100 flex flex-col items-start justify-start pt-[31px] pb-[30px] pr-[30px] pl-[31px] box-border gap-[8px] max-w-full">
              <div className="w-[535px] h-[181px] relative rounded-lg bg-tomato-100 hidden max-w-full" />
              <h3 className="m-0 self-stretch relative text-inherit leading-[28px] capitalize font-semibold font-inherit z-[1] mq450:text-3xl mq450:leading-[22px]">
                the best financial accounting app ever!
              </h3>
              <p className="m-0 self-stretch relative text-lg leading-[28px] capitalize font-medium text-justify z-[1]">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
            <div className="self-stretch rounded-lg bg-white flex flex-col items-start justify-start pt-[31px] pb-[30px] pr-[30px] pl-[31px] box-border gap-[8px] max-w-full text-black">
              <div className="w-[535px] h-[181px] relative rounded-lg bg-white hidden max-w-full" />
              <h3 className="m-0 self-stretch relative text-inherit leading-[28px] capitalize font-semibold font-inherit z-[1] mq450:text-3xl mq450:leading-[22px]">
                the best financial accounting app ever!
              </h3>
              <p className="m-0 self-stretch relative text-lg leading-[28px] capitalize font-medium text-gray-500 text-justify z-[1]">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
            <div className="self-stretch rounded-lg bg-tomato-100 flex flex-col items-start justify-start pt-[31px] pb-[30px] pr-[30px] pl-[31px] box-border gap-[8px] max-w-full">
              <div className="w-[535px] h-[181px] relative rounded-lg bg-tomato-100 hidden max-w-full" />
              <h3 className="m-0 self-stretch relative text-inherit leading-[28px] capitalize font-semibold font-inherit z-[1] mq450:text-3xl mq450:leading-[22px]">
                the best financial accounting app ever!
              </h3>
              <p className="m-0 self-stretch relative text-lg leading-[28px] capitalize font-medium text-justify z-[1]">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[20px] min-w-[348px] max-w-full text-black mq750:min-w-full">
            <div className="self-stretch rounded-lg bg-white flex flex-col items-start justify-start pt-[31px] pb-[30px] pr-[30px] pl-[31px] box-border gap-[8px] max-w-full">
              <div className="w-[535px] h-[181px] relative rounded-lg bg-white hidden max-w-full" />
              <h3 className="m-0 self-stretch relative text-inherit leading-[28px] capitalize font-semibold font-inherit z-[1] mq450:text-3xl mq450:leading-[22px]">
                the best financial accounting app ever!
              </h3>
              <p className="m-0 self-stretch relative text-lg leading-[28px] capitalize font-medium text-gray-500 text-justify z-[1]">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
            <div className="self-stretch rounded-lg bg-tomato-100 flex flex-col items-start justify-start pt-[31px] pb-[30px] pr-[30px] pl-[31px] box-border gap-[8px] max-w-full text-white">
              <div className="w-[535px] h-[181px] relative rounded-lg bg-tomato-100 hidden max-w-full" />
              <h3 className="m-0 self-stretch relative text-inherit leading-[28px] capitalize font-semibold font-inherit z-[1] mq450:text-3xl mq450:leading-[22px]">
                the best financial accounting app ever!
              </h3>
              <p className="m-0 self-stretch relative text-lg leading-[28px] capitalize font-medium text-justify z-[1]">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
            <div className="self-stretch rounded-lg bg-white flex flex-col items-start justify-start pt-[31px] pb-[30px] pr-[30px] pl-[31px] box-border gap-[8px] max-w-full">
              <div className="w-[535px] h-[181px] relative rounded-lg bg-white hidden max-w-full" />
              <h3 className="m-0 self-stretch relative text-inherit leading-[28px] capitalize font-semibold font-inherit z-[1] mq450:text-3xl mq450:leading-[22px]">
                the best financial accounting app ever!
              </h3>
              <p className="m-0 self-stretch relative text-lg leading-[28px] capitalize font-medium text-gray-500 text-justify z-[1]">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1090px] flex flex-row items-start justify-start pt-0 px-0 pb-10 box-border max-w-full">
        <Frame />
      </div>
      <main className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
        <div className="absolute top-[1123.7px] left-[1271px] w-[327px] h-[237.3px] flex items-center justify-center">
          <img
            className="w-full h-full object-contain absolute left-[-52px] top-[0px] [transform:scale(1.869)]"
            loading="lazy"
            alt=""
            src="/group-35897.svg"
          />
        </div>
        <div className="absolute top-[4689.7px] left-[34px] w-[327px] h-[237.3px] flex items-center justify-center">
          <img
            className="w-full h-full object-contain absolute left-[35px] top-[0px] [transform:scale(1.869)]"
            alt=""
            src="/group-35897.svg"
          />
        </div>
        <img
          className="absolute top-[761px] left-[454px] rounded-lg w-64 h-[71px]"
          alt=""
          src="/rectangle-4.svg"
        />
        <GroupComponent />
        <div className="absolute top-[131px] left-[915px] w-[457.2px] h-[717.1px] flex items-center justify-center">
          <img
            className="w-full h-full object-contain absolute left-[3px] top-[24px] [transform:scale(1.24)]"
            loading="lazy"
            alt=""
            src="/group-35899.svg"
          />
        </div>
        <div className="absolute top-[152px] left-[341px] w-[317px] h-[230px] flex items-center justify-center">
          <img
            className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.87)]"
            loading="lazy"
            alt=""
            src="/group-35896.svg"
          />
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-[1440px] h-[8220px] object-cover mix-blend-soft-light z-[7]"
          alt=""
          src="/rectangle@2x.png"
        />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[462px] left-[395px] w-[29px] h-[29px] z-[8] flex items-center justify-center">
          <img
            className="cursor-pointer [border:none] bg-[transparent] w-full h-full z-[8]"
            alt=""
            loading="lazy"
            src="/group-3.svg"
          />
        </button>
        <img
          className="absolute top-[116px] left-[46px] w-[67.9px] h-[67.9px] object-contain z-[8]"
          loading="lazy"
          alt=""
          src="/star-8.svg"
        />
        <div className="absolute top-[188px] left-[823px] w-[442px] h-[645px]">
          <div className="absolute top-[0px] left-[0px] rounded-lg w-full h-full flex items-center justify-center">
            <img
              className="w-full h-full object-contain absolute left-[88px] top-[-2px] [transform:scale(1.401)]"
              alt=""
              src="/frame-1@2x.png"
            />
          </div>
          <img
            className="absolute top-[5px] left-[70px] w-[371.8px] h-[552.4px] object-contain [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] z-[9]"
            alt=""
            src="/iphone13profront@2x.png"
            data-animate-on-scroll
          />
        </div>
        <img
          className="absolute top-[116px] left-[771px] w-[371.3px] h-[551.6px] object-contain z-[10] hover:animate-[2s_ease_0s_1_normal_forwards_scale-up] hover:opacity-[1]"
          alt=""
          src="/iphone13profront-1@2x.png"
        />
        <img
          className="absolute top-[57.9px] left-[215.4px] w-[65.8px] h-[29.3px] z-[8]"
          loading="lazy"
          alt=""
          src="/vector-1.svg"
        />
        <img
          className="absolute top-[52.8px] left-[175px] w-[34px] h-[34px] overflow-hidden z-[8]"
          loading="lazy"
          alt=""
          src="/frame.svg"
        />
        <img
          className="absolute top-[3534.7px] left-[823px] w-10 h-10 object-contain z-[8]"
          loading="lazy"
          alt=""
          src="/group-28@2x.png"
        />
        <div className="absolute top-[3539.7px] left-[871px] w-36 h-[30px] opacity-[0.5] z-[8]">
          <img
            className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_72px)] w-[30px] h-[30px] object-cover"
            loading="lazy"
            alt=""
            src="/group-27@2x.png"
          />
          <img
            className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_34px)] w-[30px] h-[30px] object-cover"
            loading="lazy"
            alt=""
            src="/group-29@2x.png"
          />
          <img
            className="absolute top-[calc(50%_-_15px)] left-[calc(50%_+_4px)] w-[30px] h-[30px] object-cover"
            loading="lazy"
            alt=""
            src="/group-30@2x.png"
          />
          <img
            className="absolute top-[calc(50%_-_15px)] left-[calc(50%_+_42px)] w-[30px] h-[30px] object-cover"
            loading="lazy"
            alt=""
            src="/group-31@2x.png"
          />
        </div>
        <div className="absolute top-[3089.7px] left-[80px] w-[713px] h-[713px]">
          <div className="absolute top-[249px] left-[117px] w-[327px] h-[237.3px] flex items-center justify-center">
            <img
              className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.869)]"
              loading="lazy"
              alt=""
              src="/group-1000002356-1.svg"
            />
          </div>
          <div className="absolute top-[0px] left-[0px] w-full h-full flex items-center justify-center">
            <img
              className="w-full h-full object-contain absolute left-[11px] top-[6px] [transform:scale(1.03)]"
              alt=""
              src="/group-1000002332.svg"
            />
          </div>
        </div>
        <img
          className="absolute top-[1659.7px] left-[1370px] w-16 h-16 z-[8]"
          loading="lazy"
          alt=""
          src="/star-5.svg"
        />
        <img
          className="absolute top-[2861.7px] left-[1136px] w-16 h-16 z-[8]"
          loading="lazy"
          alt=""
          src="/star-5.svg"
        />
        <img
          className="absolute top-[3941.7px] left-[779px] w-16 h-16 z-[8]"
          loading="lazy"
          alt=""
          src="/star-5.svg"
        />
        <img
          className="absolute top-[4689.7px] left-[1323px] w-16 h-16 z-[8]"
          loading="lazy"
          alt=""
          src="/star-5.svg"
        />
        <img
          className="absolute top-[3702.7px] left-[48px] w-[67.9px] h-[67.9px] object-contain z-[10]"
          alt=""
          src="/star-2.svg"
        />
        <img
          className="absolute top-[4900.7px] left-[48px] w-[67.9px] h-[67.9px] object-contain z-[8]"
          loading="lazy"
          alt=""
          src="/star-2.svg"
        />
        <img
          className="absolute top-[1892.5px] left-[175px] w-12 h-12 z-[8]"
          loading="lazy"
          alt=""
          src="/group-35899-1.svg"
        />
        <img
          className="absolute top-[2476px] left-[730px] w-12 h-12 z-[8]"
          loading="lazy"
          alt=""
          src="/group-35899-2.svg"
        />
        <img
          className="absolute top-[5439.7px] left-[175px] w-[34px] h-[34px] overflow-hidden z-[8]"
          loading="lazy"
          alt=""
          src="/frame.svg"
        />
        <img
          className="absolute top-[5444.9px] left-[215.4px] w-[65.8px] h-[29.3px] z-[8]"
          loading="lazy"
          alt=""
          src="/vector-1.svg"
        />
        <img
          className="absolute top-[5490.7px] left-[175px] w-6 h-6 overflow-hidden z-[8]"
          loading="lazy"
          alt=""
          src="/frame-2.svg"
        />
        <img
          className="absolute top-[5532.7px] left-[175px] w-6 h-6 overflow-hidden z-[8]"
          loading="lazy"
          alt=""
          src="/frame-3.svg"
        />
      </main>
      <div className="w-[1091px] flex flex-col items-end justify-start gap-[92px] max-w-full lg:gap-[46px] mq750:gap-[23px]">
        <FooterContent />
        <footer className="self-stretch flex flex-row items-start justify-end py-0 pr-px pl-0 box-border max-w-full text-left text-base text-black font-playfair-display">
          <div className="flex-1 box-border overflow-hidden flex flex-row items-start justify-center pt-[37px] pb-[39px] pr-5 pl-6 max-w-full z-[8] border-t-[1px] border-solid border-gray-600">
            <div className="w-[356px] relative leading-[26px] capitalize font-medium inline-block max-w-full">
              Copyright 2022 uifry.com all rights reserved
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AppLandingPage;
