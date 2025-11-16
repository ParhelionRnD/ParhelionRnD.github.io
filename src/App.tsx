import React, { useState, useEffect } from "react";
import { Rocket, Heart, Cpu, Users, ChevronDown, Menu, X } from "lucide-react";

export default function ParhelionWebsite() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "about", "companies", "impact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Space Background */}
      <div className="fixed inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/30 via-black to-black"></div>

        {/* Animated glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 opacity-20 rounded-full blur-3xl animate-pulse delay-1000"
          style={{ background: "#FFC000" }}
        ></div>

        {/* Stars */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              width: Math.random() * 2 + 1 + "px",
              height: Math.random() * 2 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animationDelay: Math.random() * 3 + "s",
              animationDuration: Math.random() * 2 + 2 + "s",
            }}
          />
        ))}

        {/* Shooting stars */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`shooting-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-white to-transparent animate-shooting-star"
            style={{
              width: "150px",
              top: Math.random() * 50 + "%",
              left: "-150px",
              animationDelay: i * 5 + "s",
              animationDuration: "3s",
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes shooting-star {
          0% {
            transform: translateX(0) translateY(0);
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: translateX(100vw) translateY(50vh);
            opacity: 0;
          }
        }
        .animate-shooting-star {
          animation: shooting-star linear infinite;
        }
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav
          className={`fixed w-full z-50 transition-all duration-300 ${
            scrolled
              ? "bg-black/90 backdrop-blur-md shadow-lg shadow-purple-500/10"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="relative w-10 h-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-yellow-400 rounded-full blur-sm opacity-70"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-6 h-6 border-2 border-purple-300 rounded-full"
                      style={{
                        borderTopColor: "#FFC000",
                        transform: "rotate(45deg)",
                      }}
                    ></div>
                  </div>
                </div>
                <span
                  className="text-2xl tracking-wide inline-block pr-2"
                  style={{
                    fontFamily: "HeaderFont",
                    background:
                      "linear-gradient(135deg, #c084fc 0%, #FFC000 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  PARHELION
                </span>
              </div>
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                {["Home", "About", "Companies", "Impact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    style={{ fontFamily: "HeaderFont" }}
                    className={`transition-all font-medium ${
                      activeSection === item.toLowerCase()
                        ? "text-purple-300"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-purple-300"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                style={{ fontFamily: "HeaderFont" }}
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-purple-500/20">
              <div className="px-4 pt-2 pb-4 space-y-3">
                {["Home", "About", "Companies", "Impact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left py-3 text-gray-300 hover:text-purple-300 font-medium"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center px-4 pt-20"
        >
          <div className="text-center max-w-5xl mx-auto">
            {/* Logo Display */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-yellow-400/20 blur-2xl"></div>
                <div className="relative w-32 h-32 flex items-center justify-center">
                  {/* Outer glow effect */}
                  <div
                    className="absolute w-32 h-32 rounded-full blur-2xl opacity-50 animate-pulse"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(192, 132, 252, 0.6), rgba(255, 192, 0, 0.4))",
                    }}
                  ></div>

                  {/* Jupiter planet body with animated rotating gradient */}
                  <div
                    className="absolute w-24 h-24 rounded-full overflow-hidden"
                    style={{
                      background:
                        "conic-gradient(from 0deg, #c084fc 0%, #a855f7 15%, #8b5cf6 25%, #FFC000 40%, #fbbf24 50%, #FFC000 60%, #8b5cf6 75%, #a855f7 85%, #c084fc 100%)",
                      boxShadow:
                        "0 0 60px rgba(192, 132, 252, 0.9), 0 0 40px rgba(255, 192, 0, 0.7), inset -10px -10px 30px rgba(0, 0, 0, 0.4), inset 8px 8px 20px rgba(255, 255, 255, 0.2)",
                      animation: "rotate 40s linear infinite",
                    }}
                  ></div>

                  {/* Jupiter's iconic atmospheric bands */}
                  <div className="absolute w-24 h-24 rounded-full overflow-hidden pointer-events-none">
                    {/* Dark belts */}
                    <div
                      className="absolute w-full h-2 bg-gradient-to-r from-transparent via-purple-900/40 to-transparent"
                      style={{ top: "15%" }}
                    ></div>
                    <div
                      className="absolute w-full h-2.5 bg-gradient-to-r from-transparent via-purple-800/50 to-transparent"
                      style={{ top: "32%" }}
                    ></div>
                    <div
                      className="absolute w-full h-2 bg-gradient-to-r from-transparent via-purple-900/40 to-transparent"
                      style={{ top: "58%" }}
                    ></div>
                    <div
                      className="absolute w-full h-2.5 bg-gradient-to-r from-transparent via-purple-800/50 to-transparent"
                      style={{ top: "75%" }}
                    ></div>

                    {/* Light zones */}
                    <div
                      className="absolute w-full h-1.5 bg-gradient-to-r from-transparent via-yellow-200/30 to-transparent"
                      style={{ top: "24%" }}
                    ></div>
                    <div
                      className="absolute w-full h-1.5 bg-gradient-to-r from-transparent via-yellow-200/30 to-transparent"
                      style={{ top: "48%" }}
                    ></div>
                    <div
                      className="absolute w-full h-1 bg-gradient-to-r from-transparent via-yellow-200/25 to-transparent"
                      style={{ top: "68%" }}
                    ></div>
                  </div>

                  {/* Smaller storms and features */}
                  <div
                    className="absolute w-2 h-1.5 rounded-full"
                    style={{
                      top: "28%",
                      right: "25%",
                      background:
                        "radial-gradient(circle, rgba(251, 191, 36, 0.5), rgba(245, 158, 11, 0.3))",
                      boxShadow: "0 0 6px rgba(251, 191, 36, 0.6)",
                    }}
                  ></div>

                  <div
                    className="absolute w-1.5 h-1 rounded-full"
                    style={{
                      top: "65%",
                      left: "30%",
                      background:
                        "radial-gradient(circle, rgba(168, 85, 247, 0.6), rgba(147, 51, 234, 0.3))",
                      boxShadow: "0 0 4px rgba(168, 85, 247, 0.7)",
                    }}
                  ></div>
                </div>
              </div>
            </div>

            <h1
              className="text-5xl md:text-7xl mb-6 leading-tight"
              style={{
                fontFamily: "headerfont",
                background: "linear-gradient(135deg, #c084fc 0%, #FFC000 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 80px rgba(192, 132, 252, 0.3)",
              }}
            >
              Across Time. Across Space. Across Infinite Possibilities.
            </h1>
            <p className="text-xl md:text-2xl text-white-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              R&D company pioneering accessible technology, from open-source
              prosthetics to space exploration systems
            </p>
            <button
              onClick={() => scrollToSection("about")}
              className="px-8 py-4 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg relative group tracking-loose"
              style={{
                background: "linear-gradient(135deg, #c084fc 0%, #FFC000 100%)",
                boxShadow: "0 0 40px rgba(192, 132, 252, 0.4)",
                fontFamily: "HeaderFont",
              }}
            >
              <span className="relative z-8 tracking-widest">
                Discover Our Mission
              </span>
              <div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-xl"
                style={{
                  background:
                    "linear-gradient(135deg, #c084fc 0%, #FFC000 100%)",
                }}
              ></div>
            </button>
            <div className="mt-16 animate-bounce">
              <ChevronDown size={32} className="mx-auto text-purple-300" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="min-h-screen flex items-center py-20 px-4 tracking-widest"
        >
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-4xl md:text-5xl font-bold mb-12 text-center"
              style={{
                background: "linear-gradient(135deg, #c084fc 0%, #FFC000 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "HeaderFont",
              }}
            >
              Rewriting What's Possible
            </h2>

            <div
              className="backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border"
              style={{
                background: "rgba(0, 0, 0, 0.5)",
                borderColor: "rgba(192, 132, 252, 0.2)",
                boxShadow: "0 0 60px rgba(192, 132, 252, 0.15)",
              }}
            >
              <div className="space-y-6">
                <p className="text-xl text-gray-300 leading-relaxed">
                  We are a team of first-generation students who never imagined
                  we'd be building technology for NASA, designing space
                  exploration systems, or creating open-source prosthetics that
                  change lives. Every breakthrough we achieve feels like
                  rewriting a story that was never written for us.
                </p>

                <p className="text-xl text-gray-300 leading-relaxed">
                  Our journey began with a simple belief: visualization is
                  storytelling, and complex science should be accessible to
                  everyone. Whether we're simulating propulsion systems or
                  designing assistive devices, we see engineering as a bridge
                  between innovation and human understanding.
                </p>

                <p className="text-xl text-gray-300 leading-relaxed">
                  We're self-taught, self-driven, and deeply collaborative.
                  We've led teams at the world's top engineering hackathons,
                  mentored developers through intensive bootcamps, and built
                  working prototypes under impossible deadlines. But beyond the
                  technical skills, we've learned to listen, adapt, and stay
                  grounded in empathy.
                </p>

                <p
                  className="text-xl font-semibold leading-relaxed"
                  style={{ color: "#FFC000" }}
                >
                  Our mission is to make advanced technology accessible and
                  purposeful. It's about proving that the dreams we didn't know
                  we were allowed to have can indeed become reality, all while
                  creating pathways for those who come after us to meaningfully
                  ignite the light and make the world a better place.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Companies Section */}
        <section
          id="companies"
          className="min-h-screen flex items-center py-20 px-4"
        >
          <div className="max-w-7xl mx-auto w-full">
            <h2
              className="text-4xl md:text-5xl font-bold mb-16 text-center pb-2 tracking-wide"
              style={{
                background: "linear-gradient(135deg, #c084fc 0%, #FFC000 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "HeaderFont",
              }}
            >
              Our Ecosystem
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Parent Company */}
              <div
                className="md:col-span-2 backdrop-blur-sm rounded-2xl p-8 border transition-all transform hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(192, 132, 252, 0.1) 0%, rgba(255, 192, 0, 0.05) 100%)",
                  borderColor: "rgba(192, 132, 252, 0.3)",
                  boxShadow: "0 0 40px rgba(192, 132, 252, 0.15)",
                }}
              >
                <div className="flex items-center mb-6">
                  <Cpu className="w-12 h-12 text-purple-300 mr-4" />
                  <div>
                    <h3 className="text-3xl font-bold text-white">
                      Parhelion R&D LLC
                    </h3>
                    <p className="text-xl" style={{ color: "#FFC000" }}>
                      Parent Company
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Our core research and development firm focuses on
                  multidisciplinary engineering that combines hardware,
                  software, and human-centered design. We transform complex
                  scientific concepts into tangible solutions through the power
                  of visualization and accessible technology.
                </p>
              </div>

              {/* Galactica */}
              <div
                className="backdrop-blur-sm rounded-2xl p-8 border transition-all transform hover:scale-105"
                style={{
                  background: "rgba(0, 0, 0, 0.5)",
                  borderColor: "rgba(192, 132, 252, 0.3)",
                  boxShadow: "0 0 30px rgba(192, 132, 252, 0.1)",
                }}
              >
                <div className="flex items-center mb-6">
                  <Rocket className="w-10 h-10 text-purple-300 mr-4" />
                  <h3 className="text-2xl font-bold text-white">Galactica</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Our space exploration technology division pushes the
                  boundaries of what's possible beyond Earth. From propulsion
                  simulation systems to space communications visualization,
                  we're engineering the tools that will take humanity to the
                  stars.
                </p>
                <div className="text-sm" style={{ color: "#FFC000" }}>
                  Space Exploration Technology
                </div>
              </div>

              {/* Radiant Realities */}
              <div
                className="backdrop-blur-sm rounded-2xl p-8 border transition-all transform hover:scale-105"
                style={{
                  background: "rgba(0, 0, 0, 0.5)",
                  borderColor: "rgba(192, 132, 252, 0.3)",
                  boxShadow: "0 0 30px rgba(192, 132, 252, 0.1)",
                }}
              >
                <div className="flex items-center mb-6">
                  <Users className="w-10 h-10 text-purple-300 mr-4" />
                  <h3 className="text-2xl font-bold text-white">
                    Radiant Realities
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Our extended reality game studio creates immersive experiences
                  designed for social impact. We believe games can be powerful
                  tools for education, empowerment, and positive change,
                  bridging entertainment with meaningful purpose.
                </p>
                <div className="text-sm" style={{ color: "#FFC000" }}>
                  XR Game Studio for Social Impact
                </div>
              </div>

              {/* Prosthetics Initiative */}
              <div
                className="md:col-span-2 backdrop-blur-sm rounded-2xl p-8 border transition-all transform hover:scale-105"
                style={{
                  background: "rgba(0, 0, 0, 0.5)",
                  borderColor: "rgba(192, 132, 252, 0.3)",
                  boxShadow: "0 0 30px rgba(192, 132, 252, 0.1)",
                }}
              >
                <div className="flex items-center mb-6">
                  <Heart
                    className="w-10 h-10 mr-4"
                    style={{ color: "#FFC000" }}
                  />
                  <h3 className="text-2xl font-bold text-white">
                    Parhelion Prosthetics
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  We design and distribute free, open-source prosthetic devices
                  that restore mobility and independence. By making advanced
                  medical technology accessible to everyone, regardless of
                  economic status, we're proving that innovation should serve
                  humanity first.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section
          id="impact"
          className="min-h-screen flex items-center py-20 px-4"
        >
          <div className="max-w-6xl mx-auto text-center">
            <h2
              className="text-4xl md:text-5xl font-bold mb-12"
              style={{
                background: "linear-gradient(135deg, #c084fc 0%, #FFC000 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              From Prosthetics to Space Tech
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div
                className="backdrop-blur-sm rounded-xl p-8 border"
                style={{
                  background: "rgba(0, 0, 0, 0.5)",
                  borderColor: "rgba(192, 132, 252, 0.2)",
                }}
              >
                <div className="text-5xl font-bold text-purple-300 mb-4">
                  3+
                </div>
                <div className="text-xl text-gray-300">Companies Built</div>
              </div>
              <div
                className="backdrop-blur-sm rounded-xl p-8 border"
                style={{
                  background: "rgba(0, 0, 0, 0.5)",
                  borderColor: "rgba(192, 132, 252, 0.2)",
                }}
              >
                <div
                  className="text-5xl font-bold mb-4"
                  style={{ color: "#FFC000" }}
                >
                  ∞
                </div>
                <div className="text-xl text-gray-300">Lives Impacted</div>
              </div>
              <div
                className="backdrop-blur-sm rounded-xl p-8 border"
                style={{
                  background: "rgba(0, 0, 0, 0.5)",
                  borderColor: "rgba(192, 132, 252, 0.2)",
                }}
              >
                <div className="text-5xl font-bold text-purple-300 mb-4">
                  100%
                </div>
                <div className="text-xl text-gray-300">
                  Open Source Commitment
                </div>
              </div>
            </div>

            <div
              className="backdrop-blur-sm rounded-2xl p-12 border"
              style={{
                background:
                  "linear-gradient(135deg, rgba(192, 132, 252, 0.1) 0%, rgba(255, 192, 0, 0.05) 100%)",
                borderColor: "rgba(192, 132, 252, 0.3)",
                boxShadow: "0 0 60px rgba(192, 132, 252, 0.2)",
              }}
            >
              <p className="text-2xl md:text-3xl text-gray-200 leading-relaxed mb-8">
                "This isn't just a career path. It's a dream we didn't know we
                were allowed to have, and we're making it real, one breakthrough
                at a time."
              </p>
              <p className="text-xl font-semibold" style={{ color: "#FFC000" }}>
                Engineering accessibility. Visualizing the impossible. Building
                the future.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          className="py-8 px-4 border-t"
          style={{
            background: "rgba(0, 0, 0, 0.8)",
            borderColor: "rgba(192, 132, 252, 0.2)",
          }}
        >
          <div className="max-w-7xl mx-auto text-center text-gray-400">
            <p className="mb-4">
              "Engineering Tomorrow's Technology Today, by Chasing the Dawn of
              Tomorrow."
            </p>
            <p className="text-sm">
              © 2025 Parhelion R&D LLC. All rights reserved. Unauthorized
              copying, reproduction, or redistribution of this website’s
              content, including 3D models, images, text, and design, is
              strictly prohibited.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
