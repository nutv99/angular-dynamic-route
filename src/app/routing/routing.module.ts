import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import {ArticleComponent} from '../article/article.component' ;
import { Router } from '@angular/router'; //import router


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class RoutingModule {

  const routes: Routes = [
    {  
      path:'',
      component: ArticleComponent
    },
    {
      path: 'article',
      component: ArticleComponent,
      children:[
                 {
                   path:'article/:type', //:type is dynamic here
                   component:ArticleComponent
                 }
               ]
    }
    ];

 }