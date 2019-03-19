//  2.将 async 函数用在 Promise chain 中

const fetch = require('node-fetch');

async function getData(id) {
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`;
  const res = await fetch(url);
  return await res.json();
}

getData('feweekly').then(column =>{
  console.log(`NAME: ${column.name}`);
  console.log(`INTRO: ${column.intro}`);
})