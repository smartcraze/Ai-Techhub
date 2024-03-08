import React from "react";
import Card from "../components/Cards";

function Home() {
  return (
    <div className="bg-red-200 min-h-[92vh]">
      <header className="bg-yellow-600 text-white py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Welcome to AI TechHub</h1>
          <p className="mt-4">Your gateway to artificial intelligence</p>
        </div>
      </header>
      <div
        className="flex justify-around items-center flex-wrap gap-20 h-70vh bg-cover bg-center"
        style={{
          backgroundColor: "rgba(245, 40, 145, 0.8)",
          backgroundImage: 'url("bglaw.jpg")',
        }}
      >
        <Card
          imageUrl="law1.jpg"
          title="Right to Education"
          text="Children have the right to an education. School is a great place for children to learn about their world, and decide how they might want to change it, so that it’s better for everybody."
          buttonLink="/page1"
        />
        <Card
          imageUrl="playlaw.jpg"
          title="Right to Play"
          text="Children have the right to play. It's vital for learning problem-solving skills and fostering collaboration when they play together. Let kids play freely.When children play together, they learn!"
          buttonLink="/page1"
        />
        <Card
          imageUrl="rightsay.jpg"
          title="Right to Say"
          text="The right to say and be heard is one of the most important rights we have. It means that every person has the freedom to express their thoughts, feelings, and opinions without fear."
          buttonLink="/page1"
        />
        <Card
          imageUrl="laweqal.jpg"
          title="Right to Equality"
          text="The right to equality is a fundamental principle that ensures that all individuals are treated fairly and without discrimination. It means that everyone, regardless of their race, gender are same."
          buttonLink="/page1"
        />
      </div>
    </div>
  );
}

export default Home;
