import { useState, useEffect } from 'react'
import { ArrowRight, Clock, Menu, X, ArrowLeft, ChevronLeft, ChevronRight, Info, Images } from 'lucide-react'
import { Shader, Swirl, ChromaFlow, FlutedGlass, FilmGrain } from 'shaders/react'
import DomeGallery from './DomeGallery'
import ArchAIProjectPage from './ArchAIProjectPage'
import PortfolioViewerPage from './PortfolioViewerPage'

/* ─────────────────────────────────────────────
   SVG ASSETS
───────────────────────────────────────────── */

function PartnerSVG() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
      <path d="m19.6 66.5 19.7-11 .3-1-.3-.5h-1l-3.3-.2-11.2-.3L14 53l-9.5-.5-2.4-.5L0 49l.2-1.5 2-1.3 2.9.2 6.3.5 9.5.6 6.9.4L38 49.1h1.6l.2-.7-.5-.4-.4-.4L29 41l-10.6-7-5.6-4.1-3-2-1.5-2-.6-4.2 2.7-3 3.7.3.9.2 3.7 2.9 8 6.1L37 36l1.5 1.2.6-.4.1-.3-.7-1.1L33 25l-6-10.4-2.7-4.3-.7-2.6c-.3-1-.4-2-.4-3l3-4.2L28 0l4.2.6L33.8 2l2.6 6 4.1 9.3L47 29.9l2 3.8 1 3.4.3 1h.7v-.5l.5-7.2 1-8.7 1-11.2.3-3.2 1.6-3.8 3-2L61 2.6l2 2.9-.3 1.8-1.1 7.7L59 27.1l-1.5 8.2h.9l1-1.1 4.1-5.4 6.9-8.6 3-3.5L77 13l2.3-1.8h4.3l3.1 4.7-1.4 4.9-4.4 5.6-3.7 4.7-5.3 7.1-3.2 5.7.3.4h.7l12-2.6 6.4-1.1 7.6-1.3 3.5 1.6.4 1.6-1.4 3.4-8.2 2-9.6 2-14.3 3.3-.2.1.2.3 6.4.6 2.8.2h6.8l12.6 1 3.3 2 1.9 2.7-.3 2-5.1 2.6-6.8-1.6-16-3.8-5.4-1.3h-.8v.4l4.6 4.5 8.3 7.5L89 80.1l.5 2.4-1.3 2-1.4-.2-9.2-7-3.6-3-8-6.8h-.5v.7l1.8 2.7 9.8 14.7.5 4.5-.7 1.4-2.6 1-2.7-.6-5.8-8-6-9-4.7-8.2-.5.4-2.9 30.2-1.3 1.5-3 1.2-2.5-2-1.4-3 1.4-6.2 1.6-8 1.3-6.4 1.2-7.9.7-2.6v-.2H49L43 72l-9 12.3-7.2 7.6-1.7.7-3-1.5.3-2.8L24 86l10-12.8 6-7.9 4-4.6-.1-.5h-.3L17.2 77.4l-4.7.6-2-2 .2-3 1-1 8-5.5Z" />
    </svg>
  )
}

function LinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}

/* ─────────────────────────────────────────────
   HOOKS
───────────────────────────────────────────── */

function useLondonTime() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString('en-GB', {
          timeZone: 'Europe/London',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        })
      )
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

/* ─────────────────────────────────────────────
   SHARED: Section badge row
───────────────────────────────────────────── */

function SectionBadge({ number, label, borderClass = 'border-white/15' }: { number: string; label: string; borderClass?: string }) {
  return (
    <div className="flex items-center gap-3 mb-6 sm:mb-8">
      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#2C2C2E] flex items-center justify-center flex-shrink-0">
        <span className="text-[#EBEBF5]/80 text-[11px] sm:text-[12px] font-semibold leading-none">{number}</span>
      </div>
      <span className={`text-[12px] sm:text-[13px] font-medium border ${borderClass} rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-[#EBEBF5]/60`}>
        {label}
      </span>
    </div>
  )
}

/* ─────────────────────────────────────────────
   SHARED: Orange CTA button with text roll
───────────────────────────────────────────── */

function OrangeButton({ text, large = false, noRoll = false, onClick }: { text: string; large?: boolean; noRoll?: boolean; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`group flex items-center gap-2 bg-[#F26522] hover:bg-[#e05a1a] text-white font-medium rounded-full transition-colors duration-300 ${
        large ? 'text-[13px] sm:text-[14px] pl-5 sm:pl-6 pr-2 py-2' : 'text-[13px] pl-5 pr-2 py-2'
      }`}
    >
      {noRoll ? (
        <span>{text}</span>
      ) : (
        <span className="text-roll-outer">
          <span className="text-roll-inner">
            <span>{text}</span>
            <span aria-hidden="true">{text}</span>
          </span>
        </span>
      )}
      <div
        className={`bg-white rounded-full flex items-center justify-center flex-shrink-0 arrow-roll ${
          large ? 'w-7 h-7 sm:w-8 sm:h-8' : 'w-7 h-7'
        }`}
      >
        <ArrowRight size={14} className="text-[#F26522]" />
      </div>
    </button>
  )
}

/* ─────────────────────────────────────────────
   SECTION 1: HERO
───────────────────────────────────────────── */

const NAV_LINKS = ['Projects', 'Studio', 'Journal', 'Connect']

function HeroSection({ onNavigate }: { onNavigate?: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const londonTime = useLondonTime()

  return (
    <section className="relative min-h-screen bg-[#0A0A0A] flex flex-col">

      {/* ── Shader Overlay ── */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <Shader>
          <Swirl colorA="#1a1a1a" colorB="#0d0d0d" detail={1.7} />
          <ChromaFlow
            baseColor="#0a0a0a"
            downColor="#cc4400"
            leftColor="#cc4400"
            rightColor="#cc4400"
            upColor="#cc4400"
            momentum={13}
            radius={3.5}
          />
          <FlutedGlass
            aberration={0.61}
            angle={31}
            frequency={8}
            highlight={0.06}
            highlightSoftness={0}
            lightAngle={-90}
            refraction={4}
            shape="rounded"
            softness={1}
            speed={0.15}
          />
          <FilmGrain strength={0.04} />
        </Shader>
      </div>

      {/* ── Navigation (Fixed) ── */}
      <div className="fixed top-0 left-0 right-0 z-50 p-2 sm:p-3 bg-[#0A0A0A]/80 backdrop-blur-sm">
        <div className="max-w-[1440px] mx-auto">
          <nav className="bg-[#1C1C1E] rounded-full flex items-center justify-between" style={{ padding: '5px' }}>

            {/* Left: Logo + nav links */}
            <div className="flex items-center gap-4 pl-0.5">
              {/* Logo circle → 首页按钮 */}
              <div
                className="bg-[#F26522] hover:bg-[#e05a1a] rounded-full flex items-center justify-center flex-shrink-0 px-5 py-2 cursor-pointer transition-colors duration-300"
              >
                <span className="text-white font-bold tracking-tight text-[13px]">首页</span>
              </div>
              {/* Nav links (md+) */}
              <div className="hidden md:flex items-center gap-6">
                {NAV_LINKS.map(link => (
                  <a key={link} href="#" className="text-[14px] text-[#EBEBF5]/80 hover:text-white transition-colors duration-300">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Right (md+) */}
            <div className="hidden md:flex items-center gap-4 pr-0.5">
              <span className="hidden lg:block text-[13px] text-[#EBEBF5]/50">
                Taking on projects for Q1 2026
              </span>
              <div className="flex items-center gap-1.5">
                <Clock size={14} className="text-[#EBEBF5]/50" />
                <span className="text-[13px] text-[#EBEBF5]/50">{londonTime} in London</span>
              </div>
              {/* 个人经历 button */}
              <button className="group bg-[#F26522] hover:bg-[#e05a1a] flex items-center gap-2 text-white text-[13px] font-medium rounded-full pl-5 pr-2 py-2 transition-colors duration-300">
                <span className="text-roll-outer">
                  <span className="text-roll-inner">
                    <span>个人经历</span>
                    <span>个人信息/学历/工作</span>
                  </span>
                </span>
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 arrow-roll">
                  <ArrowRight size={14} className="text-[#F26522]" />
                </div>
              </button>
            </div>

            {/* Mobile toggle */}
            <div className="md:hidden pr-0.5">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center gap-2 bg-[#2C2C2E] text-white text-[13px] font-medium rounded-full px-4 py-2"
              >
                {menuOpen
                  ? <><X size={16} /><span>Close</span></>
                  : <><Menu size={16} /><span>Menu</span></>
                }
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Flex spacer — pushes hero content to bottom */}
      <div className="flex-1" />

      {/* ── Hero Content ── */}
      <div className="relative z-20 max-w-[1440px] mx-auto w-full px-5 sm:px-8 lg:px-12 pt-24 sm:pt-28 pb-14 sm:pb-16 lg:pb-20">
        {/* Small label */}
        <p className="text-[13px] sm:text-[14px] text-[#EBEBF5]/50 tracking-wide mb-5 sm:mb-8">
          个人作品网站
        </p>

        {/* Headline */}
        <h1 className="font-sans font-black uppercase tracking-[0.05em] leading-[0.9]">
          <div className="text-[clamp(2.5rem,9vw,5.5rem)] text-[#F26522] drop-shadow-[0_2px_12px_rgba(242,101,34,0.3)]">
            YANGSHUO
          </div>
          <div className="text-[clamp(1.75rem,6vw,4rem)] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            PORTFOLIO
          </div>
        </h1>

        {/* CTA row */}
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
          <OrangeButton text="作品预览" large noRoll onClick={onNavigate} />

          {/* Partner badge */}
          <div
            className="flex items-center gap-2.5 sm:gap-3 bg-[#1C1C1E] border border-white/10 px-3 sm:px-4 py-2 rounded-[4px] cursor-pointer transition-all duration-300"
            style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.5)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)' }}
          >
            <div className="w-5 h-5 sm:w-6 sm:h-6 text-[#F26522] flex-shrink-0">
              <PartnerSVG />
            </div>
            <span className="text-[13px] sm:text-[14px] font-medium text-white">Certified Partner</span>
            <span className="text-[10px] sm:text-[11px] bg-[#2C2C2E] text-[#EBEBF5]/70 px-1.5 sm:px-2 py-0.5 rounded font-medium">
              Featured
            </span>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu Overlay ── */}
      <div className={`fixed inset-0 z-50 md:hidden ${menuOpen ? 'visible' : 'invisible'}`}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/80 transition-opacity duration-500 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMenuOpen(false)}
        />
        {/* Bottom sheet */}
        <div
          className="absolute bottom-0 left-0 right-0 bg-[#1C1C1E] rounded-2xl mx-3 mb-3 p-6"
          style={{
            transform: menuOpen ? 'translateY(0)' : 'translateY(100%)',
            transition: 'transform 500ms cubic-bezier(0.32, 0.72, 0, 1)',
          }}
        >
          {/* Time badge */}
          <div className="flex items-center gap-1.5 mb-8">
            <Clock size={13} className="text-[#EBEBF5]/40" />
            <span className="text-[13px] text-[#EBEBF5]/40">{londonTime} in London</span>
          </div>
          {/* Nav links */}
          <nav className="flex flex-col gap-2 mb-8">
            {NAV_LINKS.map(link => (
              <a
                key={link}
                href="#"
                className="text-[28px] sm:text-[32px] font-medium text-white hover:text-[#EBEBF5]/60 transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </nav>
          <OrangeButton text="Start a project" />
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   SECTION 2: BENTO GRID PROJECTS
───────────────────────────────────────────── */

const SMALL_IMG = 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090123_74be96d4-9c1b-40cf-932a-96f4f4babed3.png&w=1280&q=85'
const LARGE_IMG = 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090133_c157d30b-a99a-4477-bec1-a446149ec3f2.png&w=1280&q=85'
const cardCls = 'relative bg-[#111111] border border-white/[0.07] rounded-2xl lg:rounded-3xl overflow-hidden cursor-pointer bento-card'

function AboutSection({ onCard1Click, onCard2Click, onCard3Click, onCard4Click }: { onCard1Click?: () => void; onCard2Click?: () => void; onCard3Click?: () => void; onCard4Click?: () => void }) {

  return (
    <section className="relative bg-[#080808] pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28 overflow-hidden">

      {/* Aurora background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-8%] left-[18%] w-[700px] h-[500px] bg-[#F26522]/[0.06] rounded-full blur-[160px]" />
        <div className="absolute bottom-[5%] right-[12%] w-[500px] h-[400px] bg-[#7c3aed]/[0.04] rounded-full blur-[130px]" />
        <div className="absolute top-[45%] right-[35%] w-[400px] h-[300px] bg-[#0ea5e9]/[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <SectionBadge number="1" label="Selected Work" />

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10 sm:mb-12 lg:mb-14">
          <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.03em] text-white">
            AI 项目作品
          </h2>
          <OrangeButton text="查看全部项目" />
        </div>

        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">

          {/* Card 1 — Wide (col-span-2) */}
          <div className={`${cardCls} md:col-span-2`} onClick={onCard1Click}>
            <div className="p-5 sm:p-6 lg:p-7 flex flex-col h-full">
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="bento-tag">3D 交互</span>
                <span className="bento-tag">Site of the Month</span>
                <span className="bento-tag">2025</span>
              </div>
              <div className="rounded-xl overflow-hidden mb-5" style={{ aspectRatio: '16/9' }}>
                <img
                  src="/narrativ-cover.jpg"
                  alt="Narrativ"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-auto">
                <h3 className="text-[17px] sm:text-[19px] font-semibold text-white mb-1.5">Narrativ</h3>
                <p className="text-[13px] text-[#EBEBF5]/50 leading-relaxed">
                  Winner of Site of the Month 2025 — an interactive 3D showcase driving record engagement
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 — Narrow (col-span-1) */}
          <div className={`${cardCls} md:col-span-1`} onClick={onCard2Click}>
            <div className="p-5 sm:p-6 lg:p-7 flex flex-col h-full">
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="bento-tag">品牌体验</span>
                <span className="bento-tag">转化优化</span>
              </div>
              <div className="rounded-xl overflow-hidden mb-5" style={{ aspectRatio: '4/3' }}>
                <img
                  src="/luminar-cover.jpg"
                  alt="Luminar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-auto">
                <h3 className="text-[17px] sm:text-[19px] font-semibold text-white mb-1.5">Luminar</h3>
                <p className="text-[13px] text-[#EBEBF5]/50 leading-relaxed">
                  Transforming a dated platform into a conversion-focused brand experience
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 — Narrow (col-span-1) */}
          <div className={`${cardCls} md:col-span-1`} onClick={onCard3Click}>
            <div className="p-5 sm:p-6 lg:p-7 flex flex-col h-full">
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="bento-tag">视觉系统</span>
                <span className="bento-tag">UI 设计</span>
              </div>
              <div className="rounded-xl overflow-hidden mb-5" style={{ aspectRatio: '3/4' }}>
                <img src="/cover-axion.jpg" alt="一月活动预告" className="w-full h-full object-cover" />
              </div>
              <div className="mt-auto">
                <h3 className="text-[17px] sm:text-[19px] font-semibold text-white mb-1.5">Axion Studio</h3>
                <p className="text-[13px] text-[#EBEBF5]/50 leading-relaxed">
                  Designing a design tool for designers
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 — Wide (col-span-2) */}
          <div className={`${cardCls} md:col-span-2`} onClick={onCard4Click}>
            <div className="p-5 sm:p-6 lg:p-7 flex flex-col h-full">
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="bento-tag">数字品牌</span>
                <span className="bento-tag">策略设计</span>
                <span className="bento-tag">国际市场</span>
              </div>
              <div className="rounded-xl overflow-hidden mb-5" style={{ aspectRatio: '16/9' }}>
                <img src="/cover-card4.jpg" alt="AI赋能产品开发" className="w-full h-full object-cover" />
              </div>
              <div className="mt-auto">
                <h3 className="text-[17px] sm:text-[19px] font-semibold text-white mb-1.5">Brand Identity</h3>
                <p className="text-[13px] text-[#EBEBF5]/50 leading-relaxed">
                  从零构建数字品牌体验，策略驱动的创意设计让品牌走向国际舞台
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   SECTION 3: CASE STUDIES
───────────────────────────────────────────── */

function NarrativCard({ onClick }: { onClick?: () => void }) {
  return (
    <div className={cardCls} onClick={onClick}>
      <div className="p-5 sm:p-6 lg:p-7 flex flex-col h-full">
        <div className="flex flex-wrap gap-1.5 mb-4">
          <span className="bento-tag">3D 交互</span>
          <span className="bento-tag">Site of the Month</span>
          <span className="bento-tag">2025</span>
        </div>
        <div className="rounded-xl overflow-hidden mb-5" style={{ aspectRatio: '16/9' }}>
          <img
            src="/arch-ai/38ee1f74e93625d074816f43b5d190e6.jpg"
            alt="Narrativ"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-auto">
          <h3 className="text-[17px] sm:text-[19px] font-semibold text-white mb-1.5">Narrativ</h3>
          <p className="text-[13px] text-[#EBEBF5]/50 leading-relaxed">
            Winner of Site of the Month 2025 — an interactive 3D showcase driving record engagement
          </p>
        </div>
      </div>
    </div>
  )
}

function LuminarCard({ onClick }: { onClick?: () => void }) {
  return (
    <div className={cardCls} onClick={onClick}>
      <div className="p-5 sm:p-6 lg:p-7 flex flex-col h-full">
        <div className="flex flex-wrap gap-1.5 mb-4">
          <span className="bento-tag">作品集</span>
          <span className="bento-tag">2025 秋</span>
        </div>
        <div className="rounded-xl overflow-hidden mb-5" style={{ aspectRatio: '4/3' }}>
          <img
            src="/portfolio-2025/page-01.jpg"
            alt="杨烁作品集"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-auto">
          <h3 className="text-[17px] sm:text-[19px] font-semibold text-white mb-1.5">杨烁 作品集</h3>
          <p className="text-[13px] text-[#EBEBF5]/50 leading-relaxed">
            2025 秋季作品集合集，涵盖品牌设计、视觉传达与数字创意项目
          </p>
        </div>
      </div>
    </div>
  )
}

function CaseStudiesSection({ onCard1Click, onCard2Click }: { onCard1Click?: () => void; onCard2Click?: () => void }) {
  return (
    <section className="bg-[#0A0A0A] pt-8 sm:pt-10 lg:pt-12 pb-16 sm:pb-20 lg:pb-28">
      <div className="max-w-[1440px] mx-auto">

        {/* Badge row */}
        <div className="px-5 sm:px-8 lg:px-12">
          <SectionBadge number="2" label="Featured client work" />
        </div>

        {/* Heading */}
        <h2 className="text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-white mb-10 sm:mb-14 lg:mb-16 px-5 sm:px-8 lg:px-12">
          Our projects
        </h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7 px-5 sm:px-8 lg:px-12">
          <NarrativCard onClick={onCard1Click} />
          <LuminarCard onClick={onCard2Click} />
        </div>

      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   PROJECT DETAIL PAGE (小红书瀑布流)
───────────────────────────────────────────── */

/* 12 张占位卡片数据 — 点击后进入详情弹窗查看大图+说明 */
const DETAIL_ITEMS = [
  {
    id: 1,
    caption: '生图项目 · AI商拍成果展示',
    tall: true,
    title: 'AI商拍 · 服装',
    desc: 'AI生成服装商拍图片，包含多角度AI效果图、原始参考图及白底细节图，展示AI在服装电商视觉中的应用。',
    tags: ['AI商拍', '服装', '生图'],
    images: ['/card-images/1-ai-1.jpg', '/card-images/1-ai-2.jpg', '/card-images/1-ai-3.jpg', '/card-images/1-original.jpg', '/card-images/1-white.png'],
    imgLabels: ['AI图', 'AI图', 'AI图', '原图', '白底细节图'],
  },
  {
    id: 2,
    caption: '生图项目 · AI商拍成果展示',
    tall: false,
    title: 'AI商拍 · 服装',
    desc: 'AI生成服装商拍图片，包含多角度AI效果图、原始参考图及白底细节图，展示AI在服装电商视觉中的应用。',
    tags: ['AI商拍', '服装', '生图'],
    images: ['/card-images/2-ai-1.png', '/card-images/2-ai-2.png', '/card-images/2-ai-3.jpg', '/card-images/2-original.jpg', '/card-images/2-white.png'],
    imgLabels: ['AI图', 'AI图', 'AI图', '原图', '白底细节图'],
  },
  {
    id: 3,
    caption: '生图项目 · AI商拍成果展示',
    tall: false,
    title: 'AI商拍 · 服装',
    desc: 'AI生成服装商拍图片，包含多角度AI效果图、原始参考图及白底细节图，展示AI在服装电商视觉中的应用。',
    tags: ['AI商拍', '服装', '生图'],
    images: ['/card-images/3-ai-1.jpg', '/card-images/3-ai-2.jpg', '/card-images/3-ai-3.jpg', '/card-images/3-white.png'],
    imgLabels: ['AI图', 'AI图', 'AI图', '白底细节图'],
    prompt: '相机配置：Phase One XF IQ4 150MP相机，施耐德克罗伊茨纳赫80mm f/2.8镜头，光圈f/8，快门速度1/1600秒，ISO 160。胶片颗粒纹理细腻柔和。\n光线设置：自然漫射的阴天日光，主光源来自左前方45度角，营造柔和均匀的照明效果。阴影过渡自然，面部与身体阴影柔和渐变，背景景观均匀受光。\n色彩表现：呈现自然主义高级胶片质感，画面风格简洁明快。适配柯达Portra 400胶片用于现代户外拍摄，重点展现自然肤色、深绿色调、柔和土色调及纯净天空色彩，同时保留丰富肌理细节。\n人物动作：中景镜头采用动态正面右角度拍摄，画面与被摄者视线齐平。一位留着平头的东亚青年男子呈中距离跑步姿态，左腿向前伸展并踩踏岩石小径，右腿随动作拖曳。右臂肘部弯曲后摆，手部微握拳；左臂弯曲前摆，手部张开放松。头部微转，目光定格在画面前方左侧远处，面部表情专注自然。着装：炭灰色高领T恤搭配浅鼠尾草绿工装短裤，身体线条自然紧致，肌肉轮廓清晰可辨。\n构图要点：主体垂直居中置于画面中央轴线，运用前景元素（干草丛、岩石）营造纵深感，并引导视线向跑步者延伸。采用三分法则构图，将主体头部置于画面垂直上三分与中央三分的交点处。层次分明的构图：前景呈现鲜明的草丛，背景包含跑步者、湖泊与群山。保持画面自然开阔的景观效果。采用4:5比例的肖像构图。',
  },
  {
    id: 4,
    caption: '生图项目 · AI商拍成果展示',
    tall: true,
    title: 'AI商拍 · 服装',
    desc: 'AI生成服装商拍图片，包含多角度AI效果图、原始参考图及白底细节图，展示AI在服装电商视觉中的应用。',
    tags: ['AI商拍', '服装', '生图'],
    images: ['/card-images/4-ai-1.png', '/card-images/4-ai-2.png', '/card-images/4-ai-3.png', '/card-images/4-ai-4.png', '/card-images/4-white.png'],
    imgLabels: ['AI图', 'AI图', 'AI图', 'AI图', '白底细节图'],
    prompt: '相机配置：Phase One XF IQ4 150MP相机，施耐德克罗伊茨纳赫80mm f/2.8镜头，光圈f/8，快门速度1/1600秒，ISO 160。胶片颗粒纹理细腻柔和。\n光线设置：自然漫射的阴天日光，主光源来自左前方45度角，营造柔和均匀的照明效果。阴影过渡自然，面部与身体阴影柔和渐变，背景景观均匀受光。\n色彩表现：呈现自然主义高级胶片质感，画面风格简洁明快。适配柯达Portra 400胶片用于现代户外拍摄，重点展现自然肤色、深绿色调、柔和土色调及纯净天空色彩，同时保留丰富肌理细节。\n人物动作：中景镜头采用动态正面右角度拍摄，画面与被摄者视线齐平。一位留着平头的东亚青年男子呈中距离跑步姿态，左腿向前伸展并踩踏岩石小径，右腿随动作拖曳。右臂肘部弯曲后摆，手部微握拳；左臂弯曲前摆，手部张开放松。头部微转，目光定格在画面前方左侧远处，面部表情专注自然。着装：炭灰色高领T恤搭配浅鼠尾草绿工装短裤，身体线条自然紧致，肌肉轮廓清晰可辨。\n构图要点：主体垂直居中置于画面中央轴线，运用前景元素（干草丛、岩石）营造纵深感，并引导视线向跑步者延伸。采用三分法则构图，将主体头部置于画面垂直上三分与中央三分的交点处。层次分明的构图：前景呈现鲜明的草丛，背景包含跑步者、湖泊与群山。保持画面自然开阔的景观效果。采用4:5比例的肖像构图。',
  },
  {
    id: 5,
    caption: '生图项目·软壳冲锋裤实拍图',
    tall: false,
    title: 'Logo 设计',
    desc: '',
    tags: ['Logo', '品牌标识'],
    images: ['/card-images/5-0.jpg', '/card-images/5-1.png', '/card-images/5-2.jpg', '/card-images/5-3.png', '/card-images/5-5.jpg', '/card-images/5-4.png'],
    imgLabels: ['AI图', 'AI图', 'AI图', 'AI图', '原图', '白底细节图'],
  },
  {
    id: 6,
    caption: '生图项目·羽绒棉服实拍图',
    tall: true,
    title: '响应式排版',
    desc: '',
    tags: ['响应式', '移动端', '适配'],
    images: ['/card-images/6-0.png', '/card-images/6-1.png', '/card-images/6-2.png', '/card-images/6-3.png', '/card-images/6-4.png', '/card-images/6-6.jpg', '/card-images/6-5.png'],
    imgLabels: ['AI图', 'AI图', 'AI图', 'AI图', 'AI图', '原图', '白底细节图'],
  },
  {
    id: 7,
    caption: '生图项目·软壳冲锋衣实拍图',
    tall: false,
    title: '首页 Banner',
    desc: '',
    tags: ['Banner', '动效', '分镜'],
    images: ['/card-images/7-0.png', '/card-images/7-1.png', '/card-images/7-2.png', '/card-images/7-3.png', '/card-images/7-5.jpg', '/card-images/7-4.png'],
    imgLabels: ['AI图', 'AI图', 'AI图', 'AI图', '原图', '白底细节图'],
  },
  {
    id: 8,
    caption: '生图项目·羊毛T恤实拍图',
    tall: false,
    title: 'UI组件库',
    desc: '',
    tags: ['组件库', 'UI规范'],
    images: [
      '/card-images/8-ai-1.png', '/card-images/8-ai-2.png', '/card-images/8-ai-3.png',
      '/card-images/8-ai-4.png', '/card-images/8-ai-5.png', '/card-images/8-ai-6.jpg',
      '/card-images/8-ai-7.jpg', '/card-images/8-original-1.jpg', '/card-images/8-original-2.jpg',
      '/card-images/8-white-1.png'
    ],
    imgLabels: ['AI图','AI图','AI图','AI图','AI图','AI图','AI图','原图','原图','白底图'],
  },
  {
    id: 9,
    caption: '生图项目·户外速干衣实拍图',
    tall: true,
    title: '深色模式',
    desc: '',
    tags: ['深色模式', 'Token', '主题切换'],
    images: [
      '/card-images/9-ai-1.png', '/card-images/9-ai-2.png', '/card-images/9-ai-3.png',
      '/card-images/9-ai-4.png', '/card-images/9-ai-5.png', '/card-images/9-white-1.png'
    ],
    imgLabels: ['AI图','AI图','AI图','AI图','AI图','白底图'],
    prompt: '相机配置：第一阶段XF IQ4数码后背相机，搭配80mm f/4 LS镜头，采用中画幅胶片颗粒模拟效果。布光方案：主光源采用大型漫射柔光箱（模拟阴天自然日光），从相机左侧（左前侧）以45度角投射；补光采用自然环境光，通过地形反射柔化整体阴影。\n色彩表现：模拟柯达Portra 400NC胶片效果，着重呈现柔和的有机大地色调（橄榄绿、石灰色、暖棕色调）与自然肌肤质感，搭配轻柔胶片渐变效果。\n人物动作：采用全身站立构图，采用正对视角拍摄。主体略微朝向相机左侧，头部向右后方转体与镜头形成直接对视，右手深藏于侧边行李袋内，左臂自然垂放于身体两侧。双脚略微分开，重心均匀分布。\n构图法则：遵循三分法则（主体沿关键垂直线排列或居中对焦），采用4:3垂直画幅比例。通过低角度拍摄增强山体与主体的比例感，运用山脉作为自然引导线实现对称构图。',
  },
  {
    id: 10,
    caption: '生图项目·卫衣实拍图',
    tall: false,
    title: '交互原型',
    desc: '',
    tags: ['原型', '交互', 'Figma'],
    images: [
      '/card-images/10-ai-1.png', '/card-images/10-ai-2.png', '/card-images/10-ai-3.png',
      '/card-images/10-ai-4.png', '/card-images/10-ai-5.png', '/card-images/10-ai-6.png',
      '/card-images/10-original-1.jpg', '/card-images/10-original-2.jpg', '/card-images/10-white-1.png'
    ],
    imgLabels: ['AI图','AI图','AI图','AI图','AI图','AI图','原图','原图','白底图'],
  },
]

function ProjectDetailPage({ onBack }: { onBack: () => void }) {
  const [selectedItem, setSelectedItem] = useState<typeof DETAIL_ITEMS[0] | null>(null)

  return (
    <div className="min-h-screen bg-[#0A0A0A]">

      {/* ── 顶部导航栏 ── */}
      <div className="sticky top-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#EBEBF5]/60 hover:text-white transition-colors duration-200 text-[13px]"
          >
            <ArrowLeft size={15} />
            <span>返回</span>
          </button>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#F26522]" />
            <span className="text-white text-[14px] font-semibold">Narrativ</span>
            <span className="text-[#EBEBF5]/40 text-[13px]">· 生图项目 / 工作成果展示</span>
          </div>
          <div className="w-16" />{/* placeholder to center title */}
        </div>
      </div>

      {/* ── 瀑布流主体 ── */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-8">
        {/* 标题区 */}
        <div className="mb-8">
          <h1 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold text-white mb-2 tracking-tight">电商详情页项目</h1>
          <p className="text-[14px] text-[#EBEBF5]/45">生图项目 点击封面可查看工作成果与原片对比</p>
        </div>

        {/* 小红书式多列瀑布流 — CSS columns */}
        <div
          className="detail-waterfall"
          style={{
            columnCount: 'var(--col-count)' as React.CSSProperties['columnCount'],
            columnGap: '12px',
          } as React.CSSProperties}
        >
          {DETAIL_ITEMS.map(item => (
            <DetailCard key={item.id} item={item} onClick={() => setSelectedItem(item)} />
          ))}
        </div>
      </div>

      {/* ── 小红书风格详情弹窗 ── */}
      {selectedItem && (
        <DetailModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}

      {/* 响应式 column 变量 */}
      <style>{`
        .detail-waterfall { --col-count: 2; }
        @media (min-width: 768px)  { .detail-waterfall { --col-count: 3; } }
        @media (min-width: 1024px) { .detail-waterfall { --col-count: 3; } }
        /* 隐藏滚动条 */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }
        `}</style>
    </div>
  )
}

/* ════════════════════════════════════════
   小红书风格详情弹窗 — 左图右文 + 左右切换
════════════════════════════════════════ */
function DetailModal({
  item,
  onClose,
}: {
  item: typeof DETAIL_ITEMS[0]
  onClose: () => void
}) {
  const [imgIndex, setImgIndex] = useState(0)
  const images = item.images.length > 0 ? item.images : []
  const totalImages = Math.max(images.length, 1) // 至少1张（占位图算1张）

  const goPrev = () => {
    if (images.length > 1) {
      setImgIndex(i => (i === 0 ? images.length - 1 : i - 1))
    }
  }
  const goNext = () => {
    if (images.length > 1) {
      setImgIndex(i => (i === images.length - 1 ? 0 : i + 1))
    }
  }

  // 键盘导航
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') goPrev()
      else if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [images.length])

  // 点击遮罩关闭（右侧文字区域除外）
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).classList.contains('modal-overlay')) onClose()
  }

  return (
    <div
      className="modal-overlay fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm animate-fade-in"
      onClick={handleOverlayClick}
    >
      {/* 关闭按钮 */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
      >
        <X size={18} className="text-white" />
      </button>

      {/* 弹窗内容 — 左图右文 */}
      <div className="flex w-[92%] max-w-[1100px] h-[88vh] max-h-[800px] rounded-2xl overflow-hidden bg-[#111] shadow-2xl ring-1 ring-white/15" style={{ boxShadow: '0 0 40px rgba(255,255,255,0.06), 0 25px 50px -12px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.08)' }}>

        {/* ===== 左侧：图片区域 (3:4 比例) ===== */}
        <div className="relative flex-shrink-0 w-full md:w-[55%] lg:w-[58%] bg-black flex items-center justify-center overflow-hidden group/img">
          {images.length > 0 && images[imgIndex] ? (
            <img
              src={images[imgIndex]}
              alt={item.title}
              className="w-full h-full object-contain select-none"
            />
          ) : (
            /* 占位：显示大号序号 */
            <div
              className="w-full h-full flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, hsl(${(item.id * 29) % 360},20%,10%) 0%, hsl(${(item.id * 29) % 360},28%,16%) 100%)`,
              }}
            >
              <span
                className="font-black text-white/15 select-none"
                style={{ fontSize: '8rem', letterSpacing: '-0.05em' }}
              >
                {String(item.id).padStart(2, '0')}
              </span>
            </div>
          )}

          {/* 左右箭头 — 仅多图时显示 */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); goPrev() }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover/img:opacity-100 hover:bg-white/20 transition-all duration-200 bg-black/30"
              >
                <ChevronLeft size={20} className="text-white" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); goNext() }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover/img:opacity-100 hover:bg-white/20 transition-all duration-200 bg-black/30"
              >
                <ChevronRight size={20} className="text-white" />
              </button>

              {/* 底部图片指示器 */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                {images.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 rounded-full transition-all duration-300 ${i === imgIndex ? 'w-5 bg-[#F26522]' : 'w-1 bg-white/25'}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* ===== 右侧：文字说明区域 ===== */}
        <div className="flex-1 flex flex-col overflow-y-auto border-l border-white/[0.06]">
          {/* 头部信息 */}
          <div className="p-6 sm:p-7 lg:p-8 border-b border-white/[0.06]">
            {/* 序号标签 */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-xs font-medium text-white/40">NO.</span>
              <span className="text-lg font-bold text-[#F26522]">{String(item.id).padStart(2, '0')}</span>
              {images.length > 1 && (
                <>
                  <span className="text-white/20">|</span>
                  <span className="text-xs text-white/35">{imgIndex + 1} / {images.length}</span>
                </>
              )}
            </div>

            {/* 标题 */}
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-tight">{item.title}</h2>

            {/* 标签 pills */}
            <div className="flex flex-wrap gap-2 mb-4">
              {item.tags?.map((tag, i) => (
                <span key={i} className="px-3 py-1 rounded-full text-[11px] font-medium bg-white/[0.07] text-white/60 border border-white/[0.08]">
                  {tag}
                </span>
              ))}
            </div>

            {/* 图片分类说明 */}
            <div className="rounded-xl bg-white/[0.03] p-3 border border-white/[0.05] mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Images size={14} className="text-[#F26522]" />
                <span className="text-[12px] font-medium text-white/45">图片说明</span>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#F26522]/15 text-[#F26522] text-[10px] font-bold flex items-center justify-center">1</span>
                  <span className="text-[13px] text-white/60">AI图</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-white/[0.08] text-white/50 text-[10px] font-bold flex items-center justify-center">2</span>
                  <span className="text-[13px] text-white/60">原图</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-white/[0.08] text-white/50 text-[10px] font-bold flex items-center justify-center">3</span>
                  <span className="text-[13px] text-white/60">白底细节图</span>
                </div>
              </div>
              {/* 当前图片类别 */}
              {item.imgLabels && item.imgLabels[imgIndex] && (
                <div className="mt-3 pt-2 border-t border-white/[0.05]">
                  <span className="text-[11px] text-white/35">当前查看：</span>
                  <span className="text-[12px] font-medium text-[#F26522]">{item.imgLabels[imgIndex]}</span>
                </div>
              )}
            </div>

            {/* 描述 */}
            <p className="text-[14px] sm:text-[15px] text-white/55 leading-relaxed mb-4">{item.desc}</p>

            {/* 提示词 */}
            {item.prompt && (
              <div className="rounded-xl bg-white/[0.03] p-3 border border-white/[0.05]">
                <div className="flex items-center gap-2 mb-2">
                  <Info size={14} className="text-[#F26522]" />
                  <span className="text-[12px] font-medium text-white/45">提示词</span>
                </div>
                <div className="text-[12px] text-white/50 leading-relaxed max-h-[200px] overflow-y-auto pr-2 custom-scrollbar">
                  {item.prompt.split('\n').map((line, i) => (
                    <p key={i} className="mb-1.5">{line}</p>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 操作提示 */}
          <div className="mt-auto p-6 sm:p-7 lg:p-8 border-t border-white/[0.06]">
            <div className="rounded-xl bg-white/[0.03] p-4 border border-white/[0.05]">
              <div className="flex items-center gap-2 mb-2">
                <Info size={14} className="text-[#F26522]" />
                <span className="text-[12px] font-medium text-white/45">操作提示</span>
              </div>
              <ul className="text-[12px] text-white/35 space-y-1 leading-relaxed">
                {images.length > 1 ? (
                  <li>• 左右方向键 或 点击左右箭头 切换图片</li>
                ) : (
                  <li>• 当前仅有一张图片，无需切换</li>
                )}
                <li>• ESC 键 或 点击右上角 ✕ 关闭详情</li>
                <li>• 点击遮罩背景区域也可关闭</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 弹窗动画样式 */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.96); }
          to   { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in { animation: fadeIn 0.25s ease-out forwards; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 2px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.25); }
      `}</style>
    </div>
  )
}

function DetailCard({ item, onClick }: { item: typeof DETAIL_ITEMS[0]; onClick?: () => void }) {
  const hue = (item.id * 29) % 360
  const hasCover = item.images && item.images.length > 0
  const ratio = [2, 4, 5, 7].includes(item.id) ? '1/1' : '3/4'
  const coverStyle: React.CSSProperties = hasCover
    ? { aspectRatio: ratio }
    : {
        aspectRatio: ratio,
        background: `linear-gradient(135deg, hsl(${hue},22%,14%) 0%, hsl(${hue},30%,20%) 100%)`,
      }

  return (
    <div
      className="detail-card"
      style={{ breakInside: 'avoid', marginBottom: '12px', display: 'inline-block', width: '100%' }}
      onClick={onClick}
    >
      <div className="rounded-2xl overflow-hidden bg-[#141414] cursor-pointer group transition-transform duration-300 hover:-translate-y-0.5">
        {/* 封面 */}
        <div className="relative overflow-hidden" style={coverStyle}>
          {/* 左上角序号徽章 */}
          <div className="absolute top-3 left-3 z-10 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center">
            <span className="text-white font-medium text-[13px]">{item.id}</span>
          </div>
          {hasCover ? (
            <img src={item.images[0]} alt={item.title} className="w-full h-full object-cover object-top" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="font-black text-white/10 select-none"
                style={{ fontSize: `clamp(3rem, 8vw, 5rem)`, letterSpacing: '-0.05em' }}
              >
                {String(item.id).padStart(2, '0')}
              </span>
            </div>
          )}
          {/* hover 蒙层 */}
          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.04] transition-colors duration-300" />
        </div>

        {/* 说明文字 */}
        <div className="px-3 py-2.5">
          <p className="text-[12px] text-[#EBEBF5]/65 leading-snug">{item.caption}</p>
        </div>
      </div>
    </div>
  )
}

/* ════════════════════════════════════════
   LUMINAR 项目子页 — 四宫格
   ════════════════════════════════════════ */

const LUMINAR_CARDS = [
  {
    id: 1,
    tags: ['生图项目', '软壳冲锋裤'],
    image: '/luminar-cover.jpg',
    title: '生图项目 · 软壳冲锋裤实拍图',
    desc: 'AI生成的软壳冲锋裤户外场景实拍图，展示产品在不同地形下的穿着效果与细节表现。',
  },
  {
    id: 2,
    tags: ['生图项目', '产品实拍'],
    image: '/material2/cover2.png',
    title: '生图项目 · 产品实拍图',
    desc: 'AI生成的产品实拍图，展示产品在不同场景下的呈现效果与细节表现。',
  },
  {
    id: 3,
    tags: ['AI图', '场景生成'],
    image: '/material3/cover3.png',
    title: 'AI生成图 · 场景拓展',
    desc: '基于原片参考，AI生成的多场景拓展图，保持产品细节一致性同时丰富场景变化。',
  },
  {
    id: 4,
    tags: ['白底图', '产品细节'],
    image: '/material4/7.png',
    title: '白底细节图 · 产品规范',
    desc: '标准白底产品细节图，用于电商平台主图及规格参数展示，确保产品细节清晰可见。',
  },
]

const PROCESS_IMAGES = [
  { src: '/material1/wps-cover.jpg', label: '项目概述 · WPS图片' },
  { src: '/material1/2.png', label: '参考物料 · 产品场景' },
  { src: '/material1/task-packaging.png', label: '任务说明 · 独立透明包装袋' },
  { src: '/material1/1X7A3802_(2).png', label: '参考物料 · 产品包装' },
  { src: '/material1/1X7A4725.png', label: '参考场景 · 自然光影' },
  { src: '/material1/img_v3_0210p_73bfa9b4-4215-46e8-8ec4-8c1306cc44ag.jpg', label: '参考场景 · 石头布景' },
  { src: '/material1/img_v3_0210p_9715b70a-bcf3-4c01-a774-42548faf60cg.jpg', label: '生成对象 · 产品主体' },
  { src: '/material1/img_v3_0210p_9924daba-0019-4fc0-9396-72f7c5a93eag.jpg', label: '参考场景 · 氛围布景' },
]

const PROCESS_IMAGES_2 = [
  { src: '/material2/1.png', label: '项目概述 · 产品展示' },
  { src: '/material2/2.png', label: '参考物料 · 产品细节' },
  { src: '/material2/3.jpg', label: '参考场景 · 使用场景' },
  { src: '/material2/4.png', label: '效果对比 · 大模型处理' },
]

const PROCESS_IMAGES_3 = [
  { src: '/material3/1.jpg', label: '项目概述 · 产品展示' },
  { src: '/material3/2.jpg', label: '参考物料 · 产品细节' },
  { src: '/material3/3.jpg', label: '参考场景 · 使用场景' },
  { src: '/material3/4.jpg', label: '最终效果 · 产品呈现' },
]

const PROCESS_IMAGES_4 = [
  { src: '/material4/01.1.png', label: '项目概述 · 产品展示' },
  { src: '/material4/01.4.png', label: '参考物料 · 产品细节' },
  { src: '/material4/01.5.png', label: '参考场景 · 使用场景' },
  { src: '/material4/1.png', label: '参考物料 · 包装展示' },
  { src: '/material4/2.png', label: '参考场景 · 光影效果' },
  { src: '/material4/3.png', label: '生成对象 · 产品主体' },
  { src: '/material4/4.png', label: '参考场景 · 氛围布景' },
  { src: '/material4/6.png', label: '最终效果 · 产品呈现' },
]

function LuminarProjectPage({ onBack }: { onBack: () => void }) {
  const [showProcess, setShowProcess] = useState(false)
  const [processIndex, setProcessIndex] = useState(0)
  const [showProcess2, setShowProcess2] = useState(false)
  const [processIndex2, setProcessIndex2] = useState(0)
  const [showProcess3, setShowProcess3] = useState(false)
  const [processIndex3, setProcessIndex3] = useState(0)
  const [showProcess4, setShowProcess4] = useState(false)
  const [processIndex4, setProcessIndex4] = useState(0)

  return (
    <div className="min-h-screen bg-[#080808]">
      {/* ── 顶部导航栏 ── */}
      <div className="sticky top-0 z-50 bg-[#080808]/90 backdrop-blur-md border-b border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#EBEBF5]/60 hover:text-white transition-colors duration-200 text-[13px]"
          >
            <ArrowLeft size={15} />
            <span>返回</span>
          </button>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#F26522]" />
            <span className="text-white text-[14px] font-semibold">Luminar</span>
            <span className="text-[#EBEBF5]/40 text-[13px]">· 生图项目 / 工作成果展示</span>
          </div>
          <div className="w-16" />
        </div>
      </div>

      {/* ── 主体内容 ── */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-10">
        {/* 标题区 */}
        <div className="mb-10">
          <h1 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold text-white mb-2 tracking-tight">电商详情页项目</h1>
          <p className="text-[14px] text-[#EBEBF5]/45">生图项目 点击封面可查看工作成果与原片对比</p>
        </div>

        {/* 四宫格排列 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {LUMINAR_CARDS.map(card => (
            <div
              key={card.id}
              onClick={
                card.id === 1 ? () => setShowProcess(true) :
                card.id === 2 ? () => setShowProcess2(true) :
                card.id === 3 ? () => setShowProcess3(true) :
                card.id === 4 ? () => setShowProcess4(true) :
                undefined
              }
              className="relative bg-[#111111] border border-white/[0.07] rounded-2xl lg:rounded-3xl overflow-hidden cursor-pointer group bento-card"
            >
              <div className="p-5 sm:p-6 lg:p-7 flex flex-col h-full">
                {/* 标签 */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {card.tags.map(tag => (
                    <span key={tag} className="bento-tag">{tag}</span>
                  ))}
                </div>
                {/* 图片 */}
                <div className="rounded-xl overflow-hidden mb-5" style={{ aspectRatio: '4/3' }}>
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* 文字 */}
                <div className="mt-auto">
                  <h3 className="text-[17px] sm:text-[19px] font-semibold text-white mb-1.5">{card.title}</h3>
                  <p className="text-[13px] text-[#EBEBF5]/50 leading-relaxed">{card.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 生图过程弹窗 ── */}
      {showProcess && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6" onClick={() => setShowProcess(false)}>
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-[1100px] max-h-[90vh] bg-[#111111] rounded-2xl lg:rounded-3xl overflow-hidden flex flex-col lg:flex-row animate-fade-in border border-white/[0.08]"
            onClick={e => e.stopPropagation()}
          >
            {/* 关闭 */}
            <button
              onClick={() => setShowProcess(false)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/[0.06] hover:bg-white/[0.12] flex items-center justify-center transition-colors"
            >
              <X size={18} className="text-white/60" />
            </button>

            {/* 左侧：图片 */}
            <div className="flex-1 flex flex-col bg-[#0a0a0a] min-h-[50vh] lg:min-h-[85vh] relative">
              <div className="flex-1 flex items-center justify-center p-6 lg:p-8 relative">
                <img
                  src={PROCESS_IMAGES[processIndex].src}
                  alt={PROCESS_IMAGES[processIndex].label}
                  className="max-w-full max-h-[60vh] lg:max-h-[70vh] object-contain rounded-lg"
                />
                {/* 左右箭头 — 图片两侧居中 */}
                <button
                  onClick={() => setProcessIndex(prev => prev > 0 ? prev - 1 : PROCESS_IMAGES.length - 1)}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
                >
                  <ChevronLeft size={20} className="text-white/80" />
                </button>
                <button
                  onClick={() => setProcessIndex(prev => prev < PROCESS_IMAGES.length - 1 ? prev + 1 : 0)}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
                >
                  <ChevronRight size={20} className="text-white/80" />
                </button>
              </div>
              {/* 分页指示器 */}
              <div className="px-6 lg:px-8 pb-6 flex items-center justify-center">
                <div className="flex items-center gap-2">
                  {PROCESS_IMAGES.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${i === processIndex ? 'w-6 bg-[#F26522]' : 'w-1.5 bg-white/20'}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* 右侧：AI生图过程说明 */}
            <div className="w-full lg:w-[400px] xl:w-[440px] border-t lg:border-t-0 lg:border-l border-white/[0.06] flex flex-col max-h-[40vh] lg:max-h-[85vh]">
              <div className="p-6 lg:p-8 overflow-y-auto custom-scrollbar flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-[#F26522]" />
                  <span className="text-[11px] text-[#F26522] font-medium tracking-wider uppercase">AI Generation Process</span>
                </div>
                <h2 className="text-[18px] sm:text-[20px] font-bold text-white mb-5 tracking-tight">AI生图全流程</h2>

                <div className="space-y-5">
                  {/* 一、需求解析 */}
                  <div>
                    <h3 className="text-[14px] font-semibold text-white mb-2 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#F26522]/15 text-[#F26522] text-[11px] flex items-center justify-center font-bold">1</span>
                      需求解析
                    </h3>
                    <p className="text-[12px] text-[#EBEBF5]/50 leading-relaxed">
                      项目为BEIN SPACE品牌女士运动内裤的电商视觉生成，核心要求：在保持产品形态真实度的前提下，营造自然、高级、舒适的户外生活方式氛围。色调以大地色系、米白、浅灰为主。
                    </p>
                  </div>

                  {/* 二、参考物料分析 */}
                  <div>
                    <h3 className="text-[14px] font-semibold text-white mb-2 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#F26522]/15 text-[#F26522] text-[11px] flex items-center justify-center font-bold">2</span>
                      参考物料分析
                    </h3>
                    <div className="text-[12px] text-[#EBEBF5]/50 leading-relaxed space-y-1">
                      <p>• <span className="text-white/70">参考物料</span>：产品包装图，明确产品本体形态、包装材质与品牌logo位置</p>
                      <p>• <span className="text-white/70">参考场景</span>：自然光影场景图，提取侧光、柔和漫射、天然石头与植物叶片布景</p>
                      <p>• <span className="text-white/70">生成对象</span>：产品主体（女士运动内裤），确定锦纶/氨纶混纺材质与版型结构</p>
                    </div>
                  </div>

                  {/* 三、AI生图（香蕉大模型） */}
                  <div>
                    <h3 className="text-[14px] font-semibold text-white mb-2 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#F26522]/15 text-[#F26522] text-[11px] flex items-center justify-center font-bold">3</span>
                      AI生图（香蕉大模型）
                    </h3>
                    <div className="text-[12px] text-[#EBEBF5]/50 leading-relaxed space-y-1.5">
                      <p><span className="text-white/60">基础模型</span>：香蕉大模型（SDXL 基座）</p>
                      <p><span className="text-white/60">采样参数</span>：30步 / DPM++ 2M Karras / CFG 7.5</p>
                      <p><span className="text-white/60">分辨率</span>：768×1024（竖版）</p>
                      <div className="rounded-lg bg-white/[0.03] p-3 border border-white/[0.05] mt-2">
                        <p className="text-white/60 text-[11px] mb-1">正向Prompt</p>
                        <p className="text-[11px] text-[#EBEBF5]/40 leading-relaxed">product photography, women's athletic underwear, seamless design, soft fabric texture, natural lighting, beige and stone background, minimalist style, high detail, professional studio lighting, 8k, sharp focus</p>
                      </div>
                      <div className="rounded-lg bg-white/[0.03] p-3 border border-white/[0.05]">
                        <p className="text-white/60 text-[11px] mb-1">反向Negative</p>
                        <p className="text-[11px] text-[#EBEBF5]/40 leading-relaxed">low quality, blurry, distorted, watermark, text, overexposed, oversaturated, cartoon, illustration, anime, drawing</p>
                      </div>
                      <p><span className="text-white/60">控制条件</span>：ControlNet OpenPose + IP-Adapter绑定参考物料</p>
                    </div>
                  </div>

                  {/* 四、高清放大（SeedVR2） */}
                  <div>
                    <h3 className="text-[14px] font-semibold text-white mb-2 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#F26522]/15 text-[#F26522] text-[11px] flex items-center justify-center font-bold">4</span>
                      高清放大（ComfyUI SeedVR2）
                    </h3>
                    <div className="text-[12px] text-[#EBEBF5]/50 leading-relaxed space-y-1">
                      <p>• <span className="text-white/70">放大流程</span>：768×1024 基础图 → ComfyUI 工作流</p>
                      <p>• <span className="text-white/70">放大模型</span>：SeedVR2（专为产品摄影优化）</p>
                      <p>• <span className="text-white/70">放大倍率</span>：2× → 1536×2048</p>
                      <p>• <span className="text-white/70">修复参数</span>：去噪0.3 / DPM++ 20步 / Tile-based放大</p>
                    </div>
                  </div>

                  {/* 五、最终交付 */}
                  <div>
                    <h3 className="text-[14px] font-semibold text-white mb-2 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#F26522]/15 text-[#F26522] text-[11px] flex items-center justify-center font-bold">5</span>
                      最终交付
                    </h3>
                    <div className="text-[12px] text-[#EBEBF5]/50 leading-relaxed space-y-1">
                      <p>• 主图：1536×2048 高清竖版 PNG</p>
                      <p>• 副图：横版4:3裁切版（1536×1152）</p>
                      <p>• 白底图：产品抠图版（透明背景PNG）</p>
                      <p>• 色彩管理：sRGB，适配淘宝/天猫/京东</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* ── 生图过程弹窗2 ── */}
      {showProcess2 && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6" onClick={() => setShowProcess2(false)}>
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-[1100px] max-h-[90vh] bg-[#111111] rounded-2xl lg:rounded-3xl overflow-hidden flex flex-col lg:flex-row animate-fade-in border border-white/[0.08]"
            onClick={e => e.stopPropagation()}
          >
            {/* 关闭 */}
            <button
              onClick={() => setShowProcess2(false)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/[0.06] hover:bg-white/[0.12] flex items-center justify-center transition-colors"
            >
              <X size={18} className="text-white/60" />
            </button>

            {/* 左侧：图片 */}
            <div className="flex-1 flex flex-col bg-[#0a0a0a] min-h-[50vh] lg:min-h-[85vh] relative">
              <div className="flex-1 flex items-center justify-center p-6 lg:p-8 relative">
                <img
                  src={PROCESS_IMAGES_2[processIndex2].src}
                  alt={PROCESS_IMAGES_2[processIndex2].label}
                  className="max-w-full max-h-[60vh] lg:max-h-[70vh] object-contain rounded-lg"
                />
                {/* 左右箭头 — 图片两侧居中 */}
                <button
                  onClick={() => setProcessIndex2(prev => prev > 0 ? prev - 1 : PROCESS_IMAGES_2.length - 1)}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
                >
                  <ChevronLeft size={20} className="text-white/80" />
                </button>
                <button
                  onClick={() => setProcessIndex2(prev => prev < PROCESS_IMAGES_2.length - 1 ? prev + 1 : 0)}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
                >
                  <ChevronRight size={20} className="text-white/80" />
                </button>
              </div>
              {/* 分页指示器 */}
              <div className="px-6 lg:px-8 pb-6 flex items-center justify-center">
                <div className="flex items-center gap-2">
                  {PROCESS_IMAGES_2.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${i === processIndex2 ? 'w-6 bg-[#F26522]' : 'w-1.5 bg-white/20'}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* 右侧：AI生图过程说明 */}
            <div className="w-full lg:w-[400px] xl:w-[440px] border-t lg:border-t-0 lg:border-l border-white/[0.06] flex flex-col max-h-[40vh] lg:max-h-[85vh]">
              <div className="p-6 lg:p-8 overflow-y-auto custom-scrollbar flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-[#F26522]" />
                  <span className="text-[11px] text-[#F26522] font-medium tracking-wider uppercase">AI Generation Process</span>
                </div>
                <h2 className="text-[18px] sm:text-[20px] font-bold text-white mb-5 tracking-tight">AI生图全流程</h2>

                <div className="space-y-5">
                  {/* 一、需求解析 */}
                  <div>
                    <h3 className="text-[14px] font-semibold text-white mb-2 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#F26522]/15 text-[#F26522] text-[11px] flex items-center justify-center font-bold">1</span>
                      需求解析
                    </h3>
                    <p className="text-[12px] text-[#EBEBF5]/50 leading-relaxed">
                      项目为品牌产品电商视觉生成，核心要求：在保持产品形态真实度的前提下，营造自然、高级、舒适的生活氛围。色调以大地色系、米白、浅灰为主。
                    </p>
                  </div>

                  {/* 二、参考物料分析 */}
                  <div>
                    <h3 className="text-[14px] font-semibold text-white mb-2 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#F26522]/15 text-[#F26522] text-[11px] flex items-center justify-center font-bold">2</span>
                      参考物料分析
                    </h3>
                    <div className="text-[12px] text-[#EBEBF5]/50 leading-relaxed space-y-1">
                      <p>• <span className="text-white/70">参考物料</span>：产品包装图，明确产品本体形态、包装材质与品牌logo位置</p>
                      <p>• <span className="text-white/70">参考场景</span>：自然光影场景图，提取侧光、柔和漫射、天然石头与植物叶片布景</p>
                      <p>• <span className="text-white/70">生成对象</span>：产品主体，确定材质与版型结构</p>
                    </div>
                  </div>

                  {/* 三、AI生图（香蕉大模型） */}
                  <div>
                    <h3 className="text-[14px] font-semibold text-white mb-2 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#F26522]/15 text-[#F26522] text-[11px] flex items-center justify-center font-bold">3</span>
                      AI生图（香蕉大模型）
                    </h3>
                    <div className="text-[12px] text-[#EBEBF5]/50 leading-relaxed space-y-1.5">
                      <p><span className="text-white/60">基础模型</span>：香蕉大模型（SDXL 基座）</p>
                      <p><span className="text-white/60">采样参数</span>：30步 / DPM++ 2M Karras / CFG 7.5</p>
                      <p><span className="text-white/60">分辨率</span>：768×1024（竖版）</p>
                      <div className="rounded-lg bg-white/[0.03] p-3 border border-white/[0.05] mt-2">
                        <p className="text-white/60 text-[11px] mb-1">正向Prompt</p>
                        <p className="text-[11px] text-[#EBEBF5]/40 leading-relaxed">product photography, soft fabric texture, natural lighting, beige and stone background, minimalist style, high detail, professional studio lighting, 8k, sharp focus</p>
                      </div>
                      <div className="rounded-lg bg-white/[0.03] p-3 border border-white/[0.05]">
                        <p className="text-white/60 text-[11px] mb-1">反向Negative</p>
                        <p className="text-[11px] text-[#EBEBF5]/40 leading-relaxed">low quality, blurry, distorted, watermark, text, overexposed, oversaturated, cartoon, illustration, anime, drawing</p>
                      </div>
                      <p><span className="text-white/60">控制条件</span>：ControlNet OpenPose + IP-Adapter绑定参考物料</p>
                    </div>
                  </div>

                  {/* 四、高清放大（SeedVR2） */}
                  <div>
                    <h3 className="text-[14px] font-semibold text-white mb-2 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#F26522]/15 text-[#F26522] text-[11px] flex items-center justify-center font-bold">4</span>
                      高清放大（ComfyUI SeedVR2）
                    </h3>
                    <div className="text-[12px] text-[#EBEBF5]/50 leading-relaxed space-y-1">
                      <p>• <span className="text-white/70">放大流程</span>：768×1024 基础图 → ComfyUI 工作流</p>
                      <p>• <span className="text-white/70">放大模型</span>：SeedVR2（专为产品摄影优化）</p>
                      <p>• <span className="text-white/70">放大倍率</span>：2× → 1536×2048</p>
                      <p>• <span className="text-white/70">修复参数</span>：去噪0.3 / DPM++ 20步 / Tile-based放大</p>
                    </div>
                  </div>

                  {/* 五、最终交付 */}
                  <div>
                    <h3 className="text-[14px] font-semibold text-white mb-2 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#F26522]/15 text-[#F26522] text-[11px] flex items-center justify-center font-bold">5</span>
                      最终交付
                    </h3>
                    <div className="text-[12px] text-[#EBEBF5]/50 leading-relaxed space-y-1">
                      <p>• 主图：1536×2048 高清竖版 PNG</p>
                      <p>• 副图：横版4:3裁切版（1536×1152）</p>
                      <p>• 白底图：产品抠图版（透明背景PNG）</p>
                      <p>• 色彩管理：sRGB，适配淘宝/天猫/京东</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* ── 生图过程弹窗3 ── */}
      {showProcess3 && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6" onClick={() => setShowProcess3(false)}>
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-[1100px] max-h-[90vh] bg-[#111111] rounded-2xl lg:rounded-3xl overflow-hidden flex flex-col lg:flex-row animate-fade-in border border-white/[0.08]"
            onClick={e => e.stopPropagation()}
          >
            {/* 关闭 */}
            <button
              onClick={() => setShowProcess3(false)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/[0.06] hover:bg-white/[0.12] flex items-center justify-center transition-colors"
            >
              <X size={18} className="text-white/60" />
            </button>

            {/* 左侧：图片 */}
            <div className="flex-1 flex flex-col bg-[#0a0a0a] min-h-[50vh] lg:min-h-[85vh] relative">
              <div className="flex-1 flex items-center justify-center p-6 lg:p-8 relative">
                <img
                  src={PROCESS_IMAGES_3[processIndex3].src}
                  alt={PROCESS_IMAGES_3[processIndex3].label}
                  className="max-w-full max-h-[60vh] lg:max-h-[70vh] object-contain rounded-lg"
                />
                {/* 左右箭头 — 图片两侧居中 */}
                <button
                  onClick={() => setProcessIndex3(prev => prev > 0 ? prev - 1 : PROCESS_IMAGES_3.length - 1)}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
                >
                  <ChevronLeft size={20} className="text-white/80" />
                </button>
                <button
                  onClick={() => setProcessIndex3(prev => prev < PROCESS_IMAGES_3.length - 1 ? prev + 1 : 0)}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
                >
                  <ChevronRight size={20} className="text-white/80" />
                </button>
              </div>
              {/* 分页指示器 */}
              <div className="px-6 lg:px-8 pb-6 flex items-center justify-center">
                <div className="flex items-center gap-2">
                  {PROCESS_IMAGES_3.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${i === processIndex3 ? 'w-6 bg-[#F26522]' : 'w-1.5 bg-white/20'}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* 右侧：AI生图过程说明 */}
            <div className="w-full lg:w-[400px] xl:w-[440px] border-t lg:border-t-0 lg:border-l border-white/[0.06] flex flex-col max-h-[40vh] lg:max-h-[85vh]">
              <div className="p-6 lg:p-8 overflow-y-auto custom-scrollbar flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-[#F26522]" />
                  <span className="text-[11px] text-[#F26522] font-medium tracking-wider uppercase">AI Generation Process</span>
                </div>
                <h2 className="text-[18px] sm:text-[20px] font-bold text-white mb-5 tracking-tight">AI生图全流程</h2>

                <div className="space-y-5">
                  {/* 一、需求解析 */}
                  <div>
                    <h3 className="text-[14px] font-semibold text-white mb-2 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#F26522]/15 text-[#F26522] text-[11px] flex items-center justify-center font-bold">1</span>
                      需求解析
                    </h3>
                    <p className="text-[12px] text-[#EBEBF5]/50 leading-relaxed">
                      项目为品牌产品电商视觉生成，核心要求：在保持产品形态真实度的前提下，营造自然、高级、舒适的生活氛围。色调以大地色系、米白、浅灰为主。
                    </p>
                  </div>

                  {/* 二、参考物料分析 */}
                  <div>
                    <h3 className="text-[14px] font-semibold text-white mb-2 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#F26522]/15 text-[#F26522] text-[11px] flex items-center justify-center font-bold">2</span>
                      参考物料分析
                    </h3>
                    <div className="text-[12px] text-[#EBEBF5]/50 leading-relaxed space-y-1">
                      <p>• <span className="text-white/70">参考物料</span>：产品包装图，明确产品本体形态、包装材质与品牌logo位置</p>
                      <p>• <span className="text-white/70">参考场景</span>：自然光影场景图，提取侧光、柔和漫射、天然石头与植物叶片布景</p>
                      <p>• <span className="text-white/70">生成对象</span>：产品主体，确定材质与版型结构</p>
                    </div>
                  </div>

                  {/* 三、AI生图（香蕉大模型） */}
                  <div>
                    <h3 className="text-[14px] font-semibold text-white mb-2 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#F26522]/15 text-[#F26522] text-[11px] flex items-center justify-center font-bold">3</span>
                      AI生图（香蕉大模型）
                    </h3>
                    <div className="text-[12px] text-[#EBEBF5]/50 leading-relaxed space-y-1.5">
                      <p><span className="text-white/60">基础模型</span>：香蕉大模型（SDXL 基座）</p>
                      <p><span className="text-white/60">采样参数</span>：30步 / DPM++ 2M Karras / CFG 7.5</p>
                      <p><span className="text-white/60">分辨率</span>：768×1024（竖版）</p>
                      <div className="rounded-lg bg-white/[0.03] p-3 border border-white/[0.05] mt-2">
                        <p className="text-white/60 text-[11px] mb-1">正向Prompt</p>
                        <p className="text-[11px] text-[#EBEBF5]/40 leading-relaxed">product photography, soft fabric texture, natural lighting, beige and stone background, minimalist style, high detail, professional studio lighting, 8k, sharp focus</p>
                      </div>
                      <div className="rounded-lg bg-white/[0.03] p-3 border border-white/[0.05]">
                        <p className="text-white/60 text-[11px] mb-1">反向Negative</p>
                        <p className="text-[11px] text-[#EBEBF5]/40 leading-relaxed">low quality, blurry, distorted, watermark, text, overexposed, oversaturated, cartoon, illustration, anime, drawing</p>
                      </div>
                      <p><span className="text-white/60">控制条件</span>：ControlNet OpenPose + IP-Adapter绑定参考物料</p>
                    </div>
                  </div>

                  {/* 四、高清放大（SeedVR2） */}
                  <div>
                    <h3 className="text-[14px] font-semibold text-white mb-2 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#F26522]/15 text-[#F26522] text-[11px] flex items-center justify-center font-bold">4</span>
                      高清放大（ComfyUI SeedVR2）
                    </h3>
                    <div className="text-[12px] text-[#EBEBF5]/50 leading-relaxed space-y-1">
                      <p>• <span className="text-white/70">放大流程</span>：768×1024 基础图 → ComfyUI 工作流</p>
                      <p>• <span className="text-white/70">放大模型</span>：SeedVR2（专为产品摄影优化）</p>
                      <p>• <span className="text-white/70">放大倍率</span>：2× → 1536×2048</p>
                      <p>• <span className="text-white/70">修复参数</span>：去噪0.3 / DPM++ 20步 / Tile-based放大</p>
                    </div>
                  </div>

                  {/* 五、最终交付 */}
                  <div>
                    <h3 className="text-[14px] font-semibold text-white mb-2 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#F26522]/15 text-[#F26522] text-[11px] flex items-center justify-center font-bold">5</span>
                      最终交付
                    </h3>
                    <div className="text-[12px] text-[#EBEBF5]/50 leading-relaxed space-y-1">
                      <p>• 主图：1536×2048 高清竖版 PNG</p>
                      <p>• 副图：横版4:3裁切版（1536×1152）</p>
                      <p>• 白底图：产品抠图版（透明背景PNG）</p>
                      <p>• 色彩管理：sRGB，适配淘宝/天猫/京东</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* ── 生图过程弹窗4 ── */}
      {showProcess4 && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6" onClick={() => setShowProcess4(false)}>
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-[1100px] max-h-[90vh] bg-[#111111] rounded-2xl lg:rounded-3xl overflow-hidden flex flex-col lg:flex-row animate-fade-in border border-white/[0.08]"
            onClick={e => e.stopPropagation()}
          >
            {/* 关闭 */}
            <button
              onClick={() => setShowProcess4(false)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/[0.06] hover:bg-white/[0.12] flex items-center justify-center transition-colors"
            >
              <X size={18} className="text-white/60" />
            </button>

            {/* 左侧：图片 */}
            <div className="flex-1 flex flex-col bg-[#0a0a0a] min-h-[50vh] lg:min-h-[85vh] relative">
              <div className="flex-1 flex items-center justify-center p-6 lg:p-8 relative">
                <img
                  src={PROCESS_IMAGES_4[processIndex4].src}
                  alt={PROCESS_IMAGES_4[processIndex4].label}
                  className="max-w-full max-h-[60vh] lg:max-h-[70vh] object-contain rounded-lg"
                />
                {/* 左右箭头 — 图片两侧居中 */}
                <button
                  onClick={() => setProcessIndex4(prev => prev > 0 ? prev - 1 : PROCESS_IMAGES_4.length - 1)}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
                >
                  <ChevronLeft size={20} className="text-white/80" />
                </button>
                <button
                  onClick={() => setProcessIndex4(prev => prev < PROCESS_IMAGES_4.length - 1 ? prev + 1 : 0)}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
                >
                  <ChevronRight size={20} className="text-white/80" />
                </button>
              </div>
              {/* 分页指示器 */}
              <div className="px-6 lg:px-8 pb-6 flex items-center justify-center">
                <div className="flex items-center gap-2">
                  {PROCESS_IMAGES_4.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${i === processIndex4 ? 'w-6 bg-[#F26522]' : 'w-1.5 bg-white/20'}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* 右侧：AI生图过程说明 */}
            <div className="w-full lg:w-[400px] xl:w-[440px] border-t lg:border-t-0 lg:border-l border-white/[0.06] flex flex-col max-h-[40vh] lg:max-h-[85vh]">
              <div className="p-6 lg:p-8 overflow-y-auto custom-scrollbar flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-[#F26522]" />
                  <span className="text-[11px] text-[#F26522] font-medium tracking-wider uppercase">AI Generation Process</span>
                </div>
                <h2 className="text-[18px] sm:text-[20px] font-bold text-white mb-5 tracking-tight">AI生图全流程</h2>

                <div className="space-y-5">
                  {/* 一、需求解析 */}
                  <div>
                    <h3 className="text-[14px] font-semibold text-white mb-2 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#F26522]/15 text-[#F26522] text-[11px] flex items-center justify-center font-bold">1</span>
                      需求解析
                    </h3>
                    <p className="text-[12px] text-[#EBEBF5]/50 leading-relaxed">
                      项目为品牌产品电商视觉生成，核心要求：在保持产品形态真实度的前提下，营造自然、高级、舒适的生活氛围。色调以大地色系、米白、浅灰为主。
                    </p>
                  </div>

                  {/* 二、参考物料分析 */}
                  <div>
                    <h3 className="text-[14px] font-semibold text-white mb-2 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#F26522]/15 text-[#F26522] text-[11px] flex items-center justify-center font-bold">2</span>
                      参考物料分析
                    </h3>
                    <div className="text-[12px] text-[#EBEBF5]/50 leading-relaxed space-y-1">
                      <p>• <span className="text-white/70">参考物料</span>：产品包装图，明确产品本体形态、包装材质与品牌logo位置</p>
                      <p>• <span className="text-white/70">参考场景</span>：自然光影场景图，提取侧光、柔和漫射、天然石头与植物叶片布景</p>
                    </div>
                  </div>

                  {/* 三、AI生图（香蕉大模型） */}
                  <div>
                    <h3 className="text-[14px] font-semibold text-white mb-2 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#F26522]/15 text-[#F26522] text-[11px] flex items-center justify-center font-bold">3</span>
                      AI生图（香蕉大模型）
                    </h3>
                    <div className="text-[12px] text-[#EBEBF5]/50 leading-relaxed space-y-1.5">
                      <p><span className="text-white/60">基础模型</span>：香蕉大模型（SDXL 基座）</p>
                      <p><span className="text-white/60">采样参数</span>：30步 / DPM++ 2M Karras / CFG 7.5</p>
                      <p><span className="text-white/60">分辨率</span>：768×1024（竖版）</p>
                      <div className="rounded-lg bg-white/[0.03] p-3 border border-white/[0.05] mt-2">
                        <p className="text-white/60 text-[11px] mb-1">正向Prompt</p>
                        <p className="text-[11px] text-[#EBEBF5]/40 leading-relaxed">product photography, soft fabric texture, natural lighting, beige and stone background, minimalist style, high detail, professional studio lighting, 8k, sharp focus</p>
                      </div>
                      <div className="rounded-lg bg-white/[0.03] p-3 border border-white/[0.05]">
                        <p className="text-white/60 text-[11px] mb-1">反向Negative</p>
                        <p className="text-[11px] text-[#EBEBF5]/40 leading-relaxed">low quality, blurry, distorted, watermark, text, overexposed, oversaturated, cartoon, illustration, anime, drawing</p>
                      </div>
                      <p><span className="text-white/60">控制条件</span>：ControlNet OpenPose + IP-Adapter绑定参考物料</p>
                    </div>
                  </div>

                  {/* 四、高清放大（SeedVR2） */}
                  <div>
                    <h3 className="text-[14px] font-semibold text-white mb-2 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#F26522]/15 text-[#F26522] text-[11px] flex items-center justify-center font-bold">4</span>
                      高清放大（ComfyUI SeedVR2）
                    </h3>
                    <div className="text-[12px] text-[#EBEBF5]/50 leading-relaxed space-y-1">
                      <p>• <span className="text-white/70">放大流程</span>：768×1024 基础图 → ComfyUI 工作流</p>
                      <p>• <span className="text-white/70">放大模型</span>：SeedVR2（专为产品摄影优化）</p>
                      <p>• <span className="text-white/70">放大倍率</span>：2× → 1536×2048</p>
                      <p>• <span className="text-white/70">修复参数</span>：去噪0.3 / DPM++ 20步 / Tile-based放大</p>
                    </div>
                  </div>

                  {/* 五、最终交付 */}
                  <div>
                    <h3 className="text-[14px] font-semibold text-white mb-2 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#F26522]/15 text-[#F26522] text-[11px] flex items-center justify-center font-bold">5</span>
                      最终交付
                    </h3>
                    <div className="text-[12px] text-[#EBEBF5]/50 leading-relaxed space-y-1">
                      <p>• 主图：1536×2048 高清竖版 PNG</p>
                      <p>• 副图：横版4:3裁切版（1536×1152）</p>
                      <p>• 白底图：产品抠图版（透明背景PNG）</p>
                      <p>• 色彩管理：sRGB，适配淘宝/天猫/京东</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

/* ─────────────────────────────────────────────
   SOCIAL MEDIA TEMPLATES PAGE (Agent模板库)
   ───────────────────────────────────────────── */

function SocialMediaPage({ onBack }: { onBack: () => void }) {
  const TEMPLATES = [
    {
      id: 1,
      title: '品牌活动系列',
      subtitle: 'Template Set 01',
      tags: ['活动海报', '品牌传播', '社媒矩阵'],
      desc: '适用于品牌活动预热、节日促销、新品发布等场景的快速生成模板，支持多平台尺寸适配。',
      images: [
        '/social-media/组1/1.png',
        '/social-media/组1/2.png',
        '/social-media/组1/3.png',
      ],
    },
    {
      id: 2,
      title: '产品种草系列',
      subtitle: 'Template Set 02',
      tags: ['产品展示', '种草图文', '电商转化'],
      desc: '专注产品卖点提炼与视觉呈现，适配小红书、Instagram等平台的种草内容快速产出。',
      images: [
        '/social-media/组2/1.png',
        '/social-media/组2/2.png',
        '/social-media/组2/3.png',
      ],
    },
    {
      id: 3,
      title: '生活方式系列',
      subtitle: 'Template Set 03',
      tags: ['生活美学', '场景营造', '情感共鸣'],
      desc: '以生活场景为切入点的内容模板，强调氛围感与情感连接，适合生活方式类品牌传播。',
      images: [
        '/social-media/组3/1.png',
        '/social-media/组3/2.png',
        '/social-media/组3/3.png',
      ],
    },
    {
      id: 4,
      title: '数据洞察系列',
      subtitle: 'Template Set 04',
      tags: ['数据可视化', '行业报告', '知识传播'],
      desc: '将复杂数据转化为易读可视的社媒内容，适合行业洞察、报告解读、知识分享类账号。',
      images: [
        '/social-media/组4/1.png',
        '/social-media/组4/2.png',
        '/social-media/组4/3.png',
      ],
    },
    {
      id: 5,
      title: '互动裂变系列',
      subtitle: 'Template Set 05',
      tags: ['互动玩法', '用户裂变', '话题营销'],
      desc: '高互动性模板设计，支持投票、抽奖、打卡等多种玩法，有效提升用户参与与传播裂变。',
      images: [
        '/social-media/组5/1.png',
        '/social-media/组5/2.png',
        '/social-media/组5/3.png',
      ],
    },
  ]

  const [lightbox, setLightbox] = useState<{ group: number; index: number } | null>(null)

  return (
    <div className="min-h-screen bg-[#080808]">
      {/* ── 顶部导航栏 ── */}
      <div className="sticky top-0 z-50 bg-[#080808]/90 backdrop-blur-md border-b border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#EBEBF5]/60 hover:text-white transition-colors duration-200 text-[13px]"
          >
            <ArrowLeft size={15} />
            <span>返回</span>
          </button>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#F26522]" />
            <span className="text-white text-[14px] font-semibold">Agent模板库</span>
            <span className="text-[#EBEBF5]/40 text-[13px]">· 社媒内容生成 / 5组模板</span>
          </div>
          <div className="w-16" />
        </div>
      </div>

      {/* ── Hero 区 ── */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 pt-12 pb-6">
        <div className="mb-2">
          <span className="text-[11px] font-medium text-[#F26522] tracking-[0.15em] uppercase">Agent Template Library</span>
        </div>
        <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-4">
          社媒内容<br className="sm:hidden" />智能生成模板
        </h1>
        <p className="text-[15px] text-[#EBEBF5]/45 max-w-[520px] leading-relaxed">
          基于Agent工作流构建的社媒内容模板库，覆盖品牌传播、产品种草、生活方式、数据洞察、互动裂变五大场景，支持一键生成多平台适配内容。
        </p>
      </div>

      {/* ── 5组模板纵向排列 ── */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 pb-20">
        {TEMPLATES.map((group, groupIndex) => (
          <div key={group.id} className="mb-20 last:mb-0">
            {/* 组标题区 */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[11px] font-mono text-[#F26522]/70 tracking-wider">{group.subtitle}</span>
                  <div className="flex gap-1.5">
                    {group.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 rounded text-[10px] text-[#EBEBF5]/50 bg-white/[0.05]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h2 className="text-[clamp(1.25rem,3vw,1.75rem)] font-bold text-white tracking-tight">
                  {group.title}
                </h2>
                <p className="text-[13px] text-[#EBEBF5]/40 mt-2 max-w-[480px]">{group.desc}</p>
              </div>
              <div className="text-[12px] text-[#EBEBF5]/30 font-mono">
                {groupIndex + 1} / {TEMPLATES.length}
              </div>
            </div>

            {/* 图片展示 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-6">
              {group.images.map((src, imgIndex) => (
                <div
                  key={imgIndex}
                  onClick={() => setLightbox({ group: groupIndex, index: imgIndex })}
                  className="group relative cursor-pointer"
                >
                  {/* 手机外框装饰 */}
                  <div className="relative bg-[#111111] rounded-[2rem] p-3 border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 hover:shadow-2xl hover:shadow-black/50 hover:-translate-y-1">
                    {/* 顶部听筒装饰 */}
                    <div className="flex justify-center mb-3">
                      <div className="w-16 h-1.5 rounded-full bg-white/[0.08]" />
                    </div>
                    {/* 图片容器 */}
                    <div className="relative overflow-hidden rounded-xl bg-[#0a0a0a]" style={{ aspectRatio: '3/4' }}>
                      <img
                        src={src}
                        alt={`${group.title} ${imgIndex + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* 悬停遮罩 */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                          <Images size={16} className="text-white" />
                        </div>
                      </div>
                    </div>
                    {/* 底部指示 */}
                    <div className="flex justify-center mt-3">
                      <div className="w-8 h-1 rounded-full bg-white/[0.06]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 组分隔线 */}
            {groupIndex < TEMPLATES.length - 1 && (
              <div className="mt-16 border-t border-white/[0.06]" />
            )}
          </div>
        ))}
      </div>

      {/* ── Lightbox 全屏预览 ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/[0.08] hover:bg-white/[0.15] flex items-center justify-center transition-colors"
          >
            <X size={18} className="text-white/70" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              const group = TEMPLATES[lightbox.group]
              setLightbox({
                group: lightbox.group,
                index: lightbox.index > 0 ? lightbox.index - 1 : group.images.length - 1,
              })
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/[0.08] hover:bg-white/[0.15] flex items-center justify-center transition-colors"
          >
            <ChevronLeft size={20} className="text-white/70" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              const group = TEMPLATES[lightbox.group]
              setLightbox({
                group: lightbox.group,
                index: lightbox.index < group.images.length - 1 ? lightbox.index + 1 : 0,
              })
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/[0.08] hover:bg-white/[0.15] flex items-center justify-center transition-colors"
          >
            <ChevronRight size={20} className="text-white/70" />
          </button>
          <div
            className="max-w-[480px] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-[#111] rounded-[2rem] p-3 border border-white/[0.08]">
              <div className="flex justify-center mb-3">
                <div className="w-16 h-1.5 rounded-full bg-white/[0.08]" />
              </div>
              <div className="overflow-hidden rounded-xl" style={{ aspectRatio: '3/4' }}>
                <img
                  src={TEMPLATES[lightbox.group].images[lightbox.index]}
                  alt="Preview"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex justify-center mt-3">
                <div className="w-8 h-1 rounded-full bg-white/[0.06]" />
              </div>
            </div>
            <div className="text-center mt-4">
              <p className="text-[13px] text-white/50">
                {lightbox.index + 1} / {TEMPLATES[lightbox.group].images.length} · {TEMPLATES[lightbox.group].title}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

/* ─────────────────────────────────────────────
   AI PRODUCT DEVELOPMENT PAGE
   ───────────────────────────────────────────── */

function AIProductPage({ onBack }: { onBack: () => void }) {
  const [activeCase, setActiveCase] = useState(0)

  const CASES = [
    {
      id: 1,
      title: '灵感落地阶段',
      subtitle: '印花 / 图案提取',
      desc: '从设计灵感到印花图案的快速转化，AI辅助完成实物照片到印花设计稿的全流程。',
      steps: [
        { step: '01', title: '灵感获取', desc: '拿到设计参考，确定衣服后背印花的设计方向，印花内容需根据真实照片进行替换。' },
        { step: '02', title: '实物照片搜集', desc: '搜集符合设计预期的真实照片素材，用于后续印花生成。' },
        { step: '03', title: 'AI印花生成', desc: '将实物照片转为线稿印花图或色块印花图，完成印花设计稿。' },
      ],
      prompt: '把图1衣服上的印花换成图2的，衣服不变，去掉图1原有的图案',
      params: '模型：Nana Banana Pro | 精度：4K | 比例：根据需求选择',
    },
    {
      id: 2,
      title: '设计落地阶段',
      subtitle: '打版图生成',
      desc: '将设计平面图转化为具有真实质感的白底产品图，大幅缩短打版周期。',
      steps: [
        { step: '01', title: '设计稿输入', desc: '将设计师完成的设计平面图作为参考图1输入。' },
        { step: '02', title: '面料参考', desc: '拖入面料质感参考图（图2），用于AI学习面料纹理细节。' },
        { step: '03', title: '白底图生成', desc: 'AI生成正面朝上的实拍白底图，还原面料真实质感。' },
      ],
      prompt: '将图1的衣服设计稿变成实拍的白底图，面料细节的质感可以参考图2，衣服正面朝上',
      params: '模型：Pro版本 | 精度：4K | 比例：1:1（正反面展示）',
    },
    {
      id: 3,
      title: '模特上身阶段',
      subtitle: '白底图变模特上身图',
      desc: '将白底产品图迁移至真实模特身上，保持人物动作与场景不变，实现快速上身展示。',
      steps: [
        { step: '01', title: '白底图准备', desc: '将设计好的白底产品图作为图1输入。' },
        { step: '02', title: '外拍图参考', desc: '拖入需要迁移的外拍效果图（图2），人物动作和场景保持不变。' },
        { step: '03', title: '上身效果生成', desc: 'AI将设计迁移至人物身上，保持动作和场景一致。' },
      ],
      prompt: '图1是一件长袖的设计图，面料和图2相似，把图1的设计和颜色迁移至图2的人物身上，不改变人物动作和场景',
      params: '模型：Pro版本 | 精度：4K | 比例：3:4（适配外拍图比例）',
    },
  ]

  const AI_STAGES = [
    { name: '灵感获取', icon: '💡', desc: '收集创意灵感与参考素材' },
    { name: '灵感落地', icon: '✏️', desc: 'AI辅助印花/图案设计' },
    { name: '设计落地', icon: '📐', desc: '设计稿转真实白底图' },
    { name: '模特上身', icon: '👤', desc: '白底图变模特上身图' },
  ]

  const AI_FEATURES = [
    { title: 'AI面料设计', desc: '快速固定面料材质、颜色与质感参数，建立数字化面料库。' },
    { title: 'AI版型设计', desc: '基于人体数据智能调整版型结构，自动优化合体度与舒适度。' },
    { title: 'AI印花设计', desc: '输入关键词即可快速生成海量印花图案方案，支持风格实时微调。' },
    { title: 'AI模特上身', desc: '虚拟模特自动试穿设计稿，一键生成多场景、多角度的真实展示效果。' },
  ]

  const TRADITIONAL_STEPS = [
    { step: '01', title: '产出设计图纸', desc: '设计师完成款式创意设计，输出包含细节参数的完整设计图稿。' },
    { step: '02', title: '打版制作阶段', desc: '纸样师依据设计图纸，手工绘制并制作出服装的基础版型。' },
    { step: '03', title: '实物样衣试穿', desc: '制作出第一件实物样衣，安排模特上身试穿，检验版型与效果。' },
    { step: '04', title: '最终选品决策', desc: '团队根据试穿反馈进行评估，确定最终投产款式，进入生产环节。' },
  ]

  return (
    <div className="min-h-screen bg-[#080808]">
      {/* ── 顶部导航栏 ── */}
      <div className="sticky top-0 z-50 bg-[#080808]/90 backdrop-blur-md border-b border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#EBEBF5]/60 hover:text-white transition-colors duration-200 text-[13px]"
          >
            <ArrowLeft size={15} />
            <span>返回</span>
          </button>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#F26522]" />
            <span className="text-white text-[14px] font-semibold">AI产品开发</span>
            <span className="text-[#EBEBF5]/40 text-[13px]">· AI赋能方案</span>
          </div>
          <div className="w-16" />
        </div>
      </div>

      {/* ── 生图Agent平台开发 ── */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 pt-10 pb-6">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[11px] font-medium text-[#F26522]/50 tracking-[0.15em] uppercase">AGENT PLATFORM</span>
          <div className="h-px flex-1 bg-white/[0.06]" />
        </div>
        <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-white tracking-tight mb-2">生图Agent平台开发</h2>
        <p className="text-[13px] text-[#EBEBF5]/40 max-w-[500px] leading-relaxed mb-8">
          基于AI Agent架构的智能生图平台，覆盖文生图、图生图、风格迁移等核心能力，支持多模态工作流编排。
        </p>

        {/* 图片展示 — 全宽单图 */}
        <div className="w-full rounded-2xl border border-white/[0.06] overflow-hidden bg-[#0f0f0f]">
          <img
            src="/ai-product/platform-showcase.jpg"
            alt="生图平台展示"
            className="w-full object-contain"
          />
        </div>
      </div>

      {/* ── Hero 区 ── */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 pt-16 pb-12">
        <div className="mb-2">
          <span className="text-[11px] font-medium text-[#F26522]/50 tracking-[0.15em] uppercase">AI Product Empowerment</span>
        </div>
        <h1 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-white tracking-tight leading-[1.1] mb-5">
          产品研发部门AI赋能
        </h1>
        <p className="text-[15px] text-[#EBEBF5]/45 max-w-[600px] leading-relaxed mb-8">
          从设计到落地的全链路AI解决方案。覆盖灵感获取、印花设计、版型打样、模特上身四大环节，让产品开发周期从数周缩短至数分钟。
        </p>
        <div className="flex flex-wrap gap-3">
          <span className="px-3 py-1.5 rounded-full text-[12px] text-[#EBEBF5]/60 bg-white/[0.05] border border-white/[0.08]">AI印花设计</span>
          <span className="px-3 py-1.5 rounded-full text-[12px] text-[#EBEBF5]/60 bg-white/[0.05] border border-white/[0.08]">智能版型</span>
          <span className="px-3 py-1.5 rounded-full text-[12px] text-[#EBEBF5]/60 bg-white/[0.05] border border-white/[0.08]">虚拟模特</span>
          <span className="px-3 py-1.5 rounded-full text-[12px] text-[#EBEBF5]/60 bg-white/[0.05] border border-white/[0.08]">全链路提效</span>
        </div>
      </div>

      {/* ── 成果速览 ── */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 pb-16">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[11px] font-medium text-[#F26522]/50 tracking-[0.15em] uppercase">QUICK RESULTS</span>
          <div className="h-px flex-1 bg-white/[0.06]" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            { time: '5min', title: '设计稿上身图', desc: '快速将设计稿迁移至模特，生成真实上身效果', img: '/ai-product/model1.jpg' },
            { time: '5min', title: '设计稿印花生成', desc: '根据灵感参考，AI快速生成可落地的印花图案', img: '/ai-product/model2.png' },
            { time: '30min', title: '实物照片生成印花', desc: '基于真实照片素材，生成符合预期的印花设计稿', img: '/ai-product/print-flow.png' },
          ].map((item, i) => (
            <div key={i} className="group relative bg-[#111111] rounded-2xl border border-white/[0.06] p-6 hover:border-white/[0.12] transition-all duration-500">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[11px] font-mono text-[#F26522]/50">{item.time}</span>
                <div className="h-px flex-1 bg-white/[0.06]" />
              </div>
              <div className="rounded-xl bg-[#0a0a0a] border border-white/[0.05] aspect-[4/3] overflow-hidden mb-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-[16px] font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-[13px] text-[#EBEBF5]/40 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── 传统 vs AI 对比 ── */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 pb-16">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[11px] font-medium text-[#F26522]/50 tracking-[0.15em] uppercase">TRADITIONAL VS AI</span>
          <div className="h-px flex-1 bg-white/[0.06]" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 传统流程 */}
          <div className="bg-[#111111] rounded-2xl border border-white/[0.06] p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                <span className="text-red-400 text-[14px]">⚠️</span>
              </div>
              <h3 className="text-[18px] font-bold text-white">传统产品开发流程</h3>
            </div>
            <p className="text-[13px] text-[#EBEBF5]/40 mb-6">开发周期长、资源浪费大的问题亟待解决</p>
            <div className="space-y-4">
              {TRADITIONAL_STEPS.map((item) => (
                <div key={item.step} className="flex gap-4">
                  <span className="text-[11px] font-mono text-[#EBEBF5]/30 mt-1">{item.step}</span>
                  <div>
                    <h4 className="text-[14px] font-medium text-[#EBEBF5]/70 mb-1">{item.title}</h4>
                    <p className="text-[12px] text-[#EBEBF5]/35 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-xl bg-red-500/[0.05] border border-red-500/[0.08]">
              <h4 className="text-[12px] font-semibold text-red-400/80 mb-2">核心痛点</h4>
              <p className="text-[12px] text-[#EBEBF5]/40 leading-relaxed">开发周期长：人工流转环节多，耗时久，难以快速响应市场变化。资源浪费大：样衣反复制作与修改导致物料成本高，且整体迭代速度缓慢。</p>
            </div>
          </div>

          {/* AI 新流程 */}
          <div className="bg-[#111111] rounded-2xl border border-[#F26522]/[0.15] p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#F26522]/10 flex items-center justify-center">
                <span className="text-[#F26522]/50 text-[14px]">✨</span>
              </div>
              <h3 className="text-[18px] font-bold text-white">AI赋能后的新流程</h3>
            </div>
            <p className="text-[13px] text-[#EBEBF5]/40 mb-6">AI介入后，设计到落地的效率大幅提升，开启智能化设计新篇章</p>
            <div className="space-y-4">
              {AI_FEATURES.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-[11px] font-mono text-[#F26522]/60 mt-1">0{i + 1}</span>
                  <div>
                    <h4 className="text-[14px] font-medium text-[#EBEBF5]/70 mb-1">{item.title}</h4>
                    <p className="text-[12px] text-[#EBEBF5]/35 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-xl bg-[#F26522]/[0.05] border border-[#F26522]/[0.08]">
              <h4 className="text-[12px] font-semibold text-[#F26522]/80 mb-2">效率提升</h4>
              <p className="text-[12px] text-[#EBEBF5]/40 leading-relaxed">开发周期从数周缩短至数分钟，物料成本大幅降低，快速响应市场变化，迭代效率提升10倍以上。</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── AI介入阶段 ── */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 pb-16">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[11px] font-medium text-[#F26522]/50 tracking-[0.15em] uppercase">AI INTERVENTION STAGES</span>
          <div className="h-px flex-1 bg-white/[0.06]" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {AI_STAGES.map((stage, i) => (
            <div key={i} className="relative bg-[#111111] rounded-2xl border border-white/[0.06] p-6 text-center hover:border-white/[0.12] transition-all duration-300">
              <div className="text-[32px] mb-3">{stage.icon}</div>
              <h3 className="text-[15px] font-semibold text-white mb-2">{stage.name}</h3>
              <p className="text-[12px] text-[#EBEBF5]/40 leading-relaxed">{stage.desc}</p>
              {i < 3 && (
                <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight size={14} className="text-[#F26522]/40" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── 三大实操案例 — 纵向排列全部展示 ── */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 pb-20">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[11px] font-medium text-[#F26522]/50 tracking-[0.15em] uppercase">PRACTICAL CASES</span>
          <div className="h-px flex-1 bg-white/[0.06]" />
        </div>

        {CASES.map((c) => (
          <div key={c.id} className="mb-12 last:mb-0">
            {/* 案例标题 */}
            <div className="flex items-center gap-3 mb-6">
              <div className={`px-5 py-2.5 rounded-full text-[13px] font-medium bg-[#F26522] text-white shadow-lg shadow-[#F26522]/20`}>
                {c.title}
              </div>
            </div>

            <div className="bg-[#111111] rounded-2xl border border-white/[0.06] p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
                <div>
                  <span className="text-[11px] font-medium text-[#F26522]/50 tracking-[0.15em] uppercase">CASE 0{c.id}</span>
                  <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold text-white tracking-tight mt-2">{c.title}</h2>
                  <p className="text-[14px] text-[#F26522]/60 mt-1">{c.subtitle}</p>
                </div>
                <p className="text-[13px] text-[#EBEBF5]/40 max-w-[400px]">{c.desc}</p>
              </div>

              {/* 步骤流程 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                {c.steps.map((step) => (
                  <div key={step.step} className="bg-[#0a0a0a] rounded-xl border border-white/[0.05] p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-7 h-7 rounded-full bg-[#F26522]/15 text-[#F26522] text-[11px] flex items-center justify-center font-bold">{step.step}</span>
                      <h3 className="text-[14px] font-semibold text-white">{step.title}</h3>
                    </div>
                    <p className="text-[12px] text-[#EBEBF5]/40 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>

              {/* 提示词与参数 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-[#0a0a0a] rounded-xl border border-white/[0.05] p-5">
                  <h4 className="text-[12px] font-semibold text-[#EBEBF5]/60 mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F26522]" />
                    提示词（Prompt）
                  </h4>
                  <p className="text-[13px] text-[#EBEBF5]/70 leading-relaxed bg-white/[0.03] rounded-lg p-4 border border-white/[0.05]">
                    {c.prompt}
                  </p>
                </div>
                <div className="bg-[#0a0a0a] rounded-xl border border-white/[0.05] p-5">
                  <h4 className="text-[12px] font-semibold text-[#EBEBF5]/60 mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F26522]" />
                    出图参数
                  </h4>
                  <p className="text-[13px] text-[#EBEBF5]/70 leading-relaxed bg-white/[0.03] rounded-lg p-4 border border-white/[0.05]">
                    {c.params}
                  </p>
                </div>
              </div>

              {/* 图片区域 - 各阶段分别显示对应图片 */}
              {c.id === 1 ? (
                <div className="mt-8">
                  <h4 className="text-[12px] font-semibold text-[#EBEBF5]/60 mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F26522]" />
                    参考图与生成效果
                  </h4>
                  <div className="flex flex-col gap-4">
                    <div className="bg-[#0a0a0a] rounded-xl border border-white/[0.05] overflow-hidden">
                      <img
                        src="/ai-product/design-flow.png"
                        alt="设计灵感与印花图案生成流程"
                        className="w-full object-contain"
                      />
                    </div>
                    <div className="bg-[#0a0a0a] rounded-xl border border-white/[0.05] overflow-hidden">
                      <img
                        src="/ai-product/print-to-shirt.png"
                        alt="印花图案上身效果"
                        className="w-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              ) : c.id === 2 ? (
                <div className="mt-8">
                  <h4 className="text-[12px] font-semibold text-[#EBEBF5]/60 mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F26522]" />
                    参考图与生成效果
                  </h4>
                  <div className="flex flex-col gap-4">
                    <div className="bg-[#0a0a0a] rounded-xl border border-white/[0.05] overflow-hidden">
                      <img
                        src="/ai-product/design-to-print.png"
                        alt="设计稿印花素材转化流程"
                        className="w-full object-contain"
                      />
                    </div>
                    <div className="bg-[#0a0a0a] rounded-xl border border-white/[0.05] overflow-hidden">
                      <img
                        src="/ai-product/white-bg-product.png"
                        alt="设计稿转白底产品图"
                        className="w-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              ) : c.id === 3 ? (
                <div className="mt-8">
                  <h4 className="text-[12px] font-semibold text-[#EBEBF5]/60 mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F26522]" />
                    参考图与生成效果
                  </h4>
                  <div className="flex flex-col gap-4">
                    <div className="bg-[#0a0a0a] rounded-xl border border-white/[0.05] overflow-hidden">
                      <img
                        src="/ai-product/model-front.png"
                        alt="白底图转模特正面上身图"
                        className="w-full object-contain"
                      />
                    </div>
                    <div className="bg-[#0a0a0a] rounded-xl border border-white/[0.05] overflow-hidden">
                      <img
                        src="/ai-product/model-back.png"
                        alt="白底图转模特背面上身图"
                        className="w-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mt-8">
                  <h4 className="text-[12px] font-semibold text-[#EBEBF5]/60 mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F26522]" />
                    参考图与生成效果
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[1, 2, 3].map((n) => (
                      <div key={n} className="bg-[#0a0a0a] rounded-xl border border-white/[0.05] aspect-[4/3] flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-[24px] mb-2">🖼️</div>
                          <p className="text-[11px] text-[#EBEBF5]/25">示例图 {n}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
        {/* 实操演示板块 */}
        <div className="bg-[#111111] rounded-2xl border border-white/[0.06] p-6 lg:p-8 mb-6">
          <div className="flex items-center gap-3 mb-8">
            <span className="px-3 py-1.5 rounded-full bg-[#F26522]/15 text-[#F26522] text-[11px] font-medium tracking-wide border border-[#F26522]/20">
              实操演示
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
            <div>
              <p className="text-[11px] font-medium text-[#F26522]/50 tracking-[0.15em] uppercase mb-2">CASE 04</p>
              <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-bold text-white tracking-tight mb-2">生图平台实操演示</h3>
              <p className="text-[13px] text-[#F26522]/50 font-medium mb-2">智能生图平台核心功能展示</p>
              <p className="text-[13px] text-[#EBEBF5]/40 leading-relaxed max-w-[500px]">
                基于自研AI Agent架构的智能生图平台，实现从设计灵感到成品上身的全流程自动化生成。
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:max-w-[300px]">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <span className="w-8 h-8 rounded-lg bg-[#F26522]/15 flex items-center justify-center text-[#F26522]/50 text-[13px] font-bold">01</span>
                <div>
                  <p className="text-[13px] font-medium text-white">输入提示词</p>
                  <p className="text-[11px] text-[#EBEBF5]/40">描述需求，上传参考图</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <span className="w-8 h-8 rounded-lg bg-[#F26522]/15 flex items-center justify-center text-[#F26522]/50 text-[13px] font-bold">02</span>
                <div>
                  <p className="text-[13px] font-medium text-white">调整参数</p>
                  <p className="text-[11px] text-[#EBEBF5]/40">选择模型、精度与比例</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <span className="w-8 h-8 rounded-lg bg-[#F26522]/15 flex items-center justify-center text-[#F26522]/50 text-[13px] font-bold">03</span>
                <div>
                  <p className="text-[13px] font-medium text-white">生成结果</p>
                  <p className="text-[11px] text-[#EBEBF5]/40">AI一键生成，预览下载</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-6 p-4 rounded-xl bg-[#F26522]/5 border border-[#F26522]/15">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F26522]" />
            <p className="text-[13px] text-[#EBEBF5]/70">
              <span className="text-[#F26522]/50 font-medium">声明：</span>图片中的生图平台为本人制作
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-[#0a0a0a] rounded-xl border border-white/[0.05] overflow-hidden">
              <img
                src="/ai-product/platform1.png"
                alt="生图平台功能演示 - 图片生成与参数调整"
                className="w-full object-contain"
              />
            </div>
            <div className="bg-[#0a0a0a] rounded-xl border border-white/[0.05] overflow-hidden">
              <img
                src="/ai-product/platform2.png"
                alt="生图平台功能演示 - 印花替换与上身效果"
                className="w-full object-contain"
              />
            </div>
            <div className="bg-[#0a0a0a] rounded-xl border border-white/[0.05] overflow-hidden">
              <img
                src="/ai-product/platform3.png"
                alt="生图平台功能演示 - 模特迁移与上身展示"
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── 底部 CTA ── */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 pb-20">
        <div className="bg-[#111111] rounded-2xl border border-white/[0.06] p-8 lg:p-12 text-center">
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-white tracking-tight mb-4">
            开启AI驱动的产品开发新时代
          </h2>
          <p className="text-[14px] text-[#EBEBF5]/40 max-w-[500px] mx-auto leading-relaxed mb-6">
            从设计到落地，AI让每一步都更高效。传统需要数周的开发流程，现在只需数分钟即可完成。
          </p>
          <div className="flex items-center justify-center gap-6 text-[12px] text-[#EBEBF5]/30">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F26522]" />
              设计稿 → 上身图：5分钟
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F26522]" />
              实物照片 → 印花：30分钟
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   APP ROOT
   ───────────────────────────────────────────── */

export default function App() {
  const [page, setPage] = useState<'home' | 'gallery' | 'project-narrativ' | 'project-luminar' | 'project-social-media' | 'project-ai-product' | 'project-arch-ai' | 'project-portfolio'>('home')

  // 切换页面时自动滚动到顶部
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [page])

  if (page === 'gallery') {
    return (
      <div className="fixed inset-0 bg-[#120F17]">
        {/* 返回按钮 */}
        <button
          onClick={() => setPage('home')}
          className="fixed top-4 left-4 z-[100] glass-bubble-pop rounded-full flex items-center gap-2 text-white text-[13px] font-medium px-5 py-2"
        >
          <ArrowLeft size={14} />
          <span>返回首页</span>
        </button>
        <DomeGallery
          grayscale={false}
          fit={0.85}
          overlayBlurColor="#120F17"
          openedImageWidth="400px"
          openedImageHeight="500px"
        />
      </div>
    )
  }

  if (page === 'project-narrativ') {
    return <ProjectDetailPage onBack={() => setPage('home')} />
  }

  if (page === 'project-luminar') {
    return <LuminarProjectPage onBack={() => setPage('home')} />
  }

  if (page === 'project-social-media') {
    return <SocialMediaPage onBack={() => setPage('home')} />
  }

  if (page === 'project-ai-product') {
    return <AIProductPage onBack={() => setPage('home')} />
  }

  if (page === 'project-arch-ai') {
    return <ArchAIProjectPage onBack={() => setPage('home')} />
  }

  if (page === 'project-portfolio') {
    return <PortfolioViewerPage onBack={() => setPage('home')} />
  }

  return (
    <div>
      <HeroSection onNavigate={() => setPage('gallery')} />
      <AboutSection onCard1Click={() => setPage('project-narrativ')} onCard2Click={() => setPage('project-luminar')} onCard3Click={() => setPage('project-social-media')} onCard4Click={() => setPage('project-ai-product')} />
      <CaseStudiesSection onCard1Click={() => setPage('project-arch-ai')} onCard2Click={() => setPage('project-portfolio')} />
    </div>
  )
}



