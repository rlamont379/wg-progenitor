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
  stats: {[key: string]: number} = {
    Strength: 0,
    Toughness: 0,
    Agility: 0,
    Initiative: 0,
    Willpower: 0,
    Intellect: 0,
    Fellowship: 0,
  }

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  ngDoCheck(): void {
    this.getStats();
    /*this.hero?.archetype.bonuses?.attributes?.forEach(element => {
      this.stats[element.name] = element.value;
      console.log(element);
    });
    //this.stats["intellect"] += this.hero?.intLevels;
    //console.log(this.stats["intellect"]);

    this.ATTR_DATA = [
      { 
        name: "Strength",
        rating: this.hero?.strLevels as number,
        total: this.hero?.strLevels as number,
      },
      { 
        name: "Toughness",
        rating: this.hero?.toughLevels as number,
        total: this.hero?.toughLevels as number,
      },
      { 
        name: "Agility",
        rating: this.hero?.agiLevels as number,
        total: this.hero?.agiLevels as number,
      },
      { 
        name: "Initiative",
        rating: this.hero?.initLevels as number,
        total: this.hero?.initLevels as number,
      },
      { 
        name: "Willpower",
        rating: this.hero?.wilLevels as number,
        total: this.hero?.wilLevels as number,
      },
      { 
        name: "Intellect",
        rating: this.stats["intellect"] as number,
        total: this.hero?.intLevels as number,
      },
      { 
        name: "Fellowship",
        rating: this.hero?.felLevels as number,
        total: this.hero?.felLevels as number,
      },
    ]
    this.attrSource = new MatTableDataSource(this.ATTR_DATA)*/
  }

  getHero(): void {
    const id = Number(this.route.parent?.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  getStats(): void {
    this.hero?.archetype.bonuses?.attributes?.forEach(element => {
      this.stats[element.name] = element.value;
    });
    this.stats["Strength"] += (this.hero?.strLevels ? this.hero?.strLevels : 0);
    this.stats["Toughness"] += (this.hero?.toughLevels ? this.hero?.toughLevels : 0);
    this.stats["Agility"] += (this.hero?.agiLevels ? this.hero?.agiLevels : 0);
    this.stats["Initiative"] += (this.hero?.initLevels ? this.hero?.initLevels : 0);
    this.stats["Willpower"] += (this.hero?.wilLevels ? this.hero?.wilLevels : 0);
    this.stats["Intellect"] += (this.hero?.intLevels ? this.hero?.intLevels : 0)
    this.stats["Fellowship"] += (this.hero?.felLevels ? this.hero?.felLevels : 0);

    this.ATTR_DATA = [
      { 
        name: "Strength",
        rating: this.stats["Strength"] as number,
        total: this.hero?.strLevels as number,
      },
      { 
        name: "Toughness",
        rating: this.stats["Toughness"] as number,
        total: this.hero?.toughLevels as number,
      },
      { 
        name: "Agility",
        rating: this.stats["Agility"] as number,
        total: this.hero?.agiLevels as number,
      },
      { 
        name: "Initiative",
        rating: this.stats["Initiative"] as number,
        total: this.hero?.initLevels as number,
      },
      { 
        name: "Willpower",
        rating: this.stats["Willpower"] as number,
        total: this.hero?.wilLevels as number,
      },
      { 
        name: "Intellect",
        rating: this.stats["Intellect"] as number,
        total: this.hero?.intLevels as number,
      },
      { 
        name: "Fellowship",
        rating: this.stats["Fellowship"] as number,
        total: this.hero?.felLevels as number,
      },
    ]
    this.attrSource = new MatTableDataSource(this.ATTR_DATA)
  }
}

export interface Attribute {
  name: string;
  rating: number;
  total: number,
}