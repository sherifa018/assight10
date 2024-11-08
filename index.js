function typehello() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}
async function call(para) {
  console.log("hello");
  await typehello();
  console.log("world");
}
call();
