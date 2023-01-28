import Image from "next/image"
import { CompassIcon, CodeIcon, PhoneIcon } from "./Icons"

export const Hero = () => {
  return(
    <div className="px-4 pb-16">
      <div className="grid md:grid-cols-2 items-center max-w-md md:max-w-6xl mx-auto mb-32">
        <div>
          <h2 className="text-primary text-3xl sm:text-4xl oswald">
            FRONTEND DEVELOPER
          </h2>
          <h1 className="text-6xl md:text-7xl lg:text-8xl oswald text-white">
            SEBASTIAN LUNA
          </h1>
          <p className="text-white text-lg sm:text-xl mb-4">
            I’m a passionate guy about technology, programming and design.
            I found the perfect place to make use of my skills in web development. 
            I like helping companies to create software solutions. 
            I enjoy learning new things every day and create my own projects.       
          </p>
          <div className="flex">
            <a href="/cv_sebastian.pdf" download className="bg-primary py-3 px-4 rounded-lg text-lg sm:text-xl font-semibold text-white">
              Download CV
            </a>
          </div>
        </div>
        <Image 
          src="/sebastian-image.png"
          width={1000}
          height={1000}
          className="w-full object-contain row-start-1 md:col-start-2 mb-4"
        />
      </div>
      <div className="grid lg:grid-cols-3 max-w-md md:max-w-2xl lg:max-w-6xl mx-auto gap-8">
        <div className="text-white md:w-4/5 lg:w-full justify-self-center bg-backgroundColor-light p-8 sm:p-12 rounded-3xl">
          <div className="flex justify-center gap-4 items-center mb-8">
            <CompassIcon />
            <h3 className="oswald text-3xl sm:text-4xl">DESIGN</h3>
          </div>
          <p className="sm:text-lg">
            I will create a custom design based 
            in your specifications, help you to 
            comunicate a message and give it to 
            your web page an appropriate look 
            and feel.
          </p>
        </div>
        <div className="text-white md:w-4/5 lg:w-full justify-self-start bg-backgroundColor-light p-8 sm:p-12 rounded-3xl">
          <div className="flex justify-center gap-4 items-center mb-8">
            <CodeIcon />
            <h3 className="oswald text-3xl sm:text-4xl">CODE</h3>
          </div>
          <p className="sm:text-lg">
            I will choose the best technologies 
            according with your project and create 
            the proper documentation.
          </p>
        </div>
        <div className="text-white md:w-4/5 lg:w-full justify-self-end bg-backgroundColor-light p-8 sm:p-12 rounded-3xl">
          <div className="flex justify-center gap-4 items-center mb-8">
            <PhoneIcon />
            <h3 className="oswald text-3xl sm:text-4xl">RESPONSIVE</h3>
          </div>
          <p className="sm:text-lg">
            I will make your project adaptive to all 
            kinds of devices: desktop monitors, laptops, 
            tablets and smartphones.
          </p>
        </div>
      </div>
    </div>
  )
}