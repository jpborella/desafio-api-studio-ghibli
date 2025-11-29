import { createContext } from 'react';
import type { Film } from '../types/typeFilms';

interface FilmContextData {
    films: Film [];
    isLoading: boolean;
}

export const FilmContext = createContext<FilmContextData>({} as FilmContextData);