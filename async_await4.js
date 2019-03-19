//  4. 处理 async 函数中的错误
//  用try/catch

const fetch = require('node-fetch');

async function getData(id) {
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`;
  const response = await fetch(url);
  if (response.status !== 200) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

const showError = async (id) => {
  try {
    const column = await getData(id);
    console.log(`NAME: ${column.name}`);
    console.log(`INTRO: ${column.intro}`);
  } catch (err) {
    console.error(err);
  }
};

showError('feweekly123');