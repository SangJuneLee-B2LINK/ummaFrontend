import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpGatewayService } from '../../../../services/http-gateway.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginPageType: string;
  // isBuyer: boolean;
  email: string;
  password: string;
  isRemember: boolean;

  companyName: string;
  manager: string;
  managerPhoneNumber: string;
  
  isModalOn: boolean;
  modalTitle: string;
  modalText: string;

  constructor(
    public httpService: HttpGatewayService,
    public router: Router,
    private titleService: Title
  ){this.titleService.setTitle("Login")}

  ngOnInit() {
    this.loginPageType = 'login';
  }

  // userTypeChoice(event) {
  //   this.isBuyer = event.target.innerHTML === 'Buyer' ? true : false;
  // }

  login() {
    if(this.email.trim() && this.password.trim()) {
      let emailValid = this.email.match(/^[0-9a-zA-Z][0-9a-zA-Z\_\-\.\+]+[0-9a-zA-Z]@[0-9a-zA-Z][0-9a-zA-Z\_\-]*[0-9a-zA-Z](\.[a-zA-Z]{2,6}){1,2}$/);
      let pwdValid = this.password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,}$/);
      if(emailValid && pwdValid){
        this.router.navigate(['member','home']);
      }
    }
    // this.httpService.post('/login', { isBuyer: this.isBuyer, email: this.email, password: this.password, isRemember: this.isRemember }).then((res: any) => {
    //   console.log(res);
    // });
    
  }

  forgetId() {
    this.loginPageType = 'forget-id';
    this.modalTitle = 'Forget Your Email';
    this.modalText = `your email is asfasdfasfsdfsadfasfsadf@umma.com`;
    this.inputsReset();
  }

  resetPassword() {
    this.loginPageType = 'forget-password';
    this.modalTitle = 'Reset Password';
    this.modalText = 'You have sent a password reset email to your registered email';
    this.inputsReset();
  }

  inputsReset() {
    this.email = '';
    this.password = '';
    this.isRemember = false;
  }

  emailFind() {
    this.isModalOn = true;
  }

  passwordFind() {
    this.isModalOn = true;
  }

  passwordReset() {
    this.isModalOn = true;
  }

  modalOkClick() {
    this.isModalOn = false;
  }

  modalResetClick() {
    this.isModalOn = false;
  }

}
