import { ArrowLeft } from 'lucide-react'

/* ════════════════════════════════════════════
   PORTFOLIO VIEWER — 杨烁作品集（2025秋）
   前半部分：研究生毕设（7张图片）
   后半部分：PDF页面浏览，26页（已移除1,14,23,29,31-41页）
   ════════════════════════════════════════════ */

const THESIS_IMAGES = [
  '/thesis/1.png',
  '/thesis/2.png',
  '/thesis/3.png',
  '/thesis/4.png',
  '/thesis/5.png',
  '/thesis/6.png',
  '/thesis/7.png',
]

const PAGES = Array.from({ length: 26 }, (_, i) => `/portfolio-2025/page-${String(i + 1).padStart(2, '0')}.jpg`)

export default function PortfolioViewerPage({ onBack }: { onBack?: () => void }) {
  return (
    <div className="min-h-screen bg-[#080808] text-white">
      {/* ── 返回按钮 ── */}
      <button
        onClick={onBack}
        className="fixed top-5 left-5 z-[100] glass-bubble-pop rounded-full flex items-center gap-2 text-white text-[13px] font-medium px-5 py-2 hover:bg-white/[0.12] transition-all"
      >
        <ArrowLeft size={14} />
        <span>返回</span>
      </button>

      {/* ── 页面标题 ── */}
      <div className="max-w-[1100px] mx-auto px-6 sm:px-10 lg:px-16 pt-20 pb-8">
        <p className="text-[11px] font-medium text-[#F26522]/50 tracking-[0.15em] uppercase mb-3">PORTFOLIO 2025</p>
        <h1 className="text-[clamp(1.8rem,4.5vw,3.5rem)] font-medium leading-[1.1] tracking-[-0.03em] mb-4" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
          杨烁 作品集
        </h1>
        <p className="text-[#EBEBF5]/50 text-[13px] sm:text-[15px] max-w-lg leading-relaxed font-light">
          研究生毕设效果图均为AI生成
        </p>
      </div>

      {/* ════════════════════════════════════════
          研究生毕设
          ════════════════════════════════════════ */}
      <section className="max-w-[1100px] mx-auto px-6 sm:px-10 lg:px-16 pb-20">
        {/* 分区标题 */}
        <div className="border-t border-white/[0.12] pt-10 mb-10">
          <p className="text-[11px] font-medium text-[#F26522]/50 tracking-[0.15em] uppercase mb-3">GRADUATION THESIS</p>
          <h2 className="text-[clamp(1.4rem,3vw,2.2rem)] font-medium leading-[1.15] tracking-[-0.02em] mb-3" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
            研究生毕设
          </h2>
          <p className="text-[#EBEBF5]/40 text-[13px] sm:text-[14px] max-w-xl leading-relaxed font-light">
            研究生毕业设计作品完整展示
          </p>
        </div>

        {/* 图片纵向排列，两边对齐 */}
        <div className="flex flex-col gap-4 sm:gap-6">
          {THESIS_IMAGES.map((src, idx) => (
            <div
              key={idx}
              className="w-full rounded-lg overflow-hidden border border-white/[0.06] bg-white/[0.01] shadow-lg"
            >
              <img
                src={src}
                alt={`研究生毕设 第${idx + 1}张`}
                className="w-full h-auto block"
                loading={idx < 2 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          作品集（2025秋）
          ════════════════════════════════════════ */}
      <section className="max-w-[1100px] mx-auto px-6 sm:px-10 lg:px-16 pb-32">
        {/* 分区标题 */}
        <div className="border-t border-white/[0.12] pt-10 mb-10">
          <p className="text-[11px] font-medium text-[#F26522]/50 tracking-[0.15em] uppercase mb-3">PORTFOLIO 2025 AUTUMN</p>
          <h2 className="text-[clamp(1.4rem,3vw,2.2rem)] font-medium leading-[1.15] tracking-[-0.02em] mb-3" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
            作品集（2025秋）
          </h2>
        </div>

        {/* PDF 页面浏览 */}
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          {PAGES.map((src, idx) => (
            <div
              key={idx}
              className="w-full rounded-lg overflow-hidden border border-white/[0.06] bg-white/[0.01] shadow-lg"
            >
              <img
                src={src}
                alt={`作品集 第${idx + 1}页`}
                className="w-full h-auto block"
                loading={idx < 3 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>

        {/* 底部页码指示 */}
        <div className="mt-12 text-center">
          <p className="text-[12px] text-[#EBEBF5]/30 font-light tracking-wider">
            — 共 {PAGES.length} 页 · 作品集完 —
          </p>
        </div>
      </section>
    </div>
  )
}
