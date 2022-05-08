import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/shared/models/hero';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from 'src/app/shared/services/hero.service';
import { Archetype } from 'src/app/shared/models/archetype';
import { ArchetypeService } from 'src/app/shared/services/archetype.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IconSnackBarComponent } from 'src/app/shared/components/icon-snack-bar.component';


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
      this.heroService.updateHero(this.hero)
        .subscribe(hero => this.hero = hero);
      this.router.navigate(['../stats'], { relativeTo: this.route });
      this.openCustomSnackBar();
    }
  }

  openSaveSnackBar(): void {
    this.snackBar.open("Saved Archetype", "OK", {duration: 4000});
  }

  openCustomSnackBar(): void {
    this.snackBar.openFromComponent(IconSnackBarComponent, {
      data: {
        message: "Saved Archetype",
        icon: "published_with_changes",
      },
      duration: 2000
    })
  }
}
