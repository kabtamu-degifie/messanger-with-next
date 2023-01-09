"use client";
import { getProviders, signIn } from "next-auth/react";
import React from "react";

type Props = {
  providers: Awaited<ReturnType<typeof getProviders>>;
};

function SigninComponent({ providers }: Props) {
  return (
    <div>
      {Object.values(providers!).map((provider) => (
        <div key={provider.name}>
          <button
            onClick={() =>
              signIn(provider.id, {
                callbackUrl: "localhost:3000",
              })
            }
            className="py-2 px-4 bg-blue-500 rounded-md text-white"
          >
            Signin with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default SigninComponent;
