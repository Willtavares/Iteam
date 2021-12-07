import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../shared/services/filmes.service';
@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss']
})
export class FilmesComponent implements OnInit {

  filme: any;

  constructor(private filmes: FilmesService) {
  }

  ngOnInit(): void {
    this.getAllFilmes();
  }

  getAllFilmes(): void {
    this.filmes.getFilmes().subscribe((response) => {
      this.filme = response;
      console.log(this.filme);
    }, error => { console.log(error) });
  }

}
