import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  activities : any = [];
  date : any = "2020-07-04T11:42:12.9618559+00:00";
  message : string ="Angular pipes example";
  amount : number = 5000;
  constructor(private httpClient : HttpClient) { }
  
  ngOnInit(): void {
    
    let response = this.httpClient.get("https://fakerestapi.azurewebsites.net/api/Activities");
    this.activities = response.subscribe((data)=>this.activities=data)
  }

  getActivities(){
    return this.activities;
  }

  activeMsg : any = "";
  isActive() : void{
    this.activeMsg = "Complited";
  }
  inActiveMsg : any = "";
  isNotActive() : void{
    this.inActiveMsg = "Not Complited";
  }
}
