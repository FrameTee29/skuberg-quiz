import { Injectable } from '@angular/core'

@Injectable()
export class TodoService {
  async getTodoBucket() {
    const data: any = localStorage.getItem('TodoBucket')
    return JSON.parse(data)
  }
  async getTodo() {
    const data: any = localStorage.getItem('TodoData')
    return JSON.parse(data)
  }

  async postTodoBucket(data: string) {
    return localStorage.setItem('TodoBucket', data)
  }

  async postTodo(data: string) {
    return localStorage.setItem('TodoData', data)
  }
}
