import Link from "next/link"









export default function Page(){
  return  <div  >

 <center> <ul  >
<li >

<Link href={'./'}>Home</Link>
</li>
<li  >
<Link href={'./services'}>servicpage</Link>
</li>
<li >
<Link href ={'./contact'} >ContactPage</Link>

</li>
<li><a href="/about" target="blank">Aboutpage  </a> 
  </li>
 </ul></center> 


<ul><li> <h1>home is sample page</h1>
             <h1>service text page </h1>
            <h1>contact apply css module </h1>
            <h1>about is next web page </h1>
</li></ul>


</div>



}
