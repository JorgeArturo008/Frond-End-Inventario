import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryModel } from 'src/app/Models/InventoryModel';
import { DataServiceService } from 'src/app/Services/data-service.service';
import { InventoryServiceService } from 'src/app/Services/inventory-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {

  title2 = 'Añadir un Producto | Add Product'
  title = "Datos del Produto"
  boton = 'Crear Producto'
  Product: FormGroup;
  Token : string = ""
  id : string;

  constructor(
    private ServiceInventory: InventoryServiceService,
    private fb: FormBuilder,
    private router: Router,
    private dataservice : DataServiceService,
    private aRouter: ActivatedRoute,

  ) {
    this.Product = fb.group({
      code: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      stock: ['', Validators.required]
    })

    this.id = this.aRouter.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.dataservice.getData().subscribe(data => {
      this.Token = data;
    });

    this.editProduct();
  }

  AddInventory() {


    const DatosProduct: InventoryModel = {
      code : this.Product.value.code,
      description : this.Product.value.description,
      price : this.Product.value.price,
      stock : this.Product.value.stock

    }

    if(this.id !== null){
      // Editamos

      Swal.fire({
        title: 'Quieres guardar los cambios?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {

          this.ServiceInventory.UpdateObject(DatosProduct, this.id, this.Token).subscribe(data => {
          
            Swal.fire('Guardado!', '', 'success')
            this.router.navigate(['/MyInventory'])
          })
          
        } else if (result.isDenied) {
          Swal.fire('Cambios no efectuados', '', 'info')
        }
      })
      

    }else{
      // Creamos
      this.ServiceInventory.CreateProduct(DatosProduct, this.Token).subscribe( data => {

        Swal.fire({
          title: 'Estas Seguro?',
          text: "El producto es " + DatosProduct.description + " Precio: " + DatosProduct.price,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, Crearlo!'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Agregado Con Exito',
              'Tu producto ha sido Agregado.',
              'success'
            )
            this.router.navigate(['/MyInventory'])
          } 
          
        })
  
        
        
      })
    }

    

  }

  editProduct(){
  if(this.id !== null){
    
    this.title = 'Editar el Producto'
    this.boton = 'Editar!'
    this.title2 = 'Editar un Producto | Edit Product'
    
  }
  }
}
