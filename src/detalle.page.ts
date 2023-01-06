import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  public titulo:string='';
  public precio:any="";
  public descripcion:string='';
  public id:string='';
  public imagen:string='';


  constructor() { }

  ngOnInit() {

  }

}
