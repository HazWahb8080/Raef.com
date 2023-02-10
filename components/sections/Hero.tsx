import React from "react";
import Button from "../shared/Button";

function Hero() {
  return (
    <main className="w-full pb-24 pt-6 items-center justify-center flex flex-col">
      <div className="items-center justify-center flex flex-col w-full">
        <h1 className="font-RNSCamelia text-9xl text-[#6E92D3]">Design Bold</h1>
        <h1 className="font-RNSCamelia text-9xl text-black">brands! </h1>
        <p className="font-RNSCamelia text-[#141414] w-1/2 mt-12 opacity-80">
          Just like the motto said, “Bold designs, build businesses”! This is
          exactly what we do, we build businesses into a more sustainable and
          engaging ones with the highest design work quality!
        </p>
        <Button>
          <p className="font-RNSCamelia text-white text-xl">CONTACT US!</p>
        </Button>
      </div>
    </main>
  );
}

export default Hero;
