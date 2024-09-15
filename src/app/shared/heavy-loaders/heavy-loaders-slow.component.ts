import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <section [ngClass]="['w-full h-[600px]', cssClass]">
      Heavy Loader Slow
    </section>
  `,
})

export class HeavyLoadersSlowComponent {

  @Input({ required:true }) cssClass!: string;

  // Creamos el contructor, y lo que vamos a hacer es que este componente sea bloqueante
  // Vamos a bloquear javascript y con ello hacemos una genialidad. En defer-views-component se programa allí el llamado
  constructor() {

    // Desarrollamos aca el codigo bloqueante, pero no se hace en la vida real.
    const start = Date.now();
    // Este es el codigo bloqueante para simular que es un componente muy pesado.
    while( Date.now() - start < 3000) {}

    console.log('Cargado');
  }

}
