import type { NextPage } from "next";
import { useEffect } from "react";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
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
    <div
      className={`self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[69px] box-border gap-[47.5px] max-w-full text-left text-lg text-black font-playfair-display lg:pb-[45px] lg:box-border mq750:gap-[24px] mq750:pb-[29px] mq750:box-border ${className}`}
    >
      <div className="w-[730.5px] flex flex-row items-start justify-end py-0 px-[46px] box-border max-w-full mq750:pl-[23px] mq750:pr-[23px] mq750:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
          <div className="w-[359px] flex flex-col items-start justify-start gap-[4px] max-w-full text-tomato-100">
            <div className="relative tracking-[0.16em] leading-[28px] uppercase font-medium inline-block min-w-[116px] z-[8]">
              features
            </div>
            <h1 className="m-0 self-stretch relative text-29xl leading-[48px] capitalize font-bold font-inherit text-black z-[8] mq450:text-10xl mq450:leading-[29px] mq1050:text-19xl mq1050:leading-[38px]">
              uifry premium
            </h1>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
            <div className="w-[239px] flex flex-row items-start justify-start py-0 px-8 box-border">
              <b className="flex-1 relative leading-[28px] capitalize font-semibold z-[8]">
                budgeting intervals
              </b>
            </div>
            <p className="m-0 self-stretch relative leading-[28px] capitalize font-medium text-gray-500 z-[8]">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
            <div className="w-[239px] flex flex-row items-start justify-start py-0 px-8 box-border">
              <b className="flex-1 relative leading-[28px] capitalize font-semibold z-[8]">
                budgeting intervals
              </b>
            </div>
            <p className="m-0 self-stretch relative leading-[28px] capitalize font-medium text-gray-500 z-[8]">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
            <div className="w-[239px] flex flex-row items-start justify-start py-0 px-8 box-border">
              <b className="flex-1 relative leading-[28px] capitalize font-semibold z-[8]">
                budgeting intervals
              </b>
            </div>
            <p className="m-0 self-stretch relative leading-[28px] capitalize font-medium text-gray-500 z-[8]">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[50px] max-w-full text-tomato-100 lg:flex-wrap mq750:gap-[25px]">
        <div className="w-[470px] flex flex-row items-start justify-start relative min-w-[470px] max-w-full lg:flex-1 mq750:min-w-full">
          <div className="h-[719.5px] w-[719.5px] absolute !m-[0] top-[-639.5px] left-[-129px]">
            <div className="absolute top-[116.7px] left-[99px] w-[393px] h-[285.1px] flex items-center justify-center">
              <img
                className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.724)]"
                loading="lazy"
                alt=""
                src="/group-35930.svg"
              />
            </div>
            <img
              className="absolute top-[127.7px] left-[0px] w-[67.9px] h-[67.9px] object-contain z-[8]"
              alt=""
              src="/star-2.svg"
            />
            <img
              className="absolute top-[242px] left-[684px] w-6 h-6 overflow-hidden z-[8]"
              alt=""
              src="/star05.svg"
            />
            <img
              className="absolute top-[370px] left-[684px] w-6 h-6 overflow-hidden z-[8]"
              alt=""
              src="/cube02.svg"
            />
            <img
              className="absolute top-[498px] left-[684px] w-6 h-6 overflow-hidden z-[8]"
              alt=""
              src="/cube04.svg"
            />
            <div className="absolute top-[0px] left-[0px] w-full h-full z-[9] flex items-center justify-center">
              <img
                className="w-full h-full z-[9] object-contain absolute left-[0px] top-[20px] [transform:scale(1.057)]"
                alt=""
                src="/group-35933@2x.png"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-[198px] px-0 pb-0 box-border max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[42px] max-w-full mq750:gap-[21px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                <div className="relative tracking-[0.16em] leading-[28px] uppercase font-medium z-[8]">
                  advatnages
                </div>
                <h1 className="m-0 self-stretch h-12 text-29xl leading-[48px] capitalize font-bold font-inherit text-black inline-block z-[8] mq450:text-10xl mq450:leading-[29px] mq1050:text-19xl mq1050:leading-[38px]">
                  why choose Uifry?
                </h1>
              </div>
              <div className="w-[399px] flex flex-row items-start justify-start py-0 px-[63px] box-border max-w-full text-9xl text-black mq450:pl-5 mq450:pr-5 mq450:box-border">
                <h3 className="m-0 flex-1 relative text-inherit leading-[28px] capitalize font-semibold font-inherit z-[8] mq450:text-3xl mq450:leading-[22px]">
                  clever notifications
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[719.5px] flex-1 relative min-w-[467px] max-w-full text-gray-500 mq750:min-w-full">
          <div className="absolute top-[324.2px] left-[121px] w-[327px] h-[237.3px] flex items-center justify-center">
            <img
              className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.869)]"
              alt=""
              src="/group-35931.svg"
            />
          </div>
          <p className="m-0 absolute bottom-[198.5px] left-[-520px] leading-[28px] capitalize font-medium inline-block w-[535px] z-[8]">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
          <div
            className="absolute top-[0px] left-[0px] w-full h-full [&.animate]:animate-[2s_ease_0s_1_normal_forwards_fade-in] opacity-[0] z-[10] flex items-center justify-center"
            data-animate-on-scroll
          >
            <img
              className="w-full h-full [&.animate]:animate-[2s_ease_0s_1_normal_forwards_fade-in] z-[10] object-contain absolute left-[0px] top-[20px] [transform:scale(1.056)]"
              alt=""
              src="/group-35935@2x.png"
              data-animate-on-scroll
            />
          </div>
          <div className="absolute top-[340.2px] left-[347px] shadow-[4px_4px_40px_rgba(0,_0,_0,_0.1)] rounded-lg bg-white w-[201px] flex flex-row items-start justify-start pt-[10.5px] px-2.5 pb-[10.4px] box-border gap-[12.3px] z-[11] text-mini-8 text-gray-400 font-nunito-sans">
            <div className="h-[61.5px] w-[201px] relative shadow-[4px_4px_40px_rgba(0,_0,_0,_0.1)] rounded-lg bg-white hidden" />
            <img
              className="h-[40.6px] w-[40.6px] relative rounded-[12.29px] object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/rectangle-13@2x.png"
            />
            <div className="w-[122.7px] flex flex-col items-start justify-start pt-[1.8px] px-0 pb-0 box-border">
              <div className="self-stretch flex flex-col items-start justify-start gap-[5.9px]">
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                  <div className="flex flex-col items-start justify-start pt-[3.7px] px-0 pb-0">
                    <b className="relative tracking-[0.61px] leading-[15px] font-bold inline-block min-w-[62px] whitespace-nowrap z-[1]">
                      $560.00
                    </b>
                  </div>
                  <div className="relative text-5xs-4 leading-[8px] text-red text-center inline-block min-w-[28px] z-[1]">
                    On Hold
                  </div>
                </div>
                <div className="relative text-4xs-6 tracking-[0.31px] leading-[9px] text-gray-100 inline-block min-w-[49px] z-[1]">
                  From Adom
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[-639.5px] left-[-647px] w-full h-full flex flex-col items-end justify-start pt-[224.7px] px-[199px] pb-[225px] box-border text-11xs text-white font-plus-jakarta-sans mq750:pl-[99px] mq750:pr-[99px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
            <img
              className="w-[67.9px] h-[67.9px] absolute !m-[0] top-[7.7px] right-[68.6px] object-contain z-[8]"
              alt=""
              src="/star-2.svg"
            />
            <div
              className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full max-h-full [&.animate]:animate-[2s_ease_0s_1_normal_forwards_fade-in] opacity-[0] z-[11] flex items-center justify-center"
              data-animate-on-scroll
            >
              <img
                className="w-full h-full overflow-hidden [&.animate]:animate-[2s_ease_0s_1_normal_forwards_fade-in] z-[11] object-contain absolute left-[0px] top-[20px] [transform:scale(1.057)]"
                alt=""
                src="/group-35937@2x.png"
                data-animate-on-scroll
              />
            </div>
            <div className="w-[261.1px] flex flex-row items-start justify-start relative">
              <img
                className="h-[470.8px] w-[484.4px] absolute !m-[0] bottom-[-255.5px] left-[-113px] object-contain"
                alt=""
                src="/group-35932@2x.png"
              />
              <div
                className="flex-1 [backdrop-filter:blur(27.89px)] rounded-2xl bg-black flex flex-col items-start justify-start pt-[15.1px] px-[17px] pb-[14.5px] gap-[70.3px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_fade-in] opacity-[0] z-[12] mq450:gap-[35px]"
                data-animate-on-scroll
              >
                <div className="w-[260.1px] h-[159.3px] relative rounded-2xl bg-black hidden" />
                <div className="self-stretch flex flex-row items-end justify-between gap-[20px]">
                  <div className="flex flex-row items-start justify-start gap-[1.1px]">
                    <img
                      className="h-[16.7px] w-[50.7px] relative object-cover z-[13]"
                      loading="lazy"
                      alt=""
                      src="/group@2x.png"
                    />
                    <div className="flex flex-col items-start justify-start pt-[4.9px] px-0 pb-0">
                      <b className="relative font-extrabold inline-block min-w-[4.3px] z-[13]">
                        TM
                      </b>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px">
                    <img
                      className="w-[44.3px] h-[14.6px] relative z-[13]"
                      loading="lazy"
                      alt=""
                      src="/credit-cardvisa-typewhite.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[12.7px] text-smi-7 font-dm-sans">
                  <div className="relative tracking-[0.08em] font-medium shrink-0 [debug_commit:bf4bc93] z-[13]">
                    0000 8888 2222 3333
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[5.1px] shrink-0 [debug_commit:bf4bc93] text-8xs-8">
                    <div className="flex flex-col items-start justify-start pt-[4.3px] px-0 pb-0">
                      <div className="relative tracking-[0.08em] leading-[5px] inline-block min-w-[30px] z-[13]">
                        VALID THRU
                      </div>
                    </div>
                    <div className="relative text-2xs-4 tracking-[0.08em] inline-block min-w-[32px] z-[13]">
                      07/24
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
