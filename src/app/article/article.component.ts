import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; //import router

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() { 
    
  }

}