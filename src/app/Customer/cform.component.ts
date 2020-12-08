import { Component, EventEmitter, Input, Output, SimpleChanges } from "@angular/core";
import { Customer } from "../customer.model";
import { CustService } from "../customer.service";

@Component({
    selector:"cform",
    templateUrl:"./cform.component.html",
    styleUrls:["./cform.component.css"]
})
export class CformComponent{

    constructor(private cservice:CustService){

    }
    cid:number;
    cname:string;
    @Input("custupdt") cust:Customer;
    @Output() myevent=new EventEmitter();
    ngOnChanges(change:SimpleChanges){
        console.log(change);
            if(change["cust"].currentValue!=change["cust"].previousValue)
            {
                this.cid=this.cust.cid;
                this.cname=this.cust.cname;

            }
    }
    
    addCustomer(){
        let c=new Customer(this.cid,this.cname);

        this.cservice.addCustomer(c);
        this.cid=0;
        this.cname="";
        this.myevent.emit(false);

    }
    updateCust(){
        let c=new Customer(this.cid,this.cname);
        console.log(c);
        this.cservice.updateCustomer(c);
        this.cid=0;
        this.cname="";
        this.myevent.emit(false);
    }
}