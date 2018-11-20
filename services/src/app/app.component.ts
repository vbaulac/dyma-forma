import { Component } from '@angular/core';
import { PanierService } from './shared/services/panier.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PanierService]
})
export class AppComponent {
  title = 'services';
}
