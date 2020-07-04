Angular
=========

Command to create a new component
-----------------------------
> ng g c <component name>
	g -> generate
	c -> Component

@NgModule in app.module.ts contains Components in a array.

Angular SwitchCase
----------------
Angular Switch case for filtering the elements.

Command to create a new Service
----------------------------
Service is given for dependancy injection
> ng g s <service-name>

Angular Service is Created and then import this service to the angular module (app.module.ts).
Specify all the custom Service inside the Providers array.


syntax for Properties
-----------------
public products : any = "";
product is the property 'any' can be any type(String, boolean etc)


Interpolation
----------
What interpolation can and can not do ?
syntax : <span>{{mathod/variable}}</span>
Using this we can bind data to the data from compoent  class to the  templet.
We can use  only string values for binding.

Property binding in Angular
---------------------
Binding values to the html attributes from the compoent class
syntax : <input type="text" [value]="propertyvalue"/>
We can use  any values for binding.

Event Binding
-----------
If any event is rising then data should be bind.

Class binding
----------
To bind any predefine property of bootstrap or any custome css class perperty
syntax : [class]="css/bootstrap class name"

Iteration of list of object in Angular
------------------------------
syntax : *ngFor = let (any variable) of (listObject)
example : <div *ngFor="let prod of products"  class="bg-success">
		<div>{{prod.prodId}}</div>
		<div>{{prod.prodName}}</div>
		<div>{{prod.prodPrice}}</div>
	</div>
export class TestComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

 public products:any = [
      {
        "prodId":1,
        "prodName":"Fan",
        "prodPrice":2000,
      },
      {
        "prodId":2,
        "prodName":"AC",
        "prodPrice":7000,
      },
      {
        "prodId":3,
        "prodName":"Watch",
        "prodPrice":12000,
      },
    ];
}

Two way data binding
-----------------
Binding data from html to property and property to Html.
syantax : [(ngModel)]="proprerty"
Example :
<div>
 <input type="text" name="" [(ngModel)]="messages">
 {{messages}}
</div>.
import form module in app.module.ts

Command for creating custom Angular pipe
----------------------------------
>ng g p "pipename"
Pipe is useful for filter out some data and do some operation on that data.
Some custom pipes are also available.
ex-: {message | titlecase}} Camel case example

Important Notes :
--------------
Note :
Use CORS filter in the client side for getting the response for rest call.
