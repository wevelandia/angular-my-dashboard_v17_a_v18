import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

// Aca adicionamos changeDetection para inhabilitar al funcionalidad de escucha del Angular
@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TitleComponent],
  template: `
    <!-- <app-title title="Change Detection" /> -->
    <app-title [title]="currentFramework()" />

    <pre> {{ frameworkAsSignal() | json }}</pre>

    <pre> {{ frameworkAsProperty | json }}</pre>

  `,
  styles: ``
})
export default class ChangeDetectionComponent {

  // Si deseamos cambiar el title lo hacemos por una señal conmutada
  public currentFramework = computed(
    () => `Change detection - ${ this.frameworkAsSignal().name }`
  );

  // Creamos una señal
  public frameworkAsSignal = signal({
    name:'Angular',
    releaseDate: 2024,
  });

  // Creamos una propiedad tradicional
  public frameworkAsProperty = {
    name:'Angular',
    releaseDate: 2024,
  };

  // Definimos el constructor
  constructor() {

    setTimeout(() => {

      // Si se quisiera cambiar la propiedad tradicional se haria asi:
      // Como se deshabilita la escucha de angular el cambio no se ve.
      // this.frameworkAsProperty.name = 'React';

      // Lo anterior es mejor manejarlo por ello con signals y este cambio si lo refleja pasados 3 segundos
      // Si se trabaja en Zoneless y señales es mejor pues es mas rapido Angular con ese uso.
      // Esta es una manera de actualizar un signal.
      /* this.frameworkAsSignal.update( value => ({
        ...value,
        name: 'React'
      }); */
     // Otra forma de cambiar el signal es asi pero no muy aconsejable
     this.frameworkAsSignal.update( value => {
      value.name = 'React';

      return {...value};
     });

      console.log('Hecho');
    }, 3000);

  }

}
