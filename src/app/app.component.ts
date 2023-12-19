import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IUnidadeState } from './store/unidade/unidade.reducer';
import { selectUnidadeErrorAdd, selectUnidadeLista } from './store/unidade/unidade.selectors';
import { FormBuilder, Validators } from '@angular/forms';
import { addUnidade, addUnidadeSuccess, loadUnidade } from './store/unidade/unidade.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'redux';
  lista$ = this.store.select(selectUnidadeLista);
  form = this.fb.group({
    nome: ['', Validators.required],
    descricao: ['', Validators.required],
    id: 0,
  })

  errorAddUnidade$ = this.store.select(selectUnidadeErrorAdd)
  constructor(private store: Store<IUnidadeState>, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.store.dispatch(loadUnidade());
    this.listenErrorAddUnidade()
  }

  onSubmit() {
    const unidadeForm = this.form.value;
    console.log(unidadeForm);
    this.store.dispatch(addUnidade({unidade: unidadeForm}))
  }

  listenErrorAddUnidade() {
    this.errorAddUnidade$.subscribe({next: (error) => {
      if(!error) return;
      //alert("ERRO AO ADICIONAR ITEM! "+ error.message)
    }})
  }
}
