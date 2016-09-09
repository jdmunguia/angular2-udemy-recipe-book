import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe";
import {RecipeItemComponent} from "./recipe-item.component";

@Component({
  moduleId: module.id,
  selector: 'rb-recipes-list',
  templateUrl: 'recipes-list.component.html',
  directives: [RecipeItemComponent]
})
export class RecipesListComponent implements OnInit {

  recipes : Recipe[] = [];

  recipe = new Recipe("Dummy","Dummy","http://vignette4.wikia.nocookie.net/scribblenauts/images/4/42/Crash_Test_Dummy.png/revision/latest?cb=20130309213400");

  constructor() { }

  ngOnInit() {
  }

}
