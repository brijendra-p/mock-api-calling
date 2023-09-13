import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListViewComponent } from './list-view/list-view.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
// import { CustomPreloadingService } from './shared/custom-preloading.service';
import { RouterModule, Routes } from '@angular/router';
import { ImageWithLoadingComponent } from './image-with-loading/image-with-loading.component';
// import { LazyLoadImageModule } from 'ng-lazyload-image';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./list-view/list-view.module').then((m) => m.ListViewModule),
  },]
@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    NavbarComponent,
    ImageWithLoadingComponent,
    /* ... */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // LazyLoadImageModule,

    [RouterModule.forRoot(routes)],
    /* ... */

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
