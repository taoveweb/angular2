import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <input #box (keyup.enter)="onKey(box.value)"/>
    <p>{{values}}</p>
    <h2 (click)="onClickMe($event)">my favorite hero is :{{myhero}}</h2>
    <ul>
    <li *ngFor="#hero of heroes">{{hero.name}}</li>
    </ul>
    `
})
export class AppComponent {
    title='Tour of heroes';
    myhero="windstorm";
    values="";
    heroes = [
        new Hero(1,'windstorm'),
        new Hero(13,'bombato'),
        new Hero(15,'mageta'),
        new Hero(16,'tornado'),
    ];

    onKey(value:string){
        this.values+=value;
    }
}