import {Component, OnInit} from '@angular/core';
import {BookService} from "./book.service";
import {Book} from "./book";
import {ClientService} from "./client.service";
import {Client} from "./client";


@Component({
  selector: 'stat',
  templateUrl: './stat.html',
  styleUrls: ['./stat.css']
})
export class StatComponent implements OnInit {
  constructor(private bookService:BookService,private clientService:ClientService) {
  }
  totalSoldBooks:number;
  bestSeller:Book;
  bestClient:Client;
  ngOnInit(){
    this.bookService.getTotalSoldBooks().then(soldBook=>this.totalSoldBooks=soldBook);
    this.bookService.bestSeller().then(bestSeller=>this.bestSeller=bestSeller);
    this.clientService.bestClient().then(bestClient=>this.bestClient=bestClient);
  }
}
