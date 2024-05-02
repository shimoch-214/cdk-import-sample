# AWS CDK Import

AWS CDK の import 機能を利用してみる。題材として amplify リソースのインポートを試みる。  

## モチベーション

amplify の自動デプロイを有効にする際には該当 GitHub レポジトリと amplify の接続が必要となる。CDK で amplify 設定を管理する場合には `admin:repo_hook` 権限をもった PAT を CDK に記載する必要があるが、以下の理由で取りまわしが面倒である。

- 初回接続時にしか利用されない
- Cfn テンプレートに残るので secretsManger 等を利用して秘匿する必要がある
- ORGANIZATION の場合は OWNER が発行した PAT が必要

amplify app の手動で作成時にレポジトリ接続を行い、その後 `cdk import` により `AWS::Amplify::App` をスタック管理下に移行、その際に `AccessToken` フィールドにダミー値を埋め込みその後のデプロイに支障が出ないかどうかを検証する。
