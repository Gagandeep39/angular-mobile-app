import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ListComponent } from "./list/list.component";

import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

//List Component path is specified
// Default component that will be loaded is list
const routes: Routes = [
  { path: "list", component: ListComponent },
  { path: "", redirectTo: "list", pathMatch: "full" }
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent //Component to display a list of Mobile
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), //To Implement routing
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
