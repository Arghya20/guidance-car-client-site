import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          {/* <h2 className="text-center mt-6 mb-16 text-2xl font-bold bg-red-400 text-white rounded-full p-2">
            Blog
          </h2> */}
          <div className="w-2/6 mx-auto">
          <h2 className="text-center mt-6 mb-16 text-2xl font-bold bg-red-400 text-white rounded-full p-2">
            Blog
          </h2>
          </div>

        </div>
        <div className="max-w-screen-xl sm:mx-auto">
          <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <p className="mb-4 text-xl font-medium">
                  The quick, brown fox jumps over a lazy dog?
                </p>
                <p className="text-gray-700">
                  Space, the final frontier. These are the voyages of the Starship Enterprise. Its
                  five-year mission: to explore strange new worlds.
                  <br />
                  <br />
                  Many say exploration is part of our destiny, but it’s actually our duty to future
                  generations.
                </p>
              </div>
            
              <div>
                <p className="mb-4 text-xl font-medium">Is the Space Pope reptilian!?</p>
                <p className="text-gray-700">
                  A flower in my garden, a mystery in my panties. Heart attack never stopped old Big
                  Bear. I didn't even know we were calling him Big Bear.
                </p>
              </div>
            </div>
            <div className="space-y-8">
             
              <div>
                <p className="mb-4 text-xl font-medium">
                  Galaxies Orion's sword globular star cluster?
                </p>
                <p className="text-gray-700">
                  A business big enough that it could be listed on the NASDAQ goes belly up.
                  Disappears!
                  <br />
                  <br />
                  It ceases to exist without me. No, you clearly don't know who you're talking to,
                  so let me clue you in.
                </p>
              </div>
              <div>
                <p className="mb-4 text-xl font-medium">
                  When has justice ever been as simple as a rule book?
                </p>
                <p className="text-gray-700">
                  This is not about revenge. This is about justice. A lot of things can change in
                  twelve years, Admiral. Well, that's certainly good to know. About four years. I
                  got tired of hearing how young I looked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
