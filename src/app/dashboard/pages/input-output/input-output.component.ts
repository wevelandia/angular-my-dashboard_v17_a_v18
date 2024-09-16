import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, signal } from '@angular/core';
import { ProductCardComponent } from './ui/product-card/product-card.component';
import { Product } from '../../../interfaces/product.interface';
import { interval, take, tap } from 'rxjs';

@Component({
  selector: 'app-input-output',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent
  ],
  templateUrl: './input-output.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export default class InputOutputComponent implements OnDestroy {

  // Creamos una señal para alojar mis productos
  public products = signal<Product[]>([
    {
      id: 1,
      name: 'Product 1',
      quantity: 0,
    },
    {
      id: 2,
      name: 'Product 2',
      quantity: 0,
    }
  ]);

  // Creamos un intervalo de tiempo para crear 7 productos
  private internalSubscription = interval(1000).pipe(
    tap( () => {
      this.products.update( (products => [
        ...products,
        {
          id: products.length + 1,
          name: `Product ${products.length + 1}`,
          quantity: 0,
        }
      ]) )
    }),
    take(7) // Despues de 7 emisiones limpiate
  ).subscribe(); // Esto me permite que comience a ejecutarse.

  // Debemos implementar la destrucción del interval si nos salimos de la pagina.
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
    this.internalSubscription.unsubscribe();
  }

  // Implementamos el metodo updateProduct, recibimos el producto y actualizamos su cantidad.
  public updateProduct(prodcut: Product, newQuantity: number) {
    this.products.update( (products) =>
      products.map( (p) =>
        (p.id === prodcut.id ? { ...p, quantity: newQuantity } : p)
      )
    );
  }

  // Esta es otra forma simplificada
  /* public updateProduct(prodcut: Product, quantity: number) {
    this.products.update( (products) =>
      products.map( (p) =>
        p.id === prodcut.id ? { ...p, quantity } : p
      )
    );
  } */

 }
