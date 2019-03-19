//  3. 把任意类型的函数转成 async 风格

const fetch = require('node-fetch');

const getData = async (id)=>{
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`;
  const response = await fetch(url);
  return await response.json();
}

class APIClient {
  async getData(id){
    const url = `https://zhuanlan.zhihu.com/api/columns/${id}`;
    const response = await fetch(url);
    return await response.json();
  }
}

(async ()=>{
  const client = new APIClient();
  const column  = await client.getData('feweekly')
  console.log(`NAME: ${column.name}`);
  console.log(`INTRO: ${column.intro}`);
})()