import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-builder-info',
  templateUrl: './hero-builder-info.component.html',
  styleUrls: ['./hero-builder-info.component.css']
})
export class HeroBuilderInfoComponent implements OnInit {
  selectedTier = 0;

  constructor() { }

  ngOnInit(): void {
  }

}