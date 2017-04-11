import {Component} from '@angular/core'
import {CourseService} from './course.service';
@Component({
    selector:'courses',
    template: `<h2>Courses</h2>
    {{title}}

    <input type="text" autoGrow />
    <ul>
    <li *ngFor="let course of courses" {{testElement}} >{{course}}</li>
    </ul>
    `
})
export class CoursesComponent{
    title:string = 'The title of courses page.';
    courses;

    testElement:string='#testElement';
    constructor (courseService:CourseService) {
        this.courses = courseService.getCourses();
    }
}