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
         MatGridListModule,
         MatCardModule,
         MatStepperModule,
         MatTabsModule,
         MatExpansionModule, 
         MatButtonToggleModule,
         MatChipsModule, 
         MatIconRegistry,          
         MatProgressSpinnerModule} from '@angular/material';

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
  MatGridListModule,
  MatCardModule,
  MatStepperModule,
  MatTabsModule,
  MatExpansionModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatProgressSpinnerModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MATERIAL
  ],
  providers: [MatIconRegistry],
  exports: MATERIAL
})
export class MaterialModule { }
