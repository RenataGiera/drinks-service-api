import  { Request, Response } from "express";

export const coffeeLoverController =  async (req: Request<object, object, object, string>, res:
  Response) => {
  res.send('I like coffee!');
};