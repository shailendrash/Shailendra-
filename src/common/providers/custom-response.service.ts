export default class CustomResponse{
    private statusCode : number
    private message: string
    public result : any 
    constructor(statusCode?:number,message?:string,result?:any){
        this.statusCode = statusCode;
        this.message=message;
        this.result = result;

    }
}