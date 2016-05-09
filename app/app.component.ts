import { Component, OnInit } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES } from '@angular/router';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { HeroListComponent }     from './heroes/hero-list.component';
import { HeroDetailComponent }   from './heroes/hero-detail.component';
import { FuckComponent }   from './fuck/fuck.component';
import { DialogService }         from './dialog.service';
import { HeroService }           from './heroes/hero.service';
@Component({
    selector: 'my-app',
    template: `
    <h1 class="title">Component Router</h1>
    <nav>
      <a [routerLink]="['/crisis-center']">Crisis Center</a>
      <a [routerLink]="['/heroes']">Heroes</a>
      <a [routerLink]="['/fuck']">fuck</a>
    </nav>
    <router-outlet></router-outlet>
  `,
    providers:  [DialogService, HeroService],
    directives: [ROUTER_DIRECTIVES]
})
@Routes([
    {path: '/crisis-center',  component: CrisisCenterComponent},
    {path: '/heroes',  component: CrisisCenterComponent},
    {path: '/fuck',  component: FuckComponent},
    {path: '/hero/:id', component: HeroDetailComponent},
])
export class AppComponent implements OnInit {
    constructor(private router: Router) {}
    ngOnInit() {
        this.router.navigate(['/crisis-center']);
    }
}