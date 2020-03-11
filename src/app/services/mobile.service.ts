import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Mobile } from "../models/mobile.model";

@Injectable({
  providedIn: "root"
})
// MobileService provides logic to manipulate the MObileList fetched by Json 
export class MobileService {

  //Used to store data fetched from Json Server
  mobileArray: Array<Mobile> = [];


  // http => Used to fetch data from Json file asynchronously
  // COnstructor calls the method fetchMobileListFromJson() by subscribing to it
  // When error occurs, it will be properly Logged in to the Console
  // When All data is fetched, a message in console will be printed indicating completion
  constructor(public http: HttpClient) {
    this.fetchMobileListFromJson().subscribe(
      (data: Array<Mobile>) => {
        this.mobileArray = data;
      },
      error => {
        console.log(error);
      },
      () => {
        console.log("Completed");
      }
    );
  }

  //Returns an observable object to fetch json file data asynchronously
  //Will fetch data only once
  fetchMobileListFromJson() {
    return this.http.get("../assets/mobiles.json");
  }

  //Returs the complete MobileList created locally
  fetchAll() {
    return this.mobileArray;
  }

  //Delete Mobile from the local array list
  deleteMobile(index: number) {
    this.mobileArray.splice(index, 1);
  }

  //Sorts mobileList by Id
  sortById() {
    return this.mobileArray.sort((a, b) =>
      a.mobId > b.mobId ? 1 : a.mobId < b.mobId ? -1 : 0
    );
  }

  //sorts mobileArray by Name
  sortByName() {
    return this.mobileArray.sort((a, b) =>
      a.mobName > b.mobName ? 1 : a.mobName < b.mobName ? -1 : 0
    );
  }

  //sorts mobileArray by Price
  sortByPrice() {
    return this.mobileArray.sort((a, b) =>
      a.mobPrice > b.mobPrice ? 1 : a.mobPrice < b.mobPrice ? -1 : 0
    );
  }
}
