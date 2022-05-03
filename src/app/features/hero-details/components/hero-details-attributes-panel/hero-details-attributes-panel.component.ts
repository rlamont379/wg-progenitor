import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/shared/models/hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from 'src/app/shared/services/hero.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-hero-details-attributes-panel',
  templateUrl: './hero-details-attributes-panel.component.html',
  styleUrls: ['./hero-details-attributes-panel.component.css']
})
export class HeroDetailsAttributesPanelComponent implements OnInit {
  @Input() hero?: Hero;
  displayedColumns = ['name', 'rating', 'bonus', 'total'];
  ATTR_DATA: Attribute[] = [];
  attrSource: any;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  ngDoCheck(): void {
    this.ATTR_DATA = [
      { 
        name: "Strength",
        rating: this.hero?.strLevels as number,
        bonus: this.hero?.strLevels as number,
        total: this.hero?.strLevels as number,
      },
      { 
        name: "Toughness",
        rating: this.hero?.toughLevels as number,
        bonus: this.hero?.toughLevels as number,
        total: this.hero?.toughLevels as number,
      },
      { 
        name: "Agility",
        rating: this.hero?.agiLevels as number,
        bonus: this.hero?.agiLevels as number,
        total: this.hero?.agiLevels as number,
      },
      { 
        name: "Initiative",
        rating: this.hero?.initLevels as number,
        bonus: this.hero?.initLevels as number,
        total: this.hero?.initLevels as number,
      },
      { 
        name: "Willpower",
        rating: this.hero?.wilLevels as number,
        bonus: this.hero?.wilLevels as number,
        total: this.hero?.wilLevels as number,
      },
      { 
        name: "Intellect",
        rating: this.hero?.intLevels as number,
        bonus: this.hero?.intLevels as number,
        total: this.hero?.intLevels as number,
      },
      { 
        name: "Fellowship",
        rating: this.hero?.felLevels as number,
        bonus: this.hero?.felLevels as number,
        total: this.hero?.felLevels as number,
      },
    ]
    this.attrSource = new MatTableDataSource(this.ATTR_DATA)
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
}

export interface Attribute {
  name: string;
  rating: number;
  bonus: number;
  total: number,
}