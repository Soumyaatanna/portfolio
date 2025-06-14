import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[7vw] md:px-[10vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full z-0"></div>

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex flex-col sm:flex-row items-center mb-20 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline Circle with logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 z-10 w-16 h-16 bg-white border-4 border-[#8245ec] rounded-full flex items-center justify-center shadow-md">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Card */}
            <div
              className={`w-full sm:w-[45%] p-6 sm:p-8 mt-10 sm:mt-0 bg-gray-900 border border-white shadow-2xl rounded-2xl backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] hover:scale-105 transform transition-transform duration-300 ${
                index % 2 === 0 ? "sm:ml-auto sm:pl-12" : "sm:mr-auto sm:pr-12"
              }`}
            >
              {/* Card content */}
              <div className="mb-2">
                <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                <h4 className="text-sm text-gray-300">{edu.school}</h4>
                <p className="text-sm text-gray-500">{edu.date}</p>
              </div>
              <p className="text-gray-400 font-bold mt-2">Grade: {edu.grade}</p>
              <p className="text-gray-400 mt-2">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
