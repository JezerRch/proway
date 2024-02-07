import { NotificacaoService } from './../../notificacao.service';
import { ActivatedRoute, Routes } from '@angular/router';
import { IProduto } from 'src/app/produtos';
import { ProdutosService } from './../../produtos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {
  produto: IProduto | undefined

  quantidade = 1;

  constructor(
    private ProdutosService: ProdutosService,
    private Routes: ActivatedRoute,
    private NotificacaoService: NotificacaoService
  ) { }

  ngOnInit(): void {
    const routeParams = this.Routes.snapshot.paramMap;
    const produtoId = Number(routeParams.get("id"));
    this.produto = this.ProdutosService.getOne(produtoId);
  }

  adicionarAoCarrinho() {
    this.NotificacaoService.notificar("O produto foi adicionado ao carrinho")
  }

}
