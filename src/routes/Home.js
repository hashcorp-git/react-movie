import { useEffect, useState } from 'react';
import Movie from '../components/Movie';

function Home() {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	const getMovies = async () => {
		const url = `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`;
		const res = await fetch(url);
		const json = await res.json();
		console.log(json);
		setMovies(() => json.data.movies);
		setLoading((prev) => false);
	};
	useEffect(() => {
		getMovies();
	}, []);
	function truncateString(str, limit = 255) {
		if (str.length > limit) {
			return str.slice(0, limit) + '...';
		}
		return str;
	}
	return (
		<div>
			{loading ? (
				<h1 className="text-3xl font-bold underline">loading...</h1>
			) : (
				<ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{movies.map((movie) => (
						<Movie key={movie.id} id={movie.id} coverImg={movie.medium_cover_image} title={movie.title} summary={truncateString(movie.summary)} genres={movie.genres} />
					))}
				</ul>
			)}
		</div>
	);
}
export default Home;
