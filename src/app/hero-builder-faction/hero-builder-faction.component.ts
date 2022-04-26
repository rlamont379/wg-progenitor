import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { Species } from '../species';
import { Faction } from '../faction';
import { FactionService } from '../faction.service';

@Component({
  selector: 'app-hero-builder-faction',
  templateUrl: './hero-builder-faction.component.html',
  styleUrls: ['./hero-builder-faction.component.css']
})
export class HeroBuilderFactionComponent implements OnInit {
  @Input() hero?: Hero;
  factions: Faction[] = [];

  constructor(
    private heroService: HeroService,
    private factionService: FactionService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getFactions(): void {
    this.factionService.getFactions()
      .subscribe(factions => {
        if (this.hero) {
          this.filterFactionsBySpecies(this.hero?.species.name, factions);
        }
      });
  }

  filterFactionsBySpecies(species: string, factions: Faction[]): void {8
    for (var i in factions) {
      if (factions[i].species != species) {
      } else {
        this.factions.push(factions[i]);
      }
    }
  }

  getHero(): void {
    const id = Number(this.route.parent?.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => {
        this.hero = hero;
        this.getFactions();
      });
  }

  updateHeroFaction(faction: Faction): void {
    if (this.hero) {
      this.hero.faction = faction;
      console.log(this.hero.faction);
      this.heroService.updateHero(this.hero)
        .subscribe(hero => this.hero = hero);
      this.router.navigate(['../archetype'], { relativeTo: this.route });
    }
  }
}
