import { Component, OnInit } from '@angular/core'
import { NzMessageService } from 'ng-zorro-antd/message'
import { TodoService } from 'src/service/todo.service'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  constructor(
    private readonly todoService: TodoService,
    private readonly message: NzMessageService
  ) {}

  TodoBucket: any = []

  TodoData: any = []

  newTodoContent = ''

  ngOnInit(): void {
    this.checkData()
  }

  async checkData() {
    await this.todoService.getTodoBucket().then((data) => {
      if (data) {
        this.TodoBucket = data
      } else {
        this.todoService.postTodoBucket('[]')
      }
    })
    await this.todoService.getTodo().then((data) => {
      if (data) {
        this.TodoData = data
      } else {
        this.todoService.postTodo('[]')
      }
    })
  }

  generateId() {
    if (this.TodoBucket.length === 0) {
      return 1
    }

    const max = Math.max.apply(
      Math,
      this.TodoBucket.map((max: { id: number }) => {
        return max.id
      })
    )
    return max + 1
  }

  generateIdTodoData() {
    if (this.TodoData.length === 0) {
      return 1
    }

    const max = Math.max.apply(
      Math,
      this.TodoData.map((max: { id: number }) => {
        return max.id
      })
    )
    return max + 1
  }

  handleAddToBucket(value: string): any {
    if (!value) {
      return this.message.warning(`กรุณากรอกข้อมูล`)
    }
    const newID = this.generateId()
    const data = { id: newID, content: value, checked: false, disable: true }
    this.TodoBucket.push(data)
    this.todoService.postTodoBucket(JSON.stringify(this.TodoBucket))
    this.newTodoContent = ''
  }

  handleDelteInBucket(id: number) {
    var del = this.TodoBucket.filter((f: { id: number }) => f.id !== id)
    this.TodoBucket = del
    this.todoService.postTodoBucket(JSON.stringify(this.TodoBucket))
    this.message.success(`ลบข้อมูลในตะกร้าสำเร็จ`)
  }

  handleSaveBucketToData(id: number) {
    var item = this.TodoBucket.find((f: { id: number }) => f.id === id)
    var newData = {...item,id:this.generateIdTodoData()}
    this.TodoData.push(newData)
    this.todoService.postTodo(JSON.stringify(this.TodoData))
    var del = this.TodoBucket.filter((f: { id: number }) => f.id !== id)
    this.TodoBucket = del
    this.todoService.postTodoBucket(JSON.stringify(this.TodoBucket))
    this.message.success(`เพิ่มข้อมูลสำเร็จ`)

  }

  handleEdit(id: number) {
    var item = this.TodoData.find((f: { id: number }) => f.id === id)
    if (item) {
      item.disable = !item.disable
    }
    this.todoService.postTodo(JSON.stringify(this.TodoData))
  }

  handleSave(id: number) {
    var item = this.TodoData.find((f: { id: number }) => f.id === id)
    if (item) {
      item.disable = !item.disable
    }
    this.todoService.postTodo(JSON.stringify(this.TodoData))
    this.message.success(`แก้ไขข้อมูลสำเร็จ`)
  }

  handleDelte(id: number) {
    var del = this.TodoData.filter((f: { id: number }) => f.id !== id)
    this.TodoData = del
    this.todoService.postTodo(JSON.stringify(this.TodoData))
    this.message.success(`ลบข้อมูลสำเร็จ`)
  }
}
