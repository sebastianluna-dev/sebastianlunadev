import { motion } from "framer-motion"
import Image from "next/image"

const Skill = ({ skill, width }) => {
  const variants = {
    width: { width },
    noWidth: { width: 0 },
  }
  const variantsText = {
    width: { opacity: 1 },
    noWidth: { opacity: 0 },
  }
  return(
    <motion.div 
      initial="noWidth"
      variants={variants}
      whileInView="width"
      transition={{delay: .6, duration: .8}}
      className="px-2 py-1 bg-primary rounded-lg text-black text-xl"
    >
      <motion.span
        className="font-normal text-backgroundColor"
        variants={variantsText}
        transition={{delay: .6, duration: .8}}
      >
        { skill }
      </motion.span>
    </motion.div>
  )
}

export const MySkills = () => {
  return(
    <div className="px-4 pb-32 pt-32" id="my-skills">
      <div className="grid md:grid-cols-2 max-w-md md:max-w-6xl mx-auto gap-24">
        <Image 
          className="hidden lg:block"
          src="/my-skills.png"
          width={1200}
          height={1200}
        />
        <div className="text-white">
          <h2 className="oswald text-6xl">SKILLS</h2>
          <p className="max-w-md text-lg">
            I have been experimenting with different 
            web development technologies for 2 years 
            in order to master many of them.
          </p>
          <div className="grid gap-4 mt-4">
            <Skill skill="Javascript" width="95%" />
            <Skill skill="Next.js" width="80%" />
            <Skill skill="Figma" width="65%" />
            <Skill skill="CSS" width="95%"/>
            <Skill skill="Tailwind" width="85%" />
          </div>
        </div>
      </div>
    </div>
  )
}
