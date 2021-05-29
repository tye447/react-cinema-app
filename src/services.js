import {films, showings, users,  groups} from './data';
export function getMemberById(memberId){
    return users.filter(u=>u.id === memberId)[0];
}
export function getFilmById(filmId){
    return films.filter(f=>f.id === filmId)[0];
}