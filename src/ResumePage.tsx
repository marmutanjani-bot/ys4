import { ArrowLeft, MapPin, Mail, Phone, Calendar, Award, Briefcase, GraduationCap, Palette, Code2, Heart } from 'lucide-react'

/* ─────────────────────────────────────────────
   RESUME PAGE — 杨烁 简历（2025秋）
   Dark theme, matches portfolio style
───────────────────────────────────────────── */

const SKILLS = [
  { name: 'SD (AI)', level: 90 },
  { name: 'ComfyUI', level: 85 },
  { name: 'Midjourney', level: 88 },
  { name: 'Photoshop', level: 92 },
  { name: 'SketchUp', level: 85 },
  { name: 'Lumion', level: 80 },
  { name: 'CAD', level: 78 },
]

const HONORS = [
  '全国高等院校城乡规划专业大学生乡村规划竞赛二等奖（国家级）',
  '第六届米兰设计周高校设计展全国决赛三等奖（国家级）',
  '大学生创新创业项目国家级立项主持人（国家级）',
  '第六届米兰设计周高校设计展陕西分赛区一等奖（省级）',
  '《记忆存新——东三爻村城市更新》入选《城市更新中的设计艺术实践》展览（省级）',
  '论文《铁路题材公共艺术设计形式研究——基于西安市太乙路设计研究》被维普期刊收录',
]

const EDUCATION = [
  {
    school: '西安美术学院',
    degree: '硕士 · 环境艺术设计（人居环境）',
    period: '2023.09 — 2026.06',
    courses: '城市空间美学与景观研究 · 乡村风景园林营建 · 社区更新下的公共艺术研究及应用 · 传统绘画山水美学与当代建筑图示表达 · 地域建筑设计等',
  },
  {
    school: '西安美术学院',
    degree: '本科 · 建筑与环境艺术（景观设计）',
    period: '2019.09 — 2023.06',
    courses: '景观设计 · 形式政策 · 传承与创新 · 公共建筑设计原理 · 古建测绘 · 艺术概论 · 园林设计 · 植物应用与造景等',
  },
]

const EXPERIENCE = [
  {
    company: '山竹乐享科技有限公司',
    role: 'AI设计师',
    period: '2026.03 — 至今',
    desc: '完全上手 AI 生图工作流程，生成的图片已上线淘宝、天猫等电商平台。个人作品集网站中有详细的项目展示。',
    tags: ['AIGC', '电商视觉'],
  },
  {
    company: '安道设计（建筑设计部）',
    role: 'AI实习生',
    period: '2025.12 — 2026.02',
    desc: '在公司实习期间为同事进行 AI 图像优化工作，帮助团队提升设计效率与出图质量。',
    tags: ['ComfyUI', 'SD', '工作流优化'],
  },
  {
    company: '安道设计（第三景观事业部）',
    role: '景观设计实习生',
    period: '2024.07 — 2024.08',
    desc: '在公司实习期间主要承担辅助性景观设计工作，参与方案深化、效果图制作及文本排版。',
    tags: ['景观设计', '方案辅助'],
  },
]

export default function ResumePage({ onBack }: { onBack?: () => void }) {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* ── Top Nav Bar ── */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/85 backdrop-blur-sm border-b border-white/[0.06]">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[13px] text-[#EBEBF5]/60 hover:text-white transition-colors duration-300 group"
          >
            <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform duration-300" />
            返回首页
          </button>
          <span className="text-[12px] text-[#EBEBF5]/30 tracking-wide">RESUME / 2025</span>
        </div>
      </div>

      {/* ═════════════════════════════════════
          HERO HEADER — Name + Photo + Contact
      ═════════════════════════════════════ */}
      <section className="pt-24 pb-12 sm:pt-28 sm:pb-16">
        <div className="max-w-[1000px] mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row items-start gap-8 sm:gap-10">

            {/* Photo + Name Block */}
            <div className="flex flex-col items-center sm:flex-row gap-6 flex-shrink-0">
              {/* Avatar */}
              <div className="relative group">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-[#F26522]/40 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-500 blur-sm" />
                <img
                  src="/resume-photo-0.png"
                  alt="杨烁"
                  className="relative w-36 h-52 object-cover rounded-xl border border-white/10"
                  loading="lazy"
                />
              </div>

              {/* Name & Title */}
              <div className="text-center sm:text-left pt-1">
                <h1 className="text-[clamp(1.8rem,4vw,3rem)] font-black tracking-tight leading-none mb-2">
                  <span className="text-[#F26522]">YANG</span>
                  <span className="text-white ml-1">SHUO</span>
                </h1>
                <p className="text-[#EBEBF5]/70 text-[15px] font-medium leading-relaxed">
                  AI设计师
                </p>
                <p className="text-[#F26522]/80 text-[13px] mt-1 font-medium">
                  AI设计师
                </p>
              </div>
            </div>

            {/* Right: Info Cards */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
              <InfoCard icon={<Mail size={14} />} label="邮箱" value="2681175121@qq.com" />
              <InfoCard icon={<Phone size={14} />} label="电话" value="18408499902" />
              <InfoCard icon={<Calendar size={14} />} label="出生日期" value="2001.12.13" />
              <InfoCard icon={<MapPin size={14} />} label="坐标" value="西安 / 杭州" />
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════
          SELF INTRODUCTION
      ═════════════════════════════════════ */}
      <section className="pb-10">
        <div className="max-w-[1000px] mx-auto px-5 sm:px-8">
          <SectionHeader number="01" title="关于我" icon={<Heart size={16} />} />
          <p className="text-[14px] sm:text-[15px] text-[#EBEBF5]/65 leading-[1.9] max-w-[780px]">
            本人自大二起便明确专注于景观设计方向，并在硕士阶段持续深化该领域的研究，
            本硕均就读于西安美术学院，积累了扎实的专业基础。在长期的专业学习与实践中，
            培养了良好的原则性、出色的沟通协调能力以及高度的责任感与使命感，能够适应较高强度的工作压力。
            同时，基于艺术院校的系统教育，具备较为敏锐的艺术感受力和审美素养，
            期待能在工作中持续发挥<strong className="text-[#F26522]/90">专业与艺术相结合</strong>的综合优势。
          </p>
        </div>
      </section>

      {/* Divider */}
      <Divider />

      {/* ═════════════════════════════════════
          SKILLS
      ═════════════════════════════════════ */}
      <section className="py-10">
        <div className="max-w-[1000px] mx-auto px-5 sm:px-8">
          <SectionHeader number="02" title="专业技能" icon={<Code2 size={16} />} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {SKILLS.map((s) => (
              <SkillBar key={s.name} name={s.name} level={s.level} />
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ═════════════════════════════════════
          EXPERIENCE
      ═════════════════════════════════════ */}
      <section className="py-10">
        <div className="max-w-[1000px] mx-auto px-5 sm:px-8">
          <SectionHeader number="03" title="实习经历" icon={<Briefcase size={16} />} />
          <div className="space-y-6">
            {EXPERIENCE.map((exp, i) => (
              <ExpCard key={i} {...exp} isLast={i === EXPERIENCE.length - 1} />
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ═════════════════════════════════════
          EDUCATION
      ═════════════════════════════════════ */}
      <section className="py-10">
        <div className="max-w-[1000px] mx-auto px-5 sm:px-8">
          <SectionHeader number="04" title="教育背景" icon={<GraduationCap size={16} />} />
          <div className="space-y-6">
            {EDUCATION.map((edu, i) => (
              <EduCard key={i} {...edu} isLast={i === EDUCATION.length - 1} />
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ═════════════════════════════════════
          HONORS & AWARDS
      ═════════════════════════════════════ */}
      <section className="py-10 pb-16">
        <div className="max-w-[1000px] mx-auto px-5 sm:px-8">
          <SectionHeader number="05" title="荣誉奖项" icon={<Award size={16} />} />
          <ul className="space-y-3">
            {HONORS.map((h, i) => (
              <li key={i} className="flex items-start gap-3 text-[14px] text-[#EBEBF5]/70 leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#F26522] flex-shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═════════════════════════════════════
          INTERESTS (subtle footer)
      ═════════════════════════════════════ */}
      <section className="pb-20 pt-2">
        <div className="max-w-[1000px] mx-auto px-5 sm:px-8">
          <SectionHeader number="06" title="兴趣爱好" icon={<Palette size={16} />} />
          <p className="text-[14px] text-[#EBEBF5]/50">摄影 · 画画 · 音乐 · 徒步</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-6">
        <p className="text-center text-[12px] text-[#EBEBF5]/25">
          © {new Date().getFullYear()} YangShuo Portfolio. Designed with care.
        </p>
      </footer>
    </div>
  )
}

/* ── SUB COMPONENTS ── */

function SectionHeader({ number, title, icon }: { number: string; title: string; icon?: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-6 h-6 rounded-full bg-[#F26522]/15 border border-[#F26522]/30 flex items-center justify-center">
        <span className="text-[11px] font-bold text-[#F26522]">{number}</span>
      </div>
      <h2 className="text-[18px] sm:text-[20px] font-bold tracking-tight text-white">{title}</h2>
      <span className="text-[#F26522]/60">{icon}</span>
    </div>
  )
}

function InfoCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="bg-[#111113] border border-white/[0.06] rounded-xl p-4 hover:border-white/12 transition-colors duration-300">
      <div className="flex items-center gap-2 text-[#EBEBF5]/35 text-[11px] uppercase tracking-wider mb-1">
        {icon}
        {label}
      </div>
      <p className="text-[14px] text-[#EBEBF5]/80 font-medium">{value}</p>
    </div>
  )
}

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[13px] text-[#EBEBF5]/75 font-medium">{name}</span>
        <span className="text-[11px] text-[#F26522]/70 tabular-nums">{level}%</span>
      </div>
      <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#F26522] to-[#f59e42] transition-all duration-700 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

function ExpCard({ company, role, period, desc, tags, isLast }: { company: string; role: string; period: string; desc: string; tags: string[]; isLast?: boolean }) {
  return (
    <div className={`relative pl-6 ${!isLast ? 'border-l border-white/[0.07]' : ''}`}>
      {/* Dot */}
      {!isLast && (
        <div className="absolute -left-[5.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#F26522] ring-4 ring-[#0A0A0A]" />
      )}
      <div className="bg-[#111113] border border-white/[0.05] rounded-xl p-5 hover:border-white/10 transition-colors duration-300">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
          <h3 className="text-[15px] font-bold text-white">{company}</h3>
          <span className="text-[12px] text-[#F26522]/70 tabular-nums shrink-0">{period}</span>
        </div>
        <p className="text-[13px] text-[#F26522]/90 font-medium mb-2">{role}</p>
        <p className="text-[13px] text-[#EBEBF5]/55 leading-relaxed mb-3">{desc}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="text-[11px] px-2 py-0.5 rounded-md bg-white/[0.04] text-[#EBEBF5]/45 border border-white/[0.06]">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function EduCard({ school, degree, period, courses, isLast }: { school: string; degree: string; period: string; courses: string; isLast?: boolean }) {
  return (
    <div className={`relative pl-6 ${!isLast ? 'border-l border-white/[0.07]' : ''}`}>
      {!isLast && (
        <div className="absolute -left-[5.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#F26522]/60 ring-4 ring-[#0A0A0A]" />
      )}
      <div className="bg-[#111113] border border-white/[0.05] rounded-xl p-5 hover:border-white/10 transition-colors duration-300">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
          <h3 className="text-[15px] font-bold text-white">{school}</h3>
          <span className="text-[12px] text-[#EBEBF5]/40 tabular-nums">{period}</span>
        </div>
        <p className="text-[14px] text-[#F26522]/90 font-medium mb-2">{degree}</p>
        <p className="text-[12px] text-[#EBEBF5]/40 leading-relaxed">{courses}</p>
      </div>
    </div>
  )
}

function Divider() {
  return <div className="max-w-[1000px] mx-auto px-5 sm:px-8"><hr className="border-white/[0.05]" /></div>
}
