<template>
<div>
    <div class="relative min-h-screen  grid bg-gradient-to-r from-purple-500 to-purple-400 ">
        <div class="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 ">
            <div class="relative sm:w-1/2 xl:w-5/6 bg-blue-500 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden  text-white bg-no-repeat bg-cover relative" style="background-image: url(https://images2.alphacoders.com/995/thumb-1920-995015.jpg);">
                <div class="absolute   opacity-25 inset-0 z-0"></div>
                <div class="w-full  lg:max-w-2xl md:max-w-md z-10 items-center text-center ">
                    <div class=" font-bold leading-tight mb-6 mx-auto w-full content-center items-center ">

                    </div>
                </div>
            </div>
            <div class="md:flex md:items-center md:justify-left w-full sm:w-auto md:h-full xl:w-1/2 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none ">
                <div class="max-w-xl w-full space-y-12">
                    <div class="lg:text-left text-center">
                        <h2 class="mt-6  font-bold text-gray-100 text-center">
                            <div class="flex justify-center">
                                 <svg viewBox="0 0 100 100" width="150" height="150">                             
                                <g transform="translate(50 50) scale(0.8)">
                                    <g class="stars" transform="scale(0)">
                                        <path fill="#303030" stroke="#303030" stroke-width="3" stroke-linejoin="round" stroke-linecap="round" d="M -50 -50 l 4.5 0 l 2.5 -4.5 l 2.5 4.5 l 4.5 0 l -3.5 3.5 l 1.5 5 l -5 -2.5 l -5 2.5 l 1.5 -5 l -3.5 -3.5"></path>
                                        <path fill="#303030" stroke="#303030" stroke-width="3" stroke-linejoin="round" stroke-linecap="round" d="M 36 -50 l 4.5 0 l 2.5 -4.5 l 2.5 4.5 l 4.5 0 l -3.5 3.5 l 1.5 5 l -5 -2.5 l -5 2.5 l 1.5 -5 l -3.5 -3.5"></path>
                                    </g>
                                    <g transform="translate(0 50)">
                                        <g class="gravity">
                                            <g transform="translate(0 -50)">
                                                <g class="ball" transform="scale(1 1)">
                                                    <g class="bottom">
                                                        <path fill="#ffffff" stroke="#303030" stroke-width="5" d="M -47.5 0 a 47.5 47.5 0 0 0 95 0z"></path>
                                                    </g>
                                                    <g class="top">
                                                        <path fill="#f15d5f" d="M -47.5 0 a 47.5 47.5 0 0 1 95 0"></path>
                                                        <path fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round" stroke-dasharray="0 15 9 9 20 100" d="M -38 -0 a 38 38 0 0 1 76 0"></path>
                                                        <path fill="none" stroke="#303030" stroke-width="5" d="M -47.5 0 a 47.5 47.5 0 0 1 95 0z"></path>
                                                    </g>
                                                    <g class="open" transform="scale(1 0)">
                                                        <path fill="#303030" stroke="#303030" stroke-width="5" stroke-linejoin="round" d="M -47.5 -10 a 190 190 0 0 1 95 0 a 190 190 0 0 1 -95 0"></path>
                                                        <path fill="#303030" stroke="#303030" stroke-width="5" stroke-linejoin="round" d="M -47.5 5 a 160 160 0 0 0 95 0 a 180 180 0 0 0 -95 0"></path>
                                                    </g>
                                                    <g class="center">
                                                        <circle fill="#ffffff" stroke="#303030" stroke-width="5" cx="0" cy="0" r="12"></circle>
                                                        <circle fill="#ffffff" stroke="#303030" stroke-width="3" cx="0" cy="0" r="6"></circle>
                                                        <g class="inner" opacity="0">
                                                            <circle fill="#f15d5f" cx="0" cy="0" r="4.5"></circle>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            </div>
                           
                        </h2>
                        <h2 class="mt-6 text-7xl font-bold text-gray-100">
                            Pokemon's
                        </h2>
                        <p class="mt-10 text-4xl text-white">Join Pokemon Trainer.</p>
                    </div>
                    <div class="flex flex-row justify-center items-center space-x-3"></div>
                    <div>
                        <button @click="$router.push('Home')" type="submit" class=" ml-32 lg:w-3/5 w-full flex justify-center  p-4   rounded-full tracking-wide font-bold  focus:outline-none focus:shadow-outline hover:bg-yellow-600 shadow-lg bg-yellow-400 cursor-pointer transition ease-in duration-300">
                            <span class="text-white"> Go to Pokemon Web</span>
                            <div class="ml-20">
                                <v-icon dark>mdi-arrow-right</v-icon>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {},

}
</script>

<style>

</style>
