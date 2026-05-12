function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-zinc-800 bg-black/70 backdrop-blur-xl">

      <div className="container h-[80px] flex items-center justify-between">

        <h1 className="text-2xl font-bold tracking-tight">
          Hamza Abusal
        </h1>

        <ul className="hidden md:flex items-center gap-10 text-sm text-zinc-400">

         <a
          href="Hamza-Abusall-CV.pdf"
          target="_blank"
          rel="noreferrer"
         className="bg-white/4 backdrop-blur-xl border border-white/0 text-white py-2 rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300 "
        >
          My Resume
        </a>

               <a href="#home">
            <li className="hover:text-white transition duration-300">
              home
            </li>
          </a>



          <a href="#about">
            <li className="hover:text-white transition duration-300">
              About
            </li>
          </a>

          <a href="#skills">
            <li className="hover:text-white transition duration-300">
              Skills
            </li>
          </a>

          <a href="#projects">
            <li className="hover:text-white transition duration-300">
              Projects
            </li>
          </a>

          <a href="#contact">
            <li className="hover:text-white transition duration-300">
              Contact
            </li>
          </a>

        </ul>

      </div>

    </nav>
  )
}

export default Navbar