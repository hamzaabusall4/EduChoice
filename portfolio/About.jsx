function About() {
  return (
    <section
      id="about"
      className="border-t border-zinc-900"
    >

      <div className="container grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT */}
        <div>

          <p className="text-zinc-500 uppercase tracking-[4px] text-sm mb-6">
            About
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight">

            Creating clean and
            modern web experiences.

          </h2>

        </div>

        {/* RIGHT */}
        <div>

          <p className="text-zinc-400 text-lg leading-relaxed mb-8">

            I'm a frontend developer specialized in React JS,
            responsive layouts and modern UI development.

            I focus on building websites that are clean,
            fast and user-friendly.

          </p>

          <div className="flex gap-5 flex-wrap">

            <div className="border border-zinc-500 rounded-5x1 px-9 py-8">

              <h3 className="text-3xl font-bold mb-2">
                Fresh Graduate
              </h3>

              <p className="text-zinc-500 text-sm">
                Years Experience
              </p>

            </div>

            <div className="border border-zinc-500 rounded-5x1 px-9 py-8">

              <h3 className="text-3xl font-bold mb-2">
                4+
              </h3>

              <p className="text-zinc-500 text-sm">
                Projects Built
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default About