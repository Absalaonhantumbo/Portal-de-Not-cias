import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../../models/article";

@Component({
  selector: 'app-articles-item',
  templateUrl: './articles-item.component.html',
  styleUrls: ['./articles-item.component.scss']
})
export class ArticlesItemComponent implements OnInit {
  @Input()
  public article!: Article;

  constructor() { }

  ngOnInit(): void {

  }

}
