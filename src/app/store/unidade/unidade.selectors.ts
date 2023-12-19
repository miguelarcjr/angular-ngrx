import { createSelector } from "@ngrx/store";
import { IUnidadeState } from "./unidade.reducer";

const unidadeStore = (state: any) => state.unidade as IUnidadeState

export const selectUnidadeLista = createSelector(
    unidadeStore,
    (state) => state.lista
)

export const selectUnidadeErrorAdd = createSelector(
    unidadeStore,
    (state) => state.errorAddUnidade
)