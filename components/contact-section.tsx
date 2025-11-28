export function ContactSection() {
    return (
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
  
        <p className="text-white/80 mb-6">
          Have a project or want to collaborate? Reach out!
        </p>
  
        <form className="grid gap-4 max-w-md">
          <input className="p-3 bg-white/5 border border-white/20 rounded-lg" placeholder="Name" />
          <input className="p-3 bg-white/5 border border-white/20 rounded-lg" placeholder="Email" />
          <textarea className="p-3 bg-white/5 border border-white/20 rounded-lg" placeholder="Message" rows={4} />
          <button className="px-6 py-3 bg-blue-400 text-black rounded-lg font-bold">
            Send Message
          </button>
        </form>
      </div>
    );
  }
  