import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list'
import { MatTableModule } from '@angular/material/table'

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
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
