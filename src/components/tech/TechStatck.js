import TechCard from "./card/TechCard";
import buefy from "../../images/buefy.png";
import materialize from "../../images/materialize.png";
import sql from "../../images/sql.jpg";
import jest from "../../images/jest.png"

const TechStack = () => {
  return (
    <>
      <div className="Tech">
        <div class="container px-5 py-8 mx-auto">
          <h1 class="sm:text-2xl text-2xl font-medium title-font text-center">
            Tech I Have Used
          </h1>
          <p className="text-center">
            Below are the different types of tech I have used in University,
            Work or Self-taught. My level of expereice with each ranges.
          </p>
          <br />

          <div class="grid grid-cols-4 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-4 gap-4 place-content-center place-items-center">
            <div>
              <TechCard image="https://cdn.worldvectorlogo.com/logos/html-1.svg" />
            </div>
            <div>
              <TechCard image="https://cdn.worldvectorlogo.com/logos/css-3.svg" />
            </div>
            <div>
              <TechCard image="https://cdn.worldvectorlogo.com/logos/javascript-1.svg" />
            </div>
            <div>
              <TechCard image="https://cdn.worldvectorlogo.com/logos/sass-1.svg" />
            </div>
            <div>
              <TechCard image="https://cdn.worldvectorlogo.com/logos/react-2.svg" />
            </div>
            <div>
              <TechCard image="https://cdn.worldvectorlogo.com/logos/redux.svg" />
            </div>
            <div>
              <TechCard image="https://cdn.worldvectorlogo.com/logos/vue-9.svg" />
            </div>
            <div>
              <TechCard image="https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg" />
            </div>
            <div>
              <TechCard image="https://cdn.worldvectorlogo.com/logos/typescript.svg" />
            </div>
            <div>
              <TechCard image="https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg" />
            </div>
            <div>
              <TechCard image="https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" />
            </div>
            <div>
              <TechCard image="https://cdn.worldvectorlogo.com/logos/bulma.svg" />
            </div>
            <div>
              <TechCard image={materialize} />
            </div>
            <div>
              <TechCard image={buefy} />
            </div>
            <div>
              <TechCard image="https://cdn.worldvectorlogo.com/logos/material-ui-1.svg" />
            </div>
            <div>
              <TechCard image="https://cdn.worldvectorlogo.com/logos/uikit.svg" />
            </div>
            <div>
              <TechCard image="https://cdn.worldvectorlogo.com/logos/php-1.svg" />
            </div>
            <div>
              <TechCard image={sql} />
            </div>
            <div>
              <TechCard image="https://cdn.worldvectorlogo.com/logos/mysql-6.svg" />
            </div>
            <div>
              <TechCard image="https://cdn.worldvectorlogo.com/logos/git-icon.svg" />
            </div>
            <div>
              <TechCard image="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" />
            </div>
            <div>
              <TechCard image="https://cdn.worldvectorlogo.com/logos/npm.svg" />
            </div>
            <div>
              <TechCard image="https://cdn.worldvectorlogo.com/logos/grunt.svg" />
            </div>
            <div>
              <TechCard image={jest} />
            </div>
            <div>
              <TechCard image="https://cdn.worldvectorlogo.com/logos/docker.svg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechStack;
