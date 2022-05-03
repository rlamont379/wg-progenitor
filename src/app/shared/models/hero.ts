import { Species } from "./species";
import { Faction } from "./faction";
import { Archetype } from "./archetype";


export interface Hero {
  id: number;
  name: string;
  tier: number;
  rank: number;
  statXp: number;
  tierXp: number;
  earnedXp: number;
  species: Species;
  faction?: Faction;
  archetype: Archetype;
  keywords?: string[];
  background?: string;
  languages?: string[];
  objectives?: string[];

  strLevels: number;
  toughLevels: number;
  agiLevels: number;
  initLevels: number;
  wilLevels: number;
  intLevels: number;
  felLevels: number;

  traitDefence: number;
  traitResilience: number;
  traitDetermination: number;
  traitMaxWounds: number;
  traitMaxShock: number;
  traitSpeed: number;
  traitConviction: number;
  traitResolve: number;
  traitCorruption: number;
  traitAwareness: number;
  traitInfluence: number;
  traitWealth: number;
  traitWrath: number;

  skillAthletics: number;
  skillAwareness: number;
  skillBallistics: number;
  skillCunning: number;
  skillDeception: number;
  skillInsight: number;
  skillIntimidation: number;
  skillInvestigation: number;
  skillLeadership: number;
  skillMedicae: number;
  skillPersuasion: number;
  skillPilot: number;
  skillPsychic: number;
  skillScholar: number;
  skillStealth: number;
  skillSurvival: number;
  skillTech: number;
  skillWeapons: number;

  wargearWeapons?: string[];
  wargearArmour?: string[];
  wargearGear?: string[];

  abilities?: string[];
}