import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path="/" element={<Home />} />
				<Route path="movie/:id" element={<Detail />} />
			</>
		)
	);
	return <RouterProvider router={router} />;
}

export default App;
