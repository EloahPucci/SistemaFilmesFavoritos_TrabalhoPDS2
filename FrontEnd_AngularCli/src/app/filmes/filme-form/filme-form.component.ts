import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmesService } from '../filmes.service';
import { Filme } from '../filme';

@Component({
  selector: 'app-filme-form',
  templateUrl: './filme-form.component.html',
  styleUrls: ['./filme-form.component.css']
})
export class FilmeFormComponent implements OnInit {

  private filmeIndex: number;
  private isNew: boolean = true;
  private filme: Filme;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private filmeService: FilmesService) { }

  ngOnInit() {
    this.novo();
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.isNew = false;
          this.filmeIndex = params['id'];
          this.filmeService.get(this.filmeIndex)
            .subscribe(data => this.filme = data);
        } else {
          this.isNew = true;
        }
      }
    );
  }

  novo() {
    this.filme = new Filme();
  }

  salvar() {
    let result;
    if (this.isNew) {
      result = this.filmeService.add(this.filme);
    } else {
      result = this.filmeService.update(this.filme);
    }
    this.novo();
    this.voltar();
    result.subscribe(data => alert('Sucesso ' + data),
      err => {
        alert("An error occurred. " + err);
      });
  }

  excluir() {
    if (this.filme.codigo == null) {
      alert("Selecione algum filme.")
    } else {
      if (confirm("Você realmente quer excluir o filme " + this.filme.nome + "?"))
        this.filmeService.remove(this.filme.codigo)
          .subscribe(
            data => alert('Filme removido ' + data),
            err => {
              alert("Filme não removido.");
            });
      this.novo();
      this.voltar();
    }
  }

  cancelar() {
    this.voltar();
  }

  voltar() {
    this.router.navigate(['/filmes']);
  }
}
