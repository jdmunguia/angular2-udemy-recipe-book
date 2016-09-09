import { Component, OnInit } from '@angular/core';
import {RecipesListComponent} from "./recipes-list";

@Component({
  moduleId: module.id,
  selector: 'rb-recipes',
  templateUrl: 'recipes.component.html',
  directives: [RecipesListComponent]
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
