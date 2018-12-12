var str=`
/**
 * hello，我是闫佳，是一名前端开发工程师
 * 现在我将展示一些代码
 * 首先添加一些过渡动画
 */
   *{
      transition:all 0.3s;
      box-sizing:border-box;
      margin:0;
      padding:0;
    }

/**
 * 加一个背景
 */
   body{
      color:white;
      background:#1E1F1C;
   }
/**
 * 继续
 */
   pre{
    overflow:auto;
   }
   body{
    padding:10px;
    max-height:100vh;
   }
   pre.code{
      padding:10px;
      border:1px solid #ccc;
      width:50%;
      background:rgb(39,40,34);
      transform:translateX(100%) rotateY(30deg);
   }
/**
 * 我的简历
 */
   body{
     display:flex;
   }
   pre.resume{
     width:50%;
     border:1px solid #ccc;
     transform:translateX(-100%) rotateY(30deg);
     background:rgb(39,40,34);
   }
  
`
var md=`
#个人信息
我叫、、、
    1.、、、
    2.、、、
    3.、、、
    #项目经验
    、、、
    1.、、、
    2.、、、
    3.、、、
    #项目介绍
    、、、
    1.、、、
    2.、、、
    3.、、、
    #自我评价
    、、、
    1.、、、
    2.、、、
    3.、、、
    #个人信息
    、、、
    1.、、、
    2.、、、
    3.、、、
    #项目经验
    、、、
    1.、、、
    2.、、、
    3.、、、
    #项目介绍
    、、、
    1.、、、
    2.、、、
    3.、、、
    # 自我评价
    、、、
    1.、、、
    2.、、、
    3.、、、
    # 联系方式
    、、、
    1.、、、
    2.、、、
    3.、、、
    
`
function writecode(resume){    
  let n=0
  let timer=setInterval(()=>{
    n=n+1
    code.innerText=code.innerText+str.substring(n-1,n)
    styleTag.innerText=styleTag.innerText+str.substring(n-1,n)
    code.scrollTop=code.scrollHeight
    if(n>=str.length){
      clearInterval(timer)
      resume.call(undefined)
    }
  },10)
}
function writeresume(){
  let n=0
  var resume=document.createElement('pre')
  resume.classList.add('resume')
  document.body.append(resume)
  var timer=setInterval(()=>{
    n=n+1
    resume.innerText=resume.innerText+md.substring(n-1,n)
    resume.scrollTop=resume.scrollHeight
    if(n>=md.length){
      clearInterval(timer)
      let css2=`
  /* 接下来用一个优秀的库 marked.js
   * 把 Markdown 变成 HTML
   *、、、
   *、、
   *、
   *来高亮一下
   */`
      let n=0
      timer=setInterval(()=>{
        n=n+1
        code.innerText=code.innerText+css2.substring(n-1,n)
        code.scrollTop=code.scrollHeight
        resume.innerHTML=marked(md)
        console.log(marked(md))
        if(n>css2.length){
          clearInterval(timer)        
          code.innerHTML=Prism.highlight(code.innerText, Prism.languages.css);
          console.log(code.innerText.substring(0, n))
          console.log(Prism)
        }
      },10)
    }
  },10)
}

writecode(writeresume)