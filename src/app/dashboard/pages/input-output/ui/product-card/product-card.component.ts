import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, EventEmitter, input, Input, output, Output } from '@angular/core';
import { Product } from '../../../../../interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {

  // Aca debemos de recibir el producto para enviarle la información al product card
  //@Input({
  //  required: true
  //}) public product!: Product;

  // Para hacerlo mismo que esta antes de este codigo se hace esto:
  // Con solo hacer esto ya podemos en el card colocar los product
  // required: se obiga a que siempre manden el producto.
  public product = input.required<Product>()

  // Podemos definir el cambio de la cantidad así como se programaba antes
  //@Output()
  //public onIncrementQuantity = new EventEmitter<number>();

  // Ahora se hace así:
  public onIncrementQuantity = output<number>();

  // Ahora usamos onIncrementQuantity
  public incrementQuantity(): void {
    this.onIncrementQuantity.emit(this.product().quantity + 1);
  }

  // Como product() es una señal, tambien podemos aplicar efectos
  public logginEffect = effect( () => {
    console.log( this.product() );
  });
}
