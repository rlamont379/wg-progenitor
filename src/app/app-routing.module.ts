import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroBuilderComponent } from './hero-builder/hero-builder.component';
import { HeroBuilderInfoComponent } from './hero-builder-info/hero-builder-info.component';
import { HeroBuilderSpeciesComponent } from './hero-builder-species/hero-builder-species.component';
import { HeroBuilderArchetypeComponent } from './hero-builder-archetype/hero-builder-archetype.component';
import { HeroBuilderStatsComponent } from './hero-builder-stats/hero-builder-stats.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'characters/:id/sheet', component: HeroDetailComponent },
  { path: 'characters/:id/builder', component: HeroBuilderComponent,
      children: [
        {path: 'info', component: HeroBuilderInfoComponent},
        {path: 'species', component: HeroBuilderSpeciesComponent},
        {path: 'archetype', component: HeroBuilderArchetypeComponent},
        {path: 'stats', component: HeroBuilderStatsComponent}
      ]
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }