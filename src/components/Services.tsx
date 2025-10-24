import { Users, BookOpen } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Professional Activities</h2>
      
      <div className="space-y-4">
        <div>
          <p className="font-semibold mb-2 flex items-center gap-2">
            <Users className="h-4 w-4" />
            Program Committee Member
          </p>
          <p className="text-base leading-relaxed ml-6">
            ACM CoNEXT 2026
          </p>
        </div>
        
        <div>
          <p className="font-semibold mb-2 flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            Reviewer
          </p>
          <p className="text-base leading-relaxed ml-6">
            IEEE JSAC, Computer Networks, WWW 2025
          </p>
        </div>
        
        <div>
          <p className="font-semibold mb-2">
            专委会委员
          </p>
          <ul className="list-disc list-inside ml-6 text-base space-y-1">
            <li>CCF分布式计算与系统专委会执行委员</li>
            <li>CCF互联网专委会执行委员</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
