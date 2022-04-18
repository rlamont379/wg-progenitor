import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {
        id: 1,
        name: 'Mr. Nice',
        tier: 1,
        rank: 1,
        xp: 100,
        species: "Human",
        archetype: "Ministorum Priest",
        faction: "Imperium",
        keywords: ['Imperium', 'Adeptus Ministorum'],

        strRating: 5,
        strBonus: 0,
        strTotal: 5,
        toughRating: 5,
        toughBonus: 0,
        toughTotal: 5,
        agiRating: 4,
        agiBonus: 0,
        agiTotal: 4,
        initRating: 4,
        initBonus: 0,
        initTotal: 4,
        wilRating: 3,
        wilBonus: 0,
        wilTotal: 3,
        intRating: 3,
        intBonus: 0,
        intTotal: 3,
        felRating: 1,
        felBonus: 0,
        felTotal: 1,

        traitDefence: 0,
        traitResilience: 0,
        traitDetermination: 0,
        traitMaxWounds: 0,
        traitMaxShock: 0,
        traitSpeed: 0,
        traitConviction: 0,
        traitResolve: 0,
        traitCorruption: 0,
        traitAwareness: 0,
        traitInfluence: 0,
        traitWealth: 0,
        traitWrath: 0,

        skillAthletics: 3,
        skillAwareness: 2,
        skillBallistics: 3,
        skillCunning: 1,
        skillDeception: 2,
        skillInsight: 1,
        skillIntimidation: 1,
        skillInvestigation: 1,
        skillLeadership: 2,
        skillMedicae: 1,
        skillPersuasion: 3,
        skillPilot: 2,
        skillPsychic: 1,
        skillScholar: 1,
        skillStealth: 1,
        skillSurvival: 2,
        skillTech: 1,
        skillWeapons: 2,

        wargearWeapons: ["Laspistol"],
        wargearArmour: ["Flak Armour"],
        wargearGear: ["Shipping Manifest"],

        abilities: ["Lie, Cheat, Steal"],
      },
      { id: 2, name: 'Narco' },
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (1).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id!)) + 1 : 1;
  }
}