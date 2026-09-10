import React from 'react'
import { Link } from 'react-router-dom'

export default function Features() {
  return (
    <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          React development is carried out by passionate developers
                      </h2>
                      <p className="mt-6 text-gray-600">
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                          accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                          aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                      </p>
                      <p className="mt-4 text-gray-600">
                          Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                          Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                      </p>
                  </div>

                  <div className="md:5/12 lg:w-5/12">
                      <a
                        href="https://www.pexels.com/photo/photo-of-people-working-in-the-office-7653461/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            className="w-96 h-auto rounded-lg"
                            src="https://images.pexels.com/photos/7653461/pexels-photo-7653461.jpeg?auto=compress&cs=tinysrgb&w=768"
                            alt="People working in an office"
                        />
                    </a>
                  </div>
              </div>
          </div>
      </div>
  )
}

