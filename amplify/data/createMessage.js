import { util } from "@aws-appsync/utils";
import * as ddb from "@aws-appsync/utils/dynamodb";

export const request = (ctx) => {
  const { username, sub } = ctx.identity;

  const id = util.autoId();
  const now = util.time.nowISO8601();
  const owner = `${sub}::${username}`;
  const title = `${ctx.args.title.split(" ").join("-").toLowerCase()}-${id}`;
  // const title = ctx.args.title;

  const item = {
    ...ctx.args,
    createdAt: now,
    updatedAt: now,
    title,
    owner,
    __typename: "Message",
  };

  const key = { id };
  return ddb.put({ key, item });
};

export const response = (ctx) => {
  return ctx.result;
};
