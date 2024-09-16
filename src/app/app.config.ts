import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

/* Esta es la configuración Global de Angular en versiones superiores a la 17 para trabajo con Standalone */
/* Importamos el viewTransition para que cuando me pase de una pagina a otra esa transición no sea tan abrupta */
/* skipInitialTransition: Esta para que no haga esa transición la primera vez que cargue el proyecto */
/* onViewTransitionCreated: Con esto identifico la ruta es, a que ruta va y se puede personalizar de donde viene a donde va, y si la transición se esta ejecutando o no. */
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withViewTransitions({
        skipInitialTransition: true,
        /*onViewTransitionCreated( transitionInfo ) {
          console.log( transitionInfo );
        }, */
      }),
    ),

    // Aca importamos de manera tradicional los modulos
    // Al pasar la aplicación a la version 18, remueve el import asi
    // que se debe de utilziar otro modulo
    //importProvidersFrom(
    //  HttpClientModule
    //),

    provideHttpClient(withInterceptorsFromDi()), provideAnimationsAsync()

  ]
};
