export function Hero() {
    return (
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
          Hi, I'm <span className="text-blue-400">Your Name</span>
        </h1>
  
        <p className="text-lg md:text-xl max-w-2xl text-white/80">
          A passionate developer crafting beautiful web experiences.
        </p>
  
        <div className="mt-8 flex gap-4">
          <a
            href="/projects"
            className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-blue-400"
          >
            View Projects
          </a>
  
          <a
            href="/contact"
            className="px-6 py-3 border border-white/40 rounded-lg font-medium hover:bg-white/10"
          >
            Contact Me
          </a>
        </div>
      </section>
    );
  }
  