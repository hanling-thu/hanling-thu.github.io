import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "PhD in Computer Science",
    institution: "Tsinghua University",
    year: "2020-2025"
  },
  {
    degree: "Algorithm Engineer (Full-time)",
    institution: "Pengcheng Laboraotory",
    year: "2020-2021"
  },
    {
    degree: "Msc in Data Science and Information Technology",
    institution: "Central South University",
    year: "2017-2020"
  },
  {
    degree: "BSc in Computer Science",
    institution: "Central South University",
    year: "2013-2017"
  }
];

const awards = [
  "2023香港博士生论坛Best Paper Award",
  "2023鹏城实验室优秀博士生",
  "2023鹏城实验室人才发展奖学金",
  "2022鹏城实验室人才发展奖学金",
  "2024清华大学校级综合优秀二等奖学金",
  "2017湖南省优秀毕业生，中南大学优秀毕业生",
  "2016国家励志奖学金"
];

const Education = () => {
  return (
    <section id="education" className="mb-16">
      <h2 className="text-3xl font-bold mb-8 font-serif border-b-2 border-primary pb-2">Education & Awards</h2>
      
      <div className="space-y-8">
        <div>
          <p className="font-semibold mb-4 flex items-center gap-2 text-lg text-foreground">
            <GraduationCap className="h-5 w-5 text-primary" />
            Education
          </p>
          <div className="space-y-3">
            {education.map((edu, index) => (
              <div key={index} className="pl-6 border-l-2 border-muted hover:border-primary transition-colors">
                <p className="text-base text-foreground/90">
                  <strong className="text-foreground">{edu.degree}</strong>, {edu.institution}, {edu.year}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <p className="font-semibold mb-4 flex items-center gap-2 text-lg text-foreground">
            <Award className="h-5 w-5 text-primary" />
            Honors & Awards
          </p>
          <ul className="space-y-2 text-base">
            {awards.map((award, index) => (
              <li key={index} className="pl-6 border-l-2 border-muted hover:border-primary transition-colors text-foreground/90">
                • {award}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
