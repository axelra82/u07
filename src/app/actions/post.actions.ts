import { Action } from '@ngrx/store';

export const GET_RECIPES = '[Recipes] Get';
export const SET_RECIPE = '[Recipe] Set';

export class GetRecipes implements Action {
    readonly type = GET_RECIPES;
    constructor(public payload: any) {}   
}
export class SetRecipe implements Action {
    readonly type = SET_RECIPE;
    constructor(public payload: any) {}   
}

export type All
    = SetRecipe |
    GetRecipes;