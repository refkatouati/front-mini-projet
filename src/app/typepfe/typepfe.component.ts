import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-typepfe',
  templateUrl: './typepfe.component.html',
  styleUrls: ['./typepfe.component.css']
})
export class TypepfeComponent implements OnInit {
  id:any;
  pfes:any=[]
  constructor(private ser:GestionService,private route:Router ,private ac:ActivatedRoute) { }

  ngOnInit(): void {
    this.ac.paramMap.subscribe((params:ParamMap)=> {
      this.id=params.get("id")
      this.getPfeByType(this.id)
      
})}
delete(id:number){
  this.ser.delete(id).subscribe(
    data=> { this.ngOnInit()  },
    err => {  }
  )
}
getPfeByType(id:number)
{
this.ser.getPfeByType(this.id).subscribe(
  data=>{this.pfes=data},
  err=>{}
  )

  }
}