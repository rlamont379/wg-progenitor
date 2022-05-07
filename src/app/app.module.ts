import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from 'src/app/shared/services/in-memory-data.service';
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
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppComponent } from 'src/app/app.component';
import { HeroesComponent } from 'src/app/heroes/heroes.component';
import { HeroDetailComponent } from 'src/app/features/hero-details/views/hero-detail/hero-detail.component';
import { MessagesComponent } from 'src/app/messages/messages.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { DashboardComponent } from 'src/app/features/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroBuilderComponent } from 'src/app/features/hero-builder/views/hero-builder/hero-builder.component';
import { HeroDetailsInfoPanelComponent } from 'src/app/features/hero-details/components/hero-details-info-panel/hero-details-info-panel.component';
import { HeroSurvivalPanelComponent } from 'src/app/features/hero-details/components/hero-survival-panel/hero-survival-panel.component';
import { HeroDetailsAttributesPanelComponent } from 'src/app/features/hero-details/components/hero-details-attributes-panel/hero-details-attributes-panel.component';
import { HeroDetailsTraitsPanelComponent } from 'src/app/features/hero-details/components/hero-details-traits-panel/hero-details-traits-panel.component';
import { HeroDetailsSkillsPanelComponent } from 'src/app/features/hero-details/components/hero-details-skills-panel/hero-details-skills-panel.component';
import { HeroBuilderInfoComponent } from 'src/app/features/hero-builder/components/hero-builder-info/hero-builder-info.component';
import { HeroBuilderNavbarComponent } from 'src/app/features/hero-builder/components/hero-builder-navbar/hero-builder-navbar.component';
import { HeroBuilderSpeciesComponent } from 'src/app/features/hero-builder/components/hero-builder-species/hero-builder-species.component';
import { HeroBuilderArchetypeComponent } from 'src/app/features/hero-builder/components/hero-builder-archetype/hero-builder-archetype.component';
import { HeroBuilderStatsComponent } from 'src/app/features/hero-builder/components/hero-builder-stats/hero-builder-stats.component';
import { HeroBuilderFactionComponent } from 'src/app/features/hero-builder/components/hero-builder-faction/hero-builder-faction.component';
import { IconSnackBarComponent } from 'src/app/shared/components/icon-snack-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroBuilderComponent,
    HeroDetailsInfoPanelComponent,
    HeroSurvivalPanelComponent,
    HeroDetailsAttributesPanelComponent,
    HeroDetailsTraitsPanelComponent,
    HeroDetailsSkillsPanelComponent,
    HeroBuilderInfoComponent,
    HeroBuilderNavbarComponent,
    HeroBuilderSpeciesComponent,
    HeroBuilderArchetypeComponent,
    HeroBuilderStatsComponent,
    HeroBuilderFactionComponent,
    IconSnackBarComponent,
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
    MatDividerModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
