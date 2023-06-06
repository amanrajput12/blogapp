const get=async()=>{

  let res=await fetch(`https://jsonplaceholder.typicode.com/posts`,{
          method:"GET",
          headers:{
              'Content-Type':'application/json',
          }
      
      });
  
      let data =await res .json();
     
      getData(data)
  }
  
  get()
  
  let blog=document.querySelector(".blog");
  function getData(data){
      console.log("data:",data);
      data.forEach((ele)=>{
          let div=document.createElement("div");
          let title=document.createElement("h3")
          title.innerText=ele.title
          let body=document.createElement("p")
          body.innerText=ele.body;
         div.append(title,body)
         blog.append(div)
      })
     
  }
  
  
  async function addBlog(){
      let title=document.getElementById("titleInput").value;
      let Body=document.getElementById("bodyInput").value;
  
      let send_data={
          title,      
          Body
  };
      
      let res=await fetch(`https://jsonplaceholder.typicode.com/posts`,{
          method:"POST",
  
          body:JSON.stringify(send_data),
  
          headers:{
              'Content-Type':'application/json',
          }
      
      });
  
      let data =await res .json();
      console.log("data:",data);
  }
  
  async function delBlog(){
      let id=document.getElementById("delid").value;
      let res=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
  
          method:"DELETE",
          headers:{
              'Content-Type':'application/json',
          },
      });
      let data=await res .json();
      console.log("data",data)
  }