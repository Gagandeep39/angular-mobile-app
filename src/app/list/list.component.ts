import { Component, OnInit } from "@angular/core";
import { MobileService } from "../services/mobile.service";
import { Mobile } from "../models/mobile.model";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})

// Displays a list of All mobiles by making calls to various service methods
export class ListComponent implements OnInit {
  //Create and initialize a MobileArray
  mobileArray: Array<Mobile> = [];

  // Constructor to call fetchAll() method from service class
  // Calls the method after a timeout of 100ms
  // Data is fetched  asynchrnously from file and it is not available instantly, hence timeout is used for delay
  constructor(public service: MobileService) {
    setTimeout(() => {
      this.mobileArray = service.fetchAll();
    }, 150);
  }

  ngOnInit() {}

  //Takes index as parameter
  //index will be passed as paramter to the service class where delete logic is present
  deleteMobile(index: number) {
    this.service.deleteMobile(index);
  }

  //Service method to sort data by ID is called
  sortById() {
    this.mobileArray = this.service.sortById();
  }

  //Service method to sort data by Name is called
  sortByName() {
    this.mobileArray = this.service.sortByName();
  }

  //Service method to sort data by Price is called
  sortByPrice() {
    this.mobileArray = this.service.sortByPrice();
  }
}
