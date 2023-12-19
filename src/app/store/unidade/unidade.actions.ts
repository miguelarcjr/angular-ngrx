import { createAction, props } from "@ngrx/store";

enum UnidadeActionType {
    ADD_UNIDADE_SUCCESS = '[unidade] add unidade success',
    ADD_UNIDADE_ERROR = '[unidade] add unidade error',
    ADD_UNIDADE = '[unidade] add unidade from api',
    LOAD_UNIDADE = '[unidade] load unidade from api',
    LOAD_UNIDADE_SUCCESS = '[unidade] load unidade success'
}
export const addUnidade = createAction(UnidadeActionType.ADD_UNIDADE, props<{unidade: any}>());
export const addUnidadeSuccess = createAction(UnidadeActionType.ADD_UNIDADE_SUCCESS, props<{unidade: any}>());
export const addUnidadeError = createAction(UnidadeActionType.ADD_UNIDADE_ERROR, props<{error: any}>());

export const loadUnidade = createAction(UnidadeActionType.LOAD_UNIDADE);
export const loadUnidadeSuccess = createAction(UnidadeActionType.LOAD_UNIDADE_SUCCESS, props<{unidades: any[]}>());