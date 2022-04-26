import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroBuilderComponent } from './hero-builder/hero-builder.component';
import { HeroInfoPanelComponent } from './hero-info-panel/hero-info-panel.component';
import { HeroSurvivalPanelComponent } from './hero-survival-panel/hero-survival-panel.component';
import { HeroAttributesPanelComponent } from './hero-attributes-panel/hero-attributes-panel.component';
import { HeroTraitsPanelComponent } from './hero-traits-panel/hero-traits-panel.component';
import { HeroSkillsPanelComponent } from './hero-skills-panel/hero-skills-panel.component';
import { HeroBuilderInfoComponent } from './hero-builder-info/hero-builder-info.component';
import { HeroBuilderNavbarComponent } from './hero-builder-navbar/hero-builder-navbar.component';
import { HeroBuilderSpeciesComponent } from './hero-builder-species/hero-builder-species.component';
import { HeroBuilderArchetypeComponent } from './hero-builder-archetype/hero-builder-archetype.component';
import { HeroBuilderStatsComponent } from './hero-builder-stats/hero-builder-stats.component';
import { HeroBuilderFactionComponent } from './hero-builder-faction/hero-builder-faction.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroBuilderComponent,
    HeroInfoPanelComponent,
    HeroSurvivalPanelComponent,
    HeroAttributesPanelComponent,
    HeroTraitsPanelComponent,
    HeroSkillsPanelComponent,
    HeroBuilderInfoComponent,
    HeroBuilderNavbarComponent,
    HeroBuilderSpeciesComponent,
    HeroBuilderArchetypeComponent,
    HeroBuilderStatsComponent,
    HeroBuilderFactionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatTableModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
