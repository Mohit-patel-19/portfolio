export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-white/10 sticky top-0 bg-black/80 backdrop-blur-md z-50">
        <h1 className="text-2xl font-bold text-purple-500">UI.</h1>

        <ul className="hidden md:flex gap-8 text-sm text-gray-300">
          <li className="hover:text-purple-400 cursor-pointer">Home</li>
          <li className="hover:text-purple-400 cursor-pointer">About</li>
          <li className="hover:text-purple-400 cursor-pointer">Skills</li>
          <li className="hover:text-purple-400 cursor-pointer">Projects</li>
          <li className="hover:text-purple-400 cursor-pointer">Contact</li>
        </ul>

        <button className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-xl text-sm font-medium transition-all">
          Download CV
        </button>
      </nav>

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-10 items-center px-8 md:px-20 py-20">
        <div>
          <p className="text-purple-400 text-lg mb-2">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
            Mohit Patel
          </h1>

          <h2 className="text-2xl text-purple-400 font-semibold mb-6">
            UI/UX Designer & Frontend Developer
          </h2>

          <p className="text-gray-400 leading-8 max-w-lg mb-8">
            I design modern websites, landing pages, and user-friendly
            interfaces with clean UI and responsive layouts.
          </p>

          <div className="flex gap-4">
            <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl font-medium transition-all">
              View Projects
            </button>

            <button className="border border-white/20 hover:border-purple-500 px-6 py-3 rounded-xl font-medium transition-all">
              Contact Me
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-500 to-purple-900 blur-3xl absolute opacity-30"></div>

          <img
        
          //photo
        src="src/assets/MohitP.jpg"
className="relative w-80 h-80 object-cover object-[70%] rounded-full border border-white/10 shadow-2xl"
/>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white text-black px-8 md:px-20 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-purple-600 font-semibold mb-3">ABOUT ME</p>

            <h2 className="text-4xl font-bold mb-6">
              I Create Modern UI Experiences
            </h2>

            <p className="text-gray-600 leading-8 mb-6">
              I am passionate about creating responsive websites and clean UI
              designs. I enjoy learning frontend development and building
              attractive digital products.
            </p>

            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-medium transition-all">
              More About Me
            </button>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="bg-gray-100 p-8 rounded-2xl text-center shadow-sm">
              <h3 className="text-4xl font-bold text-purple-600">10+</h3>
              <p className="text-gray-600 mt-2">Projects</p>
            </div>

            <div className="bg-gray-100 p-8 rounded-2xl text-center shadow-sm">
              <h3 className="text-4xl font-bold text-purple-600">2+</h3>
              <p className="text-gray-600 mt-2">Internships</p>
            </div>

            <div className="bg-gray-100 p-8 rounded-2xl text-center shadow-sm">
              <h3 className="text-4xl font-bold text-purple-600">5+</h3>
              <p className="text-gray-600 mt-2">UI Designs</p>
            </div>

            <div className="bg-gray-100 p-8 rounded-2xl text-center shadow-sm">
              <h3 className="text-4xl font-bold text-purple-600">100%</h3>
              <p className="text-gray-600 mt-2">Responsive</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="px-8 md:px-20 py-20">
        <p className="text-purple-400 font-semibold mb-3">MY SKILLS</p>

        <h2 className="text-4xl font-bold mb-10">Technologies I Use</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Figma",
            "Tailwind",
            "Java",
            "Python",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center hover:border-purple-500 transition-all"
            >
              <h3 className="text-xl font-semibold">{skill}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="bg-white text-black px-8 md:px-20 py-20">
        <p className="text-purple-600 font-semibold mb-3">PROJECTS</p>

        <h2 className="text-4xl font-bold mb-10">My Recent Work</h2>

        <div className="grid md:grid-cols-3 gap-8">

  {/* Project 1 */}
  <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all">
    <img
      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
      alt="project"
      className="h-52 w-full object-cover"
    />

    <div className="p-6">
      <h3 className="text-2xl font-bold mb-3">
        ZenFit Landing Page
      </h3>

      <p className="text-gray-600 mb-5">
        Modern responsive landing page with clean UI and conversion-focused design.
      </p>

      <button className="text-purple-600 font-semibold hover:underline">
        View Project →
      </button>
    </div>
  </div>

  {/* Project 2 */}
  <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all">
    <img
      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
      alt="project"
      className="h-52 w-full object-cover"
    />

    <div className="p-6">
      <h3 className="text-2xl font-bold mb-3">
        Nexora Dashboard UI
      </h3>

      <p className="text-gray-600 mb-5">
        Interactive admin dashboard with analytics cards and modern layout.
      </p>

      <button className="text-purple-600 font-semibold hover:underline">
        View Project →
      </button>
    </div>
  </div>

  {/* Project 3 */}
  <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all">
    <img
      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
      alt="project"
      className="h-52 w-full object-cover"
    />

    <div className="p-6">
      <h3 className="text-2xl font-bold mb-3">
        Aura Fashion Store
      </h3>

      <p className="text-gray-600 mb-5">
        Stylish e-commerce website with responsive product showcase sections.
      </p>

      <button className="text-purple-600 font-semibold hover:underline">
        View Project →
      </button>
    </div>
  </div>

</div>
      </section>

      {/* Contact */}
      <section className="px-8 md:px-20 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-purple-400 font-semibold mb-3">CONTACT</p>

            <h2 className="text-4xl font-bold mb-5">
              Let's Work Together
            </h2>

            <p className="text-gray-400 leading-8 mb-6">
              Feel free to contact me for UI design, frontend projects, and
              collaborations.
            </p>

            <div className="space-y-3 text-gray-300">
              <p>Email: mohit@email.com</p>
              <p>Phone: +91 7023756046</p>
              <p>Location: Rajasthan, India</p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
            />

            <textarea
              rows="5"
              placeholder="Message"
              className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
            ></textarea>

            <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl font-medium transition-all w-full">
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 text-center py-6 text-gray-500 text-sm">
        © 2026 Mohit Patel. All rights reserved.
      </footer>
    </div>
  );
}
