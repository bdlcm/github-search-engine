import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from "../models/user.interface";
import { Repository } from "../models/repository.interface";
import { REPOSITORY_LIST } from "../mocks/repository.mocks";
import "rxjs/add/operator/map";
import "rxjs/add/observable/of";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/do";


import {Http, Response} from "@angular/http";

import { USER_LIST } from "../mocks/user.mocks";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operator/map";



@Injectable()
export class GithubserviceProvider {
private reposURL:string = "repos";
private baseURL: string =  "http://api.github.com/users";


  constructor( private http: Http) {
    console.log('Hello GithubserviceProvider Provider');
  }

  getUserInformation(username: string): Observable<User> {
  return this.http.get(`${this.baseURL}/${username}`).map((data: Response) => data.json());
}

  getRepositoryInformation(username: string): Observable<Repository[]> {
  return this.http.get(`${this.baseURL}/${username}/${this.reposURL}`).map((data: Response) => data.json() as Repository[]);
}
  //mockGetRepositoryInformation(username:string): Observable<Repository[]> {
    //return Observable.of(REPOSITORY_LIST.filter(repository => repository.owner.name === username));
  //}

  //mockGetUserInformation (username: string): Observable<User> {
  //  return Observable.of(USER_LIST.filter(user => user.name === username)[0]);
  //}
}
