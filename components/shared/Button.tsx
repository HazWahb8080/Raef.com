import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
  styles?: string;
}
function Button({ styles, children }: Props) {
  return (
    <button className={` ${styles} bg-[#6E92D3] px-6 py-4 rounded-lg mt-12`}>
      {children}
    </button>
  );
}

export default Button;
