import crypto from "crypto";

export class User {
  _id: string;
  _name: string;
  _username: string;
  _email: string;
  private _password: string;
  _created_at: Date;
  _updated_at: Date;

  constructor(
    name: string,
    username: string,
    email: string,
    password: string,
    created_at?: Date,
    updated_at?: Date,
    id?: string
  ) {
    this._id = id ?? crypto.randomUUID().toString();
    this._name = name;
    this._username = username;
    this._email = email;
    this._password = password;
    this._created_at = created_at ?? new Date();
    this._updated_at = updated_at ?? new Date();
  }

}
