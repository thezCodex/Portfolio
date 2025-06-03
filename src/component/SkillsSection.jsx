import { useState } from "react"
import { cn } from "../lib/utils"


    const skills = [

        {name: "HTML/CSS", level: 95, category:"frontend"},
         {name: "JavaScript", level: 95, category:"frontend"},
          {name: "React", level: 95, category:"frontend"},
           {name: "TypeScript", level: 70, category:"frontend"},
            {name: "TailwindCss", level: 68, category:"frontend"},
             {name: "Next.js", level: 50, category:"frontend"},
               
        

        
        {name: "Git/Github", level: 90, category: "tools"},
         {name: "Docker", level: 90, category: "tools"},
          {name: "Figma", level: 90, category: "tools"},
           {name: "VS Code", level: 90, category: "tools"},

    ]

    const category = ["all", "frontend", "tools"]
 



const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all")

    const SieveSkills = skills.filter(
        (skills) => activeCategory === "all" || skills.category === activeCategory
    )

  return (
   <section id="skills" className="py-24 px-4 relative bg-secondary/30">
    <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My<span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
            {category.map((category, key) => (
                <button 
                onClick={() => setActiveCategory(category)}
                 key={key} 
                 className={cn("px-5 py-2 rounded-full transiton-colors duration-300 capitalize cursor-pointer",
                    activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
                 )}>{category}</button>
            ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SieveSkills.map((skills, key) => (
                <div
                key={key} 
                className="bg-card p-6 rounded-lg shadow-x5 card-hover"
            >
                <div className="text-left mb-4">
                    <h3 className="font-semibold text-lg">{skills.name}</h3>
                </div>
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                    <div className="bg-primary h-2 rounded-full origin-left animate-fade-in-delay-1" 
                     style={{width: skills.level + "%"}}
                    />
                </div>
                <div className="text-right mt-1">
                    <span className="text-sm text-muted-foreground">{skills.level}%</span>
                </div>
            </div>

                    
            ))}
        </div>
    </div>
   </section>
  )
}

export default SkillsSection
 