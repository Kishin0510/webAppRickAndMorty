import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ResponseAPIGetAll } from '../interfaces/ResponseAPI_GetAll';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private baseUrl = 'https://rickandmortyapi.com/api/character';

  public errors: string[] = [];

  private http = inject(HttpClient);

  async getCharacters(character: string ,page: number): Promise<ResponseAPIGetAll> {
    try {
      const queryPage = new HttpParams().set('character', character).set('page', page.toString());
      const response = await firstValueFrom(this.http.get<ResponseAPIGetAll>(`${this.baseUrl}?${queryPage}`));
      return Promise.resolve(response);

    } catch (error) {
      console.error('Error obteniendo los personajes', error);
      let e = error as HttpErrorResponse;
      this.errors.push(e.message);
      return Promise.reject(error);
    }
  }
}
