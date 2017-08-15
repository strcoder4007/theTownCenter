import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    myProjects = [];    
    myProjects1 = [];
    myProjects2 = [];
    myProjects3 = [];
    myClicks: number = 0;
    loadFirst: boolean = false;
    loadSecond: boolean = false;
    buttonText: string = "Load More";

    constructor(public http: Http) { }

    loadMore() {
        if(this.buttonText == "Show Less"){
            this.myClicks = 0;
            this.loadFirst = false;
            this.loadSecond = false;
            this.buttonText = "Load More";
        }
        else {
            ++this.myClicks;
            if(this.myClicks == 1)
                this.loadFirst = true;
            else if(this.myClicks == 2) {
                this.loadSecond = true;
                this.buttonText = "Show Less";
            }
        }
    }

    getposts() {
        return this.http.get("assets/data.json").map(res => res.json());
    }

    processJson() {
        this.getposts().subscribe((projects) => {
            this.myProjects = projects;
            console.log(this.myProjects);
            for(let i  = 0; i < this.myProjects.length; i++) {
                for(let j = 0; j < this.myProjects[i].tech.length-1; j++) {
                    this.myProjects[i].tech[j] = this.myProjects[i].tech[j]+',';
                }
                if(i < 6)
                    this.myProjects1.push(this.myProjects[i]);
                else if(i < 9)
                    this.myProjects2.push(this.myProjects[i]);
                else
                    this.myProjects3.push(this.myProjects[i]);                
            }
        })
    }

    ngOnInit() {
        this.processJson();
    }

}
