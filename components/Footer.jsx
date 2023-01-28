import { Logo } from "./Icons"
import { LinkedInIcon, GithubIcon } from "./Icons"
import { Contact } from "./Contact"

export const Footer = () => {
  return(
    <div className="bg-backgroundColor-light py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-24 lg:gap-48 items-center">
        <div className="grid justify-center md:justify-start">
          <div className="flex justify-center md:justify-start">
            <Logo />
          </div>
          <p className="text-white text-center mt-4 text-xl">
            Frontend developer, based in Veracruz, Mexico. <br />
            Do you need a website, got a project? Let’s talk
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a href="https://www.linkedin.com/in/sebasti%C3%A1n-luna-b2ab24263/" target="_blank">
              <LinkedInIcon />
            </a>
            <a href="https://github.com/sebastianluna-dev" target="_blank">
              <GithubIcon />
            </a>
          </div>
        </div>
        <Contact />
      </div>
    </div>
  )
}
