import { Component } from '@angular/core';
import { Brewery } from './brewery';
import { BreweryService } from './brewery.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'openbrewery';

constructor(private http:BreweryService){}


  breweries:Brewery[]=[];
  
  breweries_type:string[]=[];

  breweries_unique_type:string[]=[];

  breweriesByType:Brewery[]=[];
  typeselected=false;

headers=["id","name","brewery_type","street","city","country_province","postal_code","country"];

  ngOnInit(): void {
    this.populateBrewery();
    this.getbrewerytype();
   ;

  }

  getbrewerytype(){
    this.http._getAllBreweries().subscribe(res=>{

      this.breweries_type=res.map(x=>x.brewery_type)

      this.breweries_unique_type=["select",...new Set(this.breweries_type)]

      console.log("types");
      
      console.log(this.breweries_type)
      console.log(this.breweries_unique_type);
      
     })
  }


  populateBrewery(){
    this.http._getAllBreweries().subscribe(res=>{

      this.breweries=res;
      console.log(res)
     })
  }

  populateBreweryByType(type:string){
    this.http._getAllBreweriesByType(type).subscribe(res=>{
      this.breweriesByType=res;
      console.log("bytype");
      console.log(res);
    })

  }

  bre_type:string;
  selectChange(event:any){
   
    this.bre_type=event.target.value
    if(this.bre_type=="select"){
      alert("select brewery type");
    }
    else{
      this.typeselected=true;
      console.log(event.target.value)
      this.populateBreweryByType(event.target.value)

    }
   

    
  }
 
}
