import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  public books : any=[];
  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
    let response = this.httpClient.get("http://localhost:5202/rest/books/controller/getBooks");
    response.subscribe((data)=>this.books=data);
  }

  getBooks(){
   
  }
}
