export class UserModel {
        
    username: string;
    email: string;
    password: string;
    passwordConfirm: string;

    constructor(  username: string,
        email: string,
        password: string,
        passwordConfirm: string,)
    {
        this.username = username;
        this.email = email;
        this.password = password;
        this.passwordConfirm = passwordConfirm;

    }
}

export class LogInInput {
        
    username: string;
    email: string;
    password: string;

    constructor(  username: string,
        email: string,
        password: string,
       )
    {
        this.username = username;
        this.email = email;
        this.password = password;
    }
}