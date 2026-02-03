import { Github, Linkedin, Mail, MapPin, Globe, ExternalLink } from "lucide-react";

export default function Resume() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4 print:py-0 print:px-0 print:bg-white">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden print:shadow-none print:rounded-none">
        {/* Header */}
        <header className="bg-gradient-to-r from-slate-900 to-slate-800 text-white px-8 py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-4xl font-bold tracking-tight">Geert Van Campenhout</h1>
              <p className="text-xl text-slate-300 mt-2">Senior Frontend Engineer</p>
              <p className="text-slate-400 mt-1">TypeScript Expert | React & Vue | Scalable UI Architecture</p>
            </div>
            <div className="flex flex-col gap-2 text-sm text-slate-300">
              <a href="mailto:vancampenhoutgeert@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={16} />
                vancampenhoutgeert@gmail.com
              </a>
              <a href="https://geertvancampenhout.com" target="_blank" className="flex items-center gap-2 hover:text-white transition-colors">
                <Globe size={16} />
                geertvancampenhout.com
              </a>
              <a href="https://linkedin.com/in/geert-van-campenhout" target="_blank" className="flex items-center gap-2 hover:text-white transition-colors">
                <Linkedin size={16} />
                linkedin.com/in/geert-van-campenhout
              </a>
              <a href="https://github.com/Shutsen" target="_blank" className="flex items-center gap-2 hover:text-white transition-colors">
                <Github size={16} />
                github.com/Shutsen
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={16} />
                Luxembourg 🇱🇺 • Belgian 🇧🇪
              </span>
            </div>
          </div>
        </header>

        <div className="p-8">
          {/* About */}
          <section className="mb-8">
            <p className="text-lg text-slate-700 leading-relaxed">
              Senior frontend engineer with 8+ years of experience building scalable, maintainable applications 
              in TypeScript, React, and Vue. I take end-to-end ownership from architecture to deployment, 
              championing code quality and developer experience. Proven track record delivering complex features 
              at SaaS startups, with deep expertise in modern build tooling, testing frameworks, and component-based architectures.
            </p>
          </section>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content - 2 cols */}
            <div className="md:col-span-2 space-y-8">
              {/* Ventures */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-slate-900 pb-2 mb-4">
                  Ventures & Projects
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex items-start justify-between">
                      <div>
                        <a href="https://www.kaimeleon.ai" target="_blank" className="text-lg font-semibold text-slate-900 hover:text-blue-600 transition-colors inline-flex items-center gap-1">
                          Kaimeleon
                          <ExternalLink size={14} className="text-slate-400" />
                        </a>
                        <p className="text-slate-600 text-sm">Co-Founder • AI Automation Agency</p>
                      </div>
                      <span className="text-sm text-slate-500">Apr 2024 - Present</span>
                    </div>
                    <p className="text-slate-700 mt-2">
                      Helping businesses simplify, automate, and accelerate processes through accessible AI solutions. 
                      From chatbots to custom apps, we make AI achievable for every company.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {["Next.js", "TypeScript", "OpenAI", "LangChain", "n8n", "Vercel"].map(tag => (
                        <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-start justify-between">
                      <div>
                        <a href="https://www.globalpetsitter.com" target="_blank" className="text-lg font-semibold text-slate-900 hover:text-blue-600 transition-colors inline-flex items-center gap-1">
                          Global Pet Sitter
                          <ExternalLink size={14} className="text-slate-400" />
                        </a>
                        <p className="text-slate-600 text-sm">Co-Founder • Community Platform</p>
                      </div>
                      <span className="text-sm text-slate-500">Dec 2025 - Present</span>
                    </div>
                    <p className="text-slate-700 mt-2">
                      Community-driven pet sitting platform built with transparency and trust at its core. 
                      Features real-time messaging, blind reviews, and AI-powered review importing.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {["Next.js", "Convex", "Clerk", "TypeScript", "TailwindCSS", "Claude"].map(tag => (
                        <span key={tag} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-start justify-between">
                      <div>
                        <a href="https://mytravelagent.io" target="_blank" className="text-lg font-semibold text-slate-900 hover:text-blue-600 transition-colors inline-flex items-center gap-1">
                          My Travel Agent
                          <ExternalLink size={14} className="text-slate-400" />
                        </a>
                        <p className="text-slate-600 text-sm">Founder • AI Travel Planning</p>
                      </div>
                      <span className="text-sm text-slate-500">2024</span>
                    </div>
                    <p className="text-slate-700 mt-2">
                      AI-powered travel planning tool that creates unforgettable journeys without the hassle 
                      of endless research. Smooth travel planning with intelligent recommendations.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {["Next.js", "OpenAI", "PostgreSQL", "Stripe"].map(tag => (
                        <span key={tag} className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Experience */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-slate-900 pb-2 mb-4">
                  Experience
                </h2>
                
                <div className="space-y-5">
                  <div>
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">Data Visualisation Engineer</h3>
                        <p className="text-slate-600 text-sm">Flemish Government • Freelance</p>
                      </div>
                      <span className="text-sm text-slate-500">Jan 2025 - Present</span>
                    </div>
                    <p className="text-slate-700 mt-2">
                      Maintaining and developing custom data visualization applications (Arvastat, Schoolverlaters, 
                      Vlaanderen in Europa, Beroepen) — 20+ public dashboards serving all citizens of Flanders. 
                      End-to-end delivery from requirements to go-live using D3.js, Leaflet, and Python backend for data processing.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">Full Stack Developer</h3>
                        <p className="text-slate-600 text-sm">StriveCloud.io • Gamification SaaS</p>
                      </div>
                      <span className="text-sm text-slate-500">Jan 2020 - 2024</span>
                    </div>
                    <p className="text-slate-700 mt-2">
                      Led frontend architecture and feature development for a gamification SaaS platform. 
                      Owned end-to-end delivery of complex features using React, TypeScript, and Node.js. 
                      Drove code quality standards, testing practices, and scalable component architecture over 4+ years.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">Front End Developer</h3>
                        <p className="text-slate-600 text-sm">Officient.io • HR SaaS</p>
                      </div>
                      <span className="text-sm text-slate-500">Apr 2018 - Oct 2019</span>
                    </div>
                    <p className="text-slate-700 mt-2">
                      Frontend development for a multi-purpose HR SaaS platform. Built reusable Vue.js components, 
                      implemented comprehensive unit testing with Jest, and contributed to UI/UX improvements.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">Freelance Web Developer</h3>
                        <p className="text-slate-600 text-sm">Self-employed • WordPress • Part-time</p>
                      </div>
                      <span className="text-sm text-slate-500">Feb 2015 - Nov 2018</span>
                    </div>
                    <p className="text-slate-700 mt-2">
                      Building WordPress websites for SME clients. Full delivery from design to deployment.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">Assistant Manager</h3>
                        <p className="text-slate-600 text-sm">Lekker Limburgs • Regional Products</p>
                      </div>
                      <span className="text-sm text-slate-500">Feb 2015 - Nov 2018</span>
                    </div>
                    <p className="text-slate-700 mt-2">
                      Operations, marketing, web design, and customer service for a regional product store.
                    </p>
                  </div>
                </div>
              </section>

              {/* Education */}
              <section>
                <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-slate-900 pb-2 mb-4">
                  Education
                </h2>
                <div>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">MSc Business Administration & Economics</h3>
                      <p className="text-slate-600 text-sm">University of Hasselt • Innovation & Entrepreneurship</p>
                    </div>
                    <span className="text-sm text-slate-500">2005 - 2010</span>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-slate-600 text-sm">
                    <strong>Self-taught Developer</strong> since 2014 — Professional certifications through Udemy, 
                    freeCodeCamp, and other platforms. E-commerce, game development, and modern web stacks.
                  </p>
                </div>
              </section>
            </div>

            {/* Sidebar - 1 col */}
            <div className="space-y-6">
              {/* Skills */}
              <section>
                <h2 className="text-lg font-bold text-slate-900 border-b-2 border-slate-900 pb-2 mb-4">
                  Tech Stack
                </h2>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-800 text-sm mb-2">Frontend</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {["React", "Vue.js", "Next.js", "TypeScript", "D3.js", "TailwindCSS"].map(skill => (
                        <span key={skill} className="px-2 py-1 bg-slate-200 text-slate-800 text-xs rounded">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 text-sm mb-2">Backend</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {["Node.js", "Python", "Convex", "PostgreSQL", "MySQL", "GCP"].map(skill => (
                        <span key={skill} className="px-2 py-1 bg-slate-200 text-slate-800 text-xs rounded">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 text-sm mb-2">AI & Automation</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {["OpenAI", "LangChain", "n8n", "Claude"].map(skill => (
                        <span key={skill} className="px-2 py-1 bg-slate-200 text-slate-800 text-xs rounded">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 text-sm mb-2">Tools & Platforms</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {["Git", "Jest", "Vite", "Vercel", "Figma", "CI/CD"].map(skill => (
                        <span key={skill} className="px-2 py-1 bg-slate-200 text-slate-800 text-xs rounded">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Languages */}
              <section>
                <h2 className="text-lg font-bold text-slate-900 border-b-2 border-slate-900 pb-2 mb-4">
                  Languages
                </h2>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>🇳🇱 Dutch — Native</li>
                  <li>🇬🇧 English — Fluent</li>
                  <li>🇫🇷 French — Professional</li>
                </ul>
              </section>

              {/* Profile */}
              <section>
                <h2 className="text-lg font-bold text-slate-900 border-b-2 border-slate-900 pb-2 mb-4">
                  Profile
                </h2>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>✓ Self-starter</li>
                  <li>✓ Engaged team player</li>
                  <li>✓ Punctual go-getter</li>
                  <li>✓ Eager to learn</li>
                  <li>✓ Effective communicator</li>
                </ul>
              </section>

              {/* Quote */}
              <section className="bg-slate-100 p-4 rounded-lg">
                <blockquote className="text-sm text-slate-700 italic">
                  &ldquo;Geert&apos;s hard work and talent as a full stack developer, coupled with strong UI skills 
                  and a hands-on mentality, significantly contributed to our team&apos;s success over his 4+ years with us.&rdquo;
                </blockquote>
                <p className="text-xs text-slate-500 mt-2">— Joris De Koninck, CEO of StriveCloud</p>
              </section>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-slate-100 px-8 py-4 text-center text-sm text-slate-600">
          <p>
            Available for freelance projects and consulting • 
            <a href="mailto:vancampenhoutgeert@gmail.com" className="text-slate-900 hover:underline ml-1">
              Let&apos;s talk
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
