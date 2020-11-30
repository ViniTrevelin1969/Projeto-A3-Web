import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { from } from 'rxjs';

import { AppComponent } from './app.component';
import { LembreteInserirComponent } from './lembretes/lembrete-inserir/lembrete-inserir.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { LembreteListaComponent } from './lembretes/lembrete-lista/lembrete-lista.component';
import { LembreteService } from './lembretes/lembrete.service';
import { AppRoutingModule } from './lembretes/app-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoginComponent } from './account/login/login.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';

@NgModule({
  declarations: [
    AppComponent,
    LembreteInserirComponent,
    CabecalhoComponent,
    LembreteListaComponent,
    LoginComponent,
    CreateAccountComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    HttpClientModule,
    MatMenuModule,
    MatDatepickerModule,
  ],
  providers: [LembreteService],
  bootstrap: [AppComponent],
})
export class AppModule {}
