import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TitleComponent } from "../../../shared/title/title.component";

type Grade = 'A'|'B'|'F';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {

  // Aca vamos a crear una señal para manejarla con el @if
  public showContent = signal(false);

  // Creamos otra señal para manejarla con @switch
  public grade = signal<Grade>('A');

  // Creamos otra señal para manejarla con @for
  public frameworks = signal(['Angular', 'Vue', 'Svelte', 'Quik', 'React']);

  public frameworks2 = signal([]);

  // Creamos un metodo para cambiar la señal
  public toggleContent() {
    this.showContent.update( value => !value );
  }

}
