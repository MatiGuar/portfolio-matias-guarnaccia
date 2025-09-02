function Hero({ title, subtitle, image, backgroundImage, cta1, cta2 }) {
  return (
    <div
      className="relative flex items-center justify-center min-h-[calc(100vh-4rem)] text-center bg-cover bg-center">
        
      {/* Contenido */}
      <div className="relative z-10 max-w-2xl w-full px-6">
        {/* Imagen de perfil */}
        <div className="flex justify-center mb-6 pt-20 sm:pt-0">
          <img
            src={image}
            alt="Matías Guarnaccia"
            className="w-48 h-48 sm:w-72 sm:h-72 object-cover rounded-full shadow-lg border-4 border-cyan-400"
          />
        </div>

        {/* Título */}
        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>

        {/* Subtítulo */}
        <p className="mt-4 text-lg md:text-xl text-gray-200">{subtitle}</p>

        {/* Botones */}
        <div className="mt-6 flex justify-center gap-4">
          <a
            href={cta1.href}
            download={cta1.download}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg transition"
          >
            {cta1.label}
          </a>
          <a
            href={cta2.href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-800 rounded-xl shadow-lg transition"
          >
            {cta2.label}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
