import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'to-do-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {

  TodoList: any[] = [
    { Task: "Laundry", Status: "Completed" },
    { Task: "Visit", Status: "Completed" },
    { Task: "Work", Status: "In-progress" },
    { Task: "Code", Status: "To-do" }
  ];

  constructor() {
    this.GetAllToDoListItems();
  }

  GetAllToDoListItems(): any[] {
    return this.TodoList;
  }
}
