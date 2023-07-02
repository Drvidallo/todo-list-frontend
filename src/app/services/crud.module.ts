import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class CrudService {
    constructor(private http: HttpClient) {

    }
    
    getPosts(){
        let url ="http://localhost:3001/todo/getAllPosts"
        return this.http.get(url);

    }

    addPost(title:string, message:string){
        let url ="http://localhost:3001/todo/addPost"
        return this.http.post(url, { title, message});
    }

    updatePost(id:string, title:string, message:string){
        let url ="http://localhost:3001/todo/updatePost"
        return this.http.patch(url, { id, title, message});
    }
    
    deletePost(id:string){
        let url = "http://localhost:3001/todo/deletePost" + `?id=${id}`
        return this.http.get(url);
    }
}