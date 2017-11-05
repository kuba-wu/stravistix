import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { AthleteSettingsComponent } from './athlete-settings/athlete-settings.component';
import { CommonSettingsComponent } from './common-settings/common-settings.component';
import { ChromeStorageService } from "./services/chrome-storage.service";

@NgModule({
	declarations: [
		AppComponent,
		AthleteSettingsComponent,
		CommonSettingsComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [ChromeStorageService],
	bootstrap: [AppComponent]
})
export class AppModule {
}