import { ExternalLink, Github } from "lucide-react";

const publications = [
  {
    title: "SkillCache: Capability Caching via Multi-View Coupled Skill Operators for Low-Latency Multimodal Edge Intelligence",
    authors: "Jiaqi Cui, Fumin Su, Hanling Wang†, Yuanzheng Tan, Gabriel-Miro Muntean, Qing Li†, Yong Jiang",
    venue: "ACM Multimedia (ACM MM), 2026",
    note: "CCF A",
    status: "Accepted, to appear",
  },
  {
    title: "Intelligence Delivery Network: Toward an Internet Architecture for the AI Age",
    authors: "Hanling Wang, Qing Li, Dan Zhao, Yuhong Song, Xingchi Chen, Teng Gao, Peiyuan Zong, Zhuyun Qi, Yue Yu, Yong Jiang",
    venue: "arXiv preprint, 2026",
    note: "arXiv",
    link: "https://arxiv.org/abs/2605.13235",
  },
  {
    title: "SketchVision: Bandwidth-Efficient Edge-Cloud Video Object Detection via Compressed Sketches",
    authors: "Hanling Wang, Qing Li, Zhangzhang Jiang, Zepeng Bao, Yong Jiang, Zhenhui Yuan, Gabriel-Miro Muntean",
    venue: "IEEE Transactions on Broadcasting, 2026",
    note: "JCR Q1",
    link: "https://ieeexplore.ieee.org/document/11495562",
  },
  {
    title: "JumpDASH: LLM-Based Content Perception for Intelligent Jumping DASH in Mobile Adaptive Video Streaming",
    authors: "Hanling Wang, Tianli Zhou, Qing Li, Yong Jiang, Gabriel-Miro Muntean",
    venue: "IEEE Transactions on Networking, 2025",
    note: "CCF A",
    link: "https://ieeexplore.ieee.org/document/11216135",
    // github: "",
  },
  {
    title: "Revolutionizing Training-Free NAS: Towards Efficient Automatic Proxy Discovery via Large Language Models",
    authors: "Haidong Kang, Lihong Lin, Hanling Wang",
    venue: "NeurIPS, 2025",
    note: "CCF A",
    link: "https://neurips.cc/virtual/2025/loc/san-diego/poster/120003",
    // github: "",
  },
  {
    title: "HoloTrace: LLM-based Bidirectional Causal Knowledge Graph for Edge-Cloud Video Anomaly Detection",
    authors: "Hanling Wang, Qing Li, Li Chen, Haidong Kang, Fei Ma, Yong Jiang",
    venue: "ACM Multimedia (ACM MM), 2025",
    note: "CCF A",
    doi: "https://dl.acm.org/doi/10.1145/3746027.3755185",
  },
  {
    title: "PEE: Precise ECN Encoding for Efficient Congestion Control in Data Center Networks",
    authors: "Changlin Jiang, Yi Wu, Hanling Wang, Feixue Han, Dayi Zhao, Yong Jiang, Gareth Tyson, Qing Li",
    venue: "IEEE International Conference on Distributed Computing Systems (ICDCS), 2025",
    note: "CCF B",
    doi: "https://ieeexplore.ieee.org/document/11183753",
  },
  {
    title: "VaVLM: Toward Efficient Edge-Cloud Video Analytics With Vision-Language Models",
    authors: "Yang Zhang*, Hanling Wang*, Qing Bai, Haifeng Liang, Peican Zhu, Gabriel-Miro Muntean, Qing Li",
    venue: "IEEE Transactions on Broadcasting, 2025",
    note: "JCR Q1",
    award: "IEEE BTS 2026 Scott Helt Memorial Award",
    doi: "https://ieeexplore.ieee.org/document/10947590",
  },
  {
    title: "ParaLoupe: Real-Time Video Analytics on Edge Cluster via Mini Model Parallelization",
    authors: "Hanling Wang, Qing Li, Haidong Kang, Dieli Hu, Lianbo Ma, Gareth Tyson, Zhenhui Yuan, Yong Jiang",
    venue: "IEEE Transactions on Mobile Computing, 2024",
    note: "CCF A",
    doi: "https://ieeexplore.ieee.org/document/10623423",
  },
  {
    title: "Joint Configuration Optimization and GPU Allocation for Multi-Tenant Real-Time Video Analytics on Resource-Constrained Edge",
    authors: "Hanling Wang*, Tianyu Li*, Mei Zhang*, Qing Li, Huan Cui, Yong Jiang, Zhenhui Yuan",
    venue: "IEEE Transactions on Mobile Computing, 2024",
    note: "CCF A",
    doi: "https://ieeexplore.ieee.org/document/10684974",
  },
  {
    title: "CL-Shield: A Continuous Learning System for Protecting User Privacy",
    authors: "Tianyu Li, Hanling Wang, Qing Li, Yong Jiang, Zhenhui Yuan",
    venue: "IEEE Transactions on Mobile Computing, 2024",
    note: "CCF A",
    doi: "https://ieeexplore.ieee.org/document/10764772/",
  },
  {
    title: "SkyNet: Multi-Drone Cooperation for Real-Time Person Identification and Localization",
    authors: "Junkun Peng, Qing Li, Yuanzheng Tan, Dan Zhao, Zhenhui Yuan, Jinhua Chen, Hanling Wang, Yong Jiang",
    venue: "IEEE INFOCOM, 2023",
    note: "CCF A",
    doi: "https://ieeexplore.ieee.org/document/10228978",
  },
  {
    title: "VaBUS: Edge-Cloud Real-Time Video Analytics via Background Understanding and Subtraction",
    authors: "Hanling Wang, Qing Li, Heyang Sun, Zuozhou Chen, Yingqian Hao, Junkun Peng, Zhenhui Yuan, Junsheng Fu, Yong Jiang",
    venue: "IEEE Journal on Selected Areas in Communications, 2023",
    note: "CCF A",
    award: "Best Paper Award, 2023 International Doctoral Forum at CUHK",
    doi: "https://ieeexplore.ieee.org/document/9953098/",
    // github: "https://github.com/kongyanye/VaBUS",
  },
  {
    title: "Poster Abstract: Anomaly Detection in Surface Mount Technology Process Using Multi-Modal Data",
    authors: "Mingyang Li, Hanling Wang, Yue Zhang, Shao-Lun Huang, Lin Zhang",
    venue: "ACM SenSys, 2019",
    note: "CCF B poster",
    doi: "https://dl.acm.org/doi/10.1145/3356250.3361942",
  },
  {
    title: "Poster Abstract: Unsupervised Anomaly Detection via Generative Adversarial Networks",
    authors: "Hanling Wang, Mingyang Li, Fei Ma, Shao-Lun Huang, Lin Zhang",
    venue: "ACM/IEEE IPSN, 2019",
    note: "CCF B poster",
    doi: "https://ieeexplore.ieee.org/document/8732560",
  },
];

const renderAuthors = (authors: string) => {
  const parts = authors.split(/(Hanling Wang|王汉凌)/g);

  return parts.map((part, index) =>
    part === "Hanling Wang" || part === "王汉凌" ? (
      <strong key={index} className="font-semibold text-primary">
        {part}
      </strong>
    ) : (
      <span key={index}>{part}</span>
    ),
  );
};

const getNoteClassName = (note: string) =>
  note === "CCF A"
    ? "bg-primary/10 text-primary"
    : note.includes("JCR")
      ? "bg-secondary text-foreground/80"
      : "bg-accent/10 text-accent";

const getPublicationLink = (pub: { doi?: string; link?: string }) =>
  pub.doi ? `https://doi.org/${pub.doi}` : pub.link;

const Publications = () => {
  return (
    <section id="publications" className="mb-14">
      <div className="mb-5 flex flex-col gap-2 border-b border-border pb-3 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="font-serif text-2xl font-bold text-foreground lg:text-3xl">Selected Publications</h2>
        <a
          href="https://scholar.google.com/citations?user=LhUh3sYAAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-link hover:underline"
        >
          Google Scholar
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>

      <p className="mb-4 text-sm text-muted-foreground">
        * Equal contribution  † Corresponding author
      </p>

      <ul className="space-y-4">
        {publications.map((pub, index) => (
          <li key={index} className="border-l-2 border-muted pb-2 pl-4 text-base transition-colors hover:border-primary">
            <p className="mb-1.5 font-semibold leading-snug text-foreground">
              {pub.title}
              {getPublicationLink(pub) && (
                <a
                  href={getPublicationLink(pub)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 whitespace-nowrap text-sm font-medium text-link hover:underline"
                >
                  [link]
                </a>
              )}
              {pub.github && (
                <a
                  href={pub.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 inline-flex items-center gap-1 whitespace-nowrap text-sm font-medium text-link hover:underline"
                >
                  <Github className="h-4 w-4" />
                  [GitHub]
                </a>
              )}
            </p>
            <p className="mb-1 text-sm leading-snug text-muted-foreground">
              {renderAuthors(pub.authors)}
            </p>
            <p className="text-sm leading-snug">
              <em className="text-foreground/80">{pub.venue}</em>
              {pub.status && (
                <span className="text-muted-foreground"> ({pub.status})</span>
              )}
              {pub.note && (
                <span className={`ml-2 rounded px-2 py-0.5 text-xs font-semibold ${getNoteClassName(pub.note)}`}>
                  {pub.note}
                </span>
              )}
              {pub.award && (
                <span className="ml-2 rounded bg-rose-100 px-2 py-0.5 text-xs font-semibold text-rose-700 ring-1 ring-inset ring-rose-200">
                  {pub.award}
                </span>
              )}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Publications;
