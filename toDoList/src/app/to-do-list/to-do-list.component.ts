import { Component, OnInit } from '@angular/core';
import {ToDoItem} from "./toDoItem";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  tasks: ToDoItem[] = [
    {description: 'Arrumar Cama', done: false},
    {description: 'Fazer Trabalho Pratico', done: false}
    ]

  constructor() { }

  ngOnInit(): void {

  }

}
