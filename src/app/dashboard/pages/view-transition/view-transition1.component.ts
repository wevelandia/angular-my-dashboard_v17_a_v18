import { Component } from '@angular/core';
import { TitleComponent } from "../../../shared/title/title.component";

@Component({
  standalone: true,
  imports: [TitleComponent],
  template: `
    <app-title title="View Transition 1" />

    <!-- Colocamos un stilo para poder realizar la transición que es una animación con el suo de Hero Transition -->
    <section class="flex justify-start">
      <img
        srcset="https://picsum.photos/id/237/200/300"
        alt="Picsum"
        width="200"
        height="300"
        style="view-transition-name: hero1"
      />

      <!--Esto termina creando un cuadro -->
      <div
        class="bg-blue-500 w-56 h-56"
        style="view-transition-name: hero2">

      </div>
    </section>
  `,
  styles: ``
})
export default class ViewTransitionComponent {

}
