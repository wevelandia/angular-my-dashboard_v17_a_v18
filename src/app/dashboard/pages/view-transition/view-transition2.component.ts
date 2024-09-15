import { Component } from '@angular/core';
import { TitleComponent } from "../../../shared/title/title.component";

@Component({
  standalone: true,
  imports: [TitleComponent],
  template: `
    <app-title title="View Transition 2" />

    <section class="flex justify-end">
    <!-- Aca colocamos el mismo estilo y debemos de dejar el mismo tag en este caso hero1, no pueden existir otro hero1 en otra parte porque despues 'no' sabe cual animar. -->
      <img
        srcset="https://picsum.photos/id/237/200/300"
        alt="Picsum"
        width="200"
        height="300"
        style="view-transition-name: hero1"
      />

      <!--Esto termina creando un cuadro -->
      <div
        class="fixed bottom-16 right-10 bg-blue-800 w-32 h-32 rounded"
        style="view-transition-name: hero2">
      </div>
    </section>
  `,
  styles: ``
})
export default class ViewTransitionComponent {

}
