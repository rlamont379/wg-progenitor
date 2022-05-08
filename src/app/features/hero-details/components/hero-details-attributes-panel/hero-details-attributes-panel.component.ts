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
  displayedColumns = ['name', 'rating'];
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
      },
      { 
        name: "Toughness",
        rating: this.hero?.toughRating as number,
      },
      { 
        name: "Agility",
        rating: this.hero?.agiRating as number,
      },
      { 
        name: "Initiative",
        rating: this.hero?.initRating as number,
      },
      { 
        name: "Willpower",
        rating: this.hero?.wilRating as number,
      },
      { 
        name: "Intellect",
        rating: this.hero?.intRating as number,
      },
      { 
        name: "Fellowship",
        rating: this.hero?.felRating as number,
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
}