import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pfe } from './pfe';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  constructor(private http:HttpClient) { }


getAllPfes()
  {return this.http.get("http://127.0.0.1:8080/rest/pfes")}

addPfe(pfe:Pfe)
{return this.http.post("http://127.0.0.1:8080/rest/add",pfe)}
getAlltypes()
{return this.http.get("http://127.0.0.1:8080/rest/listetype")}
delete(id:number)
{return this.http.delete("http://127.0.0.1:8080/rest/delete/"+id)}

recherche(titre:string)
{return this.http.get("http://127.0.0.1:8080/rest/chercher/"+titre)}

getPfeByType(id:number)
{return this.http.get("http://127.0.0.1:8080/rest/listpfe/"+id)}
getCount()
{return this.http.get("http://127.0.0.1:8080/rest/count")}
getCount2(id:number)
{return this.http.get("http://127.0.0.1:8080/rest/count2/"+id)}
}