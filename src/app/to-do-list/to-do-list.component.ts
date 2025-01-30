import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'to-do-list',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
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

  todoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      Task: [''],
      Status: [''],
    });
    this.GetAllToDoListItems();
  }

  GetAllToDoListItems(): any[] {
    return this.TodoList;
  }

  AddToDoLIstItem() {
    const newItem = this.todoForm.value;
    this.TodoList.push(newItem);
  }

  RemoveToDoLIstItem(itemToRemove: any) {
    const index = this.TodoList.findIndex(item => item === itemToRemove && item.Task === itemToRemove.Task);

    if (index !== -1) {
      this.TodoList.splice(index, 1);
    }
  }
}
