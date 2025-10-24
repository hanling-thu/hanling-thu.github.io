import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "PhD in Computer Science",
    institution: "Tsinghua University",
    year: "2019-2024"
  },
  {
    degree: "Visiting Scholar",
    institution: "Politecnico di Milano (CSC-funded)",
    year: "2023-2024"
  },
  {
    degree: "BEng in Computer Science",
    institution: "Sun Yat-sen University",
    year: "2015-2019"
  }
];

const awards = [
  "腾讯青云计划 (Tencent Qingyun Program)",
  "国家留学基金委资助 (CSC Scholarship)",
  "协助指导学生获华五推免offer",
  "协助指导学生获大厂人才计划offer"
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
