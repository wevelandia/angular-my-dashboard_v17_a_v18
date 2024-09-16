# Actualización

Para la actualización de la version 17 a la 18 de Angular se usa el siguiente link `https://angular.dev/update-guide` y se suigen los pasos seleccionando la versión actual en la que esta desarrollado el proyecto y luego se selecciona la ultima versión a la que se va a actualizar.

# Pasos

1. Se selecciona la versión actual en la que esta desarrollado el proyecto, en este caso es de la Versión 17.

2. Se selecciona la versión a la cual se desea migrar, en este caso se selecciona la Versión 18.

3. Se selecciona la complejidad del proyecto, si es Basico, Medio o Avanzado.

4. Se seleccionan otras dependencias si es que las manejo en el proyecto.  Las dependencias que solicitan allí validar son:

  a. Uso ngUpgrade para combinar AngularJS y Angular.

  b. Uso material angular.

  c. Uso Windows.

5. Dar click en el botón de Mostrar que se debe de hacer para actualizar la aplicación.

# Guia para actualzia la aplicación

De acuerdo a lo sugerido para la actualización se deben de seguir estos pasos.

1. Asegurarse de que se esta haciendo uso de node.js en una versión superior a la v18.19.0

2. En el directorio del proyecto de la aplicación se debe de ejecutar el siguiente comando: `ng update @angular/core@18 @angular/cli@18`

3. Actualizar TypeScript a la versión 5.4, pero para mi caso el comando anterior realizó dicha actualización.

4. Realizar un cambio en el archivo `app.config.ts` con el modulo de HttpClient el cual ya es obsoleto y se cambio por `provideHttpClient(withInterceptorsFromDi())`.

5. Ejecutar el comando `ng serve -o` dentro de la carpeta del proyecto para correr la aplicación.

