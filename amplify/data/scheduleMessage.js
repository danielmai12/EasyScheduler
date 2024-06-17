import { util, runtime } from "@aws-appsync/utils";

export const request = (ctx) => {
  console.log("the context identity", ctx.identity);
  if (!ctx.prev.result.id) {
    runtime.earlyReturn({
      message: "error saving recording to database, no message scheduled",
    });
  }

  const title = `${ctx.args.title.split(" ").join("-").toLowerCase()}-${
    ctx.prev.result.id
  }`;
  return {
    resourcePath: `/schedules/${title}`,
    method: "POST",
    params: {
      headers: { "Content-Type": "application/json" },
      body: {
        ActionAfterCompletion: "DELETE",
        ScheduleExpression: `at(${ctx.prev.result.deliveryDate})`,
        ScheduleExpressionTimezone: ctx.prev.result.timezone,
        ClientToken: util.autoId(),
        FlexibleTimeWindow: {
          Mode: "OFF",
        },
        Target: {
          Arn: ctx.env.SCHEDULE_FUNCTION_ARN,
          RoleArn: ctx.env.SCHEDULE_FUNCTION_ROLE_ARN,
          Input: JSON.stringify({
            messageId: ctx.prev.result.id,
            userPoolId: extractUserPoolId(ctx.identity.claims.iss),
            clientId: ctx.identity.claims.client_id,
          }),
        },
      },
    },
  };
};

export const response = (ctx) => {
  return { message: `${ctx}` };
};

const extractUserPoolId = (url) => {
  const regex = /cognito-idp\.[a-z0-9-]+\.amazonaws\.com\/([a-z0-9-_]+)/i;
  const match = url.match(regex);
  return match ? match[1] : null;
};
