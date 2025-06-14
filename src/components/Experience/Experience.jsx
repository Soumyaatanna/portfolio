import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-[30px] w-1 bg-white h-full z-0"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-20 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            } relative z-10`}
          >
            {/* Timeline Circle (Logo) */}
            <div
              className={`hidden sm:flex absolute w-16 h-16 rounded-full border-4 border-[#8245ec] bg-white top-0 z-20 ${
                index % 2 === 0 ? "left-[calc(50%-2rem)]" : "left-[calc(50%-2rem)]"
              }`}
            >
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Card */}
            <div
              className={`w-full sm:max-w-md p-6 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105 ${
                index % 2 === 0 ? "sm:ml-28" : "sm:mr-28"
              }`}
            >
              {/* Role, Company Name, Date */}
              <div className="flex flex-col space-y-1 mb-4">
                <h3 className="text-2xl font-semibold text-white">{experience.role}</h3>
                <h4 className="text-sm text-gray-300">{experience.company}</h4>
                <p className="text-sm text-gray-500">{experience.date}</p>
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-4">{experience.desc}</p>

              {/* Skills */}
              <div>
                <h5 className="font-medium text-white mb-2">Skills:</h5>
                <ul className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="bg-[#8245ec] text-white px-4 py-1 text-sm rounded-lg border border-gray-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
