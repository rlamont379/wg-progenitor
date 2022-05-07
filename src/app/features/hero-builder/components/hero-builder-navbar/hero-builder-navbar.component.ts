import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Hero } from 'src/app/shared/models/hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from 'src/app/shared/services/hero.service';

@Component({
  selector: 'app-hero-builder-navbar',
  templateUrl: './hero-builder-navbar.component.html',
  styleUrls: ['./hero-builder-navbar.component.css']
})
export class HeroBuilderNavbarComponent implements OnInit {
  @Input() hero?: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.parent?.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
}
