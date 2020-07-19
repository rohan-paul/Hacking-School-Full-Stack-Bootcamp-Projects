import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  coursesObservable: Observable<any[]>;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.coursesObservable = this.getCourses('/courses');
  }

  getCourses(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }
}

/*
A> valueChanges() method of angularfire2
https://github.com/angular/angularfire2/blob/master/docs/rtdb/lists.md#valuechanges

Returns an Observable of data as a synchronized array of JSON objects.
.valueChanges() returns an Observable<T[]> where T is the type from list.

B> db.list()  - Data is retrieved through the AngularFireDatabase service. The service is also generic. Provide the singular type and not the array type. To get the list in realtime, create a list binding as a property of your component or service. Then in your template, you can use the async pipe to unwrap the binding.

C> AngularFireDatabase is a service which can be injected through the constructor of your Angular component or @Injectable() service.

Flow of the above code -
(i) First, I am injecting the AngularFireDatabase service into the class constructor as a private object. The getCourses() method takes a database path as a parameter. An observable for the list of courses in the database is retrieved by calling the .list method of the AngularFireDatabase object, passing in the database path, and calling the method valueChanges().

(ii) The getCourses method is used within ngOnInit to retrieve an observable for the path /courses. The observable is stored in the class property coursesObservable.

(iii) The coursesObservable member is used to access data in the template code in file courses-list.component.html using async pipe to unwrap the binding by iterating thru the list with *ngFor once data is retrieved.
 (https://github.com/angular/angularfire2/blob/master/docs/rtdb/lists.md#retrieve-data)

*/