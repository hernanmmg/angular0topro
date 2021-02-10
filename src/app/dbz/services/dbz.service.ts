import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Injectable()
export class DbzService {

  private _PERSONAJES: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ];

  constructor() { }

  get personajes(): Personaje[] {
    return [...this._PERSONAJES];
  }

  agregarPersonaje(personaje: Personaje): void {
    this._PERSONAJES.push(personaje);
  }
}
