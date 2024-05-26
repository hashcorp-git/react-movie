import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ id, coverImg, title, summary, genres }) {
	return (
		<li className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
			<Link to={`movie/${id}`}>
				<div className="flex flex-1 flex-col p-8">
					<img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={coverImg} alt={title} />
					<h3 className="mt-6 text-sm font-medium text-gray-900">{title}</h3>
					<dl className="mt-1 flex flex-grow flex-col justify-between">
						<dt className="sr-only">Summary</dt>
						<dd className="text-sm text-gray-500">{summary}</dd>
						<dt className="sr-only">Genre</dt>
						<dd className="mt-3 flex justify-center gap-1">
							{genres.map((g) => (
								<span key={`${id}-${g}`} className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
									{g}
								</span>
							))}
						</dd>
					</dl>
				</div>
			</Link>
		</li>
	);
}

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	coverImg: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
