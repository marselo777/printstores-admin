export class ApiClient {
     service_endpoint: string | null = null;
     constructor(service_endpoint:string) {
         if(service_endpoint) {
             this.service_endpoint = service_endpoint;
         }
     }

    GET() {
        console.log(this.service_endpoint, 'service-endpoind');

    }
    POST() {

    }
    PUT() {

    }
    DELETE() {

    }


}