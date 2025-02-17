
import "../assets/css/style.css"
import HomeSection1 from "../components/HomeSection1.jsx";
import About from "../components/About.jsx";
import Webdesign from "../components/Webdesign.jsx";
import ProjectsSection from "../components/Projects.jsx";
import Footer from "../components/Footer.jsx";
export function Home() {

	return (
		<>
			<HomeSection1 />
			<About />
			<Webdesign />
			<ProjectsSection />
			<Footer />
		</>

	);
}

