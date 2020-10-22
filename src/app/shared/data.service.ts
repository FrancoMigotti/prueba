import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private products = [
    {
      id: 1,
      name: 'Huevos',
      category: 'Comida',
      description: 'Huevos gallina',
      price: '1'
    },
    {
      id: 2,
      name: 'Choclo',
      category: 'Comida',
      description: 'Maíz',
      price: '2'
    },
    {
      id: 3,
      name: 'Coca cola',
      category: 'Gaseosa',
      description: 'Coca',
      price: '3'
    },
  ];

  getAllProducts(){
    return this.products;
  }

  getIdProduct(id){
    return this.products.filter(products => products.id == id);
  }
}
