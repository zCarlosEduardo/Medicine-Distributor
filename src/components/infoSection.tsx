export default function InfoSection() {
    return(
        <article className="bg-sky-700 w-screen h-60 flex justify-center items-center">
            <div className="flex gap-20">
                <div className="w-48 h-48 bg-slate-100 rounded-md flex flex-col justify-center items-center">
                    <h3 className="mb-5 text-2xl font-semibold text-zinc-950">Clientes</h3>
                    <span className="text-zinc-800 text-xl font-semibold">+200</span>
                </div>
                <div className="w-48 h-48 bg-slate-100 rounded-md flex flex-col justify-center items-center">
                    <h3 className="mb-5 text-2xl font-semibold text-zinc-950">Clientes</h3>
                    <span className="text-zinc-800 text-xl font-semibold">+200</span>
                </div>
                <div className="w-48 h-48 bg-slate-100 rounded-md flex flex-col justify-center items-center">
                    <h3 className="mb-5 text-2xl font-semibold text-zinc-950">Clientes</h3>
                    <span className="text-zinc-800 text-xl font-semibold">+200</span>
                </div>
            </div>
        </article>
    );
};