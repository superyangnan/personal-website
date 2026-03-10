"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageCircle, FileText, ExternalLink, Check } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyWeChat = () => {
    navigator.clipboard.writeText("13644744658");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="contact"
      className="w-full py-32 bg-gradient-to-b from-[#0F172A] to-[#020617] scroll-mt-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-xl text-secondary font-medium">
            期待与你交流 AI 产品的一切
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Card 1: Email */}
          <motion.a
            href="mailto:nanyang4@link.cuhk.edu.cn"
            className="group relative bg-slate-800/40 border border-slate-700/30 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-slate-800/80 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            variants={itemVariants}
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 text-accent group-hover:scale-110 transition-transform duration-300">
              <Mail size={24} />
            </div>
            <h3 className="text-white font-bold mb-2">邮箱</h3>
            <p className="text-slate-400 text-sm break-all">nanyang4@link.cuhk.edu.cn</p>
          </motion.a>

          {/* Card 2: WeChat */}
          <motion.div
            onClick={handleCopyWeChat}
            className="group relative bg-slate-800/40 border border-slate-700/30 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-slate-800/80 hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer"
            variants={itemVariants}
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4 text-secondary group-hover:scale-110 transition-transform duration-300">
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.div
                    key="check"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    <Check size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="message"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    <MessageCircle size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <h3 className="text-white font-bold mb-2">微信</h3>
            <p className="text-slate-400 text-sm">{copied ? "已复制！" : "13644744658"}</p>
          </motion.div>

          {/* Card 3: Resume */}
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-slate-800/40 border border-slate-700/30 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-slate-800/80 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            variants={itemVariants}
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 text-blue-500 group-hover:scale-110 transition-transform duration-300">
              <FileText size={24} />
            </div>
            <h3 className="text-white font-bold mb-2">简历下载</h3>
            <p className="text-slate-400 text-sm flex items-center gap-1">
              查看完整简历 PDF <ExternalLink size={12} />
            </p>
          </motion.a>
        </motion.div>

        {/* Product Link */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-slate-400 font-medium">或者，直接体验我的作品</span>
          <a
            href="https://rosebud-omega.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-accent text-slate-900 px-6 py-3 rounded-lg font-bold hover:bg-amber-400 transition-all shadow-lg shadow-amber-900/20 hover:scale-105"
          >
            打开心迹日记 Rosebud <ExternalLink size={18} />
          </a>
        </motion.div>

        {/* Footer */}
        <div className="border-t border-slate-700/30 pt-16 text-center space-y-4">
          <p className="text-slate-400 text-sm">
            © 2026 杨楠 · Built with AI-Assisted Coding & ❤️
          </p>
          <p className="text-slate-500 text-sm">
            Powered by Next.js · Deployed on Vercel
          </p>
          <p className="text-slate-600 text-xs pt-4 max-w-xl mx-auto leading-relaxed">
            这个网站从设计到部署，全程使用 AI 辅助完成。我用 Claude 设计 PRD，用 Trae 生成代码，用 Vercel 一键部署。这就是我理解的 AI-Native 工作方式。
          </p>
        </div>
      </div>
    </section>
  );
}
