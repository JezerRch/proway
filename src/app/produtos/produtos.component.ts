import { ProdutosService } from './../produtos.service';
import { IProduto } from './../produtos';
import { Component } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {
  produtos: IProduto[] | undefined

  constructor(
    private ProdutosService: ProdutosService
  ) { }

  ngOnInit(): void {
    this.produtos = this.ProdutosService.getAll();
  }

}
