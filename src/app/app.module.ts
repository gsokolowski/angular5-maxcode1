import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { CakeComponent } from './cake/cake.component';
import { FlourComponent } from './flour/flour.component';


@NgModule({
    declarations: [
        AppComponent,
        ServerComponent,
        ServersComponent,
        CakeComponent,
        FlourComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
