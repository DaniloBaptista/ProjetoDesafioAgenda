import { Component, OnInit } from '@angular/core';
import {InputMaskModule} from 'primeng/inputmask';
import { Contato } from '../models/contato';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import {SelectItem} from 'primeng/api';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-agenda-component',
  templateUrl: './agenda-component.component.html',
  styleUrls: ['./agenda-component.component.css'],
  providers: [MessageService]
})
export class AgendaComponentComponent implements OnInit {

  constructor(private fb: FormBuilder, private messageService: MessageService) { }

  //Danilo Neves
  //danilo.neves21@outlook.com
  //projeto agenda desafio para cargo de júnior.
  //Possui:
  //Cadastro
  //Edição
  //exclusão de dados.
  //Visualização dos dados.
  //Seleciona qual dado deve ser alterado e excluído.
  //Possui botões de exclusão e alteração que só aparecem quando um dado é selecionado.
  //Possui validação de dados.
  //valida se cpf está correto segundo o cálculo e valida se o cpf existe/foi cadastrado.
  //Valida Telefone e se o telefone já foi adicionado
  //Valida email se está no formato certo.
  //Valida se existe algum dado que não foi informado. Se não for, ele não adiciona.
  //Todas as validações se não forem de acordo não cadastra um novo usuario.
  ngOnInit(): void {}
  contatoArray: Contato[] = [
    { id: 1, nome: 'Danilo', cpf: '456.456.456-87', endereco: 'sqn 216', telefone: 6132726098, celular: 87979879811, email: 'dandan12b@hotmail.com' },
    { id: 2, nome: 'Fernando', cpf: '784.561.234-56', endereco: 'sqn 216', telefone: 6132726098, celular: 87979879811, email: 'dandan12b@hotmail.com' },
    { id: 3, nome: 'Mario', cpf: '444.567.567-87', endereco: 'sqn 216', telefone: 6132726098, celular: 87979879811, email: 'dandan12b@hotmail.com' },
    { id: 4, nome: 'Junior', cpf: '324.567.456-87', endereco: 'sqn 216', telefone: 6132726098, celular: 87979879811, email: 'dandan12b@hotmail.com' },
  ];

  contatoSelecionado: Contato = new Contato();

  abrirParaEdicao(contato: Contato) {

    this.contatoSelecionado = contato;
  }

  adicionarOuEditar() {

    if (this.contatoSelecionado.id === 0) {

      this.contatoSelecionado.id = this.contatoArray.length + 1;
      if(this.contatoSelecionado.cpf== null || this.contatoSelecionado.nome== null || this.contatoSelecionado.email== null || this.contatoSelecionado.endereco==null || this.contatoSelecionado.telefone==null || this.contatoSelecionado.celular==null)
      {
        alert("todos os dados precisam ser preenchidos!");

        }else if(this.cpfIsValid(this.contatoSelecionado.cpf)==false ){
          alert("O cpf é não é válido!");  
        }else if(this.isEmailValid(this.contatoSelecionado.email)==false){
          alert("O email não está no padrão correto!");
        }else if(this.verificarSeCPFExiste(this.contatoSelecionado.cpf)==false ){
          alert("O cpf já existe!");  
        }else if(this.verificarSeTelefoneExiste(this.contatoSelecionado.telefone)==false){
          alert("O telefone já existe!");
        }else{
          this.contatoArray.push(this.contatoSelecionado);
        }
      }
    this.contatoSelecionado = new Contato();
  }

  verificarSeCPFExiste(strCPF){
      if(this.contatoArray.findIndex(val => val.cpf == strCPF) !== -1){
          return false;
      } else{
          return true;
      }
  }

  verificarSeTelefoneExiste(strTelefone){
        console.log(strTelefone);
        strTelefone=strTelefone.replace("(", "").replace(")", "").replace("-", "");
        console.log(strTelefone);
        if(this.contatoArray.findIndex(val => val.telefone == strTelefone) !== -1){
            return false;
        } else{
            return true;
        }
  }

   cpfIsValid(strCPF) {
        var Soma;
        var Resto;
        Soma = 0;
        let i;
        
        strCPF=strCPF.replace(".", "").replace(".", "").replace("-", "");
        //retira os pontos pra  poder fazer o cáuclo do cpf.
        
        if (strCPF == "00000000000") return false;
        
        for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;
      
        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;
      
        Soma = 0;
          for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
          Resto = (Soma * 10) % 11;
      
        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
        return true;
  }
  isEmailValid(email)
    {
        var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        if (reg.test(email)){
        return true; }
        else{
        return false;
    }
  }


  deletar() {

    if (confirm("Você tem certeza que deseja deletar o dado selecionado?")) {

      this.contatoArray = this.contatoArray.filter(x => x !== this.contatoSelecionado);
      this.contatoSelecionado = new Contato();
    }

  }
}


