import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/shared/models/hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from 'src/app/shared/services/hero.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RollsSnackBarComponent } from 'src/app/shared/components/rolls-snack-bar/rolls-snack-bar.component';

@Component({
  selector: 'app-hero-details-skills-panel',
  templateUrl: './hero-details-skills-panel.component.html',
  styleUrls: ['./hero-details-skills-panel.component.css']
})
export class HeroDetailsSkillsPanelComponent implements OnInit {
  @Input() hero?: Hero;
  displayedColumns = ['name', 'attribute', 'rating', 'bonus', 'total'];
  SKILL_DATA: Skill[] = [];
  skillSource: any;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  ngDoCheck(): void {
    this.SKILL_DATA = [
      { name: "Athletics",
        attribute: "Strength",
        rating: this.hero?.athleticsLevels as number,
        bonus: this.hero?.strRating as number,
        total: this.hero?.athleticsTotal as number,
      },
      { name: "Awareness",
        attribute: "Intellect",
        rating: this.hero?.awarenessLevels as number,
        bonus: this.hero?.intRating as number,
        total: this.hero?.awarenessTotal as number,
      },
      { name: "Ballistic Skill",
        attribute: "Agility",
        rating: this.hero?.ballisticsLevels as number,
        bonus: this.hero?.agiRating as number,
        total: this.hero?.ballisticsTotal as number,
      },
      { name: "Cunning",
        attribute: "Fellowship",
        rating: this.hero?.cunningLevels as number,
        bonus: this.hero?.felRating as number,
        total: this.hero?.cunningTotal as number,
      },
      { name: "Deception",
        attribute: "Fellowship",
        rating: this.hero?.deceptionLevels as number,
        bonus: this.hero?.felRating as number,
        total: this.hero?.deceptionTotal as number,
      },
      { name: "Insight",
        attribute: "Fellowship",
        rating: this.hero?.insightLevels as number,
        bonus: this.hero?.felRating as number,
        total: this.hero?.insightTotal as number,
      },
      { name: "Intimidation",
        attribute: "Willpower",
        rating: this.hero?.intimidationLevels as number,
        bonus: this.hero?.wilRating as number,
        total: this.hero?.  intimidationTotal as number,
      },
      { name: "Investigation",
        attribute: "Intellect",
        rating: this.hero?.investigationLevels as number,
        bonus: this.hero?.intRating as number,
        total: this.hero?.investigationTotal as number,
      },
      { name: "Leadership",
        attribute: "Willpower",
        rating: this.hero?.leadershipLevels as number,
        bonus: this.hero?.wilRating as number,
        total: this.hero?.leadershipTotal as number,
      },
      { name: "Medicae",
        attribute: "Intellect",
        rating: this.hero?.medicaeLevels as number,
        bonus: this.hero?.intRating as number,
        total: this.hero?.medicaeTotal as number,
      },
      { name: "Persuasion",
        attribute: "Fellowship",
        rating: this.hero?.persuasionLevels as number,
        bonus: this.hero?.felRating as number,
        total: this.hero?.persuasionTotal as number,
      },
      { name: "Pilot",
        attribute: "Agility",
        rating: this.hero?.pilotLevels as number,
        bonus: this.hero?.agiRating as number,
        total: this.hero?.pilotTotal as number,
      },
      { name: "Psychic Mastery",
        attribute: "Willpower",
        rating: this.hero?.psychicLevels as number,
        bonus: this.hero?.wilRating as number,
        total: this.hero?.psychicTotal as number,
      },
      { name: "Scholar",
        attribute: "Intellect",
        rating: this.hero?.scholarLevels as number,
        bonus: this.hero?.intRating as number,
        total: this.hero?.scholarTotal as number,
      },
      { name: "Stealth",
        attribute: "Agility",
        rating: this.hero?.stealthLevels as number,
        bonus: this.hero?.agiRating as number,
        total: this.hero?.stealthTotal as number,
      },
      { name: "Survival",
        attribute: "Willpower",
        rating: this.hero?.survivalLevels as number,
        bonus: this.hero?.wilRating as number,
        total: this.hero?.survivalTotal as number,
      },
      { name: "Tech",
        attribute: "Intellect",
        rating: this.hero?.techLevels as number,
        bonus: this.hero?.intRating as number,
        total: this.hero?.techTotal as number,
      },
      { name: "Weapon Skill",
        attribute: "Initiative",
        rating: this.hero?.weaponsLevels as number,
        bonus: this.hero?.initRating as number,
        total: this.hero?.weaponsTotal as number,
      },
    ]
    this.skillSource = new MatTableDataSource(this.SKILL_DATA)
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  skillCheck(skill: Skill): void {
    let rolls: number[] = [];
    let successes = 0;
    let fails = 0;
    rolls[0] = this.diceRoll();
    if(rolls[0] == 6) {
      successes += 2;
    } else if(rolls[0] > 3) {
      successes++;
    }
    for(let i = 1; i < skill.rating + skill.bonus; i++) {
      rolls[i] = this.diceRoll();
      if(rolls[i] == 6) {
        successes += 2;
      } else if(rolls[i] > 3) {
        successes++;
      }
    }
    this.openRollsSnackBar(skill, rolls, successes, fails)
  }

  diceRoll(): number {
    return Math.floor(Math.random() * 6) + 1;
  }

  openRollsSnackBar(skill: Skill, rolls: number[], successes: number, fails: number): void {
    this.snackBar.openFromComponent(RollsSnackBarComponent, {
      data: {
        message: "Rolling one Wrath die and " + (skill.rating + skill.bonus - 1) + " normal die for " + skill.name + ": ",
        icon1: (rolls[0] == 6 ? "stars" : rolls[0] == 1 ? "error_outline" : rolls[0] < 4 ? "cancel" : "check_circle"),
        icon2: (!rolls[1] ? "" : rolls[1] == 6 ? "star" : rolls[1] < 4 ? "close" : "done"),
        icon3: (!rolls[2] ? "" : rolls[2] == 6 ? "star" : rolls[2] < 4 ? "close" : "done"),
        icon4: (!rolls[3] ? "" : rolls[3] == 6 ? "star" : rolls[3] < 4 ? "close" : "done"),
        icon5: (!rolls[4] ? "" : rolls[4] == 6 ? "star" : rolls[4] < 4 ? "close" : "done"),
        icon6: (!rolls[5] ? "" : rolls[5] == 6 ? "star" : rolls[5] < 4 ? "close" : "done"),
        icon7: (!rolls[6] ? "" : rolls[6] == 6 ? "star" : rolls[6] < 4 ? "close" : "done"),
        icon8: (!rolls[7] ? "" : rolls[7] == 6 ? "star" : rolls[7] < 4 ? "close" : "done"),
        icon9: (!rolls[8] ? "" : rolls[8] == 6 ? "star" : rolls[8] < 4 ? "close" : "done"),
        icon10: (!rolls[9] ? "" : rolls[9] == 6 ? "star" : rolls[9] < 4 ? "close" : "done"),
        icon11: (!rolls[10] ? "" : rolls[10] == 6 ? "star" : rolls[10] < 4 ? "close" : "done"),
        icon12: (!rolls[11] ? "" : rolls[11] == 6 ? "star" : rolls[11] < 4 ? "close" : "done"),
        icon13: (!rolls[12] ? "" : rolls[12] == 6 ? "star" : rolls[12] < 4 ? "close" : "done"),
        icon14: (!rolls[13] ? "" : rolls[13] == 6 ? "star" : rolls[13] < 4 ? "close" : "done"),
        icon15: (!rolls[14] ? "" : rolls[14] == 6 ? "star" : rolls[14] < 4 ? "close" : "done"),
        icon16: (!rolls[15] ? "" : rolls[15] == 6 ? "star" : rolls[15] < 4 ? "close" : "done"),
        color1: (rolls[0] == 6 ? "#ffd700" : rolls[0] < 4 ? "#ff0000" : "#008000"),
        color2: (rolls[1] == 6 ? "#ffd700" : rolls[1] < 4 ? "#ff0000" : "#008000"),
        color3: (rolls[2] == 6 ? "#ffd700" : rolls[2] < 4 ? "#ff0000" : "#008000"),
        color4: (rolls[3] == 6 ? "#ffd700" : rolls[3] < 4 ? "#ff0000" : "#008000"),
        color5: (rolls[4] == 6 ? "#ffd700" : rolls[4] < 4 ? "#ff0000" : "#008000"),
        color6: (rolls[5] == 6 ? "#ffd700" : rolls[5] < 4 ? "#ff0000" : "#008000"),
        color7: (rolls[6] == 6 ? "#ffd700" : rolls[6] < 4 ? "#ff0000" : "#008000"),
        color8: (rolls[7] == 6 ? "#ffd700" : rolls[7] < 4 ? "#ff0000" : "#008000"),
        color9: (rolls[8] == 6 ? "#ffd700" : rolls[8] < 4 ? "#ff0000" : "#008000"),
        color10: (rolls[9] == 6 ? "#ffd700" : rolls[9] < 4 ? "#ff0000" : "#008000"),
        color11: (rolls[10] == 6 ? "#ffd700" : rolls[10] < 4 ? "#ff0000" : "#008000"),
        color12: (rolls[11] == 6 ? "#ffd700" : rolls[11] < 4 ? "#ff0000" : "#008000"),
        color13: (rolls[12] == 6 ? "#ffd700" : rolls[12] < 4 ? "#ff0000" : "#008000"),
        color14: (rolls[13] == 6 ? "#ffd700" : rolls[13] < 4 ? "#ff0000" : "#008000"),
        color15: (rolls[14] == 6 ? "#ffd700" : rolls[14] < 4 ? "#ff0000" : "#008000"),
        color16: (rolls[15] == 6 ? "#ffd700" : rolls[15] < 4 ? "#ff0000" : "#008000"),
        result1: (rolls[0] == 6 ? "Exalted Success! (" + rolls[0] + ")" : rolls[0] == 1 ? "Complication! (" + rolls[0] + ")" : rolls[0] < 4 ? "Failure (" + rolls[0] + ")" : "Success (" + rolls[0] + ")"),
        result2: (rolls[1] == 6 ? "Exalted Success! (" + rolls[1] + ")" : rolls[1] < 4 ? "Failure (" + rolls[1] + ")" : "Success (" + rolls[1] + ")"),
        result3: (rolls[2] == 6 ? "Exalted Success! (" + rolls[2] + ")" : rolls[2] < 4 ? "Failure (" + rolls[2] + ")" : "Success (" + rolls[2] + ")"),
        result4: (rolls[3] == 6 ? "Exalted Success! (" + rolls[3] + ")" : rolls[3] < 4 ? "Failure (" + rolls[3] + ")" : "Success (" + rolls[3] + ")"),
        result5: (rolls[4] == 6 ? "Exalted Success! (" + rolls[4] + ")" : rolls[4] < 4 ? "Failure (" + rolls[4] + ")" : "Success (" + rolls[4] + ")"),
        result6: (rolls[5] == 6 ? "Exalted Success! (" + rolls[5] + ")" : rolls[5] < 4 ? "Failure (" + rolls[5] + ")" : "Success (" + rolls[5] + ")"),
        result7: (rolls[6] == 6 ? "Exalted Success! (" + rolls[6] + ")" : rolls[6] < 4 ? "Failure (" + rolls[6] + ")" : "Success (" + rolls[6] + ")"),
        result8: (rolls[7] == 6 ? "Exalted Success! (" + rolls[7] + ")" : rolls[7] < 4 ? "Failure (" + rolls[7] + ")" : "Success (" + rolls[7] + ")"),
        result9: (rolls[8] == 6 ? "Exalted Success! (" + rolls[8] + ")" : rolls[8] < 4 ? "Failure (" + rolls[8] + ")" : "Success (" + rolls[8] + ")"),
        result10: (rolls[9] == 6 ? "Exalted Success! (" + rolls[9] + ")" : rolls[9] < 4 ? "Failure (" + rolls[9] + ")" : "Success (" + rolls[9] + ")"),
        result11: (rolls[10] == 6 ? "Exalted Success! (" + rolls[10] + ")" : rolls[10] < 4 ? "Failure (" + rolls[10] + ")" : "Success (" + rolls[10] + ")"),
        result12: (rolls[11] == 6 ? "Exalted Success! (" + rolls[11] + ")" : rolls[11] < 4 ? "Failure (" + rolls[11] + ")" : "Success (" + rolls[11] + ")"),
        result13: (rolls[12] == 6 ? "Exalted Success! (" + rolls[12] + ")" : rolls[12] < 4 ? "Failure (" + rolls[12] + ")" : "Success (" + rolls[12] + ")"),
        result14: (rolls[13] == 6 ? "Exalted Success! (" + rolls[13] + ")" : rolls[13] < 4 ? "Failure (" + rolls[13] + ")" : "Success (" + rolls[13] + ")"),
        result15: (rolls[14] == 6 ? "Exalted Success! (" + rolls[14] + ")" : rolls[14] < 4 ? "Failure (" + rolls[14] + ")" : "Success (" + rolls[14] + ")"),
        result16: (rolls[15] == 6 ? "Exalted Success! (" + rolls[15] + ")" : rolls[15] < 4 ? "Failure (" + rolls[15] + ")" : "Success (" + rolls[15] + ")"),
        message2: "\n" + successes + " Successes",
        complication: (rolls[0] == 1 ? "\n" + "COMPLICATION!" : ""),
      }
    })
  }
}

export interface Skill {
  name: string;
  attribute: string;
  rating: number;
  bonus: number;
  total: number,
}