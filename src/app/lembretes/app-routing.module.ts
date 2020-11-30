import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { LembreteListaComponent } from './lembrete-lista/lembrete-lista.component';
import { LembreteInserirComponent } from './lembrete-inserir/lembrete-inserir.component';
import { LoginComponent } from '../account/login/login.component';
import { CreateAccountComponent } from '../account/create-account/create-account.component';

const routes: Routes = [
  { path: 'lista', component: LembreteListaComponent },
  { path: 'criar', component: LembreteInserirComponent },
  { path: 'editar/:idLembrete', component: LembreteInserirComponent },
  { path: '', component: LoginComponent },
  { path: 'cadastrar', component: CreateAccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
