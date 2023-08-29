import {Source} from "./source";

export interface Article{
  source: Source
  author: string
  title: string
  description: string
  urlToImage: string
  publishedAt: Date
}
