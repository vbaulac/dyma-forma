import { LogService } from "./log.service";
import { Injectable } from "@angular/core";

@Injectable()
export class PanierService {
    public panier: string[] = [];

    constructor(private logService:LogService) {
    }

    add(aliment: string):void {
        this.panier.push(aliment);
        this.logService.log("super");
    }

    removeAliment(index: number): void {
        this.panier.splice(index, 1);
    }
}