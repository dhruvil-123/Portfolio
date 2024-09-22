"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaAndroid,
  FaJava,
  FaGit,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiKotlin, SiFirebase, SiSocketdotio } from "react-icons/si";

// about data
const about = {
  title: "About me",
  description:
    "I’m an Android developer with 2 years of experience in Java and Kotlin. I specialize in Android architecture components, responsive UI/UX design, and data management with SQLite, SharedPreferences, and Room. I’m skilled in integrating APIs using Retrofit and Gson, focusing on clean code, testing, and performance optimization. I also use Git for version control.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Dhruvil Dhanani",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 94081 62478",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "Dhruvil Dhanani",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email",
      fieldValue: "dhananidhruvil0@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "I’ve worked as an Android developer, delivering seamless mobile apps. My expertise includes Android architecture, UI/UX design, data management, and API integration using Retrofit. I focus on clean code, performance optimization, and rigorous testing for high-quality apps.",
  items: [
    {
      company: "Xitij Infotech",
      position: "Senior Android Engineer",
      duration: "2023 - Present",
    },
    {
      company: "CodeClause",
      position: "Android Engineer Intern",
      duration: "2023",
    },
    {
      company: "Bow Solutions",
      position: "Android Engineer",
      duration: "2022",
    },
    {
      company: "Bow Solutions",
      position: "Android Engineer Intern",
      duration: "Summer 2022",
    },
    // {
    //   company: "Tech Academy",
    //   position: "Teaching Assistant",
    //   duration: "2019 - 2020",
    // },
    // {
    //   company: "Digital Agency",
    //   position: "UI/UX Designer",
    //   duration: "2018 - 2019",
    // },
    // {
    //   company: "Software Development Firm",
    //   position: "Junior Developer",
    //   duration: "2017 - 2018",
    // },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "I hold a Bachelor of Computer Applications (BCA) degree, which provided a solid foundation in programming, database management, and software development. My education has equipped me with the technical skills and knowledge essential for my career as an Android engineer.",
  items: [
    {
      institution: "Swarrnim Startup & Innovation University",
      degree: "Bachelor of Computer Applications",
      duration: "2024",
    },
    {
      institution: "Online Course",
      degree: "Programming Course",
      duration: "2021 - 2022",
    },
    {
      institution: "Sardar Patel Vidhayabhavan",
      degree: "HSC",
      duration: "2021",
    },
  
    // {
    //   institution: "Tech Institute",
    //   degree: "Certified Web Developer",
    //   duration: "2019",
    // },
    // {
    //   institution: "Design School",
    //   degree: "Diploma in Graphic Design",
    //   duration: "2016 - 2018",
    // },
    // {
    //   institution: "Community College",
    //   degree: "Associate Degree in Computer Science",
    //   duration: "2014 - 2016",
    // },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "I possess expertise in Android development, Java, Kotlin, and Firebase. I have working knowledge of Socket.io, basic experience with Node.js, and familiarity with Figma for UI/UX design, enabling me to build comprehensive and dynamic mobile applications.",
  skillList: [
    {
      icon: <FaAndroid />,
      name: "Android",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <SiKotlin />,
      name: "Kotlin",
    },
    {
      icon: <SiFirebase />,
      name: "Firebase",
    },
    {
      icon: <SiSocketdotio />,
      name: "Socket.io",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaGit />,
      name: "Git Version Control",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
