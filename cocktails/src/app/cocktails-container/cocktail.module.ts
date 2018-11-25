import { NgModule } from "@angular/core";
import { CocktailsListComponent } from "./cocktails-list/cocktails-list.component";
import { CocktailsContainerComponent } from "./cocktails-container.component";
import { CocktailsDetailsComponent } from "./cocktails-details/cocktails-details.component";
import { CocktailEditComponent } from "./cocktail-edit/cocktail-edit.component";
import { FilterPipe } from "../shared/pipes/filter.pipe";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { cocktailRouting } from "./cocktail.routing";
import { SharedModule } from "../shared/modules/shared-module.module";

@NgModule({
    declarations: [
        CocktailsContainerComponent,
        CocktailsListComponent,
        CocktailsDetailsComponent,
        CocktailEditComponent,
        FilterPipe
    ],
    imports:[        
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        cocktailRouting,
        SharedModule
    ],
    providers:[],
    exports:[]
})
export class CocktailModule {}