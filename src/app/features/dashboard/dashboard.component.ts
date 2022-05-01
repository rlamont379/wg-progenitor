import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/shared/models/hero';
import { HeroService } from 'src/app/shared/services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
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
    this.heroService.addHero({ name: "New Character", tier: 1, rank: 1, earnedXp: 0, tierXp: 100, species: {cost: 0}, archetype: {cost: 0} } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
}