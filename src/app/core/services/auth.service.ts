import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BaseService } from './base.service';
import { Login, LoginRespnse } from '../interfaces/auth';
import { Observable, tap } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  get token():string | null {
    return localStorage.getItem('token')
  }

  get user(): User | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }


  login(payload: Login): Observable<LoginRespnse>{
    return this.post<LoginRespnse>('auth/login', payload).pipe(
      tap((response: LoginRespnse) => {
        this.setToken(response.accessToken)
        this.setUser(response.user)
      })
    );
  }


  register(payload: Login): Observable<User>{
    return this.post<User>('auth/signup', payload)
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  setUser(user: User): void{
    localStorage.setItem('user', JSON.stringify(user))
  }

  signOut(){
    localStorage.clear();
  }



}
