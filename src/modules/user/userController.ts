import { v4 as uuidV4 } from 'uuid';
class User {
  id?: string;
  name: string;
  email: string;
  password: string;
  avatar?: string;
  created_at: Date;
  update_at:Date;

  constructor(name:string, email:string, password:string, created_at:Date,update_at:Date) {
    this.name= name;
    this.email = email;
    this.password = password;
    this.created_at = created_at;
    this.update_at = update_at;
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
export {User};

