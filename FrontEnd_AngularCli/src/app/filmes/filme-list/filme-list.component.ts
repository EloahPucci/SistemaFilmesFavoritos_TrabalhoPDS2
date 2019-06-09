import { Component, OnInit } from '@angular/core';
import { Filme } from '../filme';
import { FilmesService } from '../filmes.service';

@Component({
  selector: 'app-filme-list',
  templateUrl: './filme-list.component.html',
  styleUrls: ['./filme-list.component.css']
})
export class FilmeListComponent implements OnInit {

  constructor(private filmeService: FilmesService) { }

  filmes: Filme[] = [];
  criterio: String;

  ngOnInit() {

    this.filmeService.getAll()
    .subscribe(data => this.filmes = data,
      err => alert('Aconteceu um erro ' + err)
    );
    this.filmeService.filmesChanged.subscribe(
      (observable: any) => observable.subscribe(
        data => this.filmes = data
      )
    );

  //   this.filmes = [{
  //     'codigo': 1,
  //     'nome': 'Harry Potter e a Pedra Filosofal',
  //     'genero': 'Aventura',
  //     'anoLancamento': '2001'
  //   },
  //   {
  //     'codigo': 2,
  //     'nome': 'Vingadores - End Game',
  //     'genero': 'Aventura',
  //     'anoLancamento': '2019'
  //   },
  //   {
  //     'codigo': 3,
  //     'nome': 'Abracadabra',
  //     'genero': 'Fantasia/Terror',
  //     'anoLancamento': '1993'
  //   }
  // ];
  }
}
