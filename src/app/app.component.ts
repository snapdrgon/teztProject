import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tezt of Concepts';
  today:Date;
  formattedDate:string;
  months:string[] =  ['January','February', 'March', 'April', 'May',
  'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  post = {
    title:"Taz Title",
    isFavorite:true
  }

  constructor() {
    this.today = new Date('3/9/2017');
    this.formattedDate =  this.convertDate(this.today);
  }

  convertDate(date: Date): string{
   var day = date.getDate();
   var month = date.getMonth();
   var year = date.getFullYear();
   var formattedDate = this.months[month] + " " + (day < 10 ? "0" + day.toString() : day.toString()) + ", " + year.toString();

   return formattedDate;

  }

  OnFavoriteChange($event) {
    console.log($event);
  }
}
