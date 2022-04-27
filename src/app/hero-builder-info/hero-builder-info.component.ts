import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-hero-builder-info',
  templateUrl: './hero-builder-info.component.html',
  styleUrls: ['./hero-builder-info.component.css']
})
export class HeroBuilderInfoComponent implements OnInit {
  @Input() hero?: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private router: Router,
    private location: Location,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.parent?.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  updateHero(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(hero => this.hero = hero);
      this.router.navigate(['../species'], { relativeTo: this.route });
      this.openSaveSnackBar();
    }
  }

  openSaveSnackBar(): void {
    this.snackBar.open("Saved", "OK", {duration: 2000});
  }
}