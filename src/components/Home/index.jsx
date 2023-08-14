import { FeedRow } from "./styles-posts";

import { BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { RiShareBoxLine } from "react-icons/ri";

export function Home() {
    return (
        <>
            <div className="container">
                {/* POSTS */}
                <FeedRow>
                    <div className="postHeader">
                        <div className="postHeader__avatar">
                            <img src="https://avatars.githubusercontent.com/u/107426526?v=4" alt="Adelmo Dias" />
                        </div>
                        <div className="postHeader__info">
                            <div className="postHeader__info--authorName">Adelmo Dias</div>
                            <div className="postHeader__info--time">há 31 minutos</div>
                        </div>
                        <div className="postHeader__actions">
                            <BsThreeDots size={21} color={"#818c99"} />
                        </div>
                    </div>

                    <div className="postContent">
                        <div className="postConten--wallText">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium mollitia deserunt veritatis nostrum? Labore, voluptatum maxime consequuntur, quas nam earum in corporis reprehenderit odio nobis soluta cupiditate, debitis excepturi repellendus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium mollitia deserunt veritatis nostrum? Labore, voluptatum maxime consequuntur, quas nam earum in corporis reprehenderit odio nobis soluta cupiditate,
                                debitis excepturi repellendus!
                            </p>
                        </div>
                    </div>

                    <div className="postActions">
                        <div className="postActions--like">
                            <AiOutlineHeart size={18} />4
                        </div>
                        <div className="postActions--comment">
                            <BiComment size={18} />2
                        </div>
                        <div className="postActions--share">
                            <RiShareBoxLine size={18} />3
                        </div>
                    </div>

                    <div className="postReplies"></div>
                </FeedRow>

                <FeedRow>
                    <div className="postHeader">
                        <div className="postHeader__avatar">
                            <img src="https://avatars.githubusercontent.com/u/107426526?v=4" alt="Adelmo Dias" />
                        </div>
                        <div className="postHeader__info">
                            <div className="postHeader__info--authorName">Adelmo Dias</div>
                            <div className="postHeader__info--time">há 31 minutos</div>
                        </div>
                        <div className="postHeader__actions">
                            <BsThreeDots size={21} color={"#818c99"} />
                        </div>
                    </div>

                    <div className="postContent">
                        <div className="postConten--wallText">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium mollitia deserunt veritatis nostrum? Labore, voluptatum maxime consequuntur, quas nam earum in corporis reprehenderit odio nobis soluta cupiditate, debitis excepturi repellendus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium mollitia deserunt veritatis nostrum? Labore, voluptatum maxime consequuntur, quas nam earum in corporis reprehenderit odio nobis soluta cupiditate,
                                debitis excepturi repellendus!
                            </p>
                        </div>
                    </div>

                    <div className="postActions">
                        <div className="postActions--like">
                            <AiOutlineHeart size={18} />4
                        </div>
                        <div className="postActions--comment">
                            <BiComment size={18} />2
                        </div>
                        <div className="postActions--share">
                            <RiShareBoxLine size={18} />3
                        </div>
                    </div>

                    <div className="postReplies"></div>
                </FeedRow>

                <FeedRow>
                    <div className="postHeader">
                        <div className="postHeader__avatar">
                            <img src="https://avatars.githubusercontent.com/u/107426526?v=4" alt="Adelmo Dias" />
                        </div>
                        <div className="postHeader__info">
                            <div className="postHeader__info--authorName">Adelmo Dias</div>
                            <div className="postHeader__info--time">há 31 minutos</div>
                        </div>
                        <div className="postHeader__actions">
                            <BsThreeDots size={21} color={"#818c99"} />
                        </div>
                    </div>

                    <div className="postContent">
                        <div className="postConten--wallText">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium mollitia deserunt veritatis nostrum? Labore, voluptatum maxime consequuntur, quas nam earum in corporis reprehenderit odio nobis soluta cupiditate, debitis excepturi repellendus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium mollitia deserunt veritatis nostrum? Labore, voluptatum maxime consequuntur, quas nam earum in corporis reprehenderit odio nobis soluta cupiditate,
                                debitis excepturi repellendus!
                            </p>
                        </div>
                    </div>

                    <div className="postActions">
                        <div className="postActions--like">
                            <AiOutlineHeart size={18} />4
                        </div>
                        <div className="postActions--comment">
                            <BiComment size={18} />2
                        </div>
                        <div className="postActions--share">
                            <RiShareBoxLine size={18} />3
                        </div>
                    </div>

                    <div className="postReplies"></div>
                </FeedRow>
                {/* POSTS end. */}
            </div>
        </>
    );
}
