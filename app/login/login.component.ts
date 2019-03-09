import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { equalValidator, mobileValidator } from '../validator/validators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formModel: FormGroup ;
  // constructor() {
  //   this.formModel = new FormGroup({
  //     username: new FormControl(),
  //     mobile: new FormControl(),
  //     passwordsGroup: new FormGroup({
  //       password: new FormControl(),
  //       pconfirm: new FormControl()
  //     })
  //   })
  // }

  //自定义校验器
  // equalValidator(group: FormGroup): any {
  //   let password: FormControl = group.get('password') as FormControl;
  //   let pconfirm: FormControl = group.get('pconfirm') as FormControl;
  //   let valid: boolean = (password.value === pconfirm.value);
  //   console.log("密码校验结果:"+valid);
  //   return valid ? null : {equal: true};
  // }

  // 使用formBulider来简化响应式表单代码,用依赖注入的方式添加到构造函数中
  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.formModel = fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]], // 校验器,Validators时angular自带的校验器,里面有参数
      mobile: ['', mobileValidator],
      passwordsGroup: fb.group({
        password: ['', Validators.minLength(6)],
        pconfirm: ['']
      }, { validator: equalValidator})
    })
  }

  onSubmit() {
    // let error: any = this.formModel.get("username").errors;
    // console.log(error);
    if(this.formModel.valid){
      console.log(this.formModel.value);
      if(this.formModel.value.username === "admin123" && this.formModel.value.passwordsGroup.password === "admin123"){
        this.router.navigate(['/home']);
      }
      else{
      console.log("wrong");
      this.router.navigate(['/failed']);
    }
    }
    
  }


  ngOnInit() {
  }

}
