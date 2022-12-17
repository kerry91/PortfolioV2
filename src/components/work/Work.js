import "./Work.scss";
import WorkCard from "./WorkCard";

export default function Work() {
  return (
    <div class="Work">
      <section class="text-gray-700 body-font">
        <div class="container px-5 py-8 mx-auto">
          <div class="flex flex-wrap w-full mb-8 flex-col items-center text-center">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              My Work
            </h1>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/3 md:w-1/2 sm:w-full p-4">
              <div class="border border-gray-300 p-6 rounded-lg">
                <WorkCard
                  WorkCardtitle="Interactive Card Details"
                  WorkCarddescription="This project is made up of HTML React.js, Redux and Bootstrap.css"
                />
                <a
                  href="https://kaw-interactive-card-details.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  class="mt-3 text-indigo-500 inline-flex items-center"
                >
                  Visit
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
            <div class="xl:w-1/3 md:w-1/2 sm:w-full p-4">
              <div class="border border-gray-300 p-6 rounded-lg">
                <WorkCard
                  WorkCardtitle="Interactive Rating"
                  WorkCarddescription=" This project is made up of HTML, CSS
                  and JavaScript"
                />
                <br />

                <a
                  href="https://kaw-interactive-rating.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  class="mt-3 text-indigo-500 inline-flex items-center"
                >
                  Visit
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
            <div class="xl:w-1/3 md:w-1/2 sm:w-full p-4">
              <div class="border border-gray-300 p-6 rounded-lg">
                <WorkCard
                  WorkCardtitle="Intro component with Signup Form"
                  WorkCarddescription="This project is made up of HTML,
                  Bootstrap CSS and JavaScript"
                />
                <a
                  href="https://kaw-intro-component.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  class="mt-3 text-indigo-500 inline-flex items-center"
                >
                  Visit
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
            <div class="xl:w-1/3 md:w-1/2 sm:w-full p-4">
              <div class="border border-gray-300 p-6 rounded-lg">
                <WorkCard
                  WorkCardtitle="Countries"
                  WorkCarddescription="This project is made up of HTML, React.js and Tailwind.css and the REST Countries API"
                />
                <a
                  href="https://kaw-countries.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                  class="mt-3 text-indigo-500 inline-flex items-center"
                >
                  Visit
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
            <div class="xl:w-1/3 md:w-1/2 sm:w-full p-4">
              <div class="border border-gray-300 p-6 rounded-lg">
                <WorkCard
                  WorkCardtitle="Advice Generator"
                  WorkCarddescription="This is a Frontend Mentor project. It is made up of HTML React.js, Bulma.css and uses the Advice Slip API"
                />
                <a
                  href="https://kaw-advice-generator.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                  class="mt-3 text-indigo-500 inline-flex items-center"
                >
                  Visit
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
            <div class="xl:w-1/3 md:w-1/2 sm:w-full p-4">
              <div class="border border-gray-300 p-6 rounded-lg">
                <WorkCard
                  WorkCardtitle="Pokedex"
                  WorkCarddescription="The Pokedex is made up from HTML React.js, CSS and the PokeAPI"
                />
                <a
                  href="https://kaw-pokedex.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                  class="mt-3 text-indigo-500 inline-flex items-center"
                >
                  Visit
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
    </div>
  );
}
