
import {map} from 'rxjs/operators';
import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    @Input('theme') theme: string;
    workExp = [];
    months = ["January","February","March","April","May","June","July", "August","September","October","November","December"];
    myProjects = [];
    visibleProjects = 8;
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
        if (this.buttonText === 'Load More') {
            this.visibleProjects = 50;
            this.buttonText = 'Show Less';
        } else {
          this.visibleProjects = 8;
          this.buttonText = 'Load More';
        }
        this.processJson();
      }

    getposts() {
        return this.http.get('assets/data.json').pipe(map(res => res.json()));
    }

    processJson() {
        this.workExp = [];
        this.myProjects = [];
        this.getposts().subscribe((allWork) => {
            allWork.forEach(exp => {
                if (exp.hasOwnProperty('company')) this.workExp.push(exp);
                else if (this.myProjects.length <= this.visibleProjects) this.myProjects.push(exp);
            });
        });
    }

    ngOnInit() {
        this.processJson();
    }

}
