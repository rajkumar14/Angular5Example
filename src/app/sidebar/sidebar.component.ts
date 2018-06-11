import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  formdata;
   constructor(private router: Router) { }
   clickMessage = '';
   values = '';
  value = '';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  ngOnInit() {
    this.formdata = new FormGroup({
      uname: new FormControl('', Validators.compose([
         Validators.required,
         Validators.minLength(6)
      ])),
      passwd: new FormControl('', this.passwordvalidation)
   });
  }

  passwordvalidation(formcontrol) {
    if (formcontrol.value.length < 5) {
       return {'passwd' : true};
    }
 }
//  onKey(event: KeyboardEvent) { // with type info
//   this.values += (<HTMLInputElement>event.target).value + ' | ';
// }
onKey(value: string) {
  this.values += value + ' | ';
}
onEnter(value: string) {
  this.value = value;
}
update(value: string) {
  this.value = value;
}
addHero(newHero: string) {
  if (newHero) {
    this.heroes.push(newHero);
  }
}
 onClickSubmit(data) {
    console.log(data.uname);
    if (data.uname === 'systemadmin' && data.passwd === 'admin123') {
       alert('Login Successful');
       this.router.navigate(['app-mainpage']);
    }
 }
  onClickMe() {
      this.clickMessage = 'You are my hero!';
    }
}

