import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { Species } from '../species';
import { SpeciesService } from '../species.service';

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
    }
  }
}
