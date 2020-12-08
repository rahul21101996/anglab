import { Component } from "@angular/core";
import { Customer } from "../customer.model";
import { CustService } from "../customer.service";

@Component({
  selector:"ctab",
  templateUrl:"./ctab.component.html",
  styleUrls:["./ctab.component.css"]
})
export class CtabComponent{

  carr:Customer[];
  cob:Customer;
  flag=false;
  constructor(private cservice:CustService){
    
  }
  ngOnInit(){
    this.carr=this.cservice.getAllCust();
    console.log(this.carr);
  }
  displayForm()
  {
    this.flag=true;
  }
  updateCust(c:Customer){
   this.flag=true;
    this.cob=c;
  }
  deleteCust(c:Customer){
    this.cservice.deleteCustomer(c);
  }
}
