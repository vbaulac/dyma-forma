import { NgModule } from '@angular/core';
import { MatToolbarModule, MatInputModule, MatButtonModule, MatCardModule, MatFormFieldModule } from '@angular/material';

const MODULES = [
  MatToolbarModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule
]

@NgModule({
  declarations: [],
  imports: [ 
    ...MODULES   
  ],
  exports: [
    ...MODULES
  ]
})
export class MaterialModule { }
