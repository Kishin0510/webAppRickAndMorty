import { Component, Input } from '@angular/core';
import { Result } from '../../interfaces/ResponseAPI_GetAll';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() character!: Result;
}
