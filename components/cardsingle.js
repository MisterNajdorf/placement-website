import React from 'react'

const Cardsingle = (props) => {

  return (
    <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-48 h-48 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-500"
                  src={props.src}
                />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-xl">
                  {props.name}
                </h2>
                <p className="text-gray-500">{props.dept}</p>
                <span className="inline-block py-1 px-2 rounded bg-blue-50 text-blue-500 text-sm mt-2 font-medium tracking-widest">{props.company}</span>
                <br/>
                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>

                <p className="leading-relaxed">
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar.
                </p>
                
              </div>
            </div>
  )
}

export default Cardsingle;