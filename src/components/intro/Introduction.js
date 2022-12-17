import "./Introduction.scss"
import me from "../../images/me.jpg";

export default function Introduction() {
  return (
    <div class="Introduction">
      <div class="container px-5 2xl:px:20 xl:px-20 lg:px-20 md:px-20 sm:px-5 py-8 mx-auto pb-8 pt-8">
          <div class="h-auto grid xl:grid-cols-2 sm:grid-cols-1 gap-4">
            <div class="self-center w-full">
              <p class="text-5xl">Hello my name is Kerry</p>
              <br />
              <p class="text-2xl">Welcome to my portfolio</p>
              <br/>
              <p>My goal is to become a full-stack developer. I am always looking to learn new languages and technologies.
              </p>
              <br/>
              <p>I am looking for a Junior/Graduate position to further my programming skills and knowledge.
              </p>
            </div>
            <div class="justify-self-center">
            <img src={me} alt="me" class="w-80 h-96 rounded-lg" />
          </div>
          </div>
       </div>   
    </div>
  );
}
