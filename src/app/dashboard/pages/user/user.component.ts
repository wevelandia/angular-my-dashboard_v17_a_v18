import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleComponent } from '@shared/title/title.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { UsersService } from '../../../services/users.service';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title [title]="titlelabel()" />

    @if ( user() ) {
      <section>
        <img
          [srcset]="user()!.avatar"
          [alt]="user()!.first_name"
        />

        <div>
          <h3>{{ user()!.first_name }}  {{ user()!.last_name }}</h3>
          <p>{{ user()!.email }}</p>
        </div>
      </section>
    } @else {
      <p>Cargando información</p>
    }
  `,
  styles: ``
})
export default class UserComponent {

  /* Para que me puede servir convertir un observable a una señal: lo que pasa es que Angular trabaja mucho con Observables */
  /* Con este route yo ya tengo acceso a cual es la información que viene en el rout.params */
  private route = inject( ActivatedRoute );
  private usersService = inject( UsersService );

  //public user = signal<User | undefined>(undefined);

  public user = toSignal(
    // Obtenemos nuestro primer observable
    this.route.params.pipe(
      switchMap( ({ id }) => this.usersService.getUserById( id ) )
    )
  );

  public titlelabel = computed( () => {

    if ( this.user() ) {
      return `Información del usuario: ${ this.user()?.first_name }  ${ this.user()?.last_name }`;
    }

    return 'Información del usuario';

  });

  // this.route.params -> Esto es un observable

  //constructor() {
  //  this.route.params.subscribe(params => {
  //    console.log({ params });
  //  })
  //}

}
