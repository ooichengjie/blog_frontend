import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img 
            className="postImg" 
            src="https://vir.com.vn/stores/news_dataimages/hung/052016/24/23/cafe1.jpg" 
            alt="" 
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>                
            </div>
            <span className="postTitle">Lorem ipsum dolor sit amet</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        < p className="postDesc">
            nibh euismod tincidunt ut laoreet dolore mean in English?
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
        </p>
   </div>
  );
}
