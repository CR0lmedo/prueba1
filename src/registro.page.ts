import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  public mensaje:string='usuario registrado';

  constructor() { }

  ngOnInit() {
  }
  public UsuarioRegistrado(event:Event){
    console.log(this.mensaje)

  }
}
