export class Customers
{

        id:string;
        firstName:string;
        lastName : string;
        dob : string;
        number:string;
        email:string;
        address:string;
        password:string;


        constructor(i,f,l,d,n,e,a,p)
        {
            this.id = i;
            this.firstName=f;
            this.lastName=l;
            this.dob=d;
            this.number=n;
            this.email=e;
            this.address=a;
            this.password=p;
        }
}