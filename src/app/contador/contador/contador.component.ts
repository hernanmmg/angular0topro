import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{titulo}}</h1>
    <h3>La base es <strong>{{base}}</strong></h3>

    <button (click)="acumular(+base)">{{+base}}</button>
    <span>{{numero}}</span>
    <button (click)="acumular(-base)">{{-base}}</button>
  `
})
export class ContadorComponent {
  titulo = 'Contador App';
  base = 5;
  numero = 10;

  acumular(valor: number): void {
    this.numero += valor;
  }
}
