import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/usuario.model';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent {
  @Output() novoUsuarioAdicionado = new EventEmitter<Usuario>();
  nome: string;
  email: string;
  senha: string;
  confirmacaodesenha: string;
  datadenascimento: string;

  onFinalizarCadastro(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const usuario: Usuario = {
      nome: form.value.nome,
      email: form.value.email,
      senha: form.value.senha,
      confirmacaodesenha: form.value.confirmacaodesenha,
      datadenascimento: form.value.datadenascimento,
    };
    this.novoUsuarioAdicionado.emit(usuario);
    form.resetForm();
  }
}
