import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";

const AppRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route path="/portfolio" element={<Main />} />
			</Routes>
		</Router>
	);
};

export default AppRoutes;
