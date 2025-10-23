"use client";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#E0E0E0]">
      {/* Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-[95%] sm:max-w-[90%] md:max-w-[600px]">
        <div className="bg-[#E0E0E0]/20 backdrop-blur-md rounded-full px-6 py-2 shadow-lg border border-white/30 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center">
            {/* Desktop Logo */}
            <img
              src="/logo_desktop.svg"
              alt="Commented Logo"
              className="hidden md:block h-8"
            />
            {/* Mobile Logo */}
            <img
              src="/logo_mobile.svg"
              alt="Commented Mobile Logo"
              className="block md:hidden h-4"
            />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            {[
              { href: "#", label: "Home" },
              { href: "#services", label: "Services" },
              { href: "#process", label: "Process" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[#2C2C2C] hover:bg-[#2C2C2C] hover:text-white rounded-full px-3 py-1 text-sm transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#2C2C2C] focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden mt-2 bg-[#E0E0E0]/90 backdrop-blur-md rounded-2xl shadow-lg border border-white/30 flex flex-col text-center py-4 space-y-3">
            {[
              { href: "#", label: "Home" },
              { href: "#services", label: "Services" },
              { href: "#process", label: "Process" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-[#2C2C2C] hover:bg-[#2C2C2C] hover:text-white rounded-full px-4 py-2 text-sm transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>


      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#2C2C2C] mb-6 leading-tight">
          Tech Consulting That
          <span className="text-[#2C2C2C] block">Scales Your Business</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-[#2C2C2C] mb-8 max-w-3xl mx-auto leading-relaxed">
          From MVP to enterprise scaling, we deliver affordable, rapid solutions for SMEs across
          healthcare, finance, and retail.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-[#2C2C2C] text-white px-8 py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-[#1a1a1a] transition-colors shadow-lg"
          >
            Book a Consultation
          </a>
          <a
            href="#services"
            className="border-2 border-[#2C2C2C] text-[#2C2C2C] px-8 py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-[#2C2C2C] hover:text-white transition-colors"
          >
            View Services
          </a>
        </div>
      </section>

      {/* Core Services */}
      <section id="services" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">
            Core Services
          </h2>
          <p className="text-sm sm:text-lg text-[#2C2C2C] max-w-2xl mx-auto">
            Comprehensive tech solutions tailored to your business needs
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {[
            { title: "Strategy", description: "Digital transformation roadmaps and technology planning" },
            { title: "Design", description: "User-centered design and seamless user experiences" },
            { title: "Development", description: "Custom software development and system integration" },
            { title: "Integration", description: "API development and third-party system connections" },
            { title: "Support", description: "Ongoing maintenance and technical support" },
          ].map((s, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-2xl bg-[#E0E0E0] shadow-md hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-[#2C2C2C] mb-3">{s.title}</h3>
              <p className="text-sm text-[#2C2C2C] leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Served */}
      <section id="industries" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#E0E0E0]">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">
            Industries We Serve
          </h2>
          <p className="text-sm sm:text-lg text-[#2C2C2C] max-w-2xl mx-auto">
            Specialized solutions across key sectors
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {["Healthcare", "Finance", "Retail", "General SMEs"].map((ind) => (
            <div
              key={ind}
              className="bg-[#E0E0E0] p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-[#2C2C2C] mb-3">{ind}</h3>
              <p className="text-sm text-[#2C2C2C] leading-relaxed">
                Tailored digital solutions that align with {ind.toLowerCase()} goals.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#E0E0E0]">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">
            Our Process
          </h2>
          <p className="text-sm sm:text-lg text-[#2C2C2C] max-w-2xl mx-auto">
            A streamlined approach to delivering exceptional results
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {["Discovery", "Design", "Development", "Deployment", "Support"].map((step, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#E0E0E0] rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-[#2C2C2C] font-semibold">{i + 1}</span>
              </div>
              <h3 className="text-lg font-semibold text-[#2C2C2C] mb-2">{step}</h3>
              <p className="text-sm text-[#2C2C2C] leading-relaxed">
                Step {i + 1} of our expert-driven delivery process.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-sm sm:text-lg text-[#2C2C2C] max-w-2xl mx-auto">
            Let’s discuss your project and find the perfect solution.
          </p>
        </div>

        <form
          id="contact-form"
          action="https://formspree.io/f/mjkaqqzk"
          method="POST"
          className="bg-[#E0E0E0] p-6 sm:p-8 rounded-2xl shadow-custom-lg space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full px-4 py-3 border border-[#D1D5DB] rounded-lg focus:ring-2 focus:ring-[#2C2C2C]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full px-4 py-3 border border-[#D1D5DB] rounded-lg focus:ring-2 focus:ring-[#2C2C2C]"
            />
          </div>

          <input
            type="text"
            name="company"
            placeholder="Company"
            className="w-full px-4 py-3 border border-[#D1D5DB] rounded-lg focus:ring-2 focus:ring-[#2C2C2C]"
          />

          <textarea
            name="message"
            placeholder="Project Summary"
            rows={4}
            className="w-full px-4 py-3 border border-[#D1D5DB] rounded-lg focus:ring-2 focus:ring-[#2C2C2C]"
          ></textarea>

          <div className="text-center">
            <button
              type="submit"
              id="contact-submit"
              className="bg-[#2C2C2C] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#059669] transition-colors shadow-custom-lg"
            >
              Book Your Consultation
            </button>
          </div>

          <p id="contact-form-status" className="text-sm mt-2 text-[#2C2C2C]"></p>
        </form>

        {/* AJAX Script */}
        <script>
          {`
      const form = document.getElementById("contact-form");
      const status = document.getElementById("contact-form-status");
      const submitButton = document.getElementById("contact-submit");

      form.addEventListener("submit", async (event) => {
        event.preventDefault(); // prevent redirect
        const data = new FormData(form);

        submitButton.disabled = true;
        submitButton.textContent = "Sending...";

        try {
          const response = await fetch(form.action, {
            method: form.method,
            body: data,
            headers: { 'Accept': 'application/json' }
          });

          if (response.ok) {
            status.textContent = "Thanks! Your message has been sent.";
            form.reset();
          } else {
            const result = await response.json();
            status.textContent = result.errors ? result.errors.map(e => e.message).join(", ") : "Oops! There was a problem.";
          }
        } catch (error) {
          status.textContent = "Oops! There was a problem submitting your form.";
        } finally {
          submitButton.disabled = false;
          submitButton.textContent = "Book Your Consultation";
        }
      });
    `}
        </script>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C2C2C] text-white py-10 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
          {/* Branding & About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Commented</h3>
            <p className="text-[#D1D5DB] mb-6">
              Full-service tech consulting for SMEs. From MVP to enterprise scaling with affordable, rapid solutions.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://www.linkedin.com/in/shaurya-afk" target="_blank" rel="noopener noreferrer" className="text-[#D1D5DB] hover:text-[#10B981] transition-colors">LinkedIn</a>
              <a href="https://x.com/shauryadotafk" target="_blank" rel="noopener noreferrer" className="text-[#D1D5DB] hover:text-[#10B981] transition-colors">Twitter</a>
              <a href="https://github.com/shaurya-afk" target="_blank" rel="noopener noreferrer" className="text-[#D1D5DB] hover:text-[#10B981] transition-colors">GitHub</a>
              <a href="https://shauryasha.com" target="_blank" rel="noopener noreferrer" className="text-[#D1D5DB] hover:text-[#10B981] transition-colors">Portfolio</a>
            </div>
          </div>

          {/* Minimal Quick Links / Contact */}
          <div className="flex flex-col justify-center space-y-2">
            <a href="#contact" className="hover:text-[#10B981] transition-colors">Book a Consultation</a>
            <a href="mailto:contact@commented.com" className="hover:text-[#10B981] transition-colors">shauryasha090@gmail.com</a>
          </div>
        </div>

        <div className="border-t border-[#374151] mt-8 pt-6 text-center text-[#D1D5DB] text-sm">
          © 2025 Commented. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
