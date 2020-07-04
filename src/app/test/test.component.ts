import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public products : any
  public dob : any = "1996-06-24";

  constructor(private service : ProductServiceService) {

    this.products = service.getProducts();
  }

  ngOnInit(): void {
  }

  message(){
    return "This the test component "
  }

  public text : string = "";

  myFun(){
  	return this.text="Event Binding"
  }

  private isActive : boolean = true;
  private isDisabled : boolean = true;

  disabled(){
  	return this.isDisabled;
  }

  public messages : any ="Welcome to Java Blog";
}
