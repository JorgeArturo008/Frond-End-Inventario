import { Component, OnInit } from '@angular/core';
import { InventoryModel } from '../../Models/InventoryModel';
import { InventoryServiceService } from 'src/app/Services/inventory-service.service';
import { DataServiceService } from 'src/app/Services/data-service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-inventory',
  templateUrl: './my-inventory.component.html',
  styleUrls: ['./my-inventory.component.css'],
})
export class MyInventoryComponent implements OnInit {
  datos: InventoryModel[] = [];
  Token: string = '';

  constructor(
    private ServiceInventory: InventoryServiceService,
    private dataservice: DataServiceService,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.dataservice.getData().subscribe((data) => {
      this.Token = data;
    });
    console.log(this.Token);
    this.getList();
  }

  getList() {
    this.ServiceInventory.GetInventory(this.Token).subscribe((data) => {
      const inventory = data.data.inventory;
      this.datos = inventory;
      console.log(this.datos);
    });
  }

  delete(id: string | undefined) {
    Swal.fire({
      title: 'Estas Seguro?',
      text: 'No podras revertir esta accion!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.ServiceInventory.deleteObject(id, this.Token).subscribe((data) => {
          Swal.fire('Deleted!', 'Tu archivo ha sido Eliminado', 'success');

          this.getList();
        });
      } else Swal.fire('OK!', 'Tu archivo sigue Intacto!', 'success');
    });
  }

    update(id : string| undefined){
  this.router.navigate(['Edit/' + id])
      }
}
