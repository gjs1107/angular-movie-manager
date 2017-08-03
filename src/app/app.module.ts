import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { SideBarComponent } from './pages/common/sidebar/sidebar.component';
import { MovieAddrComponent } from './pages/movie/movie-add.component';
import { GameAddrComponent } from './pages/game/game-add.component';
import { ShowAddrComponent } from './pages/show/show-add.component';


import { AppRoutingModule }     from './router/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    MovieAddrComponent,
    GameAddrComponent,
    ShowAddrComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
