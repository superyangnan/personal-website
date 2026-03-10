"use client";

import { motion } from "framer-motion";

interface ExperienceItem {
  id: number;
  time: string;
  title: string;
  role: string;
  desc: string;
  color: string;
  bgColor: string;
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    time: "2026.02",
    title: "心迹日记 Rosebud",
    role: "独立产品经理 / 全栈开发者",
    desc: "从 0 到 1 设计并上线 AI 心理伴侣产品，独创分级记忆引擎与混合大模型路由方案",
    color: "#F59E0B", // accent 琥珀橙
    bgColor: "rgba(245, 158, 11, 0.1)",
  },
  {
    id: 2,
    time: "2025.06 - 2025.08",
    title: "华为技术有限公司",
    role: "AI 实习工程师 · 小艺业务部",
    desc: "主导新工具语义召回系统优化，构建 35K+ 高质量训练样本，召回准确率提升至 98.9%",
    color: "#10B981", // secondary 薄荷绿
    bgColor: "rgba(16, 185, 129, 0.1)",
  },
  {
    id: 3,
    time: "2024.09 - 至今",
    title: "香港中文大学（深圳）",
    role: "人工智能与机器人硕士 · 数据科学学院",
    desc: "研究方向：大语言模型应用与 RAG 系统",
    color: "#3B82F6", // 蓝色
    bgColor: "rgba(59, 130, 246, 0.1)",
  },
  {
    id: 4,
    time: "2018.09 - 2023.06",
    title: "电子科技大学（985）",
    role: "计算机科学与技术本科",
    desc: "计算机科学与工程学院，班级团支书，带领团支部获评校级优秀",
    color: "#3B82F6", // 蓝色
    bgColor: "rgba(59, 130, 246, 0.1)",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="container mx-auto px-6 py-24 scroll-mt-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl font-serif font-bold mb-2 border-l-4 border-secondary pl-4 text-secondary">
          职业经历
        </h2>
        <p className="text-slate-400 pl-5">我的职业生涯与教育背景</p>
      </motion.div>

      <div className="relative">
        {/* Vertical Line */}
        <motion.div 
          className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#F59E0B] to-[#3B82F6] origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        />

        <div className="space-y-12">
          {experiences.map((item, index) => (
            <div key={item.id} className={`relative flex items-center md:justify-between ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
              
              {/* Dot */}
              <div className="absolute left-[11px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 z-10">
                <motion.div 
                  className="w-full h-full rounded-full relative"
                  style={{ backgroundColor: item.color }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute -inset-1 rounded-full opacity-30 animate-pulse" style={{ backgroundColor: item.color }}></div>
                </motion.div>
              </div>

              {/* Spacer for desktop layout */}
              <div className="hidden md:block w-5/12"></div>

              {/* Content Card */}
              <motion.div 
                className="ml-12 md:ml-0 w-full md:w-5/12 relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-slate-800/60 border border-slate-700/30 rounded-xl p-6 hover:bg-slate-800/80 transition-colors">
                  {/* Arrow for Desktop */}
                  <div 
                    className={`hidden md:block absolute top-6 w-0 h-0 border-y-[8px] border-y-transparent ${
                      index % 2 === 0 
                        ? "-right-2 border-l-[8px] border-l-slate-700/30" 
                        : "-left-2 border-r-[8px] border-r-slate-700/30"
                    }`}
                  ></div>
                  
                  {/* Arrow for Mobile */}
                  <div className="md:hidden absolute top-6 -left-2 w-0 h-0 border-y-[8px] border-y-transparent border-r-[8px] border-r-slate-700/30"></div>

                  <span 
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-3"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.time}
                  </span>
                  
                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-secondary font-medium text-sm mb-3">{item.role}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
