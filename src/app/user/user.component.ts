 import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public users : any=[];
  public searchName : string="";
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    let response = this.http.get("https://jsonplaceholder.typicode.com/users");
    response.subscribe((data)=>this.users=data);
  }

}
