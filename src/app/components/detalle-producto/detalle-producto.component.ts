import { Component } from '@angular/core';

@Component({
  selector: 'app-detalle-producto',
  standalone: true,
  imports: [],
  template: `

  <div class="container my-5">
    <div class="row">
      
      <div class="col-md-6 imagen-producto border p-5">
        <img src="../../assets/camisola.webp" alt="Imagen del Producto" class="img-fluid">
      </div>
      <div class="col-md-6 descripcion-producto">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto eius amet facilis, similique exercitationem cupiditate dolor minima qui rem perspiciatis iure deleniti officiis accusamus animi odio, rerum est. Officiis, dolores?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem eum, repellendus officiis quod fugit, est voluptas laboriosam magni quia reprehenderit voluptates amet veniam atque aliquid culpa commodi voluptatum ea maiores.
        </p>
        
        <form class="row d-fex justify-content-between">

          <div class="col-md-6 mt-2">
            <label for="inputCantidad" class="visually-hidden">Cantidad</label>
            <input type="number" min="1" class="form-control" id="inputCantidad" placeholder="Cantidad">
          </div>
          <div class="col-md-6 mt-2">
            <button type="submit" class="btn btn-primary mb-3" style="width: 100%;">Agregar al carrito</button>
          </div>
        </form>

      </div>

    </div>

  </div>
  
  
  
  
  `,
})
export default class DetalleProductoComponent {

}
