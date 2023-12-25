import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behaviour-subject',
  templateUrl: './behaviour-subject.component.html',
  styleUrl: './behaviour-subject.component.css'
})
export class BehaviourSubjectComponent implements OnInit{

  ngOnInit(): void {
    
    const subject = new BehaviorSubject<number>(100);

    subject.subscribe((data) =>{console.log("Subscriber 1 " + data)});

    subject.subscribe((data) =>{console.log("Subscriber 2 " +data)});

    subject.next(2023);

    subject.subscribe((data) =>{console.log("Subscriber 3 " +data)});

    subject.next(2024);

    subject.subscribe((data) =>{console.log("Subscriber 4 " +data)});
  }

}
