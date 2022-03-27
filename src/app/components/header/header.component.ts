import { Component, Inject, OnInit, Input, HostListener, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() headerMenu;
  public currentIndex = 0;
  @Input('story') year: number;
  @Input() active = false;
  selectedItem;
  currentItem;
  @Input() logo;
  @Input() socialMenu;
  schema = {}
  defaultImage = '/assets/img_px.gif';
  public toggleClass: boolean;
  menuTitle: string = '';
  isBrowser: boolean;
  dropdowns = {
    menuTitle: false
  }
  innerWidth: number;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId,
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.innerWidth = window.innerWidth
    }
  }

  ngOnInit(): void {
    this.headerMenu.map(menu => {
      this.menuTitle = menu.title
      if (this.router.url == menu.url) {
        this.listClick(event, menu)
      }
    })


    //Org Schema
    this.schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "IDP Education",
      "url": "https://careers.idp.com",
      "logo": {
        "@type": "ImageObject",
        "url": "http://images.ctfassets.net/8bbwomjfix8m/642uXdFT31j1WCP1GfLn74/18bf4641e4cc7232aa8ed2fb592cf1d0/idp-logo.svg",
        "width": 243,
        "height": 58

        //Org Schema
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (this.isBrowser) {
      this.innerWidth = window.innerWidth;
    }
  }
  togg(name) {
    if (this.isBrowser) {
      if (this.innerWidth <= 767) {
        this.dropdowns[name] = !this.dropdowns[name];
      }
    }

  }
  clsMenu() {
    this.document.body.classList.remove('menu_open');
  }
  opnMenu() {
    this.document.body.classList.add('menu_open');
  }
  selectTab(index) {
    this.currentIndex = index;
  }

  listClick(event, newValue) {

    this.selectedItem = newValue;
    this.currentItem = this.document.body.classList;
    if (this.currentItem = "active") {

    };
  }
}
