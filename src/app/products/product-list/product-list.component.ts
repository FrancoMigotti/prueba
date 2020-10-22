import { DataService } from '../../shared/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public products = [];
  constructor(private dataSVC: DataService) { }

  ngOnInit(): void {
    this.products = this.dataSVC.getAllProducts();

  }

}
