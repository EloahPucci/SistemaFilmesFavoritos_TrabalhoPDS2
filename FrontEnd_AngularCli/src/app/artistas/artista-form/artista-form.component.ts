import { Component, OnInit } from '@angular/core';
import { Artista } from '../artista';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistasService } from '../artistas.service';

@Component({
  selector: 'app-artista-form',
  templateUrl: './artista-form.component.html',
  styleUrls: ['./artista-form.component.css']
})
export class ArtistaFormComponent implements OnInit {

  private artistaIndex: number;
  private isNew: boolean = true;
  private artista: Artista;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private artistaService: ArtistasService) { }

  ngOnInit() {
    this.novo();
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.isNew = false;
          this.artistaIndex = params['id'];
          this.artistaIndex = +params['id'];
          this.artistaService.get(this.artistaIndex)
          .subscribe(data => this.artista = data);
        } else {
          this.isNew = true;
        }
      }
    );
  }

  novo() {
    this.artista = new Artista();
  }

  salvar() {
    let result;
    if (this.isNew) {
      result = this.artistaService.add(this.artista);
    } else {
      result = this.artistaService.update(this.artista);
    }
    this.novo();
    this.voltar();
    result.subscribe(data => alert('sucesso ' + data),
    err => {
      alert("An error occurred. " + err);
    });
  }

  excluir() {
    if (this.artista.codigo == null) {
      alert("Selecione algum artista");
    } else {
      if(confirm("Você realmente quer excluir o artista " + this.artista.nomeArtista + "?"))
      this.artistaService.remove(this.artista.codigo)
      .subscribe(
        data => alert('Artista removido ' + data),
        err => {
          alert("Artista não foi removido.")
        });
        this.novo();
        this.voltar();
    }
  }

  cancelar() {
    this.voltar();
  }

  voltar() {
    this.router.navigate(['/artistas']);
  }
}
