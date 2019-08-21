import { Component, OnInit } from '@angular/core';
import { JokesService } from './jokes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  joke: string = '';
  goodJokes: any = [];
  categories: any = [];
  category: string = 'random';
  constructor(private jokes: JokesService) { }

  ngOnInit() {
    this.getCategories();
    this.jokes.getJoke().subscribe(
      res => {
        this.joke = res['value'];
      }
    );
  }

  

          getAJoke(){
            this.jokes.getJoke().subscribe(
              res => {
                this.joke = res['value'];
              }
            )
          }


          
  getJoke(category: string){
    if(category != 'random'){
      this.category = category;
      this.jokes.getCategoryJoke(category).subscribe(
        res => {
          this.joke = res['value'];
        }
      );
    }else{
      this.jokes.getJoke().subscribe(
        res => {
          this.joke = res['value'];
        }
      );
    }
    console.log(this.category);
  }

  likeJoke(){
    this.goodJokes.push(this.joke);
  }

  getCategories(){
    this.jokes.getCategories().subscribe(
      res => {
        this.categories = res;
        this.categories.push('random');
      }
    );
  }
}


/*
*/