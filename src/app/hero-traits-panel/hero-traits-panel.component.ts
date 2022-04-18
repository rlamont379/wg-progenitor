import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-hero-traits-panel',
  templateUrl: './hero-traits-panel.component.html',
  styleUrls: ['./hero-traits-panel.component.css']
})
export class HeroTraitsPanelComponent implements OnInit {
  @Input() hero?: Hero;
  displayedColumns = ['name', 'rating'];
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