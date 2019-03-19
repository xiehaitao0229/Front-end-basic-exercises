//  5. 正确处理多个 await 操作的并行串行

const fetch = require('node-fetch');

const sleep = (timeout = 2000) => new Promise(resolve => {
  setTimeout(resolve, timeout);
});

async function getData(id) {
  await sleep(2000);
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`;
  const response = await fetch(url);
  return await response.json();
}

const showColumnInfo = async () => {
  console.log('123');
  const feweekly = await getData('feweekly');
  const toolingtips = await getData('toolingtips');

  console.log(`NAME: ${feweekly.name}`);
  console.log(`INTRO: ${feweekly.intro}`);

  console.log(`NAME: ${toolingtips.name}`);
  console.log(`INTRO: ${toolingtips.intro}`);

  console.log('456');
};

showColumnInfo();