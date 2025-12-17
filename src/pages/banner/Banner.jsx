import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="bg-blue-950 w-full min-h-screen flex items-center justify-center">
      <div className="main-container">
       <div className="btn ">
         <Link to="/player" >
          <button className="w-80 h-15 bg-[white] rounded-3xl text-[20px]">Player</button>
        </Link>
       </div>
      </div>
    </section>
  );
};

export default Banner;
