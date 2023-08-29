import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from "../../services/api-service.service";
import {Article} from "../../models/article";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  public articles!: Article[]

  constructor(private apiService: ApiServiceService) { }
  Api= environment.API_URL
  ngOnInit(): void {
    this.getAllArticle().subscribe(value => {
      if (value){
        this.articles = value["articles"] as Article[]
        console.log(this.articles)
        value.map((x: Article)=>{
          console.log(x.title)
        })
      }
    })
  }

  getAllArticle() {
    return this.apiService.getAllArticle()
  }

}
