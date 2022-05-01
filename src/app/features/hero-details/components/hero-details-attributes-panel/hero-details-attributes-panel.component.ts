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
        rating: this.hero?.strRating as number,
        bonus: this.hero?.strBonus as number,
        total: this.hero?.strTotal as number,
      },
      { 
        name: "Toughness",
        rating: this.hero?.toughRating as number,
        bonus: this.hero?.toughBonus as number,
        total: this.hero?.toughTotal as number,
      },
      { 
        name: "Agility",
        rating: this.hero?.agiRating as number,
        bonus: this.hero?.agiBonus as number,
        total: this.hero?.agiTotal as number,
      },
      { 
        name: "Initiative",
        rating: this.hero?.initRating as number,
        bonus: this.hero?.initBonus as number,
        total: this.hero?.initTotal as number,
      },
      { 
        name: "Willpower",
        rating: this.hero?.wilRating as number,
        bonus: this.hero?.wilBonus as number,
        total: this.hero?.wilTotal as number,
      },
      { 
        name: "Intellect",
        rating: this.hero?.intRating as number,
        bonus: this.hero?.intBonus as number,
        total: this.hero?.intTotal as number,
      },
      { 
        name: "Fellowship",
        rating: this.hero?.felRating as number,
        bonus: this.hero?.felBonus as number,
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
  bonus: number;
  total: number,
}