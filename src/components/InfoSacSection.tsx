export default function InfoSacsection() {
  return (
    <article className="flex justify-center bg-slate-100 w-screen min-h-20 py-5 px-3">
      <div className="flex flex-row flex-wrap justify-center items-center text-center gap-3">
        <span className="text-zinc-950 text-lg">
          Precisa de ajuda com algum problema? Entre em contato com nosso SAC
          pelo número
        </span>
        <a
          href="tel:+55 (62) 900000000"
          aria-label="Ligar para o número"
          className="p-2 rounded-md bg-zinc-950 text-white hover:bg-zinc-800 transition-colors"
        >
          (62) 90000-0000
        </a>
      </div>
    </article>
  );
}
