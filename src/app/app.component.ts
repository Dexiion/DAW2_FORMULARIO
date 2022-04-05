import { Component } from '@angular/core';
import { Item } from "./item"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DAW2_FORMULARIO';
  nombre = "";
  apellidos = "";
  nuevo_nombre = "";
  nuevos_apellidos = "";
  modify!: boolean;
  itemToModify!: number;
  error!: boolean;
  
  items: Item[] = [];

  total_id = -1;
  

  addItem(): void {
    if (this.nombre.length > 0 && this.apellidos.length > 0)
    {
      this.total_id++;
      var item: Item = {
        nombre: this.nombre,
        apellidos: this.apellidos,
        id: this.total_id
      }

      this.items.push(item);
    } else {
      this.error = true;
    }
    
  }

  removeItem(id: number): void {
    const index = this.items.findIndex((item) => item.id === id);
    if (index > -1) {
      this.items.splice(index, 1);
    }
    this.modify = false;
  }

  displayModifyItem(id: number): void {
    this.modify = true;
    this.itemToModify = id;
  }

  modifyItem(): void {
    const index = this.items.findIndex((item) => item.id === this.itemToModify);
    this.items[index].nombre = this.nuevo_nombre;
    this.items[index].apellidos = this.nuevos_apellidos;
    this.nuevo_nombre = "";
    this.nuevos_apellidos = "";
    this.modify = false;
  }
}
