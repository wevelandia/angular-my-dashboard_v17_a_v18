import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hola Mundo</h1>
  `,
})
export class UsersLoaderComponent {

  constructor() {}

}
