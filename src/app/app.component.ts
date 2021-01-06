import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { GestionService } from './gestion.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miniproject';
  types:any=[]
 titre!:string ;
 titres:any=[];
 count:any
 cou:any
 id:any
  constructor(private ser:GestionService,private route:Router,private ac:ActivatedRoute) { }

  ngOnInit(): void {
    this.ac.paramMap.subscribe((params:ParamMap)=> {
      this.id= params.get('t.id');
      this.count2(this.id)
     
    })

    this.ser.getAlltypes().subscribe(
      (data)=>{this.types=data},

    erreur=>{}
    )

    this.ser.getCount().subscribe(
      data=>{this.count=data},
      err=>{}
    )
    
}
recherche()
{
  this.route.navigate(['recherche/' + this.titre]);
}
count2(id:number)
{
  this.ser.getCount2(this.id).subscribe(
    data=>{this.cou=data},
    err=>{}
  )
}
}
