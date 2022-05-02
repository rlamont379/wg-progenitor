import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/shared/models/hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from 'src/app/shared/services/hero.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-hero-builder-traits-panel',
  templateUrl: './hero-builder-traits-panel.component.html',
  styleUrls: ['./hero-builder-traits-panel.component.css']
})
export class HeroBuilderTraitsPanelComponent implements OnInit {
  @Input() hero?: Hero;
  displayedColumns = ['name', 'rating', 'modifier'];
  TRAIT_DATA: Trait[] = [];
  traitSource: any;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  ngDoCheck(): void {
    this.TRAIT_DATA = [
      {
        name: "Max Wounds",
        rating: this.hero?.traitMaxWounds as number,
      },
      {
        name: "Max Shock",
        rating: this.hero?.traitMaxShock as number,
      },
      {
        name: "Defence",
        rating: this.hero?.traitDefence as number,
      },
      {
        name: "Resilience",
        rating: this.hero?.traitResilience as number,
      },
      {
        name: "Determination",
        rating: this.hero?.traitDetermination as number,
      },
      { name: "Speed",
        rating: this.hero?.traitSpeed as number,
      },
      { name: "Conviction",
        rating: this.hero?.traitConviction as number,
      },
      { name: "Resolve",
        rating: this.hero?.traitResolve as number,
      },
      { name: "Passive Awareness",
        rating: this.hero?.traitAwareness as number,
      },
      { name: "Influence",
      rating: this.hero?.traitInfluence as number,
      },
      { name: "Wealth",
      rating: this.hero?.traitWealth as number,
      },
    ]
    this.traitSource = new MatTableDataSource(this.TRAIT_DATA)
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
}

export interface Trait {
  name: string;
  rating: number;
}