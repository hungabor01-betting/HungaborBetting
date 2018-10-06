import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { WikipediaComponent } from './wikipedia/wikipedia.component';
import { PendingPicksComponent } from './pending-picks/pending-picks.component';
import { StrategiesModule } from './strategies/strategies.module';
import { ToolsModule } from './tools/tools.module';
import { StatisticsModule } from './statistics/statistics.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HistoryComponent,
    WikipediaComponent,
    PendingPicksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    StrategiesModule,
    ToolsModule,
    StatisticsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
