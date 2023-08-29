import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from "../../services/api-service.service";
import {Article} from "../../models/article";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  public articles!: Article[]

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.getAllArticle().subscribe(value => {
      if (value){
        this.articles = value["articles"] as Article[]
        console.log(this.articles)
      }
    })
  }

  getAllArticle() {
    return this.apiService.getAllArticle()
  }

}
