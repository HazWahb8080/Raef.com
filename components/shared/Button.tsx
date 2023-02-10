import React, { Fragment, ReactNode } from "react";
interface Props {
  children: ReactNode;
  styles?: string;
}
function Button({ styles, children }: Props) {
  return (
    <div className="group items-center justify-center flex flex-col smooth">
      <button
        className={` ${styles} bg-[#6E92D3] px-6 py-4 rounded-lg mt-12 z-30`}
      >
        {children}
      </button>
      <span className="bg-tarnsparent -mt-14 -mr-3 z-10 px-6 py-4 rounded-lg  group-hover:bg-black smooth">
        {children}
      </span>
    </div>
  );
}

export default Button;
