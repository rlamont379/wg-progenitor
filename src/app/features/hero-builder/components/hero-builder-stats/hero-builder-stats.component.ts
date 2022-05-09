import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/shared/models/hero';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from 'src/app/shared/services/hero.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IconSnackBarComponent } from 'src/app/shared/components/icon-snack-bar/icon-snack-bar.component';

@Component({
  selector: 'app-hero-builder-stats',
  templateUrl: './hero-builder-stats.component.html',
  styleUrls: ['./hero-builder-stats.component.css']
})
export class HeroBuilderStatsComponent implements OnInit {
  @Input() hero?: Hero;
  xpSpent: number = 0;
  attrColumns = ['name', 'rating'];
  skillColumns = ['name', 'attribute', 'rating', 'total'];
  traitColumns = ['name', 'rating'];
  ATTR_DATA: Attribute[] = [];
  attrSource: any;
  SKILL_DATA: Skill[] = [];
  skillSource: any;
  TRAIT_DATA: Trait[] = [];
  traitSource: any;

  attr: {[key: string]: number} = {
    Strength: 0,
    Toughness: 0,
    Agility: 0,
    Initiative: 0,
    Willpower: 0,
    Intellect: 0,
    Fellowship: 0,
  }
  baseAttr: {[key: string]: number} = {
    Strength: 1,
    Toughness: 1,
    Agility: 1,
    Initiative: 1,
    Willpower: 1,
    Intellect: 1,
    Fellowship: 1,
  }
  skills: {[key: string]: number} = {
    Athletics: 0,
    Awareness: 0,
    "Ballistic Skill": 0,
    Cunning: 0,
    Deception: 0,
    Insight: 0,
    Intimidation: 0,
    Investigation: 0,
    Leadership: 0,
    Medicae: 0,
    Persuasion: 0,
    Pilot: 0,
    "Psychic Mastery": 0,
    Scholar: 0,
    Stealth: 0,
    Survival: 0,
    Tech: 0,
    "Weapon Skill": 0,
  }
  baseSkills: {[key: string]: number} = {
    Athletics: 0,
    Awareness: 0,
    "Ballistic Skill": 0,
    Cunning: 0,
    Deception: 0,
    Insight: 0,
    Intimidation: 0,
    Investigation: 0,
    Leadership: 0,
    Medicae: 0,
    Persuasion: 0,
    Pilot: 0,
    "Psychic Mastery": 0,
    Scholar: 0,
    Stealth: 0,
    Survival: 0,
    Tech: 0,
    "Weapon Skill": 0,
  }


  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  ngOnDestroy(): void {
    this.snackBar.dismiss();
  }

  getHero(): void {
    const id = Number(this.route.parent?.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(hero => {
      this.hero = hero;
      this.getAttr();
      this.getSkills();
      this.openCustomXpSpentSnackBar();
    });
  }

  getAttr(): void {
    this.hero?.archetype.bonuses?.attributes?.forEach(element => {
      this.attr[element.name] = element.value;
      this.baseAttr[element.name] = element.value;
    });
    this.attr["Strength"] = (this.hero?.strRating ? this.hero?.strRating : 0);
    if(this.attr["Strength"] < this.baseAttr["Strength"]) {
      this.attr["Strength"] = this.baseAttr["Strength"];
    }
    if(this.attr["Strength"] < 1) {
      this.attr["Strength"] = 1;
    }
    this.attr["Toughness"] = (this.hero?.toughRating ? this.hero?.toughRating : 0);
    if(this.attr["Toughness"] < this.baseAttr["Toughness"]) {
      this.attr["Toughness"] = this.baseAttr["Toughness"];
    }
    if(this.attr["Toughness"] < 1) {
      this.attr["Toughness"] = 1;
    }
    this.attr["Agility"] = (this.hero?.agiRating ? this.hero?.agiRating : 0);
    if(this.attr["Agility"] < this.baseAttr["Agility"]) {
      this.attr["Agility"] = this.baseAttr["Agility"];
    }
    if(this.attr["Agility"] < 1) {
      this.attr["Agility"] = 1;
    }
    this.attr["Initiative"] = (this.hero?.initRating ? this.hero?.initRating : 0);
    if(this.attr["Initiative"] < this.baseAttr["Initiative"]) {
      this.attr["Initiative"] = this.baseAttr["Initiative"];
    }
    if(this.attr["Initiative"] < 1) {
      this.attr["Initiative"] = 1;
    }
    this.attr["Willpower"] = (this.hero?.wilRating ? this.hero?.wilRating : 0);
    if(this.attr["Willpower"] < this.baseAttr["Willpower"]) {
      this.attr["Willpower"] = this.baseAttr["Willpower"];
    }
    if(this.attr["Willpower"] < 1) {
      this.attr["Willpower"] = 1;
    }
    this.attr["Intellect"] = (this.hero?.intRating ? this.hero?.intRating : 0);
    if(this.attr["Intellect"] < this.baseAttr["Intellect"]) {
      this.attr["Intellect"] = this.baseAttr["Intellect"];
    }
    if(this.attr["Intellect"] < 1) {
      this.attr["Intellect"] = 1;
    }
    this.attr["Fellowship"] = (this.hero?.felRating ? this.hero?.felRating : 0);
    if(this.attr["Fellowship"] < this.baseAttr["Fellowship"]) {
      this.attr["Fellowship"] = this.baseAttr["Fellowship"];
    }
    if(this.attr["Fellowship"] < 1) {
      this.attr["Fellowship"] = 1;
    }
    this.updateAttr();
  }

  getSkills() {
    this.hero?.archetype.bonuses?.skills?.forEach(element => {
      this.skills[element.name] = element.value;
      this.baseSkills[element.name] = element.value;
    });
    this.skills["Athletics"] = (this.hero?.athleticsLevels ? this.hero?.athleticsLevels : 0);
    if(this.skills["Athletics"] < this.baseSkills["Athletics"]) {
      this.skills["Athletics"] = this.baseSkills["Athletics"];
    }
    if(this.skills["Athletics"] < 1) {
      this.skills["Athletics"] = 0;
    }
    this.skills["Awareness"] = (this.hero?.awarenessLevels ? this.hero?.awarenessLevels : 0);
    if(this.skills["Awareness"] < this.baseSkills["Awareness"]) {
      this.skills["Awareness"] = this.baseSkills["Awareness"];
    }
    if(this.skills["Awareness"] < 1) {
      this.skills["Awareness"] = 0;
    }
    this.skills["Ballistic Skill"] = (this.hero?.ballisticsLevels ? this.hero?.ballisticsLevels : 0);
    if(this.skills["Ballistic Skill"] < this.baseSkills["Ballistic Skill"]) {
      this.skills["Ballistic Skill"] = this.baseSkills["Ballistic Skill"];
    }
    if(this.skills["Ballistic Skill"] < 1) {
      this.skills["Ballistic Skill"] = 0;
    }
    this.skills["Cunning"] = (this.hero?.cunningLevels ? this.hero?.cunningLevels : 0);
    if(this.skills["Cunning"] < this.baseSkills["Cunning"]) {
      this.skills["Cunning"] = this.baseSkills["Cunning"];
    }
    if(this.skills["Cunning"] < 1) {
      this.skills["Cunning"] = 0;
    }
    this.skills["Deception"] = (this.hero?.deceptionLevels ? this.hero?.deceptionLevels : 0);
    if(this.skills["Deception"] < this.baseSkills["Deception"]) {
      this.skills["Deception"] = this.baseSkills["Deception"];
    }
    if(this.skills["Deception"] < 1) {
      this.skills["Deception"] = 0;
    }
    this.skills["Insight"] = (this.hero?.insightLevels ? this.hero?.insightLevels : 0);
    if(this.skills["Insight"] < this.baseSkills["Insight"]) {
      this.skills["Insight"] = this.baseSkills["Insight"];
    }
    if(this.skills["Insight"] < 1) {
      this.skills["Insight"] = 0;
    }
    this.skills["Intimidation"] = (this.hero?.intimidationLevels ? this.hero?.intimidationLevels : 0);
    if(this.skills["Intimidation"] < this.baseSkills["Intimidation"]) {
      this.skills["Intimidation"] = this.baseSkills["Intimidation"];
    }
    if(this.skills["Intimidation"] < 1) {
      this.skills["Intimidation"] = 0;
    }
    this.skills["Investigation"] = (this.hero?.investigationLevels ? this.hero?.investigationLevels : 0);
    if(this.skills["Investigation"] < this.baseSkills["Investigation"]) {
      this.skills["Investigation"] = this.baseSkills["Investigation"];
    }
    if(this.skills["Investigation"] < 1) {
      this.skills["Investigation"] = 0;
    }
    this.skills["Leadership"] = (this.hero?.leadershipLevels ? this.hero?.leadershipLevels : 0);
    if(this.skills["Leadership"] < this.baseSkills["Leadership"]) {
      this.skills["Leadership"] = this.baseSkills["Leadership"];
    }
    if(this.skills["Leadership"] < 1) {
      this.skills["Leadership"] = 0;
    }
    this.skills["Medicae"] = (this.hero?.medicaeLevels ? this.hero?.medicaeLevels : 0);
    if(this.skills["Medicae"] < this.baseSkills["Medicae"]) {
      this.skills["Medicae"] = this.baseSkills["Medicae"];
    }
    if(this.skills["Medicae"] < 1) {
      this.skills["Medicae"] = 0;
    }
    this.skills["Persuasion"] = (this.hero?.persuasionLevels ? this.hero?.persuasionLevels : 0);
    if(this.skills["Persuasion"] < this.baseSkills["Persuasion"]) {
      this.skills["Persuasion"] = this.baseSkills["Persuasion"];
    }
    if(this.skills["Persuasion"] < 1) {
      this.skills["Persuasion"] = 0;
    }
    this.skills["Pilot"] = (this.hero?.pilotLevels ? this.hero?.pilotLevels : 0);
    if(this.skills["Pilot"] < this.baseSkills["Pilot"]) {
      this.skills["Pilot"] = this.baseSkills["Pilot"];
    }
    if(this.skills["Pilot"] < 1) {
      this.skills["Pilot"] = 0;
    }
    this.skills["Psychic Mastery"] = (this.hero?.psychicLevels ? this.hero?.psychicLevels : 0);
    if(this.skills["Psychic Mastery"] < this.baseSkills["Psychic Mastery"]) {
      this.skills["Psychic Mastery"] = this.baseSkills["Psychic Mastery"];
    }
    if(this.skills["Psychic Mastery"] < 1) {
      this.skills["Psychic Mastery"] = 0;
    }
    this.skills["Scholar"] = (this.hero?.scholarLevels ? this.hero?.scholarLevels : 0);
    if(this.skills["Scholar"] < this.baseSkills["Scholar"]) {
      this.skills["Scholar"] = this.baseSkills["Scholar"];
    }
    if(this.skills["Scholar"] < 1) {
      this.skills["Scholar"] = 0;
    }
    this.skills["Stealth"] = (this.hero?.stealthLevels ? this.hero?.stealthLevels : 0);
    if(this.skills["Stealth"] < this.baseSkills["Stealth"]) {
      this.skills["Stealth"] = this.baseSkills["Stealth"];
    }
    if(this.skills["Stealth"] < 1) {
      this.skills["Stealth"] = 0;
    }
    this.skills["Survival"] = (this.hero?.survivalLevels ? this.hero?.survivalLevels : 0);
    if(this.skills["Survival"] < this.baseSkills["Survival"]) {
      this.skills["Survival"] = this.baseSkills["Survival"];
    }
    if(this.skills["Survival"] < 1) {
      this.skills["Survival"] = 0;
    }
    this.skills["Tech"] = (this.hero?.techLevels ? this.hero?.techLevels : 0);
    if(this.skills["Tech"] < this.baseSkills["Tech"]) {
      this.skills["Tech"] = this.baseSkills["Tech"];
    }
    if(this.skills["Tech"] < 1) {
      this.skills["Tech"] = 0;
    }
    this.skills["Weapon Skill"] += (this.hero?.weaponsLevels ? this.hero?.weaponsLevels : 0);
    if(this.skills["Weapon Skill"] < this.baseSkills["Weapon Skill"]) {
      this.skills["Weapon Skill"] = this.baseSkills["Weapon Skill"];
    }
    if(this.skills["Weapon Skill"] < 1) {
      this.skills["Weapon Skill"] = 0;
    }
    this.updateSkills();
  }

  updateAttr(): void {
    this.ATTR_DATA = [
      { 
        name: "Strength",
        description: "Your raw phyiscal power.",
        rating: this.attr["Strength"] as number,
      },
      { 
        name: "Toughness",
        description: "Your endurance and ability to resist toxin and disease.",
        rating: this.attr["Toughness"] as number,
      },
      { 
        name: "Agility",
        description: "Your dexterity and coordination.",
        rating: this.attr["Agility"] as number,
      },
      { 
        name: "Initiative",
        description: "Your reflexes and reaction speed.",
        rating: this.attr["Initiative"] as number,
      },
      { 
        name: "Willpower",
        description: "Your self-control and mental fortitude.",
        rating: this.attr["Willpower"] as number,
      },
      { 
        name: "Intellect",
        description: "Your ability to process, retain, and apply information.",
        rating: this.attr["Intellect"] as number,
      },
      { 
        name: "Fellowship",
        description: "The power of your personality.",
        rating: this.attr["Fellowship"] as number,
      },
    ]
    this.attrSource = new MatTableDataSource(this.ATTR_DATA);
    this.updateSkills();
  }

  updateSkills(): void {
    this.SKILL_DATA = [
      {
        name: "Athletics",
        description: "Your ability to run, jump, and swim, dependent on your physical strength.",
        attribute: "Strength",
        rating: this.skills["Athletics"] as number,
        total: (this.skills["Athletics"] + this.attr["Strength"]) as number,
      },
      { 
        name: "Awareness",
        description: "Your ability to observe details and changes, including perceiving things that are hidden.",
        attribute: "Intellect",
        rating: this.skills["Awareness"] as number,
        total: (this.skills["Awareness"] + this.attr["Intellect"]) as number,
      },
      { 
        name: "Ballistic Skill",
        description: "Your skill with firearms and other ranged weapons.",
        attribute: "Agility",
        rating: this.skills["Ballistic Skill"] as number,
        total: (this.skills["Ballistic Skill"] + this.attr["Agility"]) as number,
      },
      { 
        name: "Cunning",
        description: "Your ability to think and act like those who operate outside the law.",
        attribute: "Fellowship",
        rating: this.skills["Cunning"] as number,
        total: (this.skills["Cunning"] + this.attr["Fellowship"]) as number,
      },
      { 
        name: "Deception",
        description: "Your ability to lie convincingly.",
        attribute: "Fellowship",
        rating: this.skills["Deception"] as number,
        total: (this.skills["Deception"] + this.attr["Fellowship"]) as number,
      },
      { 
        name: "Insight",
        description: "Your ability to pick up on social cues from others to discern their motivations.",
        attribute: "Fellowship",
        rating: this.skills["Insight"] as number,
        total: (this.skills["Insight"] + this.attr["Fellowship"]) as number,
      },
      { 
        name: "Intimidation",
        description: "Your ability to frighten people into doing what you want by either bullying, coercion, or threats.",
        attribute: "Willpower",
        rating: this.skills["Intimidation"] as number,
        total: (this.skills["Intimidation"] + this.attr["Willpower"]) as number,
      },
      { 
        name: "Investigation",
        description: "Your ability to decipher clues, perform research, and assemble information through proper channels.",
        attribute: "Intellect",
        rating: this.skills["Investigation"] as number,
        total: (this.skills["Investigation"] + this.attr["Intellect"]) as number,
      },
      { 
        name: "Leadership",
        description: "Your ability to inspire others to do dangerous things, inspire respect, and push others beyond their limits.",
        attribute: "Willpower",
        rating: this.skills["Leadership"] as number,
        total: (this.skills["Leadership"] + this.attr["Willpower"]) as number,
      },
      { 
        name: "Medicae",
        description: "Your ability to diagnose and heal by identifying diseases and toxins and counteracting their effects, as well as to remedy other ailments through first aid or surgery. ",
        attribute: "Intellect",
        rating: this.skills["Medicae"] as number,
        total: (this.skills["Medicae"] + this.attr["Intellect"]) as number,
      },
      { 
        name: "Persuasion",
        description: "Your ability to convince others and change their opinion through logic, impassioned pleas, or bargaining.",
        attribute: "Fellowship",
        rating: this.skills["Persuasion"] as number,
        total: (this.skills["Persuasion"] + this.attr["Fellowship"]) as number,
      },
      { 
        name: "Pilot",
        description: "Your ability to control a vehicle.",
        attribute: "Agility",
        rating: this.skills["Pilot"] as number,
        total: (this.skills["Pilot"] + this.attr["Agility"]) as number,
      },
      { 
        name: "Psychic Mastery",
        description: "Your ability to manifest psychic powers, manipulating the Warp to change reality.",
        attribute: "Willpower",
        rating: this.skills["Psychic Mastery"] as number,
        total: (this.skills["Psychic Mastery"] + this.attr["Willpower"]) as number,
      },
      { 
        name: "Scholar",
        description: "Your ability to recall knowledge from your studies.",
        attribute: "Intellect",
        rating: this.skills["Scholar"] as number,
        total: (this.skills["Scholar"] + this.attr["Intellect"]) as number,
      },
      { 
        name: "Stealth",
        description: "Your ability to hide, move without being detected, and disable security systems.",
        attribute: "Agility",
        rating: this.skills["Stealth"] as number,
        total: (this.skills["Stealth"] + this.attr["Agility"]) as number,
      },
      { 
        name: "Survival",
        description: "Your ability to find provisions, secure shelter, and to track or navigate through an organic environment.",
        attribute: "Willpower",
        rating: this.skills["Survival"] as number,
        total: (this.skills["Survival"] + this.attr["Willpower"]) as number,
      },
      { 
        name: "Tech",
        description: "Your ability to understand, use, repair, and dismantle technology.",
        attribute: "Intellect",
        rating: this.skills["Tech"] as number,
        total: (this.skills["Tech"] + this.attr["Intellect"]) as number,
      },
      { 
        name: "Weapon Skill",
        description: "Your skill at close combat, armed or unarmed.",
        attribute: "Initiative",
        rating: this.skills["Weapon Skill"] as number,
        total: (this.skills["Weapon Skill"] + this.attr["Initiative"]) as number,
      },
    ]
    this.skillSource = new MatTableDataSource(this.SKILL_DATA)
    this.updateTraits();
  }

  updateTraits() {
    if(this.hero) {
      this.hero.traitMaxWounds = this.attr["Toughness"] + (this.hero?.tier * 2);
      this.hero.traitMaxShock = this.attr["Willpower"] + this.hero?.tier;
      this.hero.traitDefence = this.attr["Initiative"] - 1;
      this.hero.traitResilience = this.attr["Toughness"] + 1;
      this.hero.traitDetermination = this.attr["Toughness"];
      this.hero.traitSpeed = this.hero?.species.speed;
      this.hero.traitCorruption = 0;
      this.hero.traitConviction = this.attr["Willpower"];
      this.hero.traitResolve = this.attr["Willpower"] - 1;
      this.hero.traitAwareness = Math.ceil((this.skills["Awareness"] + this.attr["Initiative"]) / 2);
      this.hero.traitInfluence = this.attr["Fellowship"] - 1 + (this.hero.archetype.bonuses?.influence ? this.hero.archetype.bonuses?.influence : 0);
      console.log(this.hero.traitInfluence);
      this.hero.traitWealth = this.hero.tier;
      if(this.hero.traitResolve < 1) {
        this.hero.traitResolve = 1;
      }
      if(this.hero.species.name == "Ork") {
        this.hero.traitInfluence = this.attr["Strength"] - 1 + (this.hero.archetype.bonuses?.influence ? this.hero.archetype.bonuses?.influence : 0);
      }
    }

    this.TRAIT_DATA = [
      {
        name: "Max Wounds",
        description: "A measure of how many injuries you can suffer before you potentially die.",
        rating: this.hero?.traitMaxWounds as number,
        formula: "= Toughness + (Tier * 2)",
      },
      {
        name: "Max Shock",
        description: "A measure of how much mental trauma you can take before your will breaks.",
        rating: this.hero?.traitMaxShock as number,
        formula: "= Willpower + Tier",
      },
      {
        name: "Defence",
        description: "Your ability to dodge blows and bullets; essentially how hard you are to hit.",
        rating: this.hero?.traitDefence as number,
        formula: "= Initiative - 1",
      },
      {
        name: "Resilience",
        description: "A representation of how well you can withstand injuries.",
        rating: this.hero?.traitResilience as number,
        formula: "= Toughness + 1",
      },
      {
        name: "Determination",
        description: "Your ability to continue acting despite the damage to your body, ignoring physical harm through force of will.",
        rating: this.hero?.traitDetermination as number,
        formula: "= Toughness",
      },
      {
        name: "Speed",
        description: "How far and how quickly you can move in a given amount of time.",
        rating: this.hero?.traitSpeed as number,
        formula: "= Species Speed",
      },
      {
        name: "Conviction",
        description: "Your ability to withstand corruption and the forces of Chaos.",
        rating: this.hero?.traitConviction as number,
        formula: "= Willpower",
      },
      {
        name: "Resolve",
        description: "Your courage and overall morale.",
        rating: this.hero?.traitResolve as number,
        formula: "= Willpower - 1",
      },
      {
        name: "Passive Awareness",
        description: "Your ability to notice the unusual and sense threats when you aren't actively searching your environment.",
        rating: this.hero?.traitAwareness as number,
        formula: "= Awareness / 2",
      },
      {
        name: "Influence",
        description: "A measure of your societal authoriy and reputation.",
        rating: this.hero?.traitInfluence as number,
        formula: "= Fellowship + Archetype Bonus",
      },
      {
        name: "Wealth",
        description: "A measure of the valuable resources you own.",
        rating: this.hero?.traitWealth as number,
        formula: "= Tier",
      },
    ]
    this.traitSource = new MatTableDataSource(this.TRAIT_DATA)
  }

  raiseAttr(stat: string): void {
    if(this.attr[stat] < 8) {
      this.attr[stat] += 1;
      if(this.attr[stat] == 2) {
        this.xpSpent += 4;
      } else if(this.attr[stat] == 3) {
        this.xpSpent += 6;
      } else if(this.attr[stat] == 4) {
        this.xpSpent += 10;
      } else if(this.attr[stat] == 5) {
        this.xpSpent += 15;
      } else if(this.attr[stat] == 6) {
        this.xpSpent += 20;
      } else if(this.attr[stat] == 7) {
        this.xpSpent += 25;
      } else if(this.attr[stat] == 8) {
        this.xpSpent += 30;
      }
      this.openCustomXpSpentSnackBar();
    }
    this.updateAttr();
  }

  lowerAttr(stat: string): void {
    if(this.attr[stat] > this.baseAttr[stat]) {
      this.attr[stat] -= 1;
      if(this.attr[stat] == 1) {
        this.xpSpent -= 4;
      } else if(this.attr[stat] == 2) {
        this.xpSpent -= 6;
      } else if(this.attr[stat] == 3) {
        this.xpSpent -= 10;
      } else if(this.attr[stat] == 4) {
        this.xpSpent -= 15;
      } else if(this.attr[stat] == 5) {
        this.xpSpent -= 20;
      } else if(this.attr[stat] == 6) {
        this.xpSpent -= 25;
      } else if(this.attr[stat] == 7) {
        this.xpSpent -= 30;
      }
      this.openCustomXpSpentSnackBar();
    }
    this.updateAttr();
  }

  raiseSkill(stat: string): void {
    if(this.skills[stat] < 8) {
      this.skills[stat] += 1;
      this.xpSpent += (2*this.skills[stat]);
      this.openCustomXpSpentSnackBar();
    }
    this.updateSkills();
  }

  lowerSkill(stat: string): void {
    if(this.skills[stat] > this.baseSkills[stat]) {
      this.skills[stat] -= 1;
      this.xpSpent -= (2*this.skills[stat]+2);
      this.openCustomXpSpentSnackBar();
    }
    this.updateSkills();
  }

  saveHeroStats(): void {
    if(this.hero) {
      this.hero.strRating = this.attr["Strength"];
      this.hero.toughRating = this.attr["Toughness"];
      this.hero.agiRating = this.attr["Agility"];
      this.hero.initRating = this.attr["Initiative"];
      this.hero.wilRating = this.attr["Willpower"];
      this.hero.intRating = this.attr["Intellect"];
      this.hero.felRating = this.attr["Fellowship"];
      this.hero.athleticsLevels = this.skills["Athletics"];
      this.hero.athleticsTotal = this.skills["Athletics"] + this.hero.strRating;
      this.hero.awarenessLevels = this.skills["Awareness"];
      this.hero.awarenessTotal = this.skills["Awareness"] + this.hero.intRating;
      this.hero.ballisticsLevels = this.skills["Ballistic Skill"];
      this.hero.ballisticsTotal = this.skills["Ballistic Skill"] + this.hero.agiRating;
      this.hero.cunningLevels = this.skills["Cunning"];
      this.hero.cunningTotal = this.skills["Cunning"] + this.hero.felRating;
      this.hero.deceptionLevels = this.skills["Deception"];
      this.hero.deceptionTotal = this.skills["Deception"] + this.hero.felRating;
      this.hero.insightLevels = this.skills["Insight"];
      this.hero.insightTotal = this.skills["Insight"] + this.hero.felRating;
      this.hero.intimidationLevels = this.skills["Intimidation"];
      this.hero.intimidationTotal = this.skills["Intimidation"] + this.hero.wilRating;
      this.hero.investigationLevels = this.skills["Investigation"];
      this.hero.investigationTotal = this.skills["Investigation"] + this.hero.intRating;
      this.hero.leadershipLevels = this.skills["Leadership"];
      this.hero.leadershipTotal = this.skills["Leadership"] + this.hero.wilRating;
      this.hero.medicaeLevels = this.skills["Medicae"];
      this.hero.medicaeTotal = this.skills["Medicae"] + this.hero.intRating;
      this.hero.persuasionLevels = this.skills["Persuasion"];
      this.hero.persuasionTotal = this.skills["Persuasion"] + this.hero.felRating;
      this.hero.pilotLevels = this.skills["Pilot"];
      this.hero.pilotTotal = this.skills["Pilot"] + this.hero.agiRating;
      this.hero.psychicLevels = this.skills["Psychic Mastery"];
      this.hero.psychicTotal = this.skills["Psychic Mastery"] + this.hero.wilRating;
      this.hero.scholarLevels = this.skills["Scholar"];
      this.hero.scholarTotal = this.skills["Scholar"] + this.hero.intRating;
      this.hero.stealthLevels = this.skills["Stealth"];
      this.hero.stealthTotal = this.skills["Stealth"] + this.hero.agiRating;
      this.hero.survivalLevels = this.skills["Survival"];
      this.hero.survivalTotal = this.skills["Survival"] + this.hero.wilRating;
      this.hero.techLevels = this.skills["Tech"];
      this.hero.techTotal = this.skills["Tech"] + this.hero.intRating;
      this.hero.weaponsLevels = this.skills["Weapon Skill"];
      this.hero.weaponsTotal = this.skills["Weapon Skill"] + this.hero.initRating;
      this.heroService.updateHero(this.hero)
        .subscribe(hero => this.hero = hero);
      this.router.navigate(['../../sheet'], { relativeTo: this.route });
      //this.openCustomSaveSnackBar();
    }
  }

  openCustomXpSpentSnackBar(): void {
    this.snackBar.openFromComponent(IconSnackBarComponent, {
      data: {
        message: "Pending XP Spent: " +
                  this.xpSpent +
                  " (" +
                  ((this.hero?.archetype.cost ? this.hero?.archetype.cost : 0) +
                  (this.hero?.species.cost ? this.hero?.species.cost : 0) +
                  this.xpSpent) +
                  "/" +
                  ((this.hero?.tierXp ? this.hero?.tierXp : 0) +
                  (this.hero?.earnedXp ? this.hero?.earnedXp : 0)) +
                  ")",
        icon: (this.xpSpent > 0
                ? "arrow_circle_up"
                : this.xpSpent < 0
                ? "arrow_circle_down"
                : ""),
      },
      horizontalPosition: 'right'
    })
  }

  openCustomSaveSnackBar(): void {
    this.snackBar.openFromComponent(IconSnackBarComponent, {
      data: {
        message: "Saved Stats",
        icon: "published_with_changes",
      },
      duration: 2000
    })
  }
}

export interface Attribute {
  name: string,
  description: string,
  rating: number,
}

export interface Skill {
  name: string,
  description: string,
  attribute: string,
  rating: number,
  total: number,
}

export interface Trait {
  name: string,
  description: string,
  rating: number,
  formula: string,
}