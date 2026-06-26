import Card from "./components/Card"


const App = () => {
    const profiles = [
  {
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Wade Wilson",
    post: "Mobile Designer",
    skill: ["UI", "Figma", "Adobe XD", "Photoshop", "React Native", "Prototyping"],
    description: "Wade is a mobile designer with advanced knowledge of UI design and cross-platform app development.",
    available: "available",
    pay: "$55/hr",
    employment: "Freelancer",
    icon: "user"
  },
  {
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Samantha Brooks",
    post: "UI/UX Designer",
    skill: ["UI", "UX", "Figma", "Wireframing", "Photoshop", "Illustrator"],
    description: "Samantha is an Android and iOS designer with advanced knowledge in coding and user research.",
    pay: "$68/hr",
    employment: "Google",
    icon: "building2"
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Daniel Carter",
    post: "Frontend Developer",
    skill: ["React", "JavaScript", "HTML", "CSS", "TypeScript", "Tailwind CSS"],
    description: "Daniel builds responsive web applications with modern frontend technologies.",
    available: "available",
    pay: "$62/hr",
    employment: "Microsoft",
    icon: "building2"
  },
  {
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Emily Johnson",
    post: "Backend Developer",
    skill: ["Node.js", "Express", "MongoDB", "SQL", "REST API", "Docker"],
    description: "Emily develops scalable backend services and cloud-based applications.",
    pay: "$70/hr",
    employment: "Amazon",
    icon: "building2"
  },
  {
    img: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Michael Brown",
    post: "Full Stack Developer",
    skill: ["React", "Node.js", "MongoDB", "Express", "Git", "AWS"],
    description: "Michael creates complete web applications from frontend interfaces to backend APIs.",
    available: "available",
    pay: "$80/hr",
    employment: "Meta",
    icon: "building2"
  },
  {
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Olivia Martinez",
    post: "Graphic Designer",
    skill: ["Photoshop", "Illustrator", "Branding", "Typography", "Figma", "Canva"],
    description: "Olivia designs premium branding assets and marketing materials for startups.",
    pay: "$48/hr",
    employment: "Freelancer",
    icon: "user"
  },
  {
    img: "https://images.unsplash.com/photo-1587397845856-e6cf49176c70?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "James Anderson",
    post: "DevOps Engineer",
    skill: ["Docker", "Kubernetes", "AWS", "Linux", "Terraform", "CI/CD"],
    description: "James automates deployments and maintains secure cloud infrastructure.",
    available: "available",
    pay: "$90/hr",
    employment: "Netflix",
    icon: "building2"
  },
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sophia Taylor",
    post: "Data Scientist",
    skill: ["Python", "Machine Learning", "Pandas", "TensorFlow", "SQL", "Statistics"],
    description: "Sophia transforms complex datasets into actionable business insights.",
    pay: "$85/hr",
    employment: "Apple",
    icon: "building2"
  },
  {
    img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Benjamin Harris",
    post: "Cybersecurity Analyst",
    skill: ["Network Security", "Ethical Hacking", "Python", "SIEM", "Linux", "Firewalls"],
    description: "Benjamin protects enterprise systems against modern cybersecurity threats.",
    available: "available",
    pay: "$78/hr",
    employment: "IBM",
    icon: "building2"
  },
  {
    img: "https://images.unsplash.com/photo-1509868918748-a554ad25f858?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Charlotte Evans",
    post: "Product Designer",
    skill: ["Figma", "UX Research", "Design Systems", "Prototyping", "UI", "Adobe XD"],
    description: "Charlotte designs intuitive digital products focused on usability and accessibility.",
    pay: "$66/hr",
    employment: "Adobe",
    icon: "building2"
  },
  {
    img: "https://images.unsplash.com/photo-1611695434398-4f4b330623e6?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Ethan Walker",
    post: "Software Engineer",
    skill: ["Java", "Spring Boot", "Microservices", "SQL", "Docker", "Git"],
    description: "Ethan develops enterprise-grade software with a focus on performance and reliability.",
    available: "available",
    pay: "$75/hr",
    employment: "Oracle",
    icon: "building2"
  },
  {
    img: "https://images.unsplash.com/photo-1553514029-1318c9127859?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Ava Thompson",
    post: "Cloud Engineer",
    skill: ["Azure", "AWS", "Terraform", "Kubernetes", "Linux", "Python"],
    description: "Ava specializes in cloud infrastructure, automation, and scalable deployments.",
    pay: "$88/hr",
    employment: "Freelancer",
    icon: "user"
  }
];
    
        return (
            <div className="parent">
                {
                    profiles.map((profile, idx)=>{
                        return (
                                <Card profile={profile} key={idx}/>
                        )
                    })
                }
            </div>
        )
}

export default App