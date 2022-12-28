import { NgModule, OnDestroy, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { WebinarsComponent } from './webinars/webinars.component';
import { CodingeventsComponent } from './codingevents/codingevents.component';
import { BootcampseventsComponent } from './bootcampsevents/bootcampsevents.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { AlltimefavoriteComponent } from './alltimefavorite/alltimefavorite.component';
import { ArchiveComponent } from './archive/archive.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { UpcomingwebinarsComponent } from './upcomingwebinars/upcomingwebinars.component';
import { RecordedwebinarsComponent } from './recordedwebinars/recordedwebinars.component';
import { AlltimefavwebinarsComponent } from './alltimefavwebinars/alltimefavwebinars.component';
import { UpcomingcodingComponent } from './upcomingcoding/upcomingcoding.component';
import { ArchivedcodingComponent } from './archivedcoding/archivedcoding.component';
import { UpcomingbootcampComponent } from './upcomingbootcamp/upcomingbootcamp.component';
import { ArchivedbootcampComponent } from './archivedbootcamp/archivedbootcamp.component';
import { AlltimefavbootcampComponent } from './alltimefavbootcamp/alltimefavbootcamp.component';
import { AlltimefavworkshopComponent } from './alltimefavworkshop/alltimefavworkshop.component';
import { UpcomingworkshopComponent } from './upcomingworkshop/upcomingworkshop.component';
import { ArchivedworkshopComponent } from './archivedworkshop/archivedworkshop.component';


@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    WebinarsComponent,
    CodingeventsComponent,
    BootcampseventsComponent,
    WorkshopComponent,
    UpcomingComponent,
    AlltimefavoriteComponent,
    ArchiveComponent,
    UpcomingwebinarsComponent,
    RecordedwebinarsComponent,
    AlltimefavwebinarsComponent,
    UpcomingcodingComponent,
    ArchivedcodingComponent,
    UpcomingbootcampComponent,
    ArchivedbootcampComponent,
    AlltimefavbootcampComponent,
    AlltimefavworkshopComponent,
    UpcomingworkshopComponent,
    ArchivedworkshopComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule 
 {}
