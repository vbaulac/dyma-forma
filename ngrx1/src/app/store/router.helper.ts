import { Params, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { RouterStateSerializer } from "@ngrx/router-store";

export interface MyRouterState {
    url: string;
    params: Params;
    queryParams: Params;
}

export class MyRouterStateSerializer implements RouterStateSerializer<MyRouterState> {
        
    serialize(routerState: RouterStateSnapshot): MyRouterState {
        const { url } = routerState; // { url } =  *** --> signifie que l'ont deconstruit un objet poour prendre la clef. equivalent a url = routerState.url
        const { queryParams } = routerState.root;

        let state: ActivatedRouteSnapshot = routerState.root;
        while(state.firstChild) {
            state = state.firstChild;
        }
        
        const { params } = state;

        return { url, params, queryParams };
    }
}
