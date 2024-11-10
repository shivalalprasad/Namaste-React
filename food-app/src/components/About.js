// import { ABOUT_IMG } from "../util/constants";
import { useContext } from "react";
import ABOUT_IMG from "../util/coder.svg"
import userInfo from "../util/userInfo";

const About = () => {
  const {Author,logedInUserName} = useContext(userInfo)
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-6 items-center justify-center flex-col">
        <img className="lg:w-3/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={ABOUT_IMG} />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{Author}</h1>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">user : {logedInUserName}</h1>
          <p className="mb-8 leading-relaxed">I am a Web Developer located in Telangana, India. I currently Intern at Cognifiz Technologies.<br /> I am looking to take on more work and to increase my skills as a Web Developer.</p>
        </div>
      </div>
    </section>
  )
}

export default About;
