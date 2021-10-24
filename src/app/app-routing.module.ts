import { GalleryComponent } from './gallery/gallery.component';
import { DataResolver } from './data.resolver';
import { ContactComponent } from './contact/contact.component';
import { ResearchComponent } from './research/research.component';
import { WorkComponent } from './work/work.component';
import { EducationComponent } from './education/education.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    component: PersonalInfoComponent,
    resolve: {
      data: DataResolver,
    },
  },
  {
    path: 'education',
    component: EducationComponent,
    resolve: {
      data: DataResolver,
    },
  },
  {
    path: 'work',
    component: WorkComponent,
    resolve: {
      data: DataResolver,
    },
  },
  {
    path: 'reaserch',
    component: ResearchComponent,
    resolve: {
      data: DataResolver,
    },
  },
  {
    path: 'gallery',
    component: GalleryComponent,
    resolve: {
      data: DataResolver,
    },
  },
  {
    path: 'contact',
    component: ContactComponent,
    resolve: {
      data: DataResolver,
    },
  },

  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
