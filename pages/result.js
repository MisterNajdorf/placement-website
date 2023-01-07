import React from 'react';
import Testimonial from '../components/testimonial';

const Result = () => {
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h2 className="text-sm md:text-xl text-blue-500 tracking-widest font-medium title-font mb-1">
          IIT BOMBAY PHD PLACEMENTS 2022-23
        </h2>
        <h1 className="sm:text-5xl text-4xl font-medium title-font mb-4 text-gray-900">
          Placed Candidates
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table. Franzen you probably
          havent heard of them man bun deep jianbing selfies h eirloom prism
          food truck ugh squid celiac humblebrag.
        </p>
      </div>
      <div className="flex flex-wrap">
        <Testimonial />
      </div>
    </div>
  </section>
  )
}

export default Result