import { computed, inject, Injectable, signal } from '@angular/core';
// Se ingresa type para que no haga traspilación.  Consultar para que sirve?
import type { User, UserResponse, UsersResponse } from '../interfaces/req-response';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs';

/* La idea de la clase es que es bien conveniente trabajar con señales para manejar el estado */
interface State {
  users: User[];
  loading: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  /* La craga de datos es mejor usarlo con HTTPClientModule que viene en Angular, se puede cancelar hacer operaciones de rx. */
  private http = inject( HttpClient );

  // Creamos una señal, y el uso de # lo que hace es que esa variable state sea privada
  #state = signal<State>({
    loading: true,
    users: [],
  })

  // Como la señal es privada, creamos unas señales computadas y para que pueda verlas desde el component y esta es de solo lectura.
  public users = computed( () => this.#state().users );
  public loading = computed( () => this.#state().loading );

  constructor() {
    // Tan pronto se inicializa el servicio vamos a cargar la Data.
    this.http.get<UsersResponse>('https://reqres.in/api/users')
    .pipe( delay(1500) ) /* Intensionalmente se coloca para que demore un poco, porque esto lo hace rapido */
    .subscribe( res => {

        this.#state.set({
          loading: false, /* Se pasa a false porque ya cargamos la Data */
          users: res.data, /* Aca ya tenemos los resultados */
        })

      });

    //console.log('Cargando Data');
   }

   // Creamos un metodo para consultar un usuario por ID
   getUserById( id: string ) {
      return this.http.get<UserResponse>(`https://reqres.in/api/users/${ id }`)
      .pipe(
        delay(1500),
        map( resp => resp.data )
      ) /* Intensionalmente se coloca para que demore un poco, porque esto lo hace rapido */
   }

}
