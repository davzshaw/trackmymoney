import { SignIn } from "@clerk/nextjs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Iniciar Sesión | Track My Money",
  description: "Inicia sesión en tu cuenta de Track My Money",
};

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-[#58EFEC] via-[#E85C90] to-[#FFB9A0]">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-xl">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800">Bienvenido de nuevo</h1>
          <p className="text-sm text-gray-600">Inicia sesión para gestionar tus finanzas</p>
        </div>
        <SignIn 
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
