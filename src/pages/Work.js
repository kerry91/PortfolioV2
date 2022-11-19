import "./Pages.css";
import Wcard from "../components/Wcard";

const Work = () => {
  return (
    <>
      <section class="text-gray-700 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Feel free to take a look around the work I have created
            </h1>
            <p class="lg:w-1/2 w-full leading-relaxed text-base">
              The different works are made up of HTML, CSS and JavaScript. Also
              some frameworks.
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-300 p-6 rounded-lg">
                <div>
                <Wcard
                wCardtitle="Content Management System CRM"
                wCarddescription="This is a CRM work in progress. It is made from HTML, UIKit CSS and JQuery JavaScript"/>
                </div>
                <a
                  href="https://kaw-cms.netlify.app/"
                  class="mt-3 text-indigo-500 inline-flex items-center"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-300 p-6 rounded-lg">
                  <Wcard 
                  wCardtitle="Fashion Landing Page"
                  wCarddescription="The landing page is made up of HTML and CSS. A project
                  from the Bath Spa University course" />
                <a
                  href="https://kaw-landing.netlify.app"
                  class="mt-3 text-indigo-500 inline-flex items-center"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-300 p-6 rounded-lg">
                  <Wcard
                  wCardtitle="Interactive Card Details"
                  wCarddescription="This is a Frontend Mentor project. It is made up of React, Redux and Bootstrap CSS" />
                <a
                  href="https://kaw-interactive-card-details.netlify.app/"
                  class="mt-3 text-indigo-500 inline-flex items-center"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-300 p-6 rounded-lg">
                  <Wcard 
                  wCardtitle="Interactive Rating" 
                  wCarddescription=" This is a Frontend Mentor project. It is made up of HTML, CSS
                  and JavaScript" />
                <a
                  href="https://kaw-interactive-rating.netlify.app/"
                  class="mt-3 text-indigo-500 inline-flex items-center"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-300 p-6 rounded-lg">
                  <Wcard 
                  wCardtitle="Intro component with Signup Form"
                  wCarddescription="This is a Frontend Mentor project. It is made up of HTML,
                  Bootstrap CSS and JavaScript" />
                <a
                  href="https://kaw-intro-component.netlify.app/"
                  class="mt-3 text-indigo-500 inline-flex items-center"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-300 p-6 rounded-lg">
                  <Wcard 
                  wCardtitle="FAQ Accordion"
                  wCarddescription="This is a Frontend Mentor project. This is made up of HTML,
                  CSS and JavaScript" />
                <a
                  href="https://kaw-faq-accordion.netlify.app/"
                  class="mt-3 text-indigo-500 inline-flex items-center"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
                        <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-300 p-6 rounded-lg">
                  <Wcard 
                  wCardtitle="Advice Generator"
                  wCarddescription="This is a Frontend Mentor project. It is made up of React, Bulma CSS and uses the Advice Slip API" />
                <a
                  href="https://kaw-advice-generator.netlify.app"
                  class="mt-3 text-indigo-500 inline-flex items-center"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
