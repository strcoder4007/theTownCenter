
import {map} from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    workExp = [];
    months = ["January","February","March","April","May","June","July", "August","September","October","November","December"];
    myProjects = [];
    myProjects1 = [];
    myProjects2 = [];
    loadFirst = false;
    buttonText = 'Load More';

    constructor(public http: Http) { }

    get duration() {
        if (this.workExp && this.workExp.length) {
            let durations = [];
            this.workExp.forEach(exp => {
                const start = exp.duration.split(' - ')[0];
                const startMonth = this.months.indexOf(start.split(' ')[0]);
                const startYear = parseInt(start.split(' ')[1]);

                let end = exp.duration.split(' - ')[1];
                if (end === 'present')
                    end = this.months[new Date().getMonth()] + ' ' + new Date().getFullYear();
                const endMonth = this.months.indexOf(end.split(' ')[0]);
                const endYear = parseInt(end.split(' ')[1]);

                let totalMonths = 0;
                let duration = '';

                if (startYear === endYear) totalMonths = endMonth - startMonth;
                else totalMonths = (12 - startMonth + endMonth) + ((endYear - startYear - 1)*12)
                ++totalMonths;

                if (totalMonths >= 12) {
                    duration = (Math.floor(totalMonths/12) === 1) ? Math.floor(totalMonths/12) + ' year' : Math.floor(totalMonths/12) + ' years';
                    if (totalMonths%12 !== 0)
                        duration += ' ' + ((totalMonths%12 === 1) ? totalMonths%12 + ' month' : totalMonths%12 + ' months');
                } else duration = (totalMonths === 1) ? totalMonths + ' month' : totalMonths + ' months';
                durations.push(duration);
            });
            return durations;
        }
      return  ['', '', '', ''];
    }

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
        this.getposts().subscribe((allWork) => {
            allWork.forEach(exp => {
                if (exp.hasOwnProperty('company')) this.workExp.push(exp);
                else this.myProjects.push(exp);
            });
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
