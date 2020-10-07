import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reativo',
  templateUrl: './form-reativo.component.html',
  styleUrls: ['./form-reativo.component.css']
})
export class FormReativoComponent implements OnInit {

  formCadastro : FormGroup;

  constructor() { 
    this.formCadastro = new FormGroup({
        'nome': new FormControl(null, Validators.compose([
                                                            Validators.required,
                                                            Validators.minLength(5),
                                                            Validators.maxLength(50)
                                                         ])),
        'email': new FormControl(null, Validators.required),
        'telefone' : new FormControl(null, Validators.required)
    });
  }
g
  ngOnInit(): void {
  }

  enviar(){
    let dados = `
    Nome: ${this.formCadastro.value.nome}
    email: ${this.formCadastro.value.email}
    telefone: ${this.formCadastro.value.telefone}              
  `;

  console.log(dados);
  }

}
