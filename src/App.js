import React from 'react';
import './styling/main.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";

//Pages
import Start from './pages/start'
import NotFound from './pages/404'


function App() {
	return (
		<Router>
			<Route exact path='/' component={Start} />

			{/* Keep this last as a default route */}
			<Route path='*' component={NotFound} />
		</Router>
	);
}

export default App;
