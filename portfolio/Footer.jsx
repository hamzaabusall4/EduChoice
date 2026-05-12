function Footer() {
  return (

    <footer className="border-t border-zinc-900 bg-black py-14">

      <div className="container">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* LEFT */}

          <div className="text-center lg:text-left">

            <h2 className="text-3xl font-black tracking-tight mb-3">
              Hamza Abusal
            </h2>

            <p className="text-zinc-500 leading-7 text-[15px] max-w-md">
              Frontend Developer building modern,
              responsive and user-focused web experiences.
            </p>

          </div>

          {/* CENTER */}

          <div className="flex items-center gap-8 text-sm uppercase tracking-[2px]">

            <a
              href="#home"
              className="text-zinc-500 hover:text-white transition duration-300"
            >
              Home
            </a>

            <a
              href="#projects"
              className="text-zinc-500 hover:text-white transition duration-300"
            >
              Projects
            </a>

            <a
              href="#skills"
              className="text-zinc-500 hover:text-white transition duration-300"
            >
              Skills
            </a>

            <a
              href="#contact"
              className="text-zinc-500 hover:text-white transition duration-300"
            >
              Contact
            </a>

          </div>

          {/* RIGHT */}

          <div className="text-center lg:text-right">

            <a
              href="mailto:Hamzaabusall4@gmail.com"
              className="block text-zinc-400 hover:text-white transition duration-300 mb-2"
            >
              Hamzaabusall4@gmail.com
            </a>

            <p className="text-zinc-600 text-sm">
              © 2026 All rights reserved.
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;