import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	
	public title : String = 'COVID -19';
	public message : String = "STAY SAFE AND STAY AT HOME"

  // dynamically class binding at run time;


  // header background image
  public headerBgImage : string = 'img-cont1'
	//banner image for header
	public bannerImage : string = 'img-cont2 img-animate';

  constructor() { }

  ngOnInit(): void {
  }

}
