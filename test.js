const extname = (filename) => {
  /* TODO */
  let result='';
  const ps=filename.indexOf('.');
  const len=filename.length;
  if(ps!==-1){
    result=filename.split('.');
    result='.'+result.pop();
  }
  return result;
  
}


const a='hello';

console.log(extname(a));