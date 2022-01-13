https://developer.mozilla.org/en-US/docs/Web/CSS/:host()

let x=document.createElement('style'); let y=document.createElement('span');
y.textContent=this.textContent;
const z=this.attachShadow({mode:'open'}); z.appendChild(x);z.appendChild(y);
x.textContent='span:hover {text-decoration:underline;}'+':host-context(h1){font-style:italic;}'+':host-context(h1):after{content:"-no links in headers!"}'+':host-context(article,aside){color:gray;}'+'host(.footer){color:red;}'+':host{background:rgba(0,1,2,0.2); padding:2px 5px;}';