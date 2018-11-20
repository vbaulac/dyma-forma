import { Component, OnInit } from '@angular/core';
import { PanierService } from '../shared/services/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styles: []
})
export class PanierComponent implements OnInit {
  public panier: string[] = [];

  constructor(private panierService:PanierService) { }

  ngOnInit() {
    this.panier = this.panierService.panier;
  }

  remove(i: number) {
    console.log(i);
    this.panierService.removeAliment(i);
  }

}
