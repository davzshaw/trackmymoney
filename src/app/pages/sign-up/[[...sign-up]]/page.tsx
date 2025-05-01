import { SignUp } from "@clerk/nextjs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registrarse | Track My Money",
  description: "Crea una cuenta en Track My Money para gestionar tus finanzas",
};

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-[#F40752] to-[#F9AB8F]">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-xl">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800">Crea tu cuenta</h1>
          <p className="text-sm text-gray-600">Empieza a controlar tus finanzas hoy mismo</p>
        </div>
        <SignUp 
          appearance={{
            elements: {
              formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-sm normal-case",
              footerAction: "text-sm text-blue-600",
              card: "rounded-xl shadow-none",
            }
          }}
          redirectUrl="/pages/dashboard"
        />
      </div>
    </div>
  );
}
