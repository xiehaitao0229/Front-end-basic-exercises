//  1.编写第一个 async/await 函数

const fetch = require('node-fetch');

async function getData(id) {
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`;
  const res = await fetch(url);
  const column = await res.json();
  console.log(`NAME: ${column.name}`);
  console.log(`INTRO: ${column.intro}`);
}

getData('feweekly')