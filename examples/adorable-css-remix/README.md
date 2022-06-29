# Remix + Adorable CSS Example

## Important Note
[concurrently](https://github.com/open-cli-tools/concurrently)를 사용하여 두 개 이상의 watch 작업을 실행할 떄 `npm run ...` 으로 실행하면 프로세스가 종료되지 않는 문제가 있음.

ex)
- `concurrently "npm run watch:css" "npm run watch:js"`
  - `SIGINT` 전파 X (ctrl + c로 concurrently 종료 시 watch 살아있음)
- `concurrently "adorable-css -w" "remix dev"`
  - `SIGINT` 전파 O (ctrl + c로 concurrently 종료 시 watch 죽음)

## RUN

From your terminal:

```sh
npm run dev
```
![preview](preview.gif)