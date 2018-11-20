import { Component, OnInit } from '@angular/core';
import { PanierService } from '../shared/services/panier.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: []
})
export class AddComponent implements OnInit {

  public aliment: string = 'Aliment';

  constructor(private panierService: PanierService) { }

  ngOnInit() {    
  }

  addAliment() {
    this.panierService.panier.push(this.aliment);
    this.aliment = '';
    console.log(this.panierService.panier);
  }

}
