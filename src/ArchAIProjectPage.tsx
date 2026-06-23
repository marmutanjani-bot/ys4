import { ArrowLeft } from 'lucide-react'

/* ════════════════════════════════════════════
   ARCH AI PROJECT PAGE — 建筑公司AIGC全案设计
   区域划分：
     ① HERO          — 封面大图
     ② OVERVIEW      — 项目概述 & AI工具栈
     ③ WORKFLOW      — 工作流总览 (Nanobanana+ComfyUI / Midjourney+ComfyUI)
     ④ SKETCH_RENDER_INT — 草图转渲染：室内篇（放大+局部重绘+细节）
     ⑤ SKETCH_RENDER_ARCH — 草图转渲染：建筑篇
     ⑥ MODIFY        — 图像修改与优化
     ⑦ ARCH_DESIGN   — 建筑设计表达流程
     ⑧ INTERIOR_DESIGN — 室内设计表达流程
     ⑨ COMMERCIAL    — 商业空间草图转渲染
   ════════════════════════════════════════════ */

export default function ArchAIProjectPage({ onBack }: { onBack?: () => void }) {

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

      {/* ═══════════════════════════════════════
          区域 ① — HERO 封面大图
          对应：第一页的图.jpg
       ═══════════════════════════════════════ */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 pt-20 pb-10">
        {/* 图片容器 */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden group">
          <img
            src="/arch-ai/38ee1f74e93625d074816f43b5d190e6.jpg"
            alt="AI Architecture Hero"
            className="w-full h-full object-cover"
          />
          {/* 渐变遮罩 */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/20 to-transparent" />

          {/* 标题叠加 */}
          <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 lg:p-14 z-10">
            <p className="text-[11px] font-medium text-[#F26522]/70 tracking-[0.15em] uppercase mb-3">ARCHITECTURE AI</p>
            <h1 className="text-[clamp(1.8rem,4.5vw,3.5rem)] font-medium leading-[1.1] tracking-[-0.03em] mb-4" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
              AIGC 全案建筑设计
            </h1>
            <p className="text-[#EBEBF5]/50 text-[13px] sm:text-[15px] max-w-lg leading-relaxed font-light">
              基于 Nanobanana、ComfyUI 与 Midjourney 的
              端到端建筑与室内设计方案生成工作流
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          区域 ② — 项目概述 & AI工具栈
       ═══════════════════════════════════════ */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 pt-10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* 左侧：项目说明 */}
          <div>
            <p className="text-[11px] font-medium text-[#F26522]/50 tracking-[0.15em] uppercase mb-4">PROJECT OVERVIEW</p>
            <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] font-medium tracking-[-0.02em] leading-[1.2] mb-6">
              AI 驱动的建筑视觉表达<br />从概念到高精度渲染的全链路
            </h2>
            <p className="text-[14px] text-[#EBEBF5]/45 leading-relaxed mb-6 font-light">
              本项目展示了如何将 AIGC 技术深度融入建筑设计与室内设计的全流程中。
              通过 ComfyUI 搭建可复用的节点工作流，配合 Midjourney 进行灵感探索与风格训练，
              实现从草图快速生成高精度渲染图、局部重绘修改、图像优化等核心能力。
            </p>
            <p className="text-[13px] text-[#EBEBF5]/30 leading-relaxed font-light italic border-l-2 border-[#F26522]/20 pl-4">
              "AI 不是替代设计师，而是为设计师提供更高效的视觉表达能力。"
            </p>
          </div>

          {/* 右侧：AI工具栈 */}
          <div className="bg-[#111] rounded-2xl p-7 lg:p-9 border border-white/[0.05]">
            <p className="text-[11px] font-medium text-[#F26522]/50 tracking-[0.15em] uppercase mb-5">AI TOOL STACK</p>

            {/* ComfyUI */}
            <div className="mb-6">
              <h3 className="text-[15px] font-semibold text-white/90 mb-2">ComfyUI 工作流</h3>
              <ul className="space-y-2 text-[13px] text-[#EBEBF5]/45 font-light">
                <li className="flex items-start gap-2"><span className="text-[#F26522]/50 mt-1">&#9670;</span><span><strong className="text-[#EBEBF5]/65">SD1.5/SDXL</strong> 基础模块搭建及精准控制（Lora + ControlNet）</span></li>
                <li className="flex items-start gap-2"><span className="text-[#F26522]/50 mt-1">&#9670;</span><span><strong className="text-[#EBEBF5]/65">IPAdapter + Latent</strong> 风格迁移与产品替换</span></li>
                <li className="flex items-start gap-2"><span className="text-[#F26522]/50 mt-1">&#9670;</span><span>高清放大工作流（SD 大 + Latent 放大 + 算法放大）</span></li>
                <li className="flex items-start gap-2"><span className="text-[#F26522]/50 mt-1">&#9670;</span><span><strong className="text-[#EBEBF5]/65">FLUX</strong> 出图 + 洗图工作流 / 万物迁移（Redux）</span></li>
                <li className="flex items-start gap-2"><span className="text-[#F26522]/50 mt-1">&#9670;</span><span>FLUX 自训练 Lora + ControlNet 精准控制</span></li>
              </ul>
            </div>

            {/* Midjourney */}
            <div className="mb-6">
              <h3 className="text-[15px] font-semibold text-white/90 mb-2">Midjourney 辅助</h3>
              <ul className="space-y-2 text-[13px] text-[#EBEBF5]/45 font-light">
                <li className="flex items-start gap-2"><span className="text-[#F26522]/50 mt-1">&#9670;</span><span>/describe 描述提取 + WD1.4 推提示词</span></li>
                <li className="flex items-start gap-2"><span className="text-[#F26522]/50 mt-1">&#9670;</span><span>/imagine 文生图（--iw / --ar / --s 控制）</span></li>
                <li className="flex items-start gap-2"><span className="text-[#F26522]/50 mt-1">&#9670;</span><span>Vary 变化 / Vary 局部重绘 / Upscale 放大 / Zoom Out</span></li>
                <li className="flex items-start gap-2"><span className="text-[#F26522]/50 mt-1">&#9670;</span><span>/blend 混合功能获取数据集和目标图片</span></li>
              </ul>
            </div>

            {/* Nanobanana */}
            <div>
              <h3 className="text-[15px] font-semibold text-white/90 mb-2">Nanobanana</h3>
              <p className="text-[13px] text-[#EBEBF5]/45 font-light">
                全案概念设计平台，提供 Stable Diffusion 工作流基础框架，
                配合 ComfyUI 可实现完整的图生图与局部重绘能力。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          区域 ③ — 工作流总览
          对应：第二页的图.jpg + 第十三页.jpg
       ═══════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-24 border-t border-white/[0.12]">
        <div className="mb-12">
          <p className="text-[11px] font-medium text-[#F26522]/50 tracking-[0.15em] uppercase mb-3">SECTION 03 · WORKFLOW OVERVIEW</p>
          <h2 className="text-[clamp(1.6rem,3.5vw,2.5rem)] font-medium tracking-[-0.02em] leading-[1.15]">
            双引擎驱动的全案工作流体系
          </h2>
        </div>

        {/* 两张并排的大图 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
          <div className="relative overflow-hidden rounded-xl group">
            <img
              src="/arch-ai/第二页的图.jpg"
              alt="Nanobanana + ComfyUI 工作流总览"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-[12px] text-white/60 mb-1">WORKFLOW A</p>
              <p className="text-[15px] font-semibold">Nanobanana + ComfyUI</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-xl group">
            <img
              src="/arch-ai/第十三页.jpg"
              alt="Midjourney + ComfyUI 工作流总览"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-[12px] text-white/60 mb-1">WORKFLOW B</p>
              <p className="text-[15px] font-semibold">Midjourney + ComfyUI</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          区域 ④ — 草图转渲染：室内篇
          对应：第三页~第七页
          包含：草图→渲染对比、放大前后、局部重绘、工作流截图、细节展示
       ═══════════════════════════════════════ */}
      <section className="bg-[#0a0a0a] py-28 border-y border-white/[0.12]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="mb-16">
            <p className="text-[11px] font-medium text-[#F26522]/50 tracking-[0.15em] uppercase mb-3">SECTION 04 · SKETCH TO RENDER · INTERIOR</p>
            <h2 className="text-[clamp(1.6rem,3.5vw,2.5rem)] font-medium tracking-[-0.02em] leading-[1.15] mb-4">
              从线稿到照片级渲染
            </h2>
            <p className="text-[14px] text-[#EBEBF5]/40 max-w-2xl font-light leading-relaxed">
              展示室内卧室场景的完整 AIGC 生成链路：手绘草图经 ComfyUI 工作流转化为高精度渲染，
              再通过高清放大模块提升分辨率，最终利用局部重绘精准控制画面细节。
            </p>
          </div>

          {/* 4.1 草图 → 渲染 */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-[#F26522]/30"></span>
              <span className="text-[11px] font-mono text-[#F26522]/50 tracking-wider">STEP 01 — SKETCH TO PHOTOREALISTIC</span>
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="/arch-ai/第三页的图.jpg"
                alt="草图到渲染对比"
                className="w-full h-auto"
              />
            </div>
            <p className="mt-4 text-[12px] text-[#EBEBF5]/30 font-light">
              左：手绘线稿草图 &nbsp;|&nbsp; 右：ComfyUI 生成的照片级渲染效果
            </p>
          </div>

          {/* 4.2 高清放大 */}
          <div className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 overflow-hidden rounded-lg">
              <img
                src="/arch-ai/第四页的第一张图，这张图是使用放大工作流的前后对比.jpg"
                alt="高清放大前后对比"
                className="w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[11px] font-mono text-[#F26522]/50 tracking-wider mb-3">STEP 02 — UPSCALING</p>
              <h3 className="text-[17px] font-semibold mb-3">高清放大工作流</h3>
              <p className="text-[13px] text-[#EBEBF5]/35 font-light leading-relaxed mb-4">
                采用 SD 大模型 + Latent 空间放大 + 传统算法放大的三级放大管线，
                在保持细节的同时显著提升输出分辨率。
              </p>
              <p className="text-[12px] text-[#EBEBF5]/25 font-light italic">
                圆形放大区域清晰展示放大前后的细节差异。
              </p>
            </div>
          </div>

          {/* 4.3 ComfyUI 放大工作流 */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-[#F26522]/30"></span>
              <span className="text-[11px] font-mono text-[#F26522]/50 tracking-wider">COMFYUI WORKFLOW — UPSCALING PIPELINE</span>
            </div>
            <div className="overflow-hidden rounded-lg bg-black/30 p-1">
              <img
                src="/arch-ai/第四页的第二张图，这张图是comfyui工作流.jpg"
                alt="ComfyUI 放大工作流节点图"
                className="w-full h-auto rounded"
              />
            </div>
          </div>

          {/* 4.4 局部重绘 */}
          <div className="mb-20">
            {/* 文字说明 — 上移到图片上方 */}
            <div className="mb-6">
              <p className="text-[11px] font-mono text-[#F26522]/50 tracking-wider mb-3">STEP 03 — LOCAL INPAINTING</p>
              <h3 className="text-[17px] font-semibold mb-3">局部重绘 / Inpainting</h3>
              <p className="text-[13px] text-[#EBEBF5]/35 font-light leading-relaxed mb-4 max-w-xl">
                通过 Latent 遮罩空间进行精确的局部重绘，可在不改变整体画面的前提下，
                精准修改指定区域——如添加人物、调整材质或重新构图。
              </p>
            </div>

            {/* 图片区域：左右双图，下沿对齐 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-end">
              {/* 左：ComfyUI 工作流截图 */}
              <div className="overflow-hidden rounded-lg bg-white/[0.02] p-1">
                <img
                  src="/arch-ai/comfyui-local-inpainting-workflow.jpg"
                  alt="ComfyUI 局部重绘工作流"
                  className="w-full h-auto rounded"
                />
              </div>
              {/* 右：渲染结果 */}
              <div className="overflow-hidden rounded-lg">
                <img
                  src="/arch-ai/第五页的第一张图，局部重绘的展示.jpg"
                  alt="局部重绘结果展示"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* 4.5 最终放大 + 重绘工作流 */}
          <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="overflow-hidden rounded-lg">
              <img
                src="/arch-ai/第六页的第一张图，是最终放大的图.jpg"
                alt="最终放大效果图"
                className="w-full h-auto"
              />
            </div>
            <div className="overflow-hidden rounded-lg bg-black/30 p-1">
              <img
                src="/arch-ai/第六页的第二张图，是最终放大的工作流.jpg"
                alt="ComfyUI 局部重绘工作流"
                className="w-full h-auto rounded"
              />
            </div>
          </div>

          {/* 4.6 细节展示画廊 */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-[#F26522]/30"></span>
              <span className="text-[11px] font-mono text-[#F26522]/50 tracking-wider">DETAIL GALLERY — RENDER QUALITY</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                '第七页细节展示1.jpg',
                '第七页细节展示2.jpg',
                '第七页细节展示3.jpg',
                '第七页细节展示4.jpg',
              ].map((name, i) => (
                <div key={i} className="overflow-hidden rounded-lg group cursor-pointer">
                  <img
                    src={`/arch-ai/${name}`}
                    alt={`细节展示 ${i + 1}`}
                    className="w-full h-auto object-cover aspect-square grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              ))}
            </div>
            <p className="mt-4 text-[12px] text-[#EBEBF5]/25 font-light text-right">
              细节特写：材质纹理 / 光影层次 / 物品摆放 / 反射质感
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          区域 ⑤ — 草图转渲染：建筑篇
          对应：第八页 ~ 第九页
       ═══════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-28 border-t border-white/[0.12]">
        <div className="mb-16">
          <p className="text-[11px] font-medium text-[#F26522]/50 tracking-[0.15em] uppercase mb-3">SECTION 05 · SKETCH TO RENDER · ARCHITECTURE</p>
          <h2 className="text-[clamp(1.6rem,3.5vw,2.5rem)] font-medium tracking-[-0.02em] leading-[1.15] mb-4">
            建筑体块模型 → 日夜景渲染
          </h2>
          <p className="text-[14px] text-[#EBEBF5]/40 max-w-2xl font-light leading-relaxed">
            将 SU/SketchUp 导出的体量模型作为输入，通过 ComfyUI 工作流生成日景与夜景两种氛围的高质量建筑表现图。
          </p>
        </div>

        {/* 体块 → 日夜景 */}
        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 items-center">
            <div className="overflow-hidden rounded-lg">
              <img
                src="/arch-ai/第八页的草图.jpg"
                alt="建筑体块模型草图"
                className="w-full h-auto"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="/arch-ai/第八页的成图.jpg"
                alt="建筑日景+夜景渲染"
                className="w-full h-auto"
              />
            </div>
          </div>

          <p className="text-center text-[12px] text-[#EBEBF5]/25 font-light">
            上：SU 体量模型草图（初始状态）&nbsp;&nbsp;|&nbsp;&nbsp; 下：ComfyUI 生成的日景 + 夜景鸟瞰渲染
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 items-center">
            <div className="overflow-hidden rounded-lg order-2 lg:order-1">
              <img
                src="/arch-ai/第九页的成图.jpg"
                alt="详细体块的最终日景渲染"
                className="w-full h-auto"
              />
            </div>
            <div className="overflow-hidden rounded-lg order-1 lg:order-2">
              <img
                src="/arch-ai/第九页的草图.jpg"
                alt="详细体块模型草图"
                className="w-full h-auto"
              />
            </div>
          </div>

          <p className="text-center text-[12px] text-[#EBEBF5]/25 font-light">
            加入植被、人物、光影后的精细化日景鸟瞰渲染
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          区域 ⑥ — 图像修改与优化
          对应：第十页 ~ 第十一页 + 第二十页 + 第二十二页
       ═══════════════════════════════════════ */}
      <section className="bg-[#0a0a0a] py-28 border-y border-white/[0.12]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="mb-16">
            <p className="text-[11px] font-medium text-[#F26522]/50 tracking-[0.15em] uppercase mb-3">SECTION 06 · IMAGE MODIFICATION & OPTIMIZATION</p>
            <h2 className="text-[clamp(1.6rem,3.5vw,2.5rem)] font-medium tracking-[-0.02em] leading-[1.15] mb-4">
              AI 图像修改与风格优化
            </h2>
            <p className="text-[14px] text-[#EBEBF5]/40 max-w-2xl font-light leading-relaxed">
              利用 AIGC 能力对已生成的图像进行针对性修改和优化：
              更换材质色调、调整光影氛围、提升画面精致度——无需重新生成整张图片。
            </p>
          </div>

          {/* 修改案例网格 */}
          <div className="space-y-16">
            {/* 案例 1：建筑色彩修改 */}
            <div>
              <p className="text-[11px] font-mono text-[#F26522]/40 tracking-wider mb-4">CASE 01 — COLOR ADJUSTMENT</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-[11px] text-[#EBEBF5]/30 mb-2">Before / 修改前</p>
                  <div className="overflow-hidden rounded-lg">
                    <img src="/arch-ai/第十页的原图.jpg" alt="原图" className="w-full h-auto" />
                  </div>
                </div>
                <div>
                  <p className="text-[11px] text-[#EBEBF5]/30 mb-2">After / 修改后</p>
                  <div className="overflow-hidden rounded-lg">
                    <img src="/arch-ai/第十页修改后的图.jpg" alt="修改后" className="w-full h-auto" />
                  </div>
                </div>
              </div>
              <p className="mt-3 text-[12px] text-[#EBEBF5]/25 font-light">
                示例：通过局部重绘修改建筑外立面楼梯的色彩（灰色 → 粉色），保持周边环境不变
              </p>
            </div>

            {/* 案例 2：商业场景优化 */}
            <div>
              <p className="text-[11px] font-mono text-[#F26522]/40 tracking-wider mb-4">CASE 02 — SCENE REFINEMENT</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-[11px] text-[#EBEBF5]/30 mb-2">Before</p>
                  <div className="overflow-hidden rounded-lg">
                    <img src="/arch-ai/第十一页优化前的图.jpg" alt="优化前" className="w-full h-auto" />
                  </div>
                </div>
                <div>
                  <p className="text-[11px] text-[#EBEBF5]/30 mb-2">After</p>
                  <div className="overflow-hidden rounded-lg">
                    <img src="/arch-ai/第十一页优化后的图.jpg" alt="优化后" className="w-full h-auto" />
                  </div>
                </div>
              </div>
              <p className="mt-3 text-[12px] text-[#EBEBF5]/25 font-light">
                东门菜场商业街场景：优化材质质感、光照真实度与整体氛围
              </p>
            </div>

            {/* 案例 3：庭院空间优化 */}
            <div>
              <p className="text-[11px] font-mono text-[#F26522]/40 tracking-wider mb-4">CASE 03 — COURTYARD ATMOSPHERE</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-[11px] text-[#EBEBF5]/30 mb-2">Before</p>
                  <div className="overflow-hidden rounded-lg">
                    <img src="/arch-ai/第二十页优化前的图.jpg" alt="庭院优化前" className="w-full h-auto" />
                  </div>
                </div>
                <div>
                  <p className="text-[11px] text-[#EBEBF5]/30 mb-2">After</p>
                  <div className="overflow-hidden rounded-lg">
                    <img src="/arch-ai/第二十页优化后的图.jpg" alt="庭院优化后" className="w-full h-auto" />
                  </div>
                </div>
              </div>
              <p className="mt-3 text-[12px] text-[#EBEBF5]/25 font-light">
                中庭空间：优化结构材质、增加自然光感、提升整体精致度
              </p>
            </div>

            {/* 案例 4：茶室氛围优化 */}
            <div>
              <p className="text-[11px] font-mono text-[#F26522]/40 tracking-wider mb-4">CASE 04 — TEA ROOM MOOD</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-[11px] text-[#EBEBF5]/30 mb-2">Before</p>
                  <div className="overflow-hidden rounded-lg">
                    <img src="/arch-ai/第二十二页优化前的图.jpg" alt="茶室优化前" className="w-full h-auto" />
                  </div>
                </div>
                <div>
                  <p className="text-[11px] text-[#EBEBF5]/30 mb-2">After</p>
                  <div className="overflow-hidden rounded-lg">
                    <img src="/arch-ai/第二十二页优化后的图.jpg" alt="茶室优化后" className="w-full h-auto" />
                  </div>
                </div>
              </div>
              <p className="mt-3 text-[12px] text-[#EBEBF5]/25 font-light">
                茶空间：优化墙面材质、调整暖调光线、增强禅意氛围
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          区域 ⑦ — 建筑设计表达流程
          对应：第十四页 ~ 第十六页
       ═══════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-28 border-t border-white/[0.12]">
        <div className="mb-16">
          <p className="text-[11px] font-medium text-[#F26522]/50 tracking-[0.15em] uppercase mb-3">SECTION 07 · ARCHITECTURE DESIGN EXPRESSION</p>
          <h2 className="text-[clamp(1.6rem,3.5vw,2.5rem)] font-medium tracking-[-0.02em] leading-[1.15] mb-4">
            Midjourney + ComfyUI 建筑设计表达
          </h2>
          <p className="text-[14px] text-[#EBEBF5]/40 max-w-2xl font-light leading-relaxed">
            以现代乡村住宅项目为例，展示从数据收集、MJ 灵感探索、风格微调到 LoRA 训练的完整建筑表达工作流。
          </p>
        </div>

        {/* 流程图：数据收集 → MJ生图 → MJ微调 → LoRA训练 */}
        <div className="mb-12">
          <div className="overflow-hidden rounded-xl">
            <img
              src="/arch-ai/第十四页的图.jpg"
              alt="建筑设计表达完整流程"
              className="w-full h-auto"
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-6 text-[12px] text-[#EBEBF5]/30">
            <span><strong className="text-[#EBEBF5]/50">1.</strong> 数据收集 — /describe 提取描述</span>
            <span><strong className="text-[#EBEBF5]/50">2.</strong> MJ 文生图 — 构建风格数据库</span>
            <span><strong className="text-[#EBEBF5]/50">3.</strong> MJ 微调 — /blend 训练素材</span>
            <span><strong className="text-[#EBEBF5]/50">4.</strong> LoRA 训练 — SD1.5 定制模型</span>
          </div>
        </div>

        {/* 最终成果 + 模型信息 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 overflow-hidden rounded-xl">
            <img
              src="/arch-ai/第十五页的图.jpg"
              alt="现代乡村住宅最终渲染"
              className="w-full h-auto"
            />
          </div>
          <div className="bg-[#111] rounded-xl p-6 border border-white/[0.05] flex flex-col justify-center">
            <p className="text-[11px] font-mono text-[#F26522]/50 tracking-wider mb-4">MODEL INFO</p>
            <div className="space-y-3 text-[13px]">
              <div>
                <p className="text-[#EBEBF5]/30 text-[11px] mb-1">Checkpoint</p>
                <p className="text-[#EBEBF5]/70 font-mono text-xs">majicmixRealistic_v7</p>
              </div>
              <div>
                <p className="text-[#EBEBF5]/30 text-[11px] mb-1">LoRA</p>
                <p className="text-[#EBEBF5]/70 font-mono text-xs">现代乡村住宅 v1.2</p>
              </div>
              <div>
                <p className="text-[#EBEBF5]/30 text-[11px] mb-1">Base Model</p>
                <p className="text-[#EBEBF5]/70 font-mono text-xs">SD 1.5</p>
              </div>
            </div>
          </div>
        </div>

        {/* ComfyUI 工作流 */}
        <div className="mt-12">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-6 h-px bg-[#F26522]/30"></span>
            <span className="text-[11px] font-mono text-[#F26522]/50 tracking-wider">COMFYUI WORKFLOW — ARCHITECTURE PIPELINE</span>
          </div>
          <div className="overflow-hidden rounded-xl bg-black/30 p-1">
            <img
              src="/arch-ai/第十六页.jpg"
              alt="建筑ComfyUI完整工作流"
              className="w-full h-auto rounded"
            />
          </div>
          <p className="mt-4 text-[12px] text-[#EBEBF5]/25 font-light leading-relaxed">
            工作流包含：<strong className="text-[#EBEBF5]/40">风格参考加载</strong> → 
            <strong className="text-[#EBEBF5]/40">SD 文生图（精准控制）</strong> + IPAdapter 风格参考 → 
            <strong className="text-[#EBEBF5]/40">Latent 遮罩局部重绘</strong> → 
            <strong className="text-[#EBEBF5]/40">FLUX 洗图</strong>
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          区域 ⑧ — 室内设计表达流程
          对应：第十七页 ~ 第十九页
       ═══════════════════════════════════════ */}
      <section className="bg-[#0a0a0a] py-28 border-y border-white/[0.12]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="mb-16">
            <p className="text-[11px] font-medium text-[#F26522]/50 tracking-[0.15em] uppercase mb-3">SECTION 08 · INTERIOR DESIGN EXPRESSION</p>
            <h2 className="text-[clamp(1.6rem,3.5vw,2.5rem)] font-medium tracking-[-0.02em] leading-[1.15] mb-4">
              Midjourney + ComfyUI 室内设计表达
            </h2>
            <p className="text-[14px] text-[#EBEBF5]/40 max-w-2xl font-light leading-relaxed">
              以新中式侘寂风客厅项目为例，展示室内空间的 AIGC 表达工作流——
              从风格调研到 SDXL 高精度渲染的完整链路。
            </p>
          </div>

          {/* 流程图 */}
          <div className="mb-12">
            <div className="overflow-hidden rounded-xl">
              <img
                src="/arch-ai/第十八页.jpg"
                alt="室内设计表达完整流程"
                className="w-full h-auto"
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-6 text-[12px] text-[#EBEBF5]/30">
              <span><strong className="text-[#EBEBF5]/50">1.</strong> 数据收集 — 自然语言描述</span>
              <span><strong className="text-[#EBEBF5]/50">2.</strong> MJ 文生图 — 基础文生图构建数据集</span>
              <span><strong className="text-[#EBEBF5]/50">3.</strong> MJ 微调 — /blend 融合训练素材</span>
              <span><strong className="text-[#EBEBF5]/50">4.</strong> LoRA 训练 — SDXL 定制模型</span>
            </div>
          </div>

          {/* 最终成果 + 模型信息 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 overflow-hidden rounded-xl">
              <img
                src="/arch-ai/第十七页的图.jpg"
                alt="现代客厅最终渲染"
                className="w-full h-auto"
              />
            </div>
            <div className="bg-[#111] rounded-xl p-6 border border-white/[0.05] flex flex-col justify-center">
              <p className="text-[11px] font-mono text-[#F26522]/50 tracking-wider mb-4">MODEL INFO</p>
              <div className="space-y-3 text-[13px]">
                <div>
                  <p className="text-[#EBEBF5]/30 text-[11px] mb-1">Checkpoint</p>
                  <p className="text-[#EBEBF5]/70 font-mono text-xs">xxmix9realisticsdxl_v10</p>
                </div>
                <div>
                  <p className="text-[#EBEBF5]/30 text-[11px] mb-1">LoRA</p>
                  <p className="text-[#EBEBF5]/70 font-mono text-xs">SDXL-增加细节 add-detail-xl</p>
                </div>
                <div>
                  <p className="text-[#EBEBF5]/30 text-[11px] mb-1">Base Model</p>
                  <p className="text-[#EBEBF5]/70 font-mono text-xs">SD XL</p>
                </div>
                <div>
                  <p className="text-[#EBEBF5]/30 text-[11px] mb-1">Style</p>
                  <p className="text-[#EBEBF5]/70 text-xs">新中式 / Wabi-sabi / 侘寂风</p>
                </div>
              </div>
            </div>
          </div>

          {/* ComfyUI 工作流 */}
          <div className="mt-12">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-[#F26522]/30"></span>
              <span className="text-[11px] font-mono text-[#F26522]/50 tracking-wider">COMFYUI WORKFLOW — INTERIOR PIPELINE</span>
            </div>
            <div className="overflow-hidden rounded-xl bg-black/30 p-1">
              <img
                src="/arch-ai/第十九页.jpg"
                alt="室内ComfyUI完整工作流"
                className="w-full h-auto rounded"
              />
            </div>
            <p className="mt-4 text-[12px] text-[#EBEBF5]/25 font-light leading-relaxed">
              工作流包含：<strong className="text-[#EBEBF5]/40">风格参考加载（WD1.4 反推）</strong> → 
              <strong className="text-[#EBEBF5]/40">SDXL 文生图</strong> + IPAdapter + ControlNet → 
              <strong className="text-[#EBEBF5]/40">Latent 遮罩局部重绘</strong> → 
              <strong className="text-[#EBEBF5]/40">FLUX 洗图（flux1-dev-fp8）</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          区域 ⑨ — 商业空间草图转渲染
          对应：第二十一页（草图 + 成图）
       ═══════════════════════════════════════ */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-28 border-t border-white/[0.12]">
        <div className="mb-16">
          <p className="text-[11px] font-medium text-[#F26522]/50 tracking-[0.15em] uppercase mb-3">SECTION 09 · COMMERCIAL SPACE SKETCH TO RENDER</p>
          <h2 className="text-[clamp(1.6rem,3.5vw,2.5rem)] font-medium tracking-[-0.02em] leading-[1.15] mb-4">
            商业空间 — 手绘草图的 AI 视觉化落地
          </h2>
          <p className="text-[14px] text-[#EBEBF5]/40 max-w-2xl font-light leading-relaxed">
            将设计师的手绘草图直接转化为具有真实光影与材质的商业空间效果图，
            保持原始构图意图的同时赋予照片级的视觉表现力。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8">
          <div className="flex flex-col">
            <p className="text-[11px] text-[#EBEBF5]/30 mb-3">HAND SKETCH / 手绘草图</p>
            <div className="overflow-hidden rounded-xl flex-1 bg-[#111] flex items-center justify-center">
              <img
                src="/arch-ai/第二十一页的草图.jpg"
                alt="酒吧手绘草图"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-[11px] text-[#EBEBF5]/30 mb-3">PHOTOREALISTIC RENDER / 照片级渲染</p>
            <div className="overflow-hidden rounded-xl flex-1 bg-[#111] flex items-center justify-center">
              <img
                src="/arch-ai/第二十一页的成图.jpg"
                alt="酒吧AI渲染效果图"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          底部 Footer
       ═══════════════════════════════════════ */}
      <footer className="border-t border-white/[0.12] py-12">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-[#EBEBF5]/20 font-light">
            AIGC Architecture Project &copy; Yang Shuo Portfolio
          </p>
          <p className="text-[11px] text-[#EBEBF5]/15 font-light">
            Powered by ComfyUI &middot; Midjourney &middot; Nanobanana &middot; FLUX
          </p>
        </div>
      </footer>

    </div>
  )
}
