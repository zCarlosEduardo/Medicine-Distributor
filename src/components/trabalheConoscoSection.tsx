export default function TrabalheConoscoSection() {
  return (
    <article className="max-md:min-h-screen lg:h-screen w-screen flex text-center justify-center items-center p-10 max-lg:px-3">
      <div className="bg-white w-full h-full rounded-lg shadow-2xl flex flex-col ring-2 ring-slate-500/50">
        <div className="bg-slate-700 rounded-t-lg flex justify-center text-center p-2">
          <h2 className="text-zinc-100 text-2xl">Envie o seu currículo</h2>
        </div>
        <div className="flex-1 flex flex-col lg:flex-row rounded-b-lg">
          {/* Texto Informativo */}
          <div className="bg-blue-50 flex-1 flex justify-around max-lg:py-5 max-sm:px-2 items-center">
            <div className="flex flex-col text-center space-y-8 bg-white px-10 py-5 max-sm:px-2 rounded-md shadow-md">
              <h3 className="text-2xl text-blue-950">
                Junte-se à nossa equipe!
              </h3>
              <p className="text-lg max-w-sm max-md:max-w-sm">
                Estamos sempre em busca de talentos apaixonados e dedicados para
                se juntar à nossa equipe. Se você está interessado em fazer
                parte do nosso time, envie seu currículo preenchendo o nome
                completo, telefone, e-mail e anexando o arquivo do currículo no
                formulário. Agradecemos seu interesse e estamos ansiosos para
                conhecer você!
              </p>
            </div>
          </div>
          {/* Formulario */}
          <div className="bg-blue-500 flex-1 flex justify-around max-lg:py-5 items-center">
            <div className="flex flex-col text-center space-y-8 bg-white  px-10 py-5 max-sm:px-0 rounded-md shadow-md">
              <h3 className="text-2xl text-blue-950">Envie seu CV</h3>
              <div className="flex flex-col border-y-2 p-4">
                <form method="post" className="flex flex-col gap-6 ">
                  <div className="py-3 px-2 rounded-md w-max bg-slate-50 border-2 peer-focus:shadow-md ">
                    <div className="relative h-11 min-w-[300px]">
                      <input
                        placeholder="Maria Carolina"
                        aria-label="Coloque o seu Nome completo"
                        className="peer h-full w-full border-b border-gray-300 bg-transparent
                       pt-4 pb-1.5 font-sans text-sm font-normal text-gray-700 outline outline-0
                        transition-all placeholder-shown:border-gray-200 focus:border-gray-600 focus:outline-0
                        disabled:border-0 disabled:bg-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                      />
                      <label
                        className="after:content[''] pointer-events-none absolute left-0
                      -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[14px]
                       font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5
                        after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-600
                        after:transition-transform after:duration-300 peer-placeholder-shown:text-sm
                          peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-gray-500 
                          peer-focus:text-[16px] peer-focus:leading-tight peer-focus:text-blue-500
                           peer-focus:after:scale-x-100 peer-focus:after:border-blue-500 peer-disabled:text-transparent
                            peer-disabled:peer-placeholder-shown:text-gray-500"
                      >
                        Nome Completo
                      </label>
                    </div>
                  </div>
                  <div className="py-3 px-2 rounded-md w-max bg-slate-50 border-2 peer-focus:shadow-md ">
                    <div className="relative h-11 w-full min-w-[300px]">
                      <input
                        placeholder="(62) 90000-0000"
                        aria-label="Coloque o seu numero de telefone"
                        className="peer h-full w-full border-b border-gray-300 bg-transparent
                       pt-4 pb-1.5 font-sans text-sm font-normal text-gray-700 outline outline-0
                        transition-all placeholder-shown:border-gray-200 focus:border-gray-600 focus:outline-0
                        disabled:border-0 disabled:bg-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                      />
                      <label
                        className="after:content[''] pointer-events-none absolute left-0
                      -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[14px]
                       font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5
                        after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-600
                        after:transition-transform after:duration-300 peer-placeholder-shown:text-sm
                          peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-gray-500 
                          peer-focus:text-[16px] peer-focus:leading-tight peer-focus:text-blue-500
                           peer-focus:after:scale-x-100 peer-focus:after:border-blue-500 peer-disabled:text-transparent
                            peer-disabled:peer-placeholder-shown:text-gray-500"
                      >
                        Telefone
                      </label>
                    </div>
                  </div>
                  <div className="py-3 px-2 rounded-md w-max bg-slate-50 border-2 peer-focus:shadow-md ">
                    <div className="relative h-11 w-full min-w-[300px]">
                      <input
                        placeholder="e-mail@provedor.com.br"
                        aria-label="Coloque o seu E-mail"
                        className="peer h-full w-full border-b border-gray-300 bg-transparent
                       pt-4 pb-1.5 font-sans text-sm font-normal text-gray-700 outline outline-0
                        transition-all placeholder-shown:border-gray-200 focus:border-gray-600 focus:outline-0
                        disabled:border-0 disabled:bg-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                      />
                      <label
                        className="after:content[''] pointer-events-none absolute left-0
                      -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[14px]
                       font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5
                        after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-600
                        after:transition-transform after:duration-300 peer-placeholder-shown:text-sm
                          peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-gray-500 
                          peer-focus:text-[16px] peer-focus:leading-tight peer-focus:text-blue-500
                           peer-focus:after:scale-x-100 peer-focus:after:border-blue-500 peer-disabled:text-transparent
                            peer-disabled:peer-placeholder-shown:text-gray-500"
                      >
                        E-mail
                      </label>
                    </div>
                  </div>
                </form>
              </div>
              <div>
                <button className="px-6 py-2 bg-amber-500 rounded-md text-lg font-semibold shadow-md hover:-translate-y-1
                 hover:bg-amber-600 hover:text-zinc-50 transition-all" aria-label="Enviar Currículo">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-200 rounded-b-lg flex flex-wrap justify-center text-center p-1">
          <p className="text-zinc-900 text-lg">
            Qualquer duvida entre em contato com o nosso RH:
          </p>
          <a
            href="tel: +55 (62) 90000-0000"
            aria-label="Esta com duvida entre em contato com o nosso Rh pelo numero:"
            className=" bg-slate-700 text-white px-4 py-1 text-center lg:ml-4 rounded-md hover:bg-slate-800 transition-colors"
          >
            (62) 90000-0000
          </a>
        </div>
      </div>
    </article>
  );
}
