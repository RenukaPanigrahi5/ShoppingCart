import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-receipes-list',
  templateUrl: './receipes-list.component.html',
  styleUrls: ['./receipes-list.component.css']
})
export class ReceipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is simply a test','https://svgsilh.com/svg/303194-5a33c1.svg'),
    new Recipe('A Test Recipe','This is simply a test','https://svgsilh.com/svg/303194-5a33c1.svg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
