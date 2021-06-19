import { HttpRequest, HttpResponse, NextFunction, vs } from "../deps.ts";

export default (req: HttpRequest, _res: HttpResponse, next: NextFunction) => {
  const userSchema = {
    firstName: vs.string(),
    lastName: vs.string(),
    isActive: vs.boolean()
  };

  let message: any;
  
  vs.applySchemaObject(userSchema, req.parsedBody, (err) => {
    const key = err.keyStack.shift();
    if (key) {
      if (message === undefined) {
        message = {};
      }
      message[key] = `Field '${key}' is required`;
    }
  });

  if (message) {
    return req.pond({statusCode: 422, message }, { status: 422 });
  }

  next();
}