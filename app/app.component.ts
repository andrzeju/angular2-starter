import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.template.html'
})
export class AppComponent {
    titles: String [] = ["Straight Shooter", "Bad Company"];

    removeVinyl = function() {
        let index = 0;
        this.titles.splice(index);
    };

    addVinyl = function(newTitle) {
        this.titles.push(newTitle);
    }
 }