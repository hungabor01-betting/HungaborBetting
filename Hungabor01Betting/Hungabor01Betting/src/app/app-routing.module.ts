import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WikipediaComponent } from './wikipedia/wikipedia.component';
import { HistoryComponent } from './history/history.component';
import { PendingPicksComponent } from './pending-picks/pending-picks.component';
import { StrategiesComponent } from './strategies/strategies.component';
import { ToolsComponent } from './tools/tools.component';
import { StatisticsComponent } from './statistics/statistics.component';


const routes: Routes = [
  {path: 'strategies', component: StrategiesComponent},
  {path: 'pendingPicks', component: PendingPicksComponent},
  {path: 'tools', component: ToolsComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'statistics', component: StatisticsComponent},
  {path: 'wikipedia', component: WikipediaComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
