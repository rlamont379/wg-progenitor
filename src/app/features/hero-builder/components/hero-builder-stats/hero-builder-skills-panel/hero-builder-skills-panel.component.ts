import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/shared/models/hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from 'src/app/shared/services/hero.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-hero-builder-skills-panel',
  templateUrl: './hero-builder-skills-panel.component.html',
  styleUrls: ['./hero-builder-skills-panel.component.css']
})
export class HeroBuilderSkillsPanelComponent implements OnInit {
  @Input() hero?: Hero;
  displayedColumns = ['name', 'attribute', 'rating', 'total'];
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
        rating: this.hero?.skillAthletics as number,
        total: this.hero?.skillAthletics as number,
      },
      { name: "Awareness",
        attribute: "Intellect",
        rating: this.hero?.skillAwareness as number,
        total: this.hero?.skillAwareness as number,
      },
      { name: "Ballistic Skill",
        attribute: "Agility",
        rating: this.hero?.skillBallistics as number,
        total: this.hero?.skillBallistics as number,
      },
      { name: "Cunning",
        attribute: "Fellowship",
        rating: this.hero?.skillCunning as number,
        total: this.hero?.skillCunning as number,
      },
      { name: "Deception",
        attribute: "Fellowship",
        rating: this.hero?.skillDeception as number,
        total: this.hero?.skillDeception as number,
      },
      { name: "Insight",
        attribute: "Fellowship",
        rating: this.hero?.skillInsight as number,
        total: this.hero?.skillInsight as number,
      },
      { name: "Intimidation",
        attribute: "Willpower",
        rating: this.hero?.skillIntimidation as number,
        total: this.hero?.skillIntimidation as number,
      },
      { name: "Investigation",
        attribute: "Intellect",
        rating: this.hero?.skillInvestigation as number,
        total: this.hero?.skillInvestigation as number,
      },
      { name: "Leadership",
        attribute: "Willpower",
        rating: this.hero?.skillLeadership as number,
        total: this.hero?.skillLeadership as number,
      },
      { name: "Medicae",
        attribute: "Intellect",
        rating: this.hero?.skillMedicae as number,
        total: this.hero?.skillMedicae as number,
      },
      { name: "Persuasion",
        attribute: "Fellowship",
        rating: this.hero?.skillPersuasion as number,
        total: this.hero?.skillPersuasion as number,
      },
      { name: "Pilot",
        attribute: "Agility",
        rating: this.hero?.skillPilot as number,
        total: this.hero?.skillPilot as number,
      },
      { name: "Psychic Mastery",
        attribute: "Willpower",
        rating: this.hero?.skillPsychic as number,
        total: this.hero?.skillPsychic as number,
      },
      { name: "Scholar",
        attribute: "Intellect",
        rating: this.hero?.skillScholar as number,
        total: this.hero?.skillScholar as number,
      },
      { name: "Stealth",
        attribute: "Agility",
        rating: this.hero?.skillStealth as number,
        total: this.hero?.skillStealth as number,
      },
      { name: "Survival",
        attribute: "Willpower",
        rating: this.hero?.skillSurvival as number,
        total: this.hero?.skillSurvival as number,
      },
      { name: "Tech",
        attribute: "Intellect",
        rating: this.hero?.skillTech as number,
        total: this.hero?.skillTech as number,
      },
      { name: "Weapon Skill",
        attribute: "Initiative",
        rating: this.hero?.skillWeapons as number,
        total: this.hero?.skillWeapons as number,
      },
    ]
    this.skillSource = new MatTableDataSource(this.SKILL_DATA)
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
}

export interface Skill {
  name: string;
  attribute: string;
  rating: number;
  total: number,
}