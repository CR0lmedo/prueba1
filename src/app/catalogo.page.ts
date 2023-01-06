import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {
  public titulo:string='';
  public precio:any="";
  public id:string='';


  constructor() { }

  ngOnInit() {
  }

}
