
import {map} from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    myProjects = [];
    myProjects1 = [];
    myProjects2 = [];
    loadFirst = false;
    buttonText = 'Load More';

    constructor(public http: Http) { }

    loadMore() {
        if (this.buttonText == 'Show Less') {
            this.loadFirst = false;
            this.buttonText = 'Load More';
        } else {
          this.loadFirst = true;
          this.buttonText = 'Show Less';
        }
    }

    getposts() {
        return this.http.get('assets/data.json').pipe(map(res => res.json()));
    }

    processJson() {
        this.getposts().subscribe((projects) => {
            this.myProjects = projects;
            console.log(this.myProjects);
            for (let i  = 0; i < this.myProjects.length; i++) {
                for (let j = 0; j < this.myProjects[i].tech.length - 1; j++) {
                    this.myProjects[i].tech[j] = this.myProjects[i].tech[j] + ',';
                }
                if (i < 9)
                    this.myProjects1.push(this.myProjects[i]);
                else
                    this.myProjects2.push(this.myProjects[i]);
            }
        });
    }

    ngOnInit() {
        this.processJson();
    }

}
