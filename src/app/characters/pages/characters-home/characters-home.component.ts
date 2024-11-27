import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { CharacterService } from '../../services/character.service';
import { ResponseAPIGetAll, Result } from '../../interfaces/ResponseAPI_GetAll';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../components/button/button.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-characters-home',
  standalone: true,
  imports: [CardComponent, HttpClientModule, CommonModule, ButtonComponent, SearchBarComponent, FormsModule],
  providers: [CharacterService],
  templateUrl: './characters-home.component.html',
  styleUrl: './characters-home.component.css'
})
export class CharactersHomeComponent implements OnInit {

  currentPage = 1;
  totalPages = 0;
  searchName = '';
  characters: Result[] = [];

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.obtenerPersonajes();
  }

  obtenerPersonajes() {
    this.characterService.getCharacters(this.searchName, this.currentPage).then((characters) => {
      console.log(this.currentPage)
      this.totalPages = characters.info.pages;
      this.characters = characters.results;
      console.log(this.characters);
    }).catch((error) => {
      console.error('Error obteniendo los personajes', error);
    });
  }

  cambiarPagina(direccion: 'next' | 'prev'): void {
    if (direccion === 'next' && this.currentPage < this.totalPages) {
      this.currentPage++;
    } else if (direccion === 'prev' && this.currentPage > 1) {
      this.currentPage--;
    }
    this.obtenerPersonajes();
  }

  buscarPersonajes(query: string) {
    this.searchName = query;
    this.currentPage = 1;
    this.obtenerPersonajes();
  }

}
