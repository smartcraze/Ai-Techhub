import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  const { imageUrl, title, text, buttonText, buttonLink } = props;

  return (
    <div className="flex items-center justify-center">
  <div className="bg-white rounded-lg border-2 border-black shadow-md hover:shadow-xl transform transition-transform duration-300 hover:scale-105" style={{ width: "18rem" }}>
    <img className="rounded-t-lg w-full" src={imageUrl} alt="Card image cap" />
    <div className="p-4">
      <h5 className="text-lg font-semibold">{title}</h5>
      <p className="text-gray-700 text-sm">{text}</p>
    </div>
  </div>
</div>


  );
};

export default Card;