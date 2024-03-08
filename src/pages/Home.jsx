import React from "react";
import Card from "../components/Cards";

function Home() {
  return (
    <div className="bg-red-200 min-h-[92vh]">
      <header className="bg-orange-600 text-white py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Welcome to AI TechHub</h1>
          <p className="mt-4">Your gateway to artificial intelligence</p>
        </div>
      </header>
      <div className="flex justify-around items-center flex-wrap gap-8 py-16">
        <Card
          imageUrl="python.jpeg"
          title="Python"
          text="Python is renowned for its versatility, finding utility across diverse domains. From web development and data analysis to artificial intelligence, scientific computing, and automation, Python empowers developers with its ease of use and flexibility. Its popularity stems from its capability to tackle various tasks efficiently, making it a favored language worldwide."
          buttonLink="/page1"
        />
        <Card
          imageUrl="javascript.jpeg"
          title="Javascript"
          text="JavaScript serves as the backbone of client-side scripting in web development, executing within web browsers. Developers harness its power to imbue websites with dynamic behavior, enabling responses to user interactions, manipulation of HTML content, and facilitation of asynchronous requests. Its pivotal role in web interactivity cements JavaScript."
          buttonLink="/page1"
        />
        <Card
          imageUrl="html.png"
          title="HTML & Css"
          text="Html consists of a series of elements, represented by tags, which define the different parts of a web page, such as headings, paragraphs, images, links, forms, and more.HTML documents are organized into a hierarchical structure, with elements nested inside other elements to create the desired layout and content structure.css is style structured sheet."
          buttonLink="/page1"
        />
        <Card
          imageUrl="c p.jpeg"
          title="C programming"
          text="C stands as a versatile general-purpose programming language, adaptable to a multitude of applications. From system programming and embedded systems to game development, its reputation for high performance precedes it. With its efficiency and reliability, C remains a stalwart choice for developers seeking to tackle diverse and demanding computing tasks."
          buttonLink="/page1"
        />
      </div>
    </div>
  );
}

export default Home;
