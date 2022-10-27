import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { MainViewComponent } from './views/main-view/main-view.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome'
import { faCreditCard, faGear, faHouse } from '@fortawesome/free-solid-svg-icons';
import { SettingsViewComponent } from './views/settings-view/settings-view.component';
import { PaymentsViewComponent } from './views/payments-view/payments-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainViewComponent,
    SettingsViewComponent,
    PaymentsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faHouse, faGear, faCreditCard);
  }
}
