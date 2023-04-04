import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import CatAstrophe from "./components/CatAstrophe";
import Fling from "./components/Fling";

function App() {
	return (
		<div className="body">
			<Header />
			<Routes>
				<Route exact path="/" element={<LandingPage />} />
				<Route path="/catastrophe" element={<CatAstrophe />} />
				<Route path="/fling" element={<Fling />} />
				<Route path="/about-us" element={<AboutUs />} />
			</Routes>

			<Footer />
		</div>
	);
}

export default App;
