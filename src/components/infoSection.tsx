export default function InfoSection() {
  return (
    <article className="bg-slate-100 w-screen p-10 flex justify-center items-center border-b-2">
      <div className="flex justify-center items-center flex-row flex-wrap gap-14 max-sm:text-center max-md:text-start">
        {/* Informação 1 */}
        <div className="flex flex-wrap items-center justify-center max-sm:flex-col max-sm:gap-0 gap-3">
          <span className="text-4xl font-bold text-zinc-900">10K+</span>
          <span className="text-zinc-800 max-w-52">
            Diversos produtos em nosso estoque.
          </span>
        </div>

        {/* Informação 2 */}
        <div className="flex flex-wrap items-center justify-center max-sm:flex-col max-sm:gap-0 gap-3">
          <span className="text-4xl font-bold text-zinc-900">94%</span>
          <span className="text-zinc-800 max-w-52">
            Taxa de satisfação dos nossos clientes.
          </span>
        </div>

        {/* Informação 3 */}
        <div className="flex flex-wrap items-center justify-center max-sm:flex-col max-sm:gap-0 gap-3">
          <span className="text-4xl font-bold text-zinc-900">4.6</span>
          <span className="text-zinc-800 max-w-52">
            Avaliações médias dos clientes de 5,00!
          </span>
        </div>
      </div>
    </article>
  );
}
