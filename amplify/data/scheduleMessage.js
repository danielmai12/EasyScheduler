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
            userEmail: ctx.identity.claims.email,
          }),
        },
      },
    },
  };
};

export const response = (ctx) => {
  return { message: `${ctx}` };
};
