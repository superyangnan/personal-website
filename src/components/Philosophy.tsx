"use client";

import { motion } from "framer-motion";
import { Target, Shuffle, Lightbulb } from "lucide-react";

interface PhilosophyItem {
  icon: React.ElementType;
  title: string;
  content: string;
}

const philosophies: PhilosophyItem[] = [
  {
    icon: Target,
    title: "AI PM 必须能摸到模型的边界",
    content: "不理解 Hallucination 就无法设计好 RAG 系统，不理解 Token 经济学就无法做出可持续的 AI 产品。技术理解力不是加分项，是及格线。",
  },
  {
    icon: Shuffle,
    title: "好的 AI 产品是'专才组合'",
    content: "在 Rosebud 中，我没有用一个昂贵模型解决所有问题。DeepSeek 负责共情对话，BGE 负责语义检索——'混合路由'思维是 AI 产品降本增效的核心。",
  },
  {
    icon: Lightbulb,
    title: "用户不需要 AI，用户需要'被懂'",
    content: "Rosebud 的北极星指标不是 DAU，而是 WAA——每周主动查看洞察的用户数。因为只有当用户从数据中获得 Aha Moment，才代表产品真正创造了价值。",
  },
];

const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Philosophy() {
  return (
    <section id="philosophy" className="w-full py-24 bg-slate-900/30 scroll-mt-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-serif font-bold mb-2 border-l-4 border-accent pl-4 text-accent">
            我的 AI 产品观
          </h2>
          <p className="text-slate-400 pl-5">不只是做产品，更在思考产品</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {philosophies.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`bg-slate-800/60 border border-slate-700/30 rounded-xl p-8 relative overflow-hidden group hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1.5 transition-all duration-300 ${
                index === 2 ? "md:col-span-2 lg:col-span-1 md:w-2/3 md:mx-auto lg:w-full lg:mx-0" : ""
              }`}
            >
              {/* Top Gradient Border */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#F59E0B] to-[#10B981]"></div>
              
              {/* Quote Decoration */}
              <div className="absolute -top-4 left-2 text-[120px] leading-none text-[#F59E0B] opacity-[0.08] font-serif pointer-events-none select-none">
                &ldquo;
              </div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-[#F59E0B]/10 flex items-center justify-center mb-6 relative z-10">
                <item.icon className="text-[#F59E0B]" size={24} />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-white mb-4 relative z-10">
                {item.title}
              </h3>
              <p className="text-slate-400 text-base leading-relaxed relative z-10">
                {item.content}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
