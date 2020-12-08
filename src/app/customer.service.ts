

import { Injectable } from '@angular/core';
import { Customer } from './customer.model';

@Injectable()
export class CustService{
 carr=[new Customer(101,"chirya"),
      new Customer(102,"abhya"),
      new Customer(103,"tanya")];

      getAllCust(){
           return this.carr;
      }
      addCustomer(c:Customer){
            this.carr.push(c);
      }
      updateCustomer(c:Customer){
            for(let i=0;i<this.carr.length;i++){
                  if(this.carr[i].cid==c.cid){
                        this.carr[i].cname==c.cname;
                        break;
                  }
                  
            }
      }
      deleteCustomer(c:Customer){
            for(let i=0;i<this.carr.length;i++)
            {
                  if(this.carr[i].cid==c.cid)
                  {
                         this.carr.splice(i,1);
                  }
                         break;
      }
      
      }
}

      

