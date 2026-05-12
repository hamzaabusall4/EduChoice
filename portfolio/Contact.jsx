import {
  FaGithub,
  FaLinkedin,
  FaInstagram
} from "react-icons/fa";

function Contact() {

  const handleSubmit = async (e) => {

    e.preventDefault();

    const form = e.target;

    const data = new FormData(form);

    await fetch(
      "https://formsubmit.co/ajax/hamzaabusall4@gmail.com",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: data,
      }
    );

    alert("Message sent successfully!");

    form.reset();
  };

  return (

    <section
      id="contact"
      className="py-28 border-t border-zinc-900"
    >

      <div className="container">

        {/* HEADER */}

        <div className="max-w-3xl mb-20">

          <p className="text-zinc-500 uppercase tracking-[4px] text-sm mb-5">
            Contact
          </p>

          <h2 className="text-5xl md:text-6xl font-black leading-[1.1] mb-7">
            Let's build something
            great together.
          </h2>

          <p className="text-zinc-400 text-lg leading-9 max-w-2xl">
            Have a project in mind or looking for a frontend developer?
            Feel free to contact me anytime.
          </p>

        </div>

        {/* MAIN GRID */}

        <div className="grid lg:grid-cols-[330px_1fr] gap-10 items-start">

          {/* LEFT CARD */}

          <div className="border border-zinc-800 bg-zinc-950 p-8 space-y-12">

            {/* EMAIL */}

            <div>

              <p className="text-zinc-500 text-xs uppercase tracking-[4px] mb-3">
                Email
              </p>

              <a
                href="mailto:Hamzaabusall4@gmail.com"
                className="text-xl font-semibold break-all hover:text-zinc-300 transition"
              >
                Hamzaabusall4@gmail.com
              </a>

            </div>

            {/* LOCATION */}

            <div>

              <p className="text-zinc-500 text-xs uppercase tracking-[4px] mb-3">
                Location
              </p>

              <h3 className="text-xl font-semibold">
                Amman, Jordan
              </h3>

            </div>

            {/* SOCIALS */}

            <div>

              <p className="text-zinc-500 text-xs uppercase tracking-[4px] mb-5">
                Socials
              </p>

              <div className="flex gap-4">

                <a
                  href="https://github.com/hamzaabusall4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition duration-300"
                >
                  <FaGithub size={20} />
                </a>

                <a
                  href="https://www.linkedin.com/in/hamza-abu-sall-aab114235"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition duration-300"
                >
                  <FaLinkedin size={20} />
                </a>

                <a
                  href="https://www.instagram.com/hamza.abusall3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition duration-300"
                >
                  <FaInstagram size={20} />
                </a>

              </div>

            </div>

          </div>

          {/* RIGHT FORM */}

          <div className="bg-zinc-950/40 backdrop-blur-xl p-10">

            <form
              onSubmit={handleSubmit}
              className="space-y-8"
            >

              {/* HIDDEN INPUTS */}

              <input
                type="hidden"
                name="_subject"
                value="New Portfolio Message"
              />

              <input
                type="hidden"
                name="_captcha"
                value="false"
              />

              {/* NAME */}

              <div>

                <label className="block text-zinc-500 text-xs uppercase tracking-[4px] mb-4">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full h-[65px] bg-zinc-900/60 px-6 text-white placeholder:text-zinc-600 outline-none focus:bg-zinc-900 transition duration-300"
                />

              </div>

              {/* EMAIL */}

              <div>

                <label className="block text-zinc-500 text-xs uppercase tracking-[4px] mb-4">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="abc@example.com"
                  required
                  className="w-full h-[65px] bg-zinc-900/60 px-6 text-white placeholder:text-zinc-600 outline-none focus:bg-zinc-900 transition duration-300"
                />

              </div>

              {/* MESSAGE */}

              <div>

                <label className="block text-zinc-500 text-xs uppercase tracking-[4px] mb-4">
                  Message
                </label>

                <textarea
                  rows="7"
                  name="message"
                  placeholder="Tell me about your project..."
                  required
                  className="w-full bg-zinc-900/60 px-6 py-5 text-white placeholder:text-zinc-600 outline-none focus:bg-zinc-900 transition duration-300 resize-none"
                ></textarea>

              </div>

              {/* BUTTON */}

              <button
                type="submit"
                className="bg-white text-black px-8 py-4 font-semibold hover:bg-zinc-200 transition duration-300"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;