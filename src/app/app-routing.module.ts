import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from 'src/app/heroes/heroes.component';
import { DashboardComponent } from 'src/app/features/dashboard/dashboard.component';
import { HeroDetailComponent } from 'src/app/features/hero-details/views/hero-detail/hero-detail.component';
import { HeroBuilderComponent } from 'src/app/features/hero-builder/views/hero-builder/hero-builder.component';
import { HeroBuilderInfoComponent } from 'src/app/features/hero-builder/components/hero-builder-info/hero-builder-info.component';
import { HeroBuilderSpeciesComponent } from 'src/app/features/hero-builder/components/hero-builder-species/hero-builder-species.component';
import { HeroBuilderArchetypeComponent } from 'src/app/features/hero-builder/components/hero-builder-archetype/hero-builder-archetype.component';
import { HeroBuilderStatsComponent } from 'src/app/features/hero-builder/components/hero-builder-stats/hero-builder-stats.component';
import { HeroBuilderFactionComponent } from 'src/app/features/hero-builder/components/hero-builder-faction/hero-builder-faction.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'characters/:id/sheet', component: HeroDetailComponent },
  { path: 'characters/:id/builder', component: HeroBuilderComponent,
      children: [
        {path: 'info', component: HeroBuilderInfoComponent},
        {path: 'species', component: HeroBuilderSpeciesComponent},
        {path: 'faction', component: HeroBuilderFactionComponent},
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