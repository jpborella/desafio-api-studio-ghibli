import { Link } from 'react-router-dom';
import { useFilm } from '../hooks/useFilm';

function Home() {
    const { films, isLoading } = useFilm();

    

    if (isLoading) {
        return <p className='text-center py-10'>Carregando filmes...</p>;
    };

    return (
        <div className='p-8 bg-gray-50 min-h-screen'>
            <h1 className='text-4xl font-bold mb-8 text-center'>Studio Ghibli Films</h1>
            <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
                {films.map((film) => (
                    <Link to={`/films/${film.id}`}
                        className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-all cursor-pointer h-full block'>
                        <li
                            key={film.id}
                            className='h-full'>
                            <img
                                src={film.image}
                                alt={film.title}
                                className='w-full h-64 object-contain bg-gray-200'
                            />

                            <div className='p-4'>
                                <h2 className='text-lg font-bold text-gray-900 mb-2'>{film.title}</h2>
                                <p className='text-sm text-gray-600'>Lançamento: {film.release_date}</p>
                            </div>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default Home