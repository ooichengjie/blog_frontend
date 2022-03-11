import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlPostwrapper">
            <img src="https://vir.com.vn/stores/news_dataimages/hung/052016/24/23/cafe1.jpg" alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor, sit amet.
                <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                    Author: <b>Yusuff</b>
                </span>
                <span className="singlePostDate">
                    1 hour ago
                </span>
            </div>
            <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est illo dolor modi nemo fugiat, corrupti molestias hic doloremque mollitia blanditiis et enim adipisci consectetur ex officiis! Voluptatem debitis quidem ipsum.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est illo dolor modi nemo fugiat, corrupti molestias hic doloremque mollitia blanditiis et enim adipisci consectetur ex officiis! Voluptatem debitis quidem ipsum.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est illo dolor modi nemo fugiat, corrupti molestias hic doloremque mollitia blanditiis et enim adipisci consectetur ex officiis! Voluptatem debitis quidem ipsum.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est illo dolor modi nemo fugiat, corrupti molestias hic doloremque mollitia blanditiis et enim adipisci consectetur ex officiis! Voluptatem debitis quidem ipsum.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est illo dolor modi nemo fugiat, corrupti molestias hic doloremque mollitia blanditiis et enim adipisci consectetur ex officiis! Voluptatem debitis quidem ipsum.
            </p>
        </div>

    </div>
  )
}
