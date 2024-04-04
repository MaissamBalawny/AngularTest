import { CartService } from './pages/services/carts.service';
import {  Component, OnInit } from "@angular/core";



@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements  OnInit {
  title = "Angular Test";
  layoutType!: string;
  totalItem:any
  constructor( private cartService:CartService) { }

  ngOnInit(): void {
      document.body.setAttribute('layout',this.layoutType)
    document.documentElement.setAttribute('data-layout', 'vertical');
    document.documentElement.setAttribute('data-topbar', 'light');
    document.documentElement.setAttribute('data-sidebar', 'dark');
    document.documentElement.setAttribute('data-sidebar-size', 'sm-hover');
  }
}
