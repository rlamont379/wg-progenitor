import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/shared/models/hero';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from 'src/app/shared/services/hero.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IconSnackBarComponent } from 'src/app/shared/components/icon-snack-bar.component';


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
      this.hero.tierXp = this.hero.tier * 100;
      this.heroService.updateHero(this.hero)
        .subscribe(hero => this.hero = hero);
      this.router.navigate(['../species'], { relativeTo: this.route });
      this.openCustomSnackBar();
    }
  }

  openSaveSnackBar(): void {
    this.snackBar.open("Saved Info", "OK", {duration: 4000});
  }

  openCustomSnackBar(): void {
    this.snackBar.openFromComponent(IconSnackBarComponent, {
      data: {
        message: "Saved Info",
        icon: "published_with_changes",
      },
      duration: 2000
    })
  }
}