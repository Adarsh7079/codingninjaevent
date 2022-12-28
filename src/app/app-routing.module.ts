import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlltimefavbootcampComponent } from './alltimefavbootcamp/alltimefavbootcamp.component';
import { AlltimefavoriteComponent } from './alltimefavorite/alltimefavorite.component';
import { AlltimefavwebinarsComponent } from './alltimefavwebinars/alltimefavwebinars.component';
import { AlltimefavworkshopComponent } from './alltimefavworkshop/alltimefavworkshop.component';
import { ArchiveComponent } from './archive/archive.component';
import { ArchivedbootcampComponent } from './archivedbootcamp/archivedbootcamp.component';
import { ArchivedcodingComponent } from './archivedcoding/archivedcoding.component';
import { ArchivedworkshopComponent } from './archivedworkshop/archivedworkshop.component';
import { BootcampseventsComponent } from './bootcampsevents/bootcampsevents.component';
import { CodingeventsComponent } from './codingevents/codingevents.component';
import { EventComponent } from './event/event.component';
import { RecordedwebinarsComponent } from './recordedwebinars/recordedwebinars.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { UpcomingbootcampComponent } from './upcomingbootcamp/upcomingbootcamp.component';
import { UpcomingcodingComponent } from './upcomingcoding/upcomingcoding.component';
import { UpcomingwebinarsComponent } from './upcomingwebinars/upcomingwebinars.component';
import { UpcomingworkshopComponent } from './upcomingworkshop/upcomingworkshop.component';
import { WebinarsComponent } from './webinars/webinars.component';
import { WorkshopComponent } from './workshop/workshop.component';

const routes: Routes = [
  {
    path:'events',
    children:[
      {
        path:'',
        component:UpcomingComponent
      },
      {
        path:'upcomings'
        ,component:UpcomingComponent
      },
      {
        path:'archives'
        ,component:ArchiveComponent
      },
      {
        path:'alltimefavoriteswebinarsng'
        ,component:AlltimefavoriteComponent
      }
    ]
  },
  {
    path:'webinar',
    children:[
      {
        path:'',
        component:UpcomingwebinarsComponent
      },
      {
        path:'upcomingswebinars'
        ,component:UpcomingComponent
      },
      {
        path:'recordeswebinar'
        ,component:RecordedwebinarsComponent
      },
      {
        path:'aalltimefavoriteswebinars'
        ,component:AlltimefavwebinarsComponent
      }
    ]
   
  },
   {
    path:'codingevents',
    children:[
      {
        path:'',
        component:CodingeventsComponent
      },
      {
        path:'upcomingcoding'
        ,component:UpcomingcodingComponent
      },
      {
        path:'archivescoding'
        ,component:ArchivedcodingComponent
      }
    ]
  },
  {
    path:'bootcampsevents',
    children:[
      {
        path:'',
        component:BootcampseventsComponent
      },
      {
        path:'upcomingsbootcamp'
        ,component:BootcampseventsComponent
      },
      {
        path:'archivesbootcamp'
        ,component:ArchivedbootcampComponent
      },
      {
        path:'alltimefavbootcamp'
        ,component:AlltimefavbootcampComponent
      }
    ]
  },
  {
    path:'workshop',
    children:[
      {
        path:'',
        component:UpcomingworkshopComponent
      },
      {
        path:'upcomingsworkshop'
        ,component:UpcomingworkshopComponent
      },
      {
        path:'archivesworkshop'
        ,component:ArchivedworkshopComponent
      },
      {
        path:'archivesworkshop'
        ,component:AlltimefavworkshopComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
