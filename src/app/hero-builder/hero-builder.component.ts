import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-builder',
  templateUrl: './hero-builder.component.html',
  styleUrls: ['./hero-builder.component.css']
})
export class HeroBuilderComponent implements OnInit {
  heroes: Hero[] = [];

  

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  createHero(): void {
    this.heroService.addHero({ name: "Janys Dorana" } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
}
