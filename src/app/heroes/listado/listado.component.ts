import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes: string[] = ['Ironman', 'Spiderman', 'Superman', 'Batman', 'Hulk'];
  heroeBorrado = '';

  borrarHeroe(): void {
    const backupHeroe = this.heroes.shift();
    this.heroeBorrado = backupHeroe || '';
  }
}
