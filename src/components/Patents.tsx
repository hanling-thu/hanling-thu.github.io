const patents = [
  {
    type: "发明专利",
    authors: "王汉凌，段经璞，汪漪",
    title: "一种网络入侵检测模型生成方法、检测方法及电子设备",
    status: "已授权",
    number: "公开号：CN112200254A",
  },
  {
    type: "发明专利",
    authors: "王汉凌，段经璞，汪漪",
    title: "基于深度学习的无监督工业品缺陷检测方法及装置",
    status: "已授权",
    number: "公开号：CN112446869A",
  },
  {
    type: "发明专利",
    authors: "李清，王汉凌，陈作舟，江勇",
    title: "一种基于背景理解和去除的边云协同实时视频分析系统",
    status: "已授权",
    number: "公开号：CN114782872A",
  },
  {
    type: "发明专利",
    authors: "李清，王汉凌，江勇",
    title: "行为识别方法、装置、设备、存储介质及产品",
    status: "已授权",
    number: "公开号：CN119251907A",
  },
  {
    type: "发明专利",
    authors: "李清，王汉凌，江勇",
    title: "基于压缩轮廓图的带宽优化目标检测方法及系统",
    status: "已授权",
    number: "公开号：CN117893882A",
  },
  {
    type: "发明专利",
    authors: "李清，王汉凌，江勇",
    title: "基于边缘设备的图像处理方法、电子设备及存储介质",
    status: "实审",
    number: "公开号：CN117058208A",
  },
  {
    type: "发明专利",
    authors: "胡宁，马增协，王汉凌，贾焰，梁都成，郑涛",
    title: "网络仿真拓扑生成方法、系统、电子设备及存储介质",
    status: "实审",
    number: "公开号：CN117354162A",
  },
  {
    type: "发明专利",
    authors: "江勇，王汉凌，李清",
    title: "基于多无人机协同的实时视频分析方法、装置、设备及存储介质",
    status: "实审",
    number: "公开号：CN119313711A",
  },
  {
    type: "PCT 专利",
    authors: "李清，王汉凌，江勇",
    title: "基于压缩轮廓图的带宽优化目标检测方法及系统",
    status: "已受理",
    number: "国际申请号：PCT/CN2024/081887",
  },
];

const renderAuthors = (authors: string) => {
  const parts = authors.split(/(王汉凌)/g);

  return parts.map((part, index) =>
    part === "王汉凌" ? (
      <strong key={index} className="font-semibold text-primary">
        {part}
      </strong>
    ) : (
      <span key={index}>{part}</span>
    ),
  );
};

const Patents = () => {
  return (
    <section id="patents" className="mb-14">
      <h2 className="mb-5 border-b border-border pb-3 font-serif text-2xl font-bold text-foreground lg:text-3xl">发明专利</h2>

      <ul className="space-y-1.5">
        {patents.map((patent, index) => (
          <li key={index} className="border-l-2 border-muted pl-4 text-sm leading-snug text-foreground/80 transition-colors hover:border-primary">
            <span className="font-medium text-foreground">{patent.title}</span>
            <span className="text-muted-foreground"> — {patent.type}，</span>
            <span className={patent.status === "已授权" ? "font-semibold text-primary" : "text-muted-foreground"}>
              {patent.status}
            </span>
            <span className="text-muted-foreground">，{patent.number}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Patents;
