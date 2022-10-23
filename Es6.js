
//   'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=kfg%202&key=[YOUR_API_KEY]'
const API= "AIzaSyD9cZ6LQRtbRYWt-6a-G2cI23y8cxUiuJ0";

const searchvideo= async() => {
    try{
        const q=document.getElementById("query").value


        const res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${q}%202&key=${API}`)

        const data=await res.json();

        // console.log(data.items)
        append(data.items)
    
    
        // console.log(res)

    }
    catch(err){
    console.log(err)
    }
}


const append=(videos) =>{
    let show=document.getElementById("show-video");

    show.innerHTML=null;

    videos.forEach(({id:{videoId},snippet:{title}})=>{

        let div=document.createElement("div");

        let iframe=document.createElement("iframe")
        iframe.src=`https://www.youtube.com/embed/${videoId}`

        iframe.width="100%";
        iframe.height="100%";
        iframe.allow="fullscreen";

        let name=document.createElement("h5");
        name.innerText=title;


        div.append(iframe,name)

        let data={
            title,
            videoId,
        }
div.onclick= () => {
   showVideo(data)
}
show.append(div)
   
    })
}

const showVideo=(x) => {
window.location.href="video.html";
localStorage.setItem("video",JSON.stringify(x))

}