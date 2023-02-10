import Image from "next/image";
import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <main className="w-full items-center justify-between py-4 px-12 flex sticky top-0 z-50">
      <Link href="/">
        <Image
          src="/Logo.svg"
          height={50}
          width={50}
          alt="Reaf-Alaa-Logo"
          className="object-cover object-center"
        />
      </Link>

      <Image
        src="/menu-icon.svg"
        height={50}
        width={50}
        alt="menu-icon"
        className="object-cover object-center hover:rotate-12 smooth cursor-pointer"
      />
    </main>
  );
}

export default NavBar;
