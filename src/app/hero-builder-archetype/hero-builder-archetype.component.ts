import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { Archetype } from '../archetype';
import { ArchetypeService } from '../archetype.service';
import { Faction } from '../faction';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-hero-builder-archetype',
  templateUrl: './hero-builder-archetype.component.html',
  styleUrls: ['./hero-builder-archetype.component.css']
})
export class HeroBuilderArchetypeComponent implements OnInit {
  @Input() hero?: Hero;
  archetypes: Archetype[] = [];

  constructor(
    private heroService: HeroService,
    private archetypeService: ArchetypeService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getArchetypes(): void {
    this.archetypeService.getArchetypes()
      .subscribe(archetypes => {
        if (this.hero?.faction) {
          this.filterArchetypesByFaction(this.hero?.faction.name, archetypes);
        }
      });
  }

  filterArchetypesByFaction(faction: string, archetypes: Archetype[]): void {
    for (var i in archetypes) {
      if (archetypes[i].faction == faction) {
        console.log(archetypes[i]);
        this.archetypes.push(archetypes[i]);
      }
    }
  }

  getHero(): void {
    const id = Number(this.route.parent?.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => {
        this.hero = hero;
        this.getArchetypes();
      });
  }

  updateHeroArchetype(archetype: Archetype): void {
    if (this.hero) {
      this.hero.archetype = archetype;
      console.log(this.hero.archetype);
      this.heroService.updateHero(this.hero)
        .subscribe(hero => this.hero = hero);
      this.router.navigate(['../stats'], { relativeTo: this.route });
      this.openSaveSnackBar();
    }
  }

  openSaveSnackBar(): void {
    this.snackBar.open("Saved", "OK", {duration: 2000});
  }
}
