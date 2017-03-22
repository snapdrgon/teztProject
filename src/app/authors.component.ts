import {Component} from '@angular/core'
import {AuthorService} from './author.service';
@Component({
    selector:'authors',
    template: `<h2>Authors</h2>
    {{title}}
    <ul>
    <li *ngFor="let author of authors" >{{author}}<div class="toolPos" tooltip='{{author}}'></div></li>
    </ul>
    `
})
export class AuthorsComponent{
    title:string = 'The title of authors page.';
    authors;
    constructor (authorService:AuthorService) {
        this.authors = authorService.getAuthors();
    }
}