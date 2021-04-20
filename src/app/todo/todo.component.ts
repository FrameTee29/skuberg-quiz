import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  constructor() {}

  TodoData = [
    {
      id: 1,
      content: 'TODO 1',
      checked: true,
    },
    {
      id: 2,
      content: 'TODO 2',
      checked: false,
    },
    {
      id: 3,
      content: 'TODO 2',
      checked: false,
    },
    {
      id: 4,
      content: 'TODO 3',
      checked: true,
    },
  ]

  ngOnInit(): void { }
  

}
