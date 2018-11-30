import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,
         MatCheckboxModule,
         MatFormFieldModule,
         MatInputModule,
         MatRadioModule,
         MatSlideToggleModule,
         MatSelectModule,
         MatSliderModule,
         MatDatepickerModule,
         MatNativeDateModule,
         MatAutocompleteModule,
         MatMenuModule, 
         MatSidenavModule,
         MatIconModule,
         MatToolbarModule, 
         MatListModule,
         MatGridListModule} from '@angular/material';

const MATERIAL = [    
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatSliderModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatAutocompleteModule,
  MatMenuModule,
  MatSidenavModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatGridListModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MATERIAL
  ],
  exports: MATERIAL
})
export class MaterialModule { }
