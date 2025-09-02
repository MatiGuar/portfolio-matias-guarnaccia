export default function Marquee() {
  return (
    <div className="w-full bg-gray-900 text-gray-100 overflow-hidden h-10 flex items-center">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="mx-8 font-medium">
          Este sitio fue creado con React Js y Tailwind CSS
        </span>
        <span className="mx-8 font-medium">
          Este sitio fue creado con React Js y Tailwind CSS
        </span>
        <span className="mx-8 font-medium">
          Este sitio fue creado con React Js y Tailwind CSS
        </span>
        <span className="mx-8 font-medium">
          Este sitio fue creado con React Js y Tailwind CSS
        </span>
      </div>
    </div>
  );
}
