import { motion } from "framer-motion";

const Projects = () => {
	const projects = [
		{
			id: 1,
			title: "E-Commerce Platform",
			category: "Full Stack",
			description:
				"A modern e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, product management, shopping cart, and payment integration.",
			technologies: [
				"React",
				"Node.js",
				"PostgreSQL",
				"Express",
				"JWT",
				"Stripe",
			],
			image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
			github: "https://github.com/yourusername/ecommerce-platform",
			live: "https://ecommerce-platform-demo.com",
		},
		{
			id: 2,
			title: "Task Management App",
			category: "Frontend",
			description:
				"A responsive task management application with drag-and-drop functionality, real-time updates, and team collaboration features.",
			technologies: [
				"React",
				"TypeScript",
				"TailwindCSS",
				"Framer Motion",
				"Local Storage",
			],
			image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&h=300&fit=crop",
			github: "https://github.com/yourusername/task-manager",
			live: "https://task-manager-demo.com",
		},
		{
			id: 3,
			title: "Weather Dashboard",
			category: "Frontend",
			description:
				"A weather dashboard that displays current weather conditions and forecasts using multiple weather APIs with beautiful data visualization.",
			technologies: [
				"React",
				"Chart.js",
				"OpenWeather API",
				"Geolocation API",
				"CSS3",
			],
			image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&h=300&fit=crop",
			github: "https://github.com/yourusername/weather-dashboard",
			live: "https://weather-dashboard-demo.com",
		},
		{
			id: 4,
			title: "Blog API",
			category: "Backend",
			description:
				"A RESTful API for a blog platform with user authentication, CRUD operations, image upload, and comment system.",
			technologies: [
				"Node.js",
				"Express",
				"MongoDB",
				"JWT",
				"Multer",
				"Bcrypt",
			],
			image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
			github: "https://github.com/yourusername/blog-api",
			live: "https://blog-api-docs.com",
		},
		{
			id: 5,
			title: "Portfolio Website",
			category: "Frontend",
			description:
				"A modern, responsive portfolio website showcasing my skills, projects, and professional experience with smooth animations.",
			technologies: [
				"React",
				"TypeScript",
				"TailwindCSS",
				"Framer Motion",
				"React Router",
			],
			image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
			github: "https://github.com/yourusername/portfolio",
			live: "https://marklester-portfolio.com",
		},
		{
			id: 6,
			title: "Chat Application",
			category: "Full Stack",
			description:
				"Real-time chat application with user authentication, private messaging, and group chat functionality using WebSocket.",
			technologies: [
				"React",
				"Node.js",
				"Socket.io",
				"MongoDB",
				"Express",
				"JWT",
			],
			image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&h=300&fit=crop",
			github: "https://github.com/yourusername/chat-app",
			live: "https://chat-app-demo.com",
		},
	];

	return (
		<div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-52 pb-12">
			<div className="py-10 md:py-20">
				<div className="text-center mb-8 md:mb-16">
					<h1 className="text-sm sm:text-base md:text-[18px] text-ligth-gray font-medium mb-2 md:mb-4">
						-MY WORK
					</h1>
					<h1 className="text-2xl sm:text-3xl md:text-[35px] font-bold font-inter text-dark-blue mb-4 md:mb-6">
						Featured Projects
					</h1>
					<p className="text-light-paragraph text-sm sm:text-base md:text-[16px] max-w-2xl mx-auto px-4 sm:px-0">
						Here are some of my recent projects that showcase my skills in
						frontend and backend development. Each project demonstrates
						different technologies and problem-solving approaches.
					</p>
				</div>

				{/* Project Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
					{projects.map((project) => (
						<motion.div
							key={project.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							viewport={{ once: true }}
							className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
						>
							<div className="relative">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-40 sm:h-48 object-cover"
								/>
								<div className="absolute top-2 sm:top-4 left-2 sm:left-4">
									<span className="bg-dark-blue text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
										{project.category}
									</span>
								</div>
							</div>

							<div className="p-4 sm:p-6">
								<h3 className="text-lg sm:text-xl font-bold font-inter text-dark-blue mb-2 sm:mb-3">
									{project.title}
								</h3>
								<p className="text-light-paragraph text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3">
									{project.description}
								</p>

								<div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
									{project.technologies.slice(0, 3).map((tech) => (
										<span
											key={tech}
											className="px-2 py-1 bg-light-blue text-dark-blue text-xs rounded"
										>
											{tech}
										</span>
									))}
									{project.technologies.length > 3 && (
										<span className="px-2 py-1 bg-light-gray text-dark-blue text-xs rounded">
											+{project.technologies.length - 3} more
										</span>
									)}
								</div>

								<div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
									<a
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										className="flex-1 bg-dark-blue text-white text-center py-2 px-3 sm:px-4 rounded hover:bg-blue-700 transition-colors duration-200 text-xs sm:text-sm"
									>
										GitHub
									</a>
									<a
										href={project.live}
										target="_blank"
										rel="noopener noreferrer"
										className="flex-1 border border-dark-blue text-dark-blue text-center py-2 px-3 sm:px-4 rounded hover:bg-dark-blue hover:text-white transition-colors duration-200 text-xs sm:text-sm"
									>
										Live Demo
									</a>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* Call to Action */}
				<div className="text-center mt-8 md:mt-16 px-4 sm:px-0">
					<h2 className="text-xl sm:text-2xl font-bold font-inter text-dark-blue mb-3 sm:mb-4">
						Interested in working together?
					</h2>
					<p className="text-light-paragraph text-sm sm:text-base mb-4 sm:mb-6">
						Let's discuss your project and bring your ideas to life
					</p>
					<button className="btn px-6 sm:px-8 py-2 sm:py-3 bg-dark-blue text-white hover:bg-blue-700 transition-colors duration-200 rounded text-sm sm:text-base">
						Get In Touch
					</button>
				</div>
			</div>
		</div>
	);
};

export default Projects;
