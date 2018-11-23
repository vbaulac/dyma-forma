import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'cb'
})
export class CbPipe implements PipeTransform {

    transform(value: any, n: number = 4) {
        // return value.slice(0,4) + " **** **** " + value.sloce(-4, value.length);
        return value.slice(0,n) +  ' ' + Array((value.length - (n*2) + 1)).join("X") + ' ' + value.slice(-n, value.length);
        return "";
    }
}
