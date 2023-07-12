import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/Services/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Token : string = ""

  constructor( private dataservice : DataServiceService,) { }

  ngOnInit(): void {
    this.dataservice.getData().subscribe(data => {
      this.Token = data;
    });
  }

}
