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

        strLevels: 0,
        toughLevels: 0,
        agiLevels: 0,
        initLevels: 0,
        wilLevels: 0,
        intLevels: 0,
        felLevels: 0,

        skillAthletics: 0,
        skillAwareness: 0,
        skillBallistics: 0,
        skillCunning: 0,
        skillDeception: 0,
        skillInsight: 0,
        skillIntimidation: 0,
        skillInvestigation: 0,
        skillLeadership: 0,
        skillMedicae: 0,
        skillPersuasion: 0,
        skillPilot: 0,
        skillPsychic: 0,
        skillScholar: 0,
        skillStealth: 0,
        skillSurvival: 0,
        skillTech: 0,
        skillWeapons: 0,
      } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
}