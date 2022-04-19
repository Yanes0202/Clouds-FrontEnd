import { useEffect, useState } from "react";
import PostList from "../posts/PostList";
import classes from "./Main.module.css"




export default function Main(){
  const [isLoading, setisLoading] = useState(true);
  const [loadedPost, setLoadedPost] = useState([]);

  useEffect(()=>{

    fetch("http://localhost:8080/api/post/get").then((response)=>{
      return response.json();
    }).then((data)=>{
      const postData = [];

      for(const key in data){
        const post ={ 
          id: key,
          ...data[key]
        };
        postData.push(post)
      }

      setisLoading(false);
      setLoadedPost(postData);
    });


  },[])
       
    if(isLoading){
      return(
        <section>
          <p>IS LOADING!!!</p>
        </section>
      );
    }
      

    return (
      <section>
        <h1 className={classes.h1}>Posty</h1>
        <PostList posts={loadedPost} />
      </section>
    );
  }
