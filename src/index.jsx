import { LocationProvider, Router, Route, hydrate, prerender as ssr } from 'preact-iso';

import { Home } from './pages/index.jsx';
import { NotFound } from './pages/_404.jsx';
import './style.css';
import {Project} from "./pages/project.jsx";
export function scrollToDiv(route) {
	const element = document.querySelector(`${route}`);
	console.log(element)
	if (element) {
		element.scrollIntoView({
			behavior: 'smooth',
			block: 'center'
		});

	}
}

export function App() {
	return (
		<LocationProvider>

				<Router>
					<Route path="/" component={Home} />
					<Project path="/project/:name" />
					<Route default component={NotFound} />
				</Router>

		</LocationProvider>
	);
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.querySelector('body'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
