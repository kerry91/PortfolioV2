import "./Pages.css";

const Home = () => {
  return (
    <>
    <div class="container mx-auto py-12">
          <div class="text-center">
            <p class="text-5xl">Hello my name is Kerry A Warnes</p>
            <br />
            <p class="text-2xl">Welcome to my portfolio</p>
          </div>
        </div>
      <div class="grid  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 divide-y-2 divide-black">
        <div class="container mx-auto py-12">
          <div class="grid  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
            <div>
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              />
            </div>
            <div class="sm:py-12 md:py-12 lg:py-24 xl:py-56  lg:pl-16">
              <p class="mt-4 text-justify text-lg">
                I am interested in beginning a career in Frontend Development.
                In the future I would like to also get into Backend Development.
                My ultimate goal is to become a Fullstack Developer.
              </p>
            </div>
          </div>
        </div>

        <div class="container mx-auto py-12">
          <div class="grid  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
            <div>
              <div class="sm:py-12 md:py-12 lg:py-24 xl:py-56 lg:pr-16 ">
                <p class="mb-4 text-justify text-lg">
                  My current skills set includes HTML, CSS, JavaScript. CSS
                  Frameworks. I have some knowledge of SQL. Check out my CV for
                  a full list I am currently learning React and Tailwind(this
                  portfolio is written in React and Tailwind). I also have
                  experience with API documents, using commands to integrate
                  with different systems.
                </p>
              </div>
            </div>

            <div>
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src="https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
