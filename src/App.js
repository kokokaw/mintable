import { Header } from './Components/Header';
import { Footer } from './Components/Footer';

import { Routes } from './Containers/Routes';

import './App.scss';

function App() {
	return (
		<div className="app">
			<Header />
			<div className="app__body">
				<Routes />
			</div>
			<Footer />
		</div>
	);
}

export default App;
