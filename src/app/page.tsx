"use client";

import { MoveRight, FileText, Brain, PenTool, TrendingUp, ExternalLink, ArrowDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Typewriter from "@/components/Typewriter";
import PhoneMockup from "@/components/PhoneMockup";
import Experience from "@/components/Experience";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";

export default function Home() {
  const typewriterTexts = [
    "懂边界、能落地的 AI 产品技术复合人才",
    "从 0→1 独立设计并上线 AI 心理产品",
    "电子科技大学 × 港中深 AI 硕士",
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const skills = [
    {
      icon: Brain,
      title: "AI 技术深度",
      desc: "精通 RAG、向量检索、大模型微调与 Prompt Engineering，能精准评估模型能力边界",
    },
    {
      icon: PenTool,
      title: "产品设计力",
      desc: "从用户痛点到 PRD 到原型，独立完成 Rosebud 全产品设计与上线",
    },
    {
      icon: TrendingUp,
      title: "商业落地感",
      desc: "深谙模型降本策略，设计混合大模型路由方案，极致压缩 API 成本",
    },
  ];

  return (
    <div className="flex flex-col animate-gradient-flow min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-start container mx-auto px-6 pt-20 relative overflow-hidden">
        <div className="space-y-6 max-w-4xl z-10">
          {/* Identity Label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0 }}
            className="text-secondary font-mono text-sm md:text-base tracking-wider uppercase mb-2"
          >
            AI Product Builder
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-serif font-bold leading-tight"
          >
            你好，我是<span className="text-accent">杨楠</span>。
          </motion.h1>

          {/* Typewriter Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-300 max-w-3xl font-light h-20 md:h-12 flex items-center"
          >
            <Typewriter texts={typewriterTexts} />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-8 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#projects"
              className="flex items-center justify-center gap-2 bg-accent text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-amber-400 transition-all transform hover:scale-105 shadow-lg shadow-amber-900/20"
            >
              查看我的作品 <MoveRight size={20} />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-slate-600 text-slate-300 px-8 py-4 rounded-full font-bold hover:bg-slate-800 hover:border-slate-500 transition-all transform hover:scale-105"
            >
              下载简历 <FileText size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        className="container mx-auto px-6 py-24 scroll-mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-serif font-bold mb-2 border-l-4 border-secondary pl-4 text-secondary">
          关于我
        </h2>
        <p className="text-slate-400 mb-12 pl-5">我的背景与技术栈</p>
        
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left Column - 40% */}
          <div className="w-full md:w-[40%] flex flex-col items-center justify-center space-y-6">
            <motion.div 
              className="relative w-[200px] h-[200px] bg-slate-800 rounded-2xl flex items-center justify-center overflow-hidden cursor-pointer shadow-xl shadow-slate-900/50"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Image 
                src="/avatar.png" 
                alt="杨楠" 
                fill
                className="object-cover"
                priority
              />
            </motion.div>
            
            <div className="text-center space-y-2">
              <h3 className="text-3xl font-bold text-white">杨楠</h3>
              <p className="text-secondary font-medium">AI 产品经理 / 全栈开发者</p>
            </div>
          </div>

          {/* Right Column - 60% */}
          <div className="w-full md:w-[60%] space-y-8">
            <p className="text-lg text-slate-300 leading-relaxed">
              985 本科 + 港中深 AI 硕士，曾在华为小艺业务部实习。我相信最好的 AI 产品经理，是能亲手把想法变成可运行原型的人。从痛点洞察到架构设计再到上线部署，我追求的是完整闭环的交付能力。
            </p>

            {/* Skill Cards */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
              variants={cardContainerVariants}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="bg-slate-800/60 border border-slate-700/30 p-5 rounded-xl backdrop-blur-sm group hover:border-accent transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <div className="mb-3">
                    <skill.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="text-white font-bold mb-2">{skill.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {skill.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="w-full py-24 bg-slate-900/30 scroll-mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold mb-2 border-l-4 border-accent pl-4 text-accent">
            核心作品
          </h2>
          <p className="text-slate-400 mb-12 pl-5">独立设计与开发的代表项目</p>

          {/* Part 1: Rosebud */}
          <motion.div 
            className="w-full bg-[#1E293B] rounded-2xl p-8 md:p-12 mb-20 border border-slate-700/50 shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Module A: Header */}
            <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold text-white">心迹日记 Rosebud</h3>
                <p className="text-xl text-secondary font-medium">AI 心理伴侣与深度觉察日记</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["AI 心理", "RAG 长期记忆", "全栈独立开发", "2026.02"].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300 border border-slate-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <a 
                  href="https://rosebud-omega.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-accent text-slate-900 px-6 py-3 rounded-lg font-bold hover:bg-amber-400 transition-colors"
                >
                  在线体验 <ExternalLink size={18} />
                </a>
                <a 
                  href="https://my.feishu.cn/wiki/UMyBwTuZyi3g6QklUSscVsAYnWb?from=from_copylink" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-slate-600 text-slate-300 px-6 py-3 rounded-lg font-medium hover:bg-slate-800 hover:border-slate-500 transition-colors"
                >
                  查看 PRD <FileText size={18} />
                </a>
              </div>
            </div>

            {/* Module B: Pain/Solution */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {[
                {
                  pain: "深夜情绪无处倾诉",
                  old: "通用 AI 聊完就忘",
                  new: "全天候 AI 伴侣 + RAG 长期记忆",
                },
                {
                  pain: "写了很多日记看不见成长",
                  old: "传统日记是单向黑洞",
                  new: "洞察周报 + 心智模式识别",
                },
                {
                  pain: "AI 对话缺乏深度连续性",
                  old: "ChatGPT 无法记住上周的你",
                  new: "分级记忆引擎 + 时间衰减算法",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 flex flex-col gap-4">
                  <div>
                    <span className="text-red-400 text-xs font-bold uppercase tracking-wider">痛点</span>
                    <p className="text-slate-200 font-medium mt-1">{item.pain}</p>
                  </div>
                  <hr className="border-slate-700/50" />
                  <div>
                    <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">传统方案</span>
                    <p className="text-slate-400 text-sm mt-1">{item.old}</p>
                  </div>
                  <hr className="border-slate-700/50" />
                  <div>
                    <span className="text-accent text-xs font-bold uppercase tracking-wider">Rosebud 解法</span>
                    <p className="text-emerald-400 font-medium mt-1">{item.new}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Module C: Tech Architecture */}
            <div className="mb-16">
              <h3 className="text-xl font-bold text-white mb-8 border-l-4 border-accent pl-3">核心技术架构</h3>
              <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 overflow-x-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 min-w-[600px] md:min-w-0">
                  {/* Row 1 */}
                  <div className="flex flex-col md:flex-row items-center gap-2 w-full justify-between">
                    {[
                      "用户输入", 
                      "意图解析 DeepSeek", 
                      "多路召回 BGE-M3 + pgvector", 
                      "Rerank 精排", 
                      "共情生成"
                    ].map((step, i, arr) => (
                      <div key={step} className="flex flex-col md:flex-row items-center gap-2 flex-1 w-full md:w-auto">
                        <div className="bg-slate-800 border border-slate-700 text-slate-200 px-4 py-3 rounded-lg text-sm font-medium text-center w-full md:w-auto relative group">
                          {step}
                          {step.includes("BGE") && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-slate-900 text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">1024维向量</span>}
                          {step.includes("Rerank") && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-slate-900 text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Top-20→Top-5</span>}
                        </div>
                        {i < arr.length - 1 && (
                          <ArrowRight className="text-slate-600 rotate-90 md:rotate-0 flex-shrink-0 my-2 md:my-0" size={20} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Connector Down */}
                <div className="flex justify-end pr-8 md:pr-12 py-2">
                   <ArrowDown className="text-slate-600" size={24} />
                </div>

                {/* Row 2 */}
                <div className="flex flex-col md:flex-row items-center justify-end gap-2 min-w-[600px] md:min-w-0">
                   {[
                      "异步睡眠巩固", 
                      "L1 瞬时记忆", 
                      "L2 片段洞察", 
                      "L3 核心基石"
                    ].map((step, i, arr) => (
                      <div key={step} className="flex flex-col md:flex-row items-center gap-2">
                        <div className="bg-slate-800 border border-slate-700 text-slate-200 px-4 py-3 rounded-lg text-sm font-medium text-center w-full md:w-auto relative group">
                          {step}
                          {step.includes("核心基石") && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-slate-900 text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Supabase RLS</span>}
                        </div>
                        {i < arr.length - 1 && (
                          <ArrowRight className="text-slate-600 rotate-90 md:rotate-0 flex-shrink-0 my-2 md:my-0" size={20} />
                        )}
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Module D: Screenshots */}
            <div>
              <h3 className="text-xl font-bold text-white mb-8 border-l-4 border-accent pl-3">产品界面</h3>
              
              {/* Radial Gradient Background for Spotlight Effect */}
              <div className="relative w-full py-10 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,158,11,0.05),_transparent_70%)] pointer-events-none"></div>
                
                <div className="flex overflow-x-auto gap-8 px-4 pb-12 snap-x snap-mandatory scrollbar-hide items-start">
                  {[
                    { title: "每日仪式 · 晨间意向与晚间反思", src: "/images/rosebud/rosebud-1-daily.png", alt: "每日仪式" },
                    { title: "探索心迹 · 像搜索谷歌一样搜索自己", src: "/images/rosebud/rosebud-3-explore.png", alt: "探索心迹" },
                    { title: "洞察周报 · 深度综合分析与行为模式", src: "/images/rosebud/rosebud-4-insights.png", alt: "洞察周报" },
                    { title: "情绪可视化 · 频率统计与核心主题", src: "/images/rosebud/rosebud-5-emotions.png", alt: "情绪可视化" },
                    { title: "历史时间轴 · 回顾你的心路历程", src: "/images/rosebud/rosebud-6-history.png", alt: "历史时间轴" }
                  ].map((item, i) => (
                    <div key={i} className="snap-center flex-shrink-0 first:pl-4 last:pr-4">
                      <PhoneMockup 
                        src={item.src} 
                        alt={item.alt} 
                        title={item.title} 
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Part 2: Other Projects */}
          <h3 className="text-2xl font-serif font-bold mb-8 text-slate-200">其他项目</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <motion.div 
              className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-8 hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="flex flex-wrap gap-2 mb-4">
                {["语义检索", "对比学习", "数据飞轮", "BGE 微调"].map(tag => (
                  <span key={tag} className="px-2 py-0.5 bg-accent/10 text-accent text-xs rounded-full border border-accent/20">
                    {tag}
                  </span>
                ))}
              </div>
              <h4 className="text-xl font-bold text-white mb-2">华为小艺 · 新工具语义召回系统</h4>
              <p className="text-slate-400 text-sm mb-4">2025.06 - 2025.08</p>
              <p className="text-slate-300 leading-relaxed text-sm">
                针对新工具冷启动难题，设计纯语义召回 + RRF 方案。构建 35K+ 高质量训练样本，对比学习微调 BGE 模型，召回准确率从 60% 跃升至 98.9%。
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-8 hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="flex flex-wrap gap-2 mb-4">
                {["ReAct Agent", "RAG", "医疗 AI", "LangChain"].map(tag => (
                  <span key={tag} className="px-2 py-0.5 bg-accent/10 text-accent text-xs rounded-full border border-accent/20">
                    {tag}
                  </span>
                ))}
              </div>
              <h4 className="text-xl font-bold text-white mb-2">基于 LangChain 的智能药师助理</h4>
              <p className="text-slate-400 text-sm mb-4">2025.02</p>
              <p className="text-slate-300 leading-relaxed text-sm">
                针对药师咨询场景设计 ReAct 架构 Agent，构建垂直 RAG 检索系统接入权威药品数据，召回准确率 90%+。引入多线程并发优化，响应延迟降低 40%。
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <Experience />

      {/* Philosophy Section */}
      <Philosophy />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
