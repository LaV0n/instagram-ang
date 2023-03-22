import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { BehaviorSubject, catchError, EMPTY, map } from 'rxjs'
import { environmentDevelopment } from '../../environments/environment.development'
import { BeautyLoggerService } from './beauty-logger.service'

export interface Todo {
  addedDate: string
  id: string
  order: number
  title: string
}

export interface BasicTodoResponse<T = {}> {
  data: T
  messages: string[]
  fieldsErrors: string[]
  resultCode: number
}

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([])

  private httpOptions = {
    withCredentials: true,
    headers: {
      'api-key': environmentDevelopment.apiKey,
    },
  }

  constructor(private http: HttpClient, private beautyLoggerService: BeautyLoggerService) {}

  private errorHandler(error: HttpErrorResponse) {
    this.beautyLoggerService.log(error.message, 'error')
    return EMPTY
  }

  getTodos() {
    this.http
      .get<Todo[]>(`${environmentDevelopment.baseUrl}/todo-lists`, this.httpOptions)
      .pipe(catchError(this.errorHandler.bind(this)))
      .subscribe(todos => {
        this.todos$.next(todos)
      })
  }

  createTodo() {
    const randomNumber = Math.floor(Math.random() * 100)
    const title = 'Angular' + randomNumber
    this.http
      .post<BasicTodoResponse<{ item: Todo }>>(
        `${environmentDevelopment.baseUrl}/todo-lists`,
        { title },
        this.httpOptions
      )
      .pipe(
        catchError(this.errorHandler.bind(this)),
        map(res => {
          return [res.data.item, ...this.todos$.getValue()]
        })
      )
      .subscribe(todos => {
        this.todos$.next(todos)
      })
  }

  deleteTodo(todoId: string) {
    this.http
      .delete<BasicTodoResponse>(
        `${environmentDevelopment.baseUrl}/todo-lists/${todoId}`,
        this.httpOptions
      )
      .pipe(
        catchError(this.errorHandler.bind(this)),
        map(() => {
          return this.todos$.getValue().filter(tl => tl.id !== todoId)
        })
      )
      .subscribe(todos => {
        this.todos$.next(todos)
      })
  }
}
