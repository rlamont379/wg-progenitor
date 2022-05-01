import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/shared/models/hero';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from 'src/app/shared/services/hero.service';
import { Species } from 'src/app/shared/models/species';
import { SpeciesService } from 'src/app/shared/services/species.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IconSnackBarComponent } from 'src/app/shared/components/icon-snack-bar.component';

@Component({
  selector: 'app-hero-builder-species',
  templateUrl: './hero-builder-species.component.html',
  styleUrls: ['./hero-builder-species.component.css']
})
export class HeroBuilderSpeciesComponent implements OnInit {
  @Input() hero?: Hero;
  species: Species[] = [];

  constructor(
    private heroService: HeroService,
    private speciesService: SpeciesService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.getHero();
    this.getSpecies();
  }

  getSpecies(): void {
    this.speciesService.getSpecies()
      .subscribe(species => this.species = species);
  }

  getHero(): void {
    const id = Number(this.route.parent?.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  updateHeroSpecies(species: Species): void {
    if (this.hero) {
      this.hero.species = species;
      this.heroService.updateHero(this.hero)
        .subscribe(hero => this.hero = hero);
      this.router.navigate(['../faction'], { relativeTo: this.route });
      this.openCustomSnackBar();
      console.log(this.hero);
    }
  }

  openSaveSnackBar(): void {
    this.snackBar.open("Saved Species", "OK", {duration: 4000});
  }

  openCustomSnackBar(): void {
    this.snackBar.openFromComponent(IconSnackBarComponent, {
      data: {
        message: "Saved Species",
        icon: "published_with_changes",
      },
      duration: 2000
    })
  }
}
