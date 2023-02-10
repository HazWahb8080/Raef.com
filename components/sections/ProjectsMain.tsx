import Image from "next/image";
import React from "react";
import Button from "../shared/Button";

function ProjectsMain() {
  return (
    <main className="bg-[#6E92D3] items-center justify-between flex py-[120px] px-12">
      <div className="items-start justify-start flex flex-col">
        <h2 className="font-RNSCamelia text-6xl text-white">What do I do?</h2>
        <p className="mt-6 font-RNSCamelia text-white text-sm font-light leading-snug w-3/4">
          I’m a professional designer, I create brand identities, advertisings,
          typography and lettering, and other forms of design. I also designed
          this website from scratch :)
        </p>
        <p className="mt-6 font-RNSCamelia text-white text-xs font-light leading-snug w-3/4">
          Here I’ll talk a little bit about the project or piece showing on the
          slider. Very briefly, and quick.
        </p>
        <Button styles="bg-white">
          <p className="font-RNSCamelia text-black text-xl">GO TO PROJECTS!</p>
        </Button>
      </div>
      <div className="items-center justify-center flex flex-col  px-4 h-full w-full border border-black relative">
        <div className="bg-[#C4E5FF] w-full h-[300px] rounded-lg"></div>
        <div className="w-full items-center justify-center flex space-x-6">
          <span className="rounded-full bg-[#85B1FF] items-center justify-center flex p-2 ">
            <Image height={30} width={30} src="/Union.png" alt="arrow" />
          </span>
        </div>
      </div>
    </main>
  );
}

export default ProjectsMain;
