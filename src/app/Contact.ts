export class Contact
{
    userID : string;
    firstName : string;
    lastName : string;
    email : string;
    subject : string;
    constructor(i,f,l,e,s)
    {
        this.userID = i;
        this.firstName = f;
        this.lastName = l;
        this.email = e;
        this.subject = s;
    }
}