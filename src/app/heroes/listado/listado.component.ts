import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  heroes: string[]= ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  aux: string= '';

  borrarHeroe(){
    
    this.aux = this.heroes.shift() || '';
  }
 
}
