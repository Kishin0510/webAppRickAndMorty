import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private baseUrl = 'https://rickandmortyapi.com/api/character';

  private http = inject(HttpClient);

  async getCharacters() {
    try {

    } catch (error) {
      console.error('Error obteniendo los personajes', error);
    }
  }
}
