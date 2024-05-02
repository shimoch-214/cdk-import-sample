import * as cdk from "aws-cdk-lib";
import * as amplify from "aws-cdk-lib/aws-amplify";
import type { Construct } from "constructs";

export class CdkSampleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const app = new amplify.CfnApp(this, "AmplifyApp", {
      name: "cdk-import-sample-apps/sample-app",
      accessToken: "dummy",
      environmentVariables: [
        {
          name: "AMPLIFY_DIFF_DEPLOY",
          value: "false",
        },
        {
          name: "AMPLIFY_MONOREPO_APP_ROOT",
          value: "apps/sample-app",
        },
      ],
    });
    new amplify.CfnBranch(this, "Branch", {
      appId: app.attrAppId,
      branchName: "main",
    });
  }
}
