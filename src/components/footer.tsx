import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Yash Talaviya</h3>
            <p className="text-blue-200 text-sm leading-relaxed">
              MERN Stack Developer crafting modern, scalable web applications.
              Passionate about clean code and innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Experience", "Skills", "Projects", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        const element = document.getElementById(
                          item.toLowerCase()
                        );
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="text-blue-200 hover:text-white transition-smooth text-sm"
                    >
                      {item}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/talaviyayash"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white transition-smooth hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://in.linkedin.com/in/yash-talaviya-265633224?trk=public_profile_samename-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white transition-smooth hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:yashtalaviya654@gmail.com"
                className="text-blue-200 hover:text-white transition-smooth hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-blue-200 text-sm">yashtalaviya654@gmail.com</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-blue-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-blue-200 text-sm">
            © {currentYear} Yash Talaviya. All rights reserved.
          </p>
          <p className="text-blue-200 text-sm flex items-center mt-2 sm:mt-0">
            {/* Made with <Heart className="h-4 w-4 mx-1 text-red-400" /> using React & TypeScript */}
          </p>
        </div>
      </div>
    </footer>
  );
}
