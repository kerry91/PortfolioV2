import "./Pages.css";

const Home = () => {
  return (
    <>
      <section class="text-gray-700 body-font ">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col  md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              My name is Kerry A Warnes
            </h1>
            <h3 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Welcome to my portfolio
            </h3>
            <p class="mb-8 leading-relaxed">
              I have been in the IT industry for 12 years. I am here to create
              beauty out of code.
            </p>
          </div>
        </div>
      </section>
      <section class="text-gray-700 body-font border-t border-gray-200">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-56 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
            <p class="mb-8 leading-relaxed">
              I am interested in beginning a career in Frontend Development. In
              the future I would like to also get into Backend Development. My
              ultimate goal is to become a Fullstack Developer.
            </p>
          </div>
        </div>
      </section>
      <section class="text-gray-700 body-font border-t border-gray-200">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-48 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p class="mb-8 leading-relaxed">
              My current skills set includes HTML, CSS, JavaScript. Frameworks
              in HTML and CSS. I have some knowledge of SQL. I am currently
              learning React and Tailwind(this portfolio is written in React and
              Tailwind). I also have experience with API documents, using
              commands to integrate with different systems.
            </p>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://images.unsplash.com/photo-1592659762303-90081d34b277?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
