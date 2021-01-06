import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionService } from '../gestion.service';
import { Pfe } from '../pfe';


@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  pfes: any=[];

 
 
  constructor(private ser:GestionService,private route:Router) { }

  ngOnInit(): void {
    
   
  
    this.ser.getAllPfes().subscribe(
      data=>{this.pfes=data},
      err=>{}
    )
}
delete(id:number){
  this.ser.delete(id).subscribe(
    data=> { this.ngOnInit()  },
    err => {  }
  )
}


  }
 

