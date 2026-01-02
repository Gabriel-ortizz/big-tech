export default function Footer() {
  return (
    <footer
      id="contato"
      className="scroll-mt-24 bg-zinc-950 text-zinc-300 border-t border-zinc-800 mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Marca */}
        <div>
          <h2 className="text-2xl font-bold tracking-wide text-white">
            BigTech
          </h2>
          <p className="text-sm text-zinc-400 mt-3 leading-relaxed">
            Tecnologia e precisão no seu pulso. Relógios modernos,
            inteligentes e sofisticados para todos os estilos.
          </p>
        </div>

        {/* Navegação */}
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
            Navegação
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="/" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="/produtos" className="hover:text-white transition">
                Relógios
              </a>
            </li>
            <li>
              <a href="/sobre" className="hover:text-white transition">
                Sobre a BigTech
              </a>
            </li>
            <li>
              <a href="/#contato" className="hover:text-white transition">
                Contato
              </a>
            </li>
          </ul>
        </div>

        {/* Suporte */}
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
            Atendimento
          </h3>

          <a
            href="https://wa.me/5599999999999"
            target="_blank"
            className="inline-flex items-center justify-center bg-white text-zinc-900 px-5 py-2.5 rounded-md text-sm font-medium hover:bg-zinc-200 transition"
          >
            Falar no WhatsApp
          </a>

          <p className="text-sm text-zinc-400 mt-4">
            Segunda a sexta, das 9h às 18h
          </p>
        </div>

      </div>

      {/* Barra inferior */}
      <div className="border-t border-zinc-800 py-5 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} BigTech. Todos os direitos reservados.
      </div>
    </footer>
  );
}
