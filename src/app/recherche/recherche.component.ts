import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  titre:any; 
result:any=[]
  constructor( private ser: GestionService,private ac:ActivatedRoute) { }

  ngOnInit(): void {
    this.ac.paramMap.subscribe((params:ParamMap)=> {
      this.titre= params.get('titre');
      this.recherche(this.titre)
     
    })
    
  
  }
  recherche(titre:string)
  {
    this.ser.recherche(titre).subscribe(
      res=>{this.result=res},
      
      err=>{ }
    )
  }
  delete(id:number){
    this.ser.delete(id).subscribe(
      data=> { this.ngOnInit()  },
      err => {  }
    )
  }
  
}
