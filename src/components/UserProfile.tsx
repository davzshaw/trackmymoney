import { useUser } from "@clerk/nextjs";

export default function UserProfile() {
  const { isLoaded, user } = useUser();

  if (!isLoaded || !user) {
    return <div className="animate-pulse h-8 w-40 bg-gray-200 rounded"></div>; // Placeholder con efecto de carga
  }

  return (
    <div className="flex flex-col">
      <h2 className="text-xl font-medium  text-white">
        ¡Hola, {user.firstName || user.username || "Usuario"}!
      </h2>
      <p className="text-sm text-white">
        Bienvenido a tu panel de control de finanzas
      </p>
    </div>
  );
}
