import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Directive';

  public id!: number;
  public login!: string;
  public password!: string;
  public email!: string;
  public index!: number

  public editStatus = false;
  public userData: { id: number, login: string, password: string, email: string }[] = [
    {id:1 , login: 'alex', password: 'password', email: 'aleks@2198@gmail.com'}
  ]

  addUser(): void {
    const loginRegex = /^[a-zA-Z]{4,24}$/
    const passwordRegex = /^[a-zA-Z0-9_-].{4,16}$/
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-z]{2,3}$/;

    type loginRegexTestType = boolean
    type passwordRegexTestType = boolean
    type emailRegexTestType = boolean

    let loginRegexTest: loginRegexTestType = loginRegex.test(this.login)
    let passwordRegexTest: passwordRegexTestType = passwordRegex.test(this.password)
    let emailRegexTest: emailRegexTestType = emailRegex.test(this.email)

    let userInfo = {
      id: this.id,
      login: this.login,
      password: this.password,
      email: this.email,
    }

    if (loginRegexTest && passwordRegexTest && emailRegexTest) {
      this.userData.push(userInfo)
    } else {
      alert('Please enter valid login, password or email!')
    }

    this.login = ''
    this.password = ''
    this.email = ''

  }

  deleteName(index: number): void {
    this.userData.splice(index, 1);
  }

  editName(index: number): void {
    this.editStatus = true
    this.login = this.userData[index].login
    this.password = this.userData[index].password
    this.email = this.userData[index].email

    this.index = index

  }

  saveEditUser(): void {
    const loginRegex = /^[a-zA-Z]{4,24}$/
    const passwordRegex = /^[a-zA-Z0-9_-].{4,16}$/
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-z]{2,3}$/;

    type loginRegexTestType = boolean
    type passwordRegexTestType = boolean
    type emailRegexTestType = boolean

    let loginRegexTest: loginRegexTestType = loginRegex.test(this.login)
    let passwordRegexTest: passwordRegexTestType = passwordRegex.test(this.password)
    let emailRegexTest: emailRegexTestType = emailRegex.test(this.email)

    if (loginRegexTest && passwordRegexTest && emailRegexTest) {
      this.userData[this.index].login = this.login
      this.userData[this.index].password = this.password
      this.userData[this.index].email = this.email
    } else {
      alert('Please enter valid login, password or email!')
    }

    this.login = ''
    this.password = ''
    this.email = ''

    this.editStatus = false

  }
}
