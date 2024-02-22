import { Router } from '@angular/router';
import { IProdutoCarrinho } from '../produtos';
import { CarrinhoService } from './../carrinho.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {

  itensCarrinho: IProdutoCarrinho[] = [];
  total = 0;

  constructor(
    public CarrinhoService: CarrinhoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.itensCarrinho = this.CarrinhoService.obterCarrinho();
    this.calcularTotal();
  }

  calcularTotal() {
    this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0)
  }

  removerProdutoCarrinho(produtoId: number) {
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.CarrinhoService.removerProdutoCarrinho(produtoId);
    this.calcularTotal();
  }

  comprar() {
    alert("Parabens, você finalizou a compra!!!");
    this.CarrinhoService.limparCarrinho();
    this.router.navigate(["produtos"]);
  }

}
