import { FormGroup, FormControl } from '@angular/forms';
// import { of } from 'rxjs/observable/of';
import {delay} from 'rxjs/operators';


export function mobileValidator(control: FormControl): any {
  var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  let valid = myreg.test(control.value);
  console.log("手机校验结果:"+valid);
  return valid ? null : {mobile: { msg:"请输入正确的手机号"}};
}


// export function mobileAsyncValidator(control: FormControl): any { // 异步校验器
//   var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
//   let valid = myreg.test(control.value);
//   console.log("手机校验结果:"+valid);
//   return of(valid ? null : {mobile : true}).pipe(delay(5000));
// }


export function equalValidator(group: FormGroup): any {
    let password: FormControl = group.get('password') as FormControl;
    let pconfirm: FormControl = group.get('pconfirm') as FormControl;
    let valid: boolean = (password.value === pconfirm.value);
    console.log("密码校验结果:"+valid);
    return valid ? null : {equal: { msg:"密码不一致"}};
  }
