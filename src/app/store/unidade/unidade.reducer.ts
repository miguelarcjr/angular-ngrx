import { createReducer, on } from "@ngrx/store"
import { addUnidadeError, addUnidadeSuccess, loadUnidadeSuccess } from "./unidade.actions"

export interface IUnidadeState {
    lista: any[],
    form: any,
    errorLoadLista: any,
    errorAddUnidade: any,
}

const initialState: IUnidadeState = {
    lista: [{id: 0, nome: 'Unidade 1', descricao: 'desc 1'}],
    form: null,
    errorAddUnidade: null,
    errorLoadLista: null
}


console.log(initialState.form)
export const unidadeReducer = createReducer(
    initialState,
    on(addUnidadeSuccess, (state, { unidade }) => ({...state, lista: [...state.lista, unidade], errorAddUnidade: null})),
    on(addUnidadeError, (state, { error }) => ({...state, errorAddUnidade: error})),
    on(loadUnidadeSuccess, (state, { unidades }) => ({...state, lista: [...unidades]}))
)