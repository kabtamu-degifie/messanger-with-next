import React from "react";
import { getProviders } from "next-auth/react";
import SigninComponent from "./SigninComponent";

async function Signin() {
  const providers = await getProviders();
  return (
    <div className="flex h-screen items-center justify-center">
      <SigninComponent providers={providers} />
    </div>
  );
}

export default Signin;
