import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Pedidos } from '../model/Pedidos';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
pedidoURL: string = 'https://localholst:8080/pedidos'

  push(id: number) {
    throw new Error('Method not implemented.');
  }

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set("Authorization", environment.token),
  };

  refreshToken(){
    this.token={
      headers: new HttpHeaders().set("Authorization", environment.token),
    };

  }
  getAllCompras(){
<<<<<<< HEAD
    return this.http.get<Pedidos[]>('/',this.token)
  }

  getCompras(id: number): Observable<Pedidos>{
    return this.http.get<Pedidos>(`${this.pedidoURL}/${id}`, this.token)
  }

  postCompras(pedidos: Pedidos): Observable<Pedidos>{
    return this.http.post<Pedidos>(`${this.pedidoURL}`, pedidos ,this.token)
  }

  putCompras(pedidos: Pedidos): Observable<Pedidos>{
    return this.http.put<Pedidos>(`${this.pedidoURL}`, pedidos ,this.token)
  }

  deleteCompras(id: number): Observable<Pedidos>{
    return this.http.delete<Pedidos>(`${this.pedidoURL}/${id}`, this.token)
=======
    return this.http.get<Pedidos[]>('http://eccomerce-pi.herokuapp.com/pedidos/',this.token)
  }

  getCompras(id: number): Observable<Pedidos>{
    return this.http.get<Pedidos>(`http://eccomerce-pi.herokuapp.com/pedidos/${id}`, this.token)
  }

  postCompras(pedidos: Pedidos): Observable<Pedidos>{
    return this.http.post<Pedidos>("http://eccomerce-pi.herokuapp.com/pedidos", pedidos ,this.token)
  }

  putCompras(pedidos: Pedidos): Observable<Pedidos>{
    return this.http.put<Pedidos>("http://eccomerce-pi.herokuapp.com/pedidos", pedidos ,this.token)
  }

  deleteCompras(id: number): Observable<Pedidos>{
    return this.http.delete<Pedidos>(`http://eccomerce-pi.herokuapp.com/${id}`, this.token)
>>>>>>> 3fb33057fc119cff8f36d7d4800f9f61a49ccd91
  }
}
