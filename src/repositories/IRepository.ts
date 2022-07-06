export default interface IRepository {
  create(payload: object): any;
  update(): any;
  find(): any;
  findAll(): any;
  delete(): any;
}
