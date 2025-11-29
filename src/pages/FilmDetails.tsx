import { useNavigate, useParams } from "react-router-dom";
import { useFilm } from "../hooks/useFilm";

function FilmDetails() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const { films, isLoading } = useFilm();

    const film = films.find((film) => film.id === id);

    if (isLoading) {
        return <p className="text-center py-10">Carregando detalhes do filme...</p>;
    }

    if (!film) {
        return <p className="text-center py-10 text-red-600">Filme não encontrado.</p>;
    }

    return (
        <div className=" bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto px-4">
                <button
                    onClick={() => navigate('/' as const)}
                    className="mb-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition cursor-pointer">← Voltar
                </button>

                <div className="bg-white rounded-lg shadow-lg flex flex-col ">
                    <img
                        src={film.movie_banner}
                        alt={film.title}
                        className="w-full max-h-[500px] object-contain overflow-hidden" />

                    <div className="p-8">
                        <h1 className=" text-4xl font-bold text-gray-900 mb-4">{film.title}</h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-gray-700">
                            <div>
                                <p className="font-semibold text-gray-900">Diretor:</p>
                                <p>{film.director}</p>
                            </div>

                            <div>
                                <p className="font-semibold text-gray-900">Produtor</p>
                                <p>{film.producer}</p>
                            </div>

                            <div>
                                <p className="font-semibold text-gray-900">Ano de Lançamento</p>
                                <p>{film.release_date}</p>
                            </div>

                            <div>
                                <p className="font-semibold text-gray-900">Rotten Tomatoes</p>
                                <p className="text-orange-500 font-bold">{film.rt_score ? `${film.rt_score}%` : 'Indisponível'}</p>
                            </div>

                            <div>
                                <p className="font-semibold text-gray-900 mb-2">Descrição</p>
                                <p className=" text-gray-700 leading-relaxed">{film.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilmDetails;
