export interface Profile {
  name: string;
  title: string;
  tagline: string;
  email: string;
  linkedin: string;
  github: string;
  summary: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location?: string;
  period: string;
  points: string[];
}

export interface ProjectItem {
  title: string;
  category: string;
  description: string;
  githubUrl?: string;
  isFeatured: boolean;
  tags?: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details?: string;
  score?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface PortfolioData {
  navLinks: NavLink[];
  profile: Profile;
  skills: SkillCategory[];
  experience: ExperienceItem[];
  featuredProjects: ProjectItem[];
  moreProjects: ProjectItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  footer: {
    copyright: string;
    note: string;
  };
}

export const content: PortfolioData = {
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],
  profile: {
    name: "Alwin Joseph",
    title: "Aspiring Data Scientist & AI Engineer",
    tagline: "Machine Learning & Computer Vision",
    email: "alwinjoseph541@gmail.com",
    linkedin: "https://www.linkedin.com/in/alwin-joseph541/",
    github: "https://github.com/Alwin541",
    summary:
      "AI and Robotics undergraduate with hands-on experience building and deploying machine learning, deep learning, computer vision, and NLP systems across internships and independent projects. Proficient in Python, PyTorch, TensorFlow, and Scikit-learn across the end-to-end ML lifecycle, with added experience in YOLOv8 object detection, transformer/RAG architectures, and FastAPI backends. Delivered a multimodal RAG platform with hybrid retrieval and evaluation pipelines, a client attendance system, and models for healthcare risk and defect prediction.",
  },
  skills: [
    {
      category: "Machine Learning & Deep Learning",
      skills: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn"],
    },
    {
      category: "Computer Vision",
      skills: ["YOLOv8", "OpenCV", "Object Detection", "Image Segmentation"],
    },
    {
      category: "NLP",
      skills: ["LangChain", "RAG", "Transformers", "Hugging Face"],
    },
    {
      category: "Data Analysis",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "EDA"],
    },
    {
      category: "Web Development",
      skills: ["React", "Flask", "FastAPI", "MySQL"],
    },
    {
      category: "Languages & Tools",
      skills: ["Python", "C/C++", "MATLAB", "SQL", "Docker", "Git", "GitHub"],
    },
  ],
  experience: [
    {
      role: "Student Ambassador",
      company: "MathWorks",
      location: "Bengaluru",
      period: "Oct 2025 – Present",
      points: [
        "Promote and demo MATLAB and Simulink through campus workshops and technical sessions",
        "Partner with faculty and the MathWorks team to drive student engagement and tool adoption",
      ],
    },
    {
      role: "AI Intern",
      company: "Sashma Group Private Ltd",
      period: "Jul 2026",
      points: [
        "Developed an employee attendance tracking system for a client, integrating with the Zeplris attendance platform",
      ],
    },
    {
      role: "Data Science Intern",
      company: "1stop",
      location: "Bengaluru",
      period: "Apr 2025 – Jun 2025",
      points: [
        "Built and evaluated classification models for heart failure risk prediction to support earlier identification of high-risk patients",
        "Performed EDA and feature engineering on clinical data to identify key predictors of patient risk",
        "Conducted univariate and bivariate statistical analysis to guide model selection and tuning",
      ],
    },
  ],
  featuredProjects: [
    {
      title: "CiteLens AI",
      category: "Multimodal RAG System",
      description:
        "Multimodal RAG over PDFs, scanned images (OCR) and audio. Hybrid retrieval (dense embeddings + BM25) with a cross-encoder reranker. Claim-level citation validation and confidence-based refusals to prevent hallucination. Evaluation suite tracking Hit Rate@K, MRR, and citation precision/recall.",
      githubUrl: "https://github.com/Alwin541/CiteLens-AI",
      isFeatured: true,
      tags: ["Multimodal RAG", "Hybrid Search", "Citation Validation", "OCR"],
    },
    {
      title: "PCB Defect Detection",
      category: "Computer Vision",
      description:
        "YOLOv8 model that detects PCB manufacturing defects in real time from a custom-labeled dataset.",
      githubUrl: "https://github.com/Alwin541/PCB-defect-detection-using-YOLOv8",
      isFeatured: true,
      tags: ["YOLOv8", "Computer Vision", "Real-Time Detection", "Quality Control"],
    },
    {
      title: "Screen Time vs Academic Performance Analyzer",
      category: "Data Analysis",
      description:
        "Analyzes the relationship between students' screen time and their academic performance.",
      githubUrl:
        "https://github.com/Alwin541/Screen-time-vs-Academic-performance-of-student-analyzer",
      isFeatured: true,
      tags: ["Data Analysis", "EDA", "Statistical Analysis"],
    },
  ],
  moreProjects: [
    {
      title: "Battery Quality Prediction",
      category: "Machine Learning",
      description:
        "Pass/Fail classifier for lithium-ion battery quality. Handled class imbalance, validated with ROC-AUC.",
      isFeatured: false,
      tags: ["Classification", "ROC-AUC", "Imbalance Handling"],
    },
    {
      title: "Customer Churn Prediction",
      category: "Data Science",
      description:
        "End-to-end churn model on the BankChurners dataset, comparing Logistic Regression and Random Forest.",
      isFeatured: false,
      tags: ["Logistic Regression", "Random Forest", "Evaluation"],
    },
    {
      title: "NLP Translator (English → Malayalam)",
      category: "Deep Learning & NLP",
      description:
        "Transformer-based translation system (Hugging Face) with a FastAPI backend and React frontend.",
      isFeatured: false,
      tags: ["Transformers", "Hugging Face", "FastAPI", "React"],
    },
  ],
  education: [
    {
      degree: "B.Tech, Robotics and Artificial Intelligence",
      institution: "Dayanandasagar College of Engineering",
      period: "2023 – 2027 (expected)",
      details:
        "Coursework: Applied AI for Industrial Applications, NLP, Control Systems, Digital Electronics",
    },
    {
      degree: "Higher Secondary (Computer Science & Mathematics)",
      institution: "Citadel Residential School",
      period: "2021 – 2023",
      score: "First Class with Distinction",
    },
  ],
  certifications: [
    {
      title: "Neural Networks for Computer Vision and NLP",
      issuer: "NPTEL",
    },
    {
      title: "Data Science: Data Preparation and EDA with Python",
      issuer: "Udemy",
    },
    {
      title: "SQL for Data Science",
      issuer: "Udemy",
    },
  ],
  footer: {
    copyright: "© 2026 Alwin Joseph. All rights reserved.",
    note: "Crafted with Vite, React, TypeScript & Tailwind CSS",
  },
};
