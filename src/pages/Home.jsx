import React from "react";
import { Link } from "react-router-dom"; // Import Link
import Card from "../components/Cards";
import Banner from "./Banner";
import Stats from "./Stats";
import Footer from "../components/Footer/Footer";
import Chatbot from "./Chatbot";
// import BotChat from "./BotChat";

function Home() {
  return (
    <>
      <Banner />
      <section className="bg-gradient-to-br from-gray-900 to-black">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"> Welcome To Ai TechHub</h1>
            <p className="max-w-2xl mb-6 font-bold text-gray-500 lg:mb-8 md:text-lg lg:text-2xl dark:text-gray-400">Your One step solution for <span className="text-red-600 "> IT </span>training</p>
            {/* Use Link instead of anchor tag */}
            <Link to="/community" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                View Community
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path></svg>
            </Link>
            {/* Use Link instead of anchor tag */}
            <Link to="/test" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Take Test
            </Link> 
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="ai hero.png" alt="mockup"/>
          </div>                
        </div>
      </section>
      <Chatbot/>
      <Stats />
      <Footer />
    </>
  );
}

export default Home;
