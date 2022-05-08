import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/shared/models/hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from 'src/app/shared/services/hero.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';

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

  testClick(): void {
    console.log("Click!");
  }
}

export interface Skill {
  name: string;
  attribute: string;
  rating: number;
  bonus: number;
  total: number,
}