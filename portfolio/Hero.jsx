import profile from "../assets/WhatsApp Image 2026-05-11 at 5.27.49 PM.jpeg"

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-[-180px] left-[-120px] w-[500px] h-[500px] bg-violet-600/20 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-[-180px] right-[-120px] w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full"></div>

      </div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-24 items-center">

        {/* LEFT SIDE */}
        <div>

          <p className="text-zinc-400 uppercase tracking-[5px] text-sm mb-6">
            Frontend Developer
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-8">

            Building modern
            digital products
            and experiences.

          </h1>

          <p className="text-zinc-400 text-xl leading-[2.8] max-w-2xl mb-12">

            I design and develop clean, responsive and
            high-performance websites using React JS
            and modern frontend technologies.

          </p>

          <div className="flex gap-6 flex-wrap">

            <a href="#projects">
              <button className="bg-white/5 border border-white/10 px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300">

                View Projects

              </button>
            </a>

            <a href="#contact">
              <button className="bg-white/5 border border-white/10 px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300">

                Contact Me

              </button>
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center lg:justify-end">

          {/* GLOW */}
          <div className="absolute w-[420px] h-[420px] bg-violet-500/20 blur-[120px] rounded-full"></div>

          {/* BACKGROUND CARD */}
          <div className="absolute w-[340px] h-[500px] md:w-[400px] md:h-[580px] bg-white/5 border border-white/10 rounded-[40px] rotate-6"></div>

          {/* IMAGE CARD */}
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-zinc-900/60 backdrop-blur-xl shadow-2xl">

            <img
              src={profile}
              alt="Hamza"
              className="w-[340px] md:w-[400px] h-[500px] md:h-[580px] object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

            {/* INFO BOX */}
            <div className="absolute bottom-6 left-6 right-6 bg-black/20 backdrop-blur-md border border-white/10 rounded-5xl px-5 py-4">

              <p className="text-zinc-400 text-sm mb-1">
                Frontend Developer
              </p>

              <h3 className="text-2xl font-semibold">
                Hamza Abusal
              </h3>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero