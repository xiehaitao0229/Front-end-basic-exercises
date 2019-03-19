const tasks = [];

for(var i=0;i<=5;i++){
  (function(i){
    tasks.push(new Promise((resolve)=>{
      setTimeout(()=>{
        console.log(new Date,i);
        resolve()
      },1000*i)
    }))
  })(i)
}

Promise.all(tasks).then(()=>{
  setTimeout(()=>{
    console.log(new Date,i);
  },1000)
})

const sleep = (timeountMS) => new Promise((resolve) => {
  setTimeout(resolve, timeountMS);
});

(async  () => {
  for(var i=0;i<=5;i++){
    if(i>0){
      await sleep(1000);
    }
    console.log(new Date,i);
  }

  await sleep(1000);
  console.log(new Date,i);
})()