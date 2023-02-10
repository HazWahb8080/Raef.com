import Image from "next/image";
import React from "react";
import Button from "../shared/Button";

function ProjectsMain() {
  return (
    <main className="bg-[#6E92D3] items-center justify-between flex py-[120px] px-12">
      <div className="items-start justify-start flex flex-col">
        <h2 className="font-RNSCamelia text-6xl text-white">What do I do?</h2>
        <p className="mt-10 font-RNSCamelia text-white text-sm font-light leading-snug w-3/4">
          I’m a professional designer, I create brand identities, advertisings,
          typography and lettering, and other forms of design. I also designed
          this website from scratch :)
        </p>
        <p className="mt-10 font-RNSCamelia text-white text-xs font-light leading-snug w-3/4">
          Here I’ll talk a little bit about the project or piece showing on the
          slider. Very briefly, and quick.
        </p>
        <Button styles="bg-white mt-20">
          <p className="font-RNSCamelia text-black text-xl">GO TO PROJECTS!</p>
        </Button>
      </div>
      <div className="items-center justify-center flex flex-col px-4 h-full w-full">
        <div className="bg-[#C4E5FF] w-full h-[400px] rounded-lg z-30"></div>
        <span className="bg-black -mt-[390px] -mr-3 z-10 px-6 py-4 rounded-lg smooth w-full h-[400px]"></span>
        <div className="w-full items-center justify-center flex space-x-8 -mt-8 z-30">
          <span className="arrow__wrapper ">
            <Image height={35} width={35} src="/Union.png" alt="arrow" />
          </span>
          <span className="arrow__wrapper ">
            <Image
              className="rotate-[180deg]"
              height={35}
              width={35}
              src="/Union.png"
              alt="arrow"
            />
          </span>
        </div>
      </div>
    </main>
  );
}

export default ProjectsMain;
