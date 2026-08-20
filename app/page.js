"use client";

import { useState } from "react";

import RippleGrid from "@/components/RippleGrid";
import StaggeredMenu from "@/components/StaggeredMenu";
import VariableProximity from "@/components/VariableProximity";
import LogoLoop from "@/components/LogoLoop";
import InfiniteMenu from "@/components/InfiniteMenu";

import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPython,
  SiPandas,
  SiNumpy,
  SiMysql,
} from "react-icons/si";

/* ========================================================= */
/* PROJECTS */
/* ========================================================= */

const items = [
  {
    image: "/chatapp.png",
    link: "https://unrealchat.vercel.app/",
    title: "ChatApp",
    description: "This is pretty cool, right?",
  },
  {
    image: "/ai.png",
    link: "https://insight-iq-ai.vercel.app/",
    title: "Insight-Iq AI",
    description: "This is pretty cool, right?",
  },
  {
    image: "/blog.png",
    link: "https://blog-aradhy.vercel.app/",
    title: "Blog",
    description: "This is pretty cool, right?",
  },
  {
    image: "/url.png",
    link: "https://linkly-vert.vercel.app",
    title: "Url Shortner",
    description: "This is pretty cool, right?",
  },
  {
    image: "/ecommerce.png",
    link: "https://mushed.vercel.app/",
    title: "Ecommerce App",
    description: "This is pretty cool, right?",
  },
];

/* ========================================================= */
/* TECH LOGOS */
/* ========================================================= */

const techLogos = [
  {
    node: <SiHtml5 />,
    title: "HTML5",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    node: <SiJavascript />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    node: <SiReact />,
    title: "React",
    href: "https://react.dev",
  },
  {
    node: <SiNextdotjs />,
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiNodedotjs />,
    title: "Node.js",
    href: "https://nodejs.org",
  },
  {
    node: <SiMongodb />,
    title: "MongoDB",
    href: "https://www.mongodb.com",
  },
  {
    node: <SiGit />,
    title: "Git",
    href: "https://git-scm.com",
  },
  {
    node: <SiGithub />,
    title: "GitHub",
    href: "https://github.com",
  },
  {
    node: <SiPython />,
    title: "Python",
    href: "https://www.python.org",
  },
  {
    node: <SiPandas />,
    title: "Pandas",
    href: "https://pandas.pydata.org",
  },
  {
    node: <SiNumpy />,
    title: "NumPy",
    href: "https://numpy.org",
  },
  {
    node: <SiMysql />,
    title: "MySQL",
    href: "https://www.mysql.com",
  },
];

/* ========================================================= */
/* NAV */
/* ========================================================= */

const menuItems = [
  {
    label: "Home",
    ariaLabel: "Go to home page",
    link: "/",
  },
  {
    label: "About",
    ariaLabel: "Learn about us",
    link: "#about",
  },
  {
    label: "Skills",
    ariaLabel: "Skills I can Deliver",
    link: "#skills",
  },
  {
    label: "Projects",
    ariaLabel: "Projects I have Built",
    link: "#projects",
  },
  {
    label: "Contact",
    ariaLabel: "Get in touch",
    link: "#contact",
  },
];

const socialItems = [
  {
    label: "Instagram",
    link: "https://instagram.com/Aradhysh_18",
  },
  {
    label: "GitHub",
    link: "https://github.com/AradhyShrestha",
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/aradhy-shrestha-2a1343391",
  },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#050509] text-white">

      {/* ===================================================== */}
      {/* HERO + NAV */}
      {/* ===================================================== */}

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">

        {/* ================================================= */}
        {/* NAV */}
        {/* ================================================= */}

        <div
          style={{
            height: "100vh",
            width: "100%",
            position: "relative",
            zIndex: 100,
          }}
        >
          <StaggeredMenu
            position="left"
            items={menuItems}
            socialItems={socialItems}
            displaySocials
            displayItemNumbering={false}
            menuButtonColor="#ffffff"
            openMenuButtonColor="#000"
            changeMenuColorOnOpen={true}
            colors={["#B497CF", "#5227FF"]}
            logoUrl="/hero.png"
            accentColor="#5227FF"
            onMenuOpen={() => {
              setIsMenuOpen(true);
              console.log("Menu opened");
            }}
            onMenuClose={() => {
              setIsMenuOpen(false);
              console.log("Menu closed");
            }}
          />
        </div>

        {/* ================================================= */}
        {/* RIPPLE GRID — UNCHANGED */}
        {/* ================================================= */}

        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            inset: 0,
          }}
        >
          <RippleGrid
            enableRainbow={false}
            gridColor="#5227FF"
            rippleIntensity={0.05}
            gridSize={10}
            gridThickness={15}
            mouseInteraction
            mouseInteractionRadius={0.8}
            opacity={1}
            fadeDistance={1.5}
            vignetteStrength={2}
            glowIntensity={0.1}
            gridRotation={0}
          />
        </div>

        {/* ================================================= */}
        {/* HERO CONTENT */}
        {/* ================================================= */}

        <div
          className={`
            absolute inset-0 z-10
            flex items-center
            px-5 sm:px-8 lg:px-16
            pointer-events-none
            transition-all duration-500 ease-in-out
            ${isMenuOpen
              ? "translate-x-[170px] sm:translate-x-[220px] lg:translate-x-[280px]"
              : "translate-x-0"
            }
          `}
        >
          <div className="mx-auto w-full max-w-7xl">

            <div className="max-w-6xl">

              <h1 className="max-w-5xl text-[clamp(3.3rem,9vw,8rem)] font-semibold leading-[0.9] tracking-[-0.055em]">
                Building digital
                <br />

                <span className="bg-gradient-to-r from-white via-[#bcaeff] to-[#6f4cff] bg-clip-text text-transparent">
                  experiences
                </span>{" "}
                that stand out.
              </h1>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-white/60 sm:mt-8 sm:text-lg sm:leading-8 md:text-xl">
                Hi, I’m{" "}
                <span className="font-medium text-white">
                  Aradhy Shrestha
                </span>
                . I build modern websites, web applications and interactive
                digital experiences with a focus on clean design, performance
                and creativity.
              </p>

              <div className="pointer-events-auto mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">

                <a
                  href="#projects"
                  className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(124,92,255,0.35)] sm:px-7 sm:py-3.5"
                >
                  View My Work

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex min-h-12 items-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/10 sm:px-7 sm:py-3.5"
                >
                  Let's Connect
                </a>

              </div>

            </div>
          </div>
        </div>

        {/* ================================================= */}
        {/* SCROLL */}
        {/* ================================================= */}

        <div className="pointer-events-none absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3 text-white/40 sm:bottom-8">
          <span className="whitespace-nowrap text-[9px] uppercase tracking-[0.25em] sm:text-[10px] sm:tracking-[0.3em]">
            Scroll to explore
          </span>

          <div className="h-8 w-[1px] overflow-hidden bg-white/10 sm:h-10">
            <div className="h-1/2 w-full animate-pulse bg-[#7c5cff]" />
          </div>
        </div>

        {/* ================================================= */}
        {/* GLOW */}
        {/* ================================================= */}

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5227FF]/10 blur-[110px] sm:h-[400px] sm:w-[400px] sm:blur-[130px] lg:h-[500px] lg:w-[500px] lg:blur-[140px]" />

      </section>

      {/* ===================================================== */}
      {/* EVERYTHING BELOW HERO */}
      {/* ===================================================== */}

      <div className="overflow-x-hidden">

        {/* ================================================= */}
        {/* ABOUT */}
        {/* ================================================= */}

        <section
          id="about"
          className="relative z-10 overflow-hidden border-t border-white/5 bg-[#050509] px-5 py-28 sm:px-8 sm:py-32 lg:px-16 lg:py-40"
        >
          <div className="mx-auto max-w-7xl">

            <div className="mb-12 flex items-center justify-center gap-2 sm:mb-14 sm:gap-3 lg:justify-start">
              <span className="h-px w-8 bg-[#7d62ff] sm:w-14" />

              <span className="text-xs uppercase tracking-[0.28em] text-white/40 sm:text-sm sm:tracking-[0.35em]">
                About Me
              </span>
            </div>

            <div className="mx-auto max-w-6xl lg:mx-0">
              <VariableProximity
                label="I’m a developer who loves turning ideas into experiences."
                fromFontVariationSettings="'wght' 400"
                toFontVariationSettings="'wght' 800"
                containerRef={null}
                radius={160}
                falloff="linear"
                className="text-[clamp(2.8rem,8vw,6rem)] font-semibold leading-[0.92] tracking-[-0.05em]"
              />
            </div>

            <div className="mt-16 grid gap-14 sm:mt-20 lg:mt-24 lg:grid-cols-[1.4fr_0.6fr] lg:gap-20">

              <div className="min-w-0">

                <p className="max-w-5xl text-xl leading-[1.6] text-white/70 sm:text-2xl lg:text-3xl">
                  Hi, I’m{" "}
                  <span className="text-white">Aradhy Shrestha</span>. I’m
                  passionate about building modern websites and web
                  applications that feel different from the ordinary.
                </p>

                <p className="mt-8 max-w-4xl text-base leading-8 text-white/45 sm:mt-10 sm:text-xl sm:leading-9">
                  What started as an interest in technology turned into a
                  passion for creating things on the web. I enjoy taking an
                  idea, breaking it down, designing the experience and then
                  bringing it to life through code.
                </p>

                <p className="mt-7 max-w-4xl text-base leading-8 text-white/45 sm:mt-8 sm:text-xl sm:leading-9">
                  I’m especially interested in interactive interfaces, creative
                  animations and the little details that make a website feel
                  polished. For me, good development is a combination of strong
                  engineering, thoughtful design and curiosity to keep learning.
                </p>

                <p className="mt-7 max-w-4xl text-base leading-8 text-white/45 sm:mt-8 sm:text-xl sm:leading-9">
                  I’m constantly building, experimenting and exploring new
                  ideas. Every project is another opportunity to learn something
                  new and push what I can create a little further.
                </p>

                <div className="mt-12 grid grid-cols-2 gap-y-10 border-t border-white/10 pt-8 sm:mt-16 sm:grid-cols-3 sm:pt-10">

                  <div>
                    <p className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                      10+
                    </p>

                    <p className="mt-2 text-xs text-white/35 sm:mt-3 sm:text-sm">
                      Projects Built
                    </p>
                  </div>

                  <div>
                    <p className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                      1+
                    </p>

                    <p className="mt-2 text-xs text-white/35 sm:mt-3 sm:text-sm">
                      Years of Learning
                    </p>
                  </div>

                  <div>
                    <p className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                      ∞
                    </p>

                    <p className="mt-2 text-xs text-white/35 sm:mt-3 sm:text-sm">
                      Ideas Ahead
                    </p>
                  </div>

                </div>
              </div>

              <div className="relative min-w-0 lg:pt-6">

                <div className="lg:sticky lg:top-28">

                  <p className="text-xs uppercase tracking-[0.3em] text-[#8d75ff] sm:tracking-[0.35em]">
                    Who I Am
                  </p>

                  <h3 className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
                    Curious by nature.
                    <br />
                    Creative by choice.
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-white/40 sm:mt-6 sm:text-base sm:leading-8">
                    I like learning by building. Whether it’s experimenting
                    with a new technology or creating an entire product from
                    scratch, I’m always looking for something new to explore.
                  </p>

                  <div className="mt-8 h-px w-full bg-white/10 sm:mt-10" />

                  <div className="mt-7 space-y-5 sm:mt-8">

                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs text-white/35 sm:text-sm">
                        Based in
                      </span>

                      <span className="text-xs text-white/70 sm:text-sm">
                        India
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs text-white/35 sm:text-sm">
                        Focus
                      </span>

                      <span className="text-right text-xs text-white/70 sm:text-sm">
                        Web Development
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs text-white/35 sm:text-sm">
                        Currently
                      </span>

                      <span className="text-right text-xs text-white/70 sm:text-sm">
                        Building & Learning
                      </span>
                    </div>

                  </div>

                </div>
              </div>

            </div>

            <div className="mt-20 border-t border-white/10 pt-10 sm:mt-28 sm:pt-12">
              <VariableProximity
                label="I’m not trying to build more websites. I’m trying to build experiences worth remembering."
                fromFontVariationSettings="'wght' 350"
                toFontVariationSettings="'wght' 700"
                containerRef={null}
                radius={180}
                falloff="linear"
                className="max-w-6xl text-[clamp(1.8rem,4vw,4.5rem)] leading-[1.15] tracking-[-0.035em] text-white/40"
              />
            </div>

          </div>
        </section>

        <hr className="border-gray-800" />

        {/* ================================================= */}
        {/* SKILLS */}
        {/* ================================================= */}

        <section
          id="skills"
          className="relative overflow-hidden bg-[#050509] py-20 sm:py-24 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">

            <div className="mb-12 flex items-center justify-center gap-2 sm:mb-14 sm:gap-3">
              <span className="h-px w-8 bg-[#7d62ff] sm:w-14" />

              <span className="text-xs uppercase tracking-[0.28em] text-white/40 sm:text-sm sm:tracking-[0.35em]">
                Tech Stack
              </span>
            </div>

            <h2 className="max-w-5xl text-[clamp(2.8rem,7vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.045em] text-white">
              The technologies behind
              <span className="text-white/30"> what I build.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/45 sm:text-lg sm:leading-8">
              I work across modern web development, backend systems and
              data-focused technologies, constantly exploring new tools to
              improve what I create.
            </p>
          </div>

          {/* LogoLoop — UNCHANGED */}
          <div
            className="relative mt-8 w-full overflow-hidden sm:mt-12"
            style={{
              height: "clamp(170px, 22vw, 220px)",
            }}
          >
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-[#050509] to-transparent sm:w-32 lg:w-48" />

            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-[#050509] to-transparent sm:w-32 lg:w-48" />

            <LogoLoop
              logos={techLogos}
              speed={100}
              direction="left"
              logoHeight={95}
              gap={60}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="#050509"
              ariaLabel="Technology partners"
            />
          </div>

          <div className="mx-auto mt-8 max-w-7xl px-5 sm:mt-10 sm:px-8 lg:px-16">

            <div className="flex flex-col gap-6 border-t border-white/10 pt-7 sm:gap-8 sm:pt-8 md:flex-row md:items-center md:justify-between">

              <p className="max-w-xl text-sm leading-7 text-white/35 sm:text-base">
                Always learning, experimenting and adding new tools to my
                workflow. The stack keeps evolving as I take on new projects
                and challenges.
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                <span className="rounded-full border border-white/10 px-3 py-2 text-[11px] text-white/40 sm:px-4 sm:text-xs">
                  Web Development
                </span>

                <span className="rounded-full border border-white/10 px-3 py-2 text-[11px] text-white/40 sm:px-4 sm:text-xs">
                  Data Analytics
                </span>
              </div>

            </div>
          </div>
        </section>

        <hr className="border-gray-800" />

        {/* ================================================= */}
        {/* PROJECTS */}
        {/* ================================================= */}

        <section
          id="projects"
          className="relative overflow-hidden bg-[#050509] px-5 py-28 sm:px-8 sm:py-32 lg:px-16"
        >
          <div className="mx-auto max-w-7xl">

            <div className="mb-12 sm:mb-16">

              <div className="mb-10 flex items-center justify-center gap-2 sm:mb-12 sm:gap-3">
                <span className="h-px w-8 bg-[#7d62ff] sm:w-14" />

                <span className="text-xs uppercase tracking-[0.28em] text-white/40 sm:text-sm sm:tracking-[0.35em]">
                  Projects
                </span>
              </div>

              <h2 className="max-w-5xl text-[clamp(2.8rem,7vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.045em] text-white">
                Things I’ve
                <span className="text-white/25"> built.</span>
              </h2>

              <p className="mt-6 max-w-3xl text-sm leading-7 text-white/40 sm:text-lg sm:leading-8">
                A collection of projects I’ve created while exploring web
                development, AI and creative digital experiences. Each project
                has been an opportunity to learn, experiment and build
                something real.
              </p>
            </div>

            <div className="relative w-full">

              <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

              <div
                className="
          relative
          mt-6
          w-full
          overflow-hidden
          sm:mt-8
        "
                style={{
                  height: "clamp(520px, 85vw, 700px)",
                  position: "relative",
                }}
              >
                {/* ANIMATION + PROPS EXACTLY SAME */}
                <InfiniteMenu
                  items={items}
                  scale={1}
                />
              </div>

            </div>

            <div className="mt-10 grid gap-8 border-t border-white/10 pt-8 sm:mt-12 sm:pt-10 md:grid-cols-3">

              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-white/30 sm:text-xs">
                  What I Build
                </p>

                <p className="mt-3 text-base leading-7 text-white/65 sm:text-lg">
                  Websites, web applications and interactive experiences.
                </p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-white/30 sm:text-xs">
                  Approach
                </p>

                <p className="mt-3 text-base leading-7 text-white/65 sm:text-lg">
                  Design with purpose. Build with clean code.
                </p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-white/30 sm:text-xs">
                  Currently
                </p>

                <p className="mt-3 text-base leading-7 text-white/65 sm:text-lg">
                  Learning, experimenting and building new ideas.
                </p>
              </div>

            </div>

            <div className="mt-16 sm:mt-20">
              <p className="max-w-4xl text-[clamp(1.6rem,4vw,3rem)] leading-relaxed tracking-tight text-white/30">
                Every project starts as an idea.
                <span className="text-white/60">
                  {" "}The fun part is turning it into something people can
                  actually use.
                </span>
              </p>
            </div>

          </div>
        </section>

        {/* ================================================= */}
        {/* CONTACT */}
        {/* ================================================= */}

        <section
          id="contact"
          className="relative overflow-hidden border-t border-white/5 bg-[#050509] px-5 py-28 sm:px-8 sm:py-32 lg:px-16 lg:py-36"
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5227FF]/10 blur-[120px] sm:h-[450px] sm:w-[450px] sm:blur-[150px] lg:h-[550px] lg:w-[550px] lg:blur-[170px]" />

          <div className="relative z-10 mx-auto max-w-7xl">

            <div className="mb-10 flex items-center justify-center gap-2 sm:mb-12 sm:gap-3">
              <span className="h-px w-8 bg-[#7d62ff] sm:w-14" />

              <span className="text-xs uppercase tracking-[0.28em] text-white/40 sm:text-sm sm:tracking-[0.35em]">
                Contact Me
              </span>
            </div>

            <h2 className="max-w-6xl text-[clamp(3rem,9vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.05em] text-white">
              Let's create
              <br />

              <span className="bg-gradient-to-r from-white via-[#bcaeff] to-[#6f4cff] bg-clip-text text-transparent">
                something great.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-white/45 sm:mt-10 sm:text-xl sm:leading-8">
              Got an idea, a project, or something you want to bring to life?
              I’m always open to interesting projects, creative collaborations
              and conversations about technology and building things for the
              web.
            </p>

            <div className="mt-14 grid max-w-6xl gap-10 border-t border-white/10 pt-8 sm:mt-20 sm:gap-12 sm:pt-10 md:grid-cols-2">

              <a
                href="mailto:aradhyshrestha1509@email.com"
                className="group min-w-0"
              >
                <p className="text-[11px] uppercase tracking-[0.25em] text-white/30 sm:text-xs sm:tracking-[0.3em]">
                  Email
                </p>

                <div className="mt-4 flex min-w-0 items-center justify-between gap-4 border-b border-white/10 pb-5">

                  <span className="min-w-0 break-all text-lg font-medium text-white/75 transition-colors duration-300 group-hover:text-white sm:text-2xl md:text-3xl lg:text-4xl">
                    aradhyshrestha1509@email.com
                  </span>

                  <span className="shrink-0 text-xl text-white/25 transition-all duration-300 group-hover:translate-x-2 group-hover:text-[#8d75ff] sm:text-2xl">
                    ↗
                  </span>

                </div>
              </a>

              <div className="min-w-0">

                <p className="text-[11px] uppercase tracking-[0.25em] text-white/30 sm:text-xs sm:tracking-[0.3em]">
                  Open to
                </p>

                <p className="mt-4 text-xl leading-9 text-white/65 sm:text-2xl sm:leading-10 md:text-3xl">
                  Freelance Projects
                  <br />
                  Collaborations
                  <br />
                  Interesting Ideas
                </p>

              </div>

            </div>

            <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-7 sm:mt-16 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-4 sm:pt-8 lg:gap-x-10">

              <span className="text-[11px] uppercase tracking-[0.25em] text-white/25 sm:text-xs sm:tracking-[0.3em]">
                Find me
              </span>

              <a
                href="https://github.com/AradhyShrestha"
                target="_blank"
                rel="noreferrer"
                className="w-fit text-sm text-white/45 transition-colors hover:text-white sm:text-base"
              >
                GitHub ↗
              </a>

              <a
                href="https://instagram.com/Aradhysh_18"
                target="_blank"
                rel="noreferrer"
                className="w-fit text-sm text-white/45 transition-colors hover:text-white sm:text-base"
              >
                Instagram ↗
              </a>

              <a
                href="https://www.linkedin.com/in/aradhy-shrestha-2a1343391"
                target="_blank"
                rel="noreferrer"
                className="w-fit text-sm text-white/45 transition-colors hover:text-white sm:text-base"
              >
                LinkedIn ↗
              </a>

            </div>

            <div className="mt-16 sm:mt-24">
              <p className="max-w-5xl text-[clamp(1.6rem,4vw,3rem)] leading-relaxed tracking-tight text-white/25">
                Have something in mind?
                <span className="text-white/60">
                  {" "}Let’s make it real.
                </span>
              </p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}