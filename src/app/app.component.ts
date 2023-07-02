import { Component,  OnInit, ViewChild } from '@angular/core';
import { CrudService } from './services/crud.module'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../sass/main.scss']
})
export class AppComponent implements OnInit{
  title = 'todo-list';

  constructor(private http:CrudService){
    
  }
  editMode: boolean = false;
  @ViewChild('postForm')
  form!: NgForm;

  newPost = "hello"
  postMessage = ""
  postTitle = ""
  postId = 0;
  values:any= []
  currentPostId = ''; 
  currentId = ''

  POSTS: any;
  page: number = 1;
  count: number =0;
  tableSize: number = 3;
  tableSizes: any = [5, 10]


  ngOnInit(): void {
    this.refresh()
  }

  onDataChange(event: any){
    this.page = event;
    // this.refresh()
  }

  addPost(){
    if(this.editMode === false) {
      this.http.addPost(this.postTitle, this.postMessage).subscribe(data => {
          console.log(data)
        })
      this.values.push({
        postTitle: this.postTitle,
        postMessage:this.postMessage
      })
      console.log("Called Add post")
    } else {
      this.http.updatePost(this.currentId, this.postTitle, this.postMessage).subscribe(data => {
        console.log(data)
      })
      this.editMode = false
      console.log("Called Edit post")
    }
      this.refresh()
  }

  deletePost(i: any){

    const currentId = this.values[i].id
    console.log(this.values[i].id)
    this.http.deletePost(currentId).subscribe(data=>{
      console.log(data)
    })
    this.values.splice(i, 1)
  }

  editPost(i:any){
    // const currentId = this.values[i].id
    // console.log(this.values[i])

    if(this.editMode === true){
      this.postMessage = ""
      this.postTitle = ""
      

      this.editMode = false
    } else {
      this.postMessage = this.values[i].message
      this.postTitle = this.values[i].title
      this.currentId = this.values[i].id

      this.editMode = true
    }
  }

  refresh(){
    
    this.http.getPosts().subscribe(data=>{
      this.values= data
      console.log(this.values)
    })
    this.postMessage = ""
    this.postTitle = ""
  }
}
