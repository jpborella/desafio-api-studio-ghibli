import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { Film } from "../types/typeFilms";
import { FilmContext } from "../contexts/FilmContextData";

export const FilmProvider = ({ children }: { children : ReactNode }) => {
    const [films, setFilms] = useState<Film[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadFilms = async () => {
            try {
                const response = await fetch('https://ghibliapi.vercel.app/films');
                const data: Film[] = await response.json();
                
                const sortedAndSliced = data
                .sort((a, b) => a.title.localeCompare(b.title))
                .slice(0, 10);

                setFilms(sortedAndSliced);
            } catch (error) {
                console.error('Erro ao buscar filmes:', error);
            } finally {
                setIsLoading(false);
            }
        };

        loadFilms();
    }, []);

    return (
        <FilmContext.Provider value={{ films, isLoading }}>
            {children}
        </FilmContext.Provider>
    );  
}