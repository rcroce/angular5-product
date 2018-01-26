import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { ApplicationError } from './../commom/errors/app-error';
import { NotFoundError } from './../commom/errors/not-found-error';
import { BadRequestError } from './../commom/errors/bad-request-error';
import { API_SERVER_URL } from './../commom/api.config';
import { IProduct } from './../_model/product';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProductService {

  private readonly URL = API_SERVER_URL + 'products/';

  constructor(protected http: HttpClient) {
  }

  getAll(): Observable<Array<IProduct>> {
    return this.http.get<Array<IProduct>>(this.URL).catch(this.handleError);
  }

  public findById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(this.URL + id).catch(this.handleError);
  }

  public findByName(name: string): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.URL}/product`,
    {
      params: new HttpParams().set('name', name)
    })
    .catch(this.handleError);
  }

  public create(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(this.URL, product).catch(this.handleError);
  }

  public update(productId: number, product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(this.URL + productId, product).catch(this.handleError);
  }

  public delete(id: number): Observable<IProduct> {
    return this.http.delete<IProduct>(this.URL + id).catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    // console.log(err.error['errorMessage']);
    if (err.status === 400) {
      return Observable.throw(new BadRequestError(err));
    }
    if (err.status === 404) {
      return Observable.throw(new NotFoundError(err));
    }
    return Observable.throw(new ApplicationError(err));
  }

}
