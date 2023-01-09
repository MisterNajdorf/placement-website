import React from 'react';
import Heading from '../components/heading';
import Testimonial from '../components/testimonial';

const Result = () => {
  return (
    <section className="text-gray-600 body-font dark:text-gray-400 dark:bg-gray-900">
    <div className="container px-5 py-24 mx-auto">
      <Heading heading="Results" />
      <div className="flex flex-wrap justify-center items-center">
        <Testimonial />
      </div>
    </div>
  </section>
  )
}

export default Result