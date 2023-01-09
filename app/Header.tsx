import Image from "next/image";
import Link from "next/link";
import React from "react";
import SignoutButton from "./SignoutButton";

function Header() {
  const session = true;
  if (session) {
    return (
      <header className="bg-white flex justify-between items-center p-10 z-50 sticky top-0 shadow-sm">
        <div className="flex space-x-2">
          <Image
            className="rounded-full mx-2 object-contain"
            src={"https://links.papareact.com/jne"}
            width={50}
            height={10}
            alt="profile picture"
          ></Image>
          <div>
            <p className="text-blue-400">Logged in as:</p>
            <p className="font-bold text-lg">Kabtamu Degifie</p>
          </div>
        </div>

        <SignoutButton />
      </header>
    );
  }
  return (
    <header className="bg-white flex justify-center items-center p-10 z-50 sticky top-0 shadow-lg">
      <div className="flex flex-col space-y-5 items-center">
        <div className="flex space-x-5">
          <Image
            src={"https://links.papareact.com/jne"}
            width={50}
            height={10}
            alt="Logo"
          ></Image>
          <p className="text-blue-400">Welcome to Eth Messenger</p>
        </div>
        <Link
          href="/auth/signin"
          className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded"
        >
          Sign In
        </Link>
      </div>
    </header>
  );
}

export default Header;
