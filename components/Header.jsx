import { Logo } from "./Icons"

export const Header = () => {
  return(
    <div className="py-8 px-4">
      <div className="max-w-6xl mx-auto flex justify-between">
        <Logo />
        <nav className="flex items-center gap-4 text-white font-bold">
          <a href="#contact" className="hidden sm:block cursor-pointer">Contact</a>
          <a href="#my-skills" className="hidden sm:block cursor-pointer">My skills</a>
          <a href="#projects" className="bg-secondary py-2 px-3 rounded-lg text-lg font-semibold">
            Know my work
          </a>
        </nav>
      </div>
    </div>
  )
}