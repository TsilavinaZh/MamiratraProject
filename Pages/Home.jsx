import React from "react";
import '../style/style.css'
import Me from '../img/me.jpg'

function Home() {
    return (
        <>
        <div
          class="padding50 relative pt-6 lg:pt-8 flex items-center justify-between text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200">
          <svg viewBox="0 0 248 31" class="text-slate-900 dark:text-white w-auto h-5">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z"
              fill="#38bdf8"></path>
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M76.546 12.825h-4.453v8.567c0 2.285 1.508 2.249 4.453 2.106v3.463c-5.962.714-8.332-.928-8.332-5.569v-8.567H64.91V9.112h3.304V4.318l3.879-1.143v5.937h4.453v3.713zM93.52 9.112h3.878v17.849h-3.878v-2.57c-1.365 1.891-3.484 3.034-6.285 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.285 2.999V9.112zm-5.674 14.636c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm16.016-17.313c-1.364 0-2.477-1.142-2.477-2.463a2.475 2.475 0 012.477-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.879v17.849h-3.879zm8.368 0V.9h3.878v26.06h-3.878zm29.053-17.849h4.094l-5.638 17.849h-3.807l-3.735-12.03-3.771 12.03h-3.806l-5.639-17.849h4.094l3.484 12.315 3.771-12.315h3.699l3.734 12.315 3.52-12.315zm8.906-2.677c-1.365 0-2.478-1.142-2.478-2.463a2.475 2.475 0 012.478-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.878v17.849h-3.878zm17.812-18.313c4.022 0 6.895 2.713 6.895 7.354V26.96h-3.878V16.394c0-2.713-1.58-4.14-4.022-4.14-2.55 0-4.561 1.499-4.561 5.14v9.567h-3.879V9.112h3.879v2.285c1.185-1.856 3.124-2.749 5.566-2.749zm25.282-6.675h3.879V26.96h-3.879v-2.57c-1.364 1.892-3.483 3.034-6.284 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.284 2.999V1.973zm-5.674 21.775c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm22.553 3.677c-5.423 0-9.481-4.105-9.481-9.389 0-5.318 4.058-9.388 9.481-9.388 3.519 0 6.572 1.82 8.008 4.605l-3.34 1.928c-.79-1.678-2.549-2.749-4.704-2.749-3.16 0-5.566 2.392-5.566 5.604 0 3.213 2.406 5.605 5.566 5.605 2.155 0 3.914-1.107 4.776-2.749l3.34 1.892c-1.508 2.82-4.561 4.64-8.08 4.64zm14.472-13.387c0 3.249 9.661 1.285 9.661 7.89 0 3.57-3.125 5.497-7.003 5.497-3.591 0-6.177-1.607-7.326-4.177l3.34-1.927c.574 1.606 2.011 2.57 3.986 2.57 1.724 0 3.052-.571 3.052-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.909-5.462 6.572-5.462 2.945 0 5.387 1.357 6.644 3.713l-3.268 1.82c-.647-1.392-1.904-2.035-3.376-2.035-1.401 0-2.622.607-2.622 1.892zm16.556 0c0 3.249 9.66 1.285 9.66 7.89 0 3.57-3.124 5.497-7.003 5.497-3.591 0-6.176-1.607-7.326-4.177l3.34-1.927c.575 1.606 2.011 2.57 3.986 2.57 1.724 0 3.053-.571 3.053-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.908-5.462 6.572-5.462 2.944 0 5.386 1.357 6.643 3.713l-3.268 1.82c-.646-1.392-1.903-2.035-3.375-2.035-1.401 0-2.622.607-2.622 1.892z"
              fill="currentColor"></path>
          </svg>
          <div class="flex items-center"><button type="button"
              class="text-slate-500 hover:text-slate-600 w-8 h-8 -my-1 flex items-center justify-center md:hidden dark:hover:text-slate-300"><span
                class="sr-only">Search</span><svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="m19 19-3.5-3.5"></path>
                <circle cx="11" cy="11" r="6"></circle>
              </svg></button>
            <div class="-my-1 ml-2 -mr-1 md:hidden"><button type="button"
                class="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"><span
                  class="sr-only">Navigation</span><svg width="24" height="24" fill="none" aria-hidden="true">
                  <path
                    d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg></button></div>
            <div class="hidden md:flex items-center">
              <nav></nav>
              <div class="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800"><label class="sr-only"
                  id="headlessui-listbox-label-undefined">Theme</label><button type="button"
                  id="headlessui-listbox-button-undefined" aria-haspopup="true" aria-expanded="false"><span
                    class="dark:hidden"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" class="w-6 h-6">
                      <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" class="stroke-slate-400 dark:stroke-slate-500"></path>
                      <path
                        d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                        class="stroke-slate-400 dark:stroke-slate-500"></path>
                    </svg></span><span class="hidden dark:inline"></span></button><a
                  href="https://github.com/tailwindlabs/tailwindcss"
                  class="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"><span
                    class="sr-only">Tailwind CSS on GitHub</span><svg viewBox="0 0 16 16" class="w-5 h-5" fill="currentColor"
                    aria-hidden="true">
                    <path
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
                    </path>
                  </svg></a></div>
            </div>
          </div>
        </div>


            <p className="p-6"></p>
            <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
                <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center txtWhithe">
                    Project Mamiratra
                </h1>
                <p class="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">Mamiratra Project is a Web site help a young peple for bluilding the futur.</p>
                <div>
                    <div class="flex justify-center p-6">
                        <a href="#" className="p-3 rounded-lg shadow-lg bg-sky-500">Let's Start</a>
                    </div>
                </div>

                <p className="padding100"></p>

                <section className="text-center px-8 ">
                    <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl  text-center txtWhithe">“Study is only way for developing the world”.</h1>
                    <figure>
                        <p class="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">Mamiratra Project is a Web site help a young peple for bluilding the futur.</p>

                        <figcaption className="mt-6 flex items-center justify-center space-x-4 text-left"><img
                            src={Me} alt="" class="w-14 h-14 rounded-full"
                            loading="lazy" />
                            <div>
                                <div className="font-semibold  txtWhithe" >Tendry Tsilavina</div>
                                <div className="text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">Creator of Mamiratra Project</div>
                            </div>
                        </figcaption>
                    </figure>
                </section>
                <p className="padding50"></p>
                <div className="padding50">
                    <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl  text-center txtWhithe padding50">History.</h1>

                    <img class="float-left pic" src={Me} />
                    <p className="text-2xl txtWhithe">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ducimus mollitia voluptates officia. Et accusamus est saepe ipsam repellendus quod placeat architecto, totam cupiditate tempore ipsa obcaecati ullam esse dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum possimus ratione quia accusantium voluptas autem velit! Iusto neque dicta quibusdam laudantium magnam sint quisquam nostrum, omnis atque molestias, dolore minus? </p>

                </div>

               
            </div>

             <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <p>&copy; 2024 Mon Site Web</p>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-gray-300">Accueil</a></li>
              <li><a href="#" className="hover:text-gray-300">À propos</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

        </>
    );
}

export default Home;