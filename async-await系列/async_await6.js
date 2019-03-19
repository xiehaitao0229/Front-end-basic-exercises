//  6.使用 Promise.all() 让多个 await 操作并行

const fetch = require('node-fetch');

async function getData(id) {
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`;
  const response = await fetch(url);
  return await response.json();
}

const showColumnInfo = async () => {
  const [feweekly, toolingtips] = await Promise.all([
    getData('feweekly'),
    getData('toolingtips'),
  ]);

  console.log(`NAME: ${feweekly.name}`);
  console.log(`INTRO: ${feweekly.intro}`);

  console.log(`NAME: ${toolingtips.name}`);
  console.log(`INTRO: ${toolingtips.intro}`);
};

showColumnInfo();