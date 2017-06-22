import {Component, OnInit} from '@angular/core';
import {BookService} from "./book.service";
import {Book} from "./book";


@Component({
  selector: 'stat',
  templateUrl: './stat.html',
  styleUrls: ['./stat.css']
})
export class StatComponent implements OnInit {
  constructor(private bookService:BookService) {
  }
  totalSoldBooks:number;
  bestSeller:Book;
  ngOnInit(){
    this.bookService.getTotalSoldBooks().then(soldBook=>this.totalSoldBooks=soldBook);
    this.bookService.bestSeller().then(bestSeller=>this.bestSeller=bestSeller);
  }
}
