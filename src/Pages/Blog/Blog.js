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
                <p className="mb-4 text-xl font-bold">
                  1. What are the different ways to manage a state in a React application?
                </p>
                <p className="text-gray-500">
                  Ans: Managing state in your React apps isn’t as simple as using useState or
                  useReducer.
                  <br />
                  Not only are there are a lot of different kinds of state, but there often dozens
                  of ways of managing each kind. Which should you choose?
                  <br />
                  <br />
                  In this guide, we will uncover the several kinds of state in your React apps that
                  you might not be aware of, plus how to manage them in the most effective way.
                  <br />
                  <br />
                  The Four Kinds of React State to Manage When we talk about state in our
                  applications, it’s important to be clear about what types of state actually
                  matter.
                  <br />
                  There are four main types of state you need to properly manage in your React apps:
                  <br />
                  i. Local state ii. Global state iii. Server state iv. URL state
                  <br />
                  <br />
                </p>
              </div>

              <div>
                <p className="mb-4 text-xl font-bold">2. How does prototypical inheritance work?</p>
                <p className="text-gray-500">
                  Ans: Everything in Javascript is an object. Even when creating a Class is an
                  Object via an Object Literal or Constructor Function. This is how Javascript does
                  class-based programming as to other traditional Object-Oriented Programming
                  languages where they use the keyword ‘class’ and ‘inheritance’.
                  <br />
                  Javascript’s version of class-based programming and other traditional class-based
                  programming languages work with the same concept but does not work exactly
                  similar. There are differences in its keyword, syntax, and how it works. There are
                  also debates regarding pros and cons of Javascript’s version of class-based
                  programming, but for simplicity’s sake and learning purposes, I do not want to go
                  over those issues.
                  <br />
                  <br />
                  So, the core idea of Prototypal Inheritance is that an object can point to another
                  object and inherit all its properties. The main purpose is to allow multiple
                  instances of an object to share common properties, hence, the Singleton Pattern.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <p className="mb-4 text-xl font-bold">
                  3.What is a unit test? Why should we write unit tests?
                </p>
                <p className="text-gray-500">
                  Ans: Unit testing is a software development process in which the smallest testable
                  parts of an application, called units, are individually and independently
                  scrutinized for proper operation. This testing methodology is done during the
                  development process by the software developers and sometimes QA staff. The main
                  objective of unit testing is to isolate written code to test and determine if it
                  works as intended.
                  <br />
                  <br />
                  i. Unit tests save time and money. Usually, we tend to test the happy path more
                  than the unhappy path. If you release such an app without thorough testing, you
                  would have to keep fixing issues raised by your potential users. The time to fix
                  these issues could’ve been used to build new features or optimize the existing
                  system. Bear in mind that fixing bugs without running tests could also introduce
                  new bugs into the system.
                  <br /> ii. Well-written unit tests act as documentation for your code. Any
                  developer can quickly look at your tests and know the purpose of your functions.
                  <br />
                  iii. It simplifies the debugging process.
                  <br />
                  iv. Unit testing is an integral part of extreme programming. Extreme programming
                  is basically a “test-everything-that-can-possibly-break” programming strategy.
                  <br />
                  v. Unit tests make code reuse easier. If you want to reuse existing code in a new
                  project, you can simply migrate both the code and tests to your new project, then
                  run your tests to make sure you have the desired results.
                  <br />
                  vi. Unit testing improves code coverage. A debatable topic is to have 100% code
                  coverage across your application.
                </p>
              </div>
              <div>
                <p className="mb-4 text-xl font-bold">4. React vs. Angular vs. Vue?</p>
                <p className="text-gray-500">
                  Ans: React, developed by Facebook, was initially released in 2013. Facebook uses
                  React extensively in their products (Facebook, Instagram, and WhatsApp). Similar
                  to Vue, the React developers also announce their newest version on the blog
                  section of the React website.
                  <br />
                  Angular, developed by Google, was first released in 2010, making it the oldest of
                  the lot. It is a TypeScript-based JavaScript framework. A substantial shift
                  occurred in 2016 on the release of Angular 2 (and the dropping of the “JS” from
                  the original name – AngularJS). Angular 2+ is known as just Angular. Although
                  AngularJS (version 1) still gets updates, we will focus the discussion on Angular.
                  <br />
                  <br />
                  Vue, also known as Vue.js, is the youngest member of the group. It was developed
                  by ex-Google employee Evan You in 2014. Over the last several years, Vue has seen
                  a substantial shift in popularity, even though it doesn’t have the backing of a
                  large company. The most current version is always announced on the official Vue
                  website on their releases page. Contributors for Vue are supported by Patreon. It
                  should be noted that Vue also has its own GitHub repo, and functions using
                  TypeScript.
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
