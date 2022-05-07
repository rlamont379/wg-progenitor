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
  strTotal: number;
  toughLevels: number;
  toughTotal: number;
  agiLevels: number;
  agiTotal: number;
  initLevels: number;
  initTotal: number;
  wilLevels: number;
  wilTotal: number;
  intLevels: number;
  intTotal: number;
  felLevels: number;
  felTotal: number;

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

  athleticsLevels: number;
  athleticsTotal: number;
  awarenessLevels: number;
  awarenessTotal: number;
  ballisticsLevels: number;
  ballisticsTotal: number;
  cunningLevels: number;
  cunningTotal: number;
  deceptionLevels: number;
  deceptionTotal: number;
  insightLevels: number;
  insightTotal: number;
  intimidationLevels: number;
  intimidationTotal: number;
  investigationLevels: number;
  investigationTotal: number;
  leadershipLevels: number;
  leadershipTotal: number;
  medicaeLevels: number;
  medicaeTotal: number;
  persuasionLevels: number;
  persuasionTotal: number;
  pilotLevels: number;
  pilotTotal: number;
  psychicLevels: number;
  psychicTotal: number;
  scholarLevels: number;
  scholarTotal: number;
  stealthLevels: number;
  stealthTotal: number;
  survivalLevels: number;
  survivalTotal: number;
  techLevels: number;
  techTotal: number;
  weaponsLevels: number;
  weaponsTotal: number;

  wargearWeapons?: string[];
  wargearArmour?: string[];
  wargearGear?: string[];

  abilities?: string[];
}