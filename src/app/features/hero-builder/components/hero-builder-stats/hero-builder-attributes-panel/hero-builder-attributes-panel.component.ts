import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/shared/models/hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from 'src/app/shared/services/hero.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-hero-builder-attributes-panel',
  templateUrl: './hero-builder-attributes-panel.component.html',
  styleUrls: ['./hero-builder-attributes-panel.component.css']
})
export class HeroBuilderAttributesPanelComponent implements OnInit {
  @Input() hero?: Hero;
  displayedColumns = ['name', 'rating', 'total'];
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
        rating: this.hero?.strRating as number,
        total: this.hero?.strTotal as number,
      },
      { 
        name: "Toughness",
        rating: this.hero?.toughRating as number,
        total: this.hero?.toughTotal as number,
      },
      { 
        name: "Agility",
        rating: this.hero?.agiRating as number,
        total: this.hero?.agiTotal as number,
      },
      { 
        name: "Initiative",
        rating: this.hero?.initRating as number,
        total: this.hero?.initTotal as number,
      },
      { 
        name: "Willpower",
        rating: this.hero?.wilRating as number,
        total: this.hero?.wilTotal as number,
      },
      { 
        name: "Intellect",
        rating: this.hero?.intRating as number,
        total: this.hero?.intTotal as number,
      },
      { 
        name: "Fellowship",
        rating: this.hero?.felRating as number,
        total: this.hero?.felTotal as number,
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
  total: number,
}