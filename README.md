## Local環境
yarn install 
yarn start

## Docker環境
### build
docker build -t serverless-vpc-connect-test:$(git show --format='%h' --no-patch ) .

### run
docker run -it -p '3000:3000' serverless-vpc-connect-test:$(git show --format='%h' --no-patch )


## deploy

### GAE Standard Environment
#### 環境設定
export GCP_PROJECT=<your gcp project>
#### config作成
```bash
cp app_sample.yaml app.yaml
```

gcloud app deploy --project=${GCP_PROJECT} --version=$(git show --format='%h' --no-patch ) --quiet

## 懸念
CORS対応しないいとエラーになる時がある。
