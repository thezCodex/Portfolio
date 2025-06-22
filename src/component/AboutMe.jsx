import { Badge, Briefcase, Code, User } from "lucide-react"
import { cn } from "../lib/utils"
const AboutMe = () => {
  return (
   <section id="about" className="py-24 px-4 relative">
    <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 ">
            <h3 className="text-xl font-semibold">Web devevoper & UI/UX designer</h3>
             <p className="text-muted-foreground">With months of internship and years of Freelancing i can say i'm experienced to 
              build and manufactures intruiging Softwares using modern technologies {"(including AI technologies)"}
             </p>
             <p className="text-muted-foreground">With months of internship and years of Freelancing i cen say i'm experienced to 
              build and manufactures intruiging Softwares usind mordern technologies {"(ai is included)"}
             </p>

           <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <a href="#contact" className="cosmic-button">
              Get in touch
            </a>

            <a href="/Resume.docx" 
              className={cn("px-6 py-2 rounded-full border border-primary text-primary", 
               "hover:bg-primary/10 transition-colors duration-300")}
               download>
                Download CV
            </a>
          </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive Application and Websites with Mordern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary"/>
                </div>
                 <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Creating responsive Application and Websites with Mordern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Badge className="h-6 w-6 text-primary"/>
                </div>
                 <div className="text-left">
                  <h4 className="font-semibold text-lg">Certification</h4>
                  <p className="text-muted-foreground">
                    Creating responsive Application and Websites with Mordern frameworks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
   </section>
  )
}

export default AboutMe
