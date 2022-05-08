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
    this.heroService.addHero(
      {
        name: "New Character",
        tier: 1,
        rank: 1,
        earnedXp: 0,
        tierXp: 100,
        species: {cost: 0},
        archetype: {cost: 0},

        strRating: 0,
        toughRating: 0,
        agiRating: 0,
        initRating: 0,
        wilRating: 0,
        intRating: 0,
        felRating: 0,

        athleticsLevels: 0,
        awarenessLevels: 0,
        ballisticsLevels: 0,
        cunningLevels: 0,
        deceptionLevels: 0,
        insightLevels: 0,
        intimidationLevels: 0,
        investigationLevels: 0,
        leadershipLevels: 0,
        medicaeLevels: 0,
        persuasionLevels: 0,
        pilotLevels: 0,
        psychicLevels: 0,
        scholarLevels: 0,
        stealthLevels: 0,
        survivalLevels: 0,
        techLevels: 0,
        weaponsLevels: 0,
      } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
}