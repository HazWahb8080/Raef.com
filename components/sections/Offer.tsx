import React from "react";
import Button from "../shared/Button";

interface ItemProps {
  Main: string;
  desc: string;
  icon: string;
  link: string;
}

function Offer() {
  return (
    <main className="py-36 px-6 items-center justify-center flex flex-col">
      <div className="items-start justify-start flex flex-col">
        <h2 className="font-RNSCamelia text-6xl text-black text-center">
          what we offer?
        </h2>
        <p className="mt-5 font-RNSCamelia text-black/50 text-md font-light leading-snug text-center">
          These are the services we offer, you can contact us for <br /> further
          questions!
        </p>
      </div>
      <div className="w-full grid grid-cols-1 mt-12 lg:grid-cols-3">
        <OfferItem
          Main="Branding"
          desc="Offering your business a brand identity of the highest quality and all you have to do, is fill a form!"
          icon=""
          link=""
        />
        <OfferItem
          Main="Advertising"
          desc="Have a big announcement to make? Contact me for all advertising forms from social media designs to printables!"
          icon=""
          link=""
        />
        <OfferItem
          Main="Consulting"
          desc="If you’re having troubles pursuing your design career, let’s schedule a call and see what we can do about it."
          icon=""
          link=""
        />
      </div>
    </main>
  );
}

export default Offer;

function OfferItem({ Main, desc, icon, link }: ItemProps) {
  return (
    <div className="items-center justify-center flex flex-col py-4 px-2">
      <span className="bg-[#97C5FF] rounded-full w-[200px] h-[200px] z-30"></span>
      <span className="bg-black rounded-full w-[200px] h-[200px] z-5 -mt-[195px] -mr-[10px]"></span>
      <h2 className="font-RNSCamelia text-4xl text-black text-center mt-8">
        {Main}
      </h2>
      <p className="mt-8 font-RNSCamelia text-black/50 text-md font-light leading-snug text-center">
        {desc}
      </p>
      <Button styles="mt-8">
        <p className="font-RNSCamelia text-white text-lg">LEARN MORE!</p>
      </Button>
    </div>
  );
}
