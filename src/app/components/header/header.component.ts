import { Component, OnInit } from "@angular/core";
import { SettingsService } from "src/app/services/settings.service";
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent{

    constructor(public router: Router) { 
        console.log(this.router.url);
    }
}
