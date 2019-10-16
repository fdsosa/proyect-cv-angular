import { Component, OnInit } from "@angular/core";
import { SettingsService } from "src/app/services/settings.service";
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent{

    menu_display = false;

    constructor(public router: Router) { 
        console.log(this.router.url);
    }

    showMenu(menuRef) {
        if(this.menu_display) { 
            this.menu_display = false;
            menuRef.style.height = "0";
            menuRef.style.opacity = "0";
        }
        else {
            this.menu_display = true;
            menuRef.style.height = "30vh";
            menuRef.style.opacity = "1";
        }
    }
}
