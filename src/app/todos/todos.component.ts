import { Component, OnInit } from '@angular/core'
import { Todo, TodosService } from '../services/todos.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'inst-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos$!: Observable<Todo[]>

  constructor(private todosService: TodosService) {}

  ngOnInit() {
    this.todos$ = this.todosService.todos$
    this.getTodos()
  }

  getTodos() {
    this.todosService.getTodos()
  }

  createTodo() {
    this.todosService.createTodo()
  }

  deleteTodo() {
    const todoId = 'baee6f79-2b22-4b06-b817-dedc19d4000d'
    this.todosService.deleteTodo(todoId)
  }
}
