import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/shared/models/hero';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from 'src/app/shared/services/hero.service';
import { Species } from 'src/app/shared/models/species';
import { Faction } from 'src/app/shared/models/faction';
import { FactionService } from 'src/app/shared/services/faction.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IconSnackBarComponent } from 'src/app/shared/components/icon-snack-bar/icon-snack-bar.component';

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
    private snackBar: MatSnackBar,
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

  filterFactionsBySpecies(species: string, factions: Faction[]): void {
    for (var i in factions) {
      if (factions[i].species == species) {
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
      this.heroService.updateHero(this.hero)
        .subscribe(hero => this.hero = hero);
      this.router.navigate(['../archetype'], { relativeTo: this.route });
      this.openCustomSnackBar();
    }
  }

  openSaveSnackBar(): void {
    this.snackBar.open("Saved Faction", "OK", {duration: 4000});
  }

  openCustomSnackBar(): void {
    this.snackBar.openFromComponent(IconSnackBarComponent, {
      data: {
        message: "Saved Faction",
        icon: "published_with_changes",
      },
      duration: 2000
    })
  }
}
