export class Customers
{

        id:string;
        fname:string;
        lname : string;
        dob : string;
        number:string;
        email:string;
        address:string;
        password:string;


        constructor(f,l,d,n,e,a,p)
        {
            this.id = n;
            this.fname=f;
            this.lname=l;
            this.dob=d;
            this.number=n;
            this.email=e;
            this.address=a;
            this.password=p;
        }
}