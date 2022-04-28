import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../../../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../../../../hero.service';

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


  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
}
