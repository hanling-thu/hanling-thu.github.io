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
    <section id="education" className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Education & Awards</h2>
      
      <div className="space-y-6">
        <div>
          <p className="font-semibold mb-3 flex items-center gap-2">
            <GraduationCap className="h-4 w-4" />
            Education
          </p>
          <div className="space-y-2 ml-6">
            {education.map((edu, index) => (
              <div key={index}>
                <p className="text-base">
                  <strong>{edu.degree}</strong>, {edu.institution}, {edu.year}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <p className="font-semibold mb-3 flex items-center gap-2">
            <Award className="h-4 w-4" />
            Honors & Awards
          </p>
          <ul className="list-disc list-inside space-y-1 ml-6 text-base">
            {awards.map((award, index) => (
              <li key={index}>{award}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
