import Image from "next/image"
import { SideInAnimation } from "./Animations"
import { GithubIcon } from "./Icons"

const Project = ({picture, title, children, link, githubLink }) => {
  return(
    <SideInAnimation id={title}>
      <div className="bg-backgroundColor-light md:flex gap-4 max-w-xl mx-auto p-8 rounded-2xl">
        <Image 
          src={picture}
          width={400}
          height={400}
          className="w-32 h-32 object-contain rounded-full"
        />
        <div className="text-white">
          <h3 className="text-4xl sm:text-5xl oswald mb-4">{title}</h3>
          <p className="mb-4 sm:text-lg">{children}</p>
          <div className="flex gap-4">
            <a 
              href={link}
              target="_blank" 
              className="bg-primary py-3 px-4 rounded-lg text-lg font-semibold text-white"
            >
              Take a look
            </a>    
            {
              githubLink &&  
              <a href={githubLink} target="_blank">
                <GithubIcon />
              </a>
            }
          </div>
        </div>
      </div>
    </SideInAnimation>
  )
}


export const Projects = () => {
  return(
    <div className="px-4 py-16" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white oswald text-5xl sm:text-6xl text-center mb-8">PROJECTS</h2>
        <div className="grid gap-8">
          <Project
            link="https://exam-social.vercel.app/"
            githubLink="https://github.com/sebastianluna-dev/exam-social"
            picture="/project-3.png"
            title="EXAM SOCIAL"  
          >
            Exam social is a space where users can create 
            and share their own exams with the community, 
            I co-worked this project with a friend and I 
            designed the ui and coded the frontend while 
            my partner worked on the backend.
          </Project>
          <Project
            link="https://vallartawknd.com"
            picture="/project-1.jpg"
            title="VALLARTA WKND"  
          >
            Vallarta WKND is a mexican company that help 
            people from abroad to have the best expirience 
            traveling around the country, I worked with this 
            company and together created a funny and relaxed 
            design and I developed a web application where 
            their costumers can book spaces and pay for the 
            different services that they offer.
          </Project>
          <Project
            link="https://www.humind.care/"
            picture="/project-2.jpg"
            title="HUMIND.CARE"  
          >
            Humind.care is a web page where people can find 
            resources about Mental Health issues, I helped this 
            company to create a space that supports the brand 
            company and where the potential costumers can contact 
            them and be able to get the professional help that 
            they need.
          </Project>
        </div>
      </div>
    </div>
  )
}
