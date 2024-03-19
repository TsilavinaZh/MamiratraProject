import React from "react";
import '../style/style.css'
import Me from '../img/me.jpg'

function Home() {
    return (
        <>
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

        </>
    );
}

export default Home;