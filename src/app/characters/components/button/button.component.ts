import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() accion!: 'next' | 'prev';
  @Output() clickBoton = new EventEmitter<'next' | 'prev'>();

  onClick(): void {
    this.clickBoton.emit(this.accion);
  }
}
