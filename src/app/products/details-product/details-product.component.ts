import { DataService } from '../../shared/data.service';
import { getTestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.scss']
})
export class DetailsProductComponent implements OnInit {
  public product: any = {};
  constructor(private route:ActivatedRoute, private dataSVC: DataService, private location:Location) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    [this.product] = this.product = this.dataSVC.getIdProduct(productId);
    console.log('Productos-> ', this.product);

  }

  onGoBack():void{
    this.location.back();
  }
}
