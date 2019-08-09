import React from 'react';
import './styling/main.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Pages
import Start from './pages/start'
import NotFound from './pages/404'
//Forum Pages
import Forum from './pages/forum/forum'
import ForumCategory from './pages/forum/forum-category'
import ForumTopic from './pages/forum/forum-topic'
import ForumThread from './pages/forum/forum-thread'


function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Start} />

				{/* Forum Part */}
				<Route exact path='/forum' component={Forum}/>
				<Route exact path='/forum/:cat' component={ForumCategory}/>
				<Route exact path='/forum/:cat/:topic' component={ForumTopic}/>
				<Route exact path='/forum/:cat/:topic/:thread' component={ForumThread}/>

				{/* Keep this last as a default route */}
				<Route component={NotFound} />
			</Switch>
		</Router>
	);
}

export default App;
