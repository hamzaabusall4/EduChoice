const skillCategories = [

  {
    title: "Frontend Development",

    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React JS",
      "React Native",
     
    ],
  },

  {
    title: "Backend & Database",

    skills: [
      "PHP", 
      "C#",
      "ASP.NET",
      "SQL",
      "MongoDB",
    ],
  },

  {
    title: "Tools & Workflow",

    skills: [
      "Git & GitHub",
      "PhpMyAdmin",
      
      "Information Technology",
    ],
  },

  {
    title: "Soft Skills",

    skills: [
      
      "Analytical Skills",
      "Teamwork",
      "Social Communication",
      "Problem Solving",
    ],
  },

];

function Skills() {
  return (

    <section
      id="skills"
      className="border-t border-zinc-900 py-32"
    >

      <div className="container">
        

        {/* TOP */}

        <p className="text-zinc-500 uppercase tracking-[4px] text-sm mb-5">
          Skills
        </p>

        <h2 className="text-4xl md:text-9xl  font-black leading-tight mb-20 ">
          Technologies & Skills.
        </h2>

        {/* GRID */}

        <div className="grid lg:grid-cols-2 gap-10">

          {skillCategories.map((category, index) => (

            <div
              key={index}
              className="border border-zinc-800 bg-zinc-950/60 backdrop-blur-xl p-10 rounded-5xl hover:border-zinc-600 transition duration-500"
            >

              {/* CATEGORY TITLE */}
              

              <h3 className="text-5xl md:text-20xl font-black mb-10 leading-[4.1] tracking-[5px]">
                {category.title}
              </h3>

              {/* SKILLS */}

              <div className="flex flex-wrap gap-5">

                {category.skills.map((skill, i) => (

                  <div
                    key={i}
                    className=" rounded-5xl  border-zinc-100 text-zinc-100 text-sm hover:border-white hover:text-white hover:-translate-y-1 transition duration-300"
                  >
                    {skill}
                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;