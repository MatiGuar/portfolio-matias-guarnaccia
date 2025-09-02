export default function Marquee() {
  return (
    <div className="w-full bg-zinc-900 text-zinc-100 overflow-hidden">
      {/* Texto accesible para lectores de pantalla */}
      <span className="sr-only">
        Este sitio fue creado con React Js y Tailwind CSS
      </span>

      <div className="whitespace-nowrap inline-block animate-marquee">
        <span className="mx-8 text-sm sm:text-base md:text-lg font-medium">
          Este sitio fue creado con React Js y Tailwind CSS
        </span>
        <span className="mx-8 text-sm sm:text-base md:text-lg font-medium">
          Este sitio fue creado con React Js y Tailwind CSS
        </span>
      </div>
    </div>
  )
}
