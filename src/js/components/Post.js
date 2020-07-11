import Request from './Request';

export default class Post extends Request {
  constructor (name, link, description) {
    super (name, link, description);
    this.type = 'POST';
    this.className = 'chip green';
  }

  setBody (name, value) {
    return this.body.push({ name, value });
  }
}