import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseService {

  getProducts(params: {
    categoryId?: number,
    limit?: number,
    search?: string
  }): Observable<Product[]>{
    return this.get<Product[]>('product', params)
  }

  getOne(id: number): Observable <Product>{
    return this.get<Product>(`product/{id}`)
  }

  create (product: Product): Observable<Product>{
    return this.post<Product>('product', product)
  }

  update (id: number, product: Product): Observable<Product>{
    return this.put<Product>(`product/${id}`, product)
  }

  deleteItem(id:string): Observable<Product>{
    return this.delete<Product>(`prodict/${id}`)
  }

}
