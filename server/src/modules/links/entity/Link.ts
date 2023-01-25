import crypto from "crypto";
export class Link {
  _id: string;
  _title: string;
  _url: string;
  _description: string;
  _created_at: Date;
  _updated_at: Date;
  _user_id: string;

  constructor(
    title: string,
    description: string,
    url: string,
    user_id: string,
    created_at?: Date,
    updated_at?: Date,
    id?: string
  ) {
    this._id = id ?? crypto.randomUUID().toString();
    this._title = title;
    this._description = description;
    this._url = url;
    this._user_id = user_id;
    this._created_at = created_at ?? new Date();
    this._updated_at = updated_at ?? new Date();
  }
}
