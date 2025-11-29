import { useContext } from 'react';
import { FilmContext } from '../contexts/FilmContextData';

export function useFilm() {
    return useContext(FilmContext);
}