import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  client_id: 'angular-test-app'
  grant_type: 'password'
  client_secret: '9ddb545f-a9e0-4ff0-a8ea-f0ceee0012d9'
  scope: 'openid'
  username: 'hpupm'
  password: 'password'

  result: String

  //json;
  constructor(private http: HttpClient) {
  }

  postData() {

    let url = "http://10.150.236.115:8080/auth/realms/MainSSORealm/protocol/openid-connect/token";

    let body = new URLSearchParams();
    body.set('client_id',this.client_id);
    body.set('grant_type',this.grant_type);
    body.set('client_secret',this.client_secret);
    body.set('scope',this.scope);
    body.set('username',this.username);
    body.set('password',this.password);

    //let url = "http://httpbin.org/post"

    this.http.post(url, body).toPromise().then((data: any) => {
      console.log(data)

      this.result = JSON.stringify(data.json)
    })
  }
}

//9ddb545f-a9e0-4ff0-a8ea-f0ceee0012d9
