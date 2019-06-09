import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { TrilhasSonorasService } from '../trilhas-sonoras.service';
import { TrilhaSonora } from '../trilha-sonora';

@Component({
  selector: 'app-trilhasonora-form',
  templateUrl: './trilhasonora-form.component.html',
  styleUrls: ['./trilhasonora-form.component.css']
})

export class TrilhasonoraFormComponent implements OnInit {

  private trilhaIndex: number;
  private isNew: boolean = true;
  private trilha: TrilhaSonora;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private trilhaService: TrilhasSonorasService) { }

  ngOnInit() {
    this.novo();
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.isNew = false;
          this.trilhaIndex = params['id'];
          this.trilhaIndex = +params['id'];
          this.trilhaService.get(this.trilhaIndex)
          .subscribe(data => this.trilha = data);
        } else {
          this.isNew = true;
        }
      }
    );
  }

  novo() {
    this.trilha = new TrilhaSonora();
  }

  salvar() {
    let result;
    if (this.isNew) {
      result = this.trilhaService.add(this.trilha);
    } else {
      result = this.trilhaService.update(this.trilha);
    }
    this.novo();
    this.voltar();
    result.subscribe(data => alert('sucesso ' + data),
    err => {
      alert("An error occurred. " + err);
    });
  }

  excluir() {
    if (this.trilha.codigo == null) {
      alert("Selecione alguma trilha sonora");
    } else {
      if(confirm("Você realmente quer excluir a trilha sonora " + this.trilha.nomeMusica + "?"))
      this.trilhaService.remove(this.trilha.codigo)
      .subscribe(
        data => alert('Trilha Sonora removido ' + data),
        err => {
          alert("Trilha Sonora não foi removida.")
        });
        this.novo();
        this.voltar();
    }
  }

  cancelar() {
    this.voltar();
  }

  voltar() {
    this.router.navigate(['/trilhas']);
  }
}
