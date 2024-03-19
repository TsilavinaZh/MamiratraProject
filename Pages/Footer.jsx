import React from "react";
import axios from "axios";
import '../style/style.css'


function Email() {
    return (
        <>
         <div class="py-16 sm:text-center">
                    <h1 class="font-extrabold text-4xl sm:text-5xl lg:text-6xl  text-center txtWhithe ">
                        More Information</h1>
                    <p class="text-lg text-slate-700 dark:text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo voluptate numquam error assumenda, eum repudiandae saepe nostrum vitae tempora, distinctio et voluptatibus libero. Consequuntur ducimus quibusdam accusamus dolore quas repellat.
                    </p>
                    <section class="mt-3 max-w-sm sm:mx-auto sm:px-4">
                        <h2 class="sr-only">Sign up for our newsletter</h2>
                        <form action="https://app.convertkit.com/forms/3181837/subscriptions" method="post" class="flex flex-wrap -mx-2">
                            <div class="px-2 grow-[9999] basis-64 mt-3">
                                <div class="group relative"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"
                                    class="w-6 h-full absolute inset-y-0 left-3 text-slate-400 pointer-events-none group-focus-within:text-sky-500 dark:group-focus-within:text-slate-400">
                                    <path
                                        d="M5 7.92C5 6.86 5.865 6 6.931 6h10.138C18.135 6 19 6.86 19 7.92v8.16c0 1.06-.865 1.92-1.931 1.92H6.931A1.926 1.926 0 0 1 5 16.08V7.92Z">
                                    </path>
                                    <path d="m6 7 6 5 6-5"></path>
                                </svg><input type="email" name="email_address" required="" aria-label="Email address"
                                    class="appearance-none shadow rounded-md ring-1 ring-slate-900/5 leading-5 sm:text-sm border border-transparent py-2 placeholder:text-slate-400 pl-12 pr-3 block w-full text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white dark:bg-slate-700/20 dark:ring-slate-200/20 dark:focus:ring-sky-500 dark:text-white"
                                    placeholder="Subscribe via email" /></div>
                            </div>
                            <div class="px-2 grow flex mt-3"><button type="submit"
                                class="bg-sky-500 flex-auto shadow text-white rounded-md text-sm border-y border-transparent py-2 font-semibold px-3 hover:bg-sky-600 dark:hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-300 dark:focus:ring-offset-slate-900 dark:focus:ring-sky-700">Subscribe</button>
                            </div>
                        </form>
                    </section>
                </div>
        </>
    );
}

export default Email;