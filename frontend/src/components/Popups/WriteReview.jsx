// import React, { Component } from 'react';
// import heartImage from '../../assets/img/home_heart.png';
// import thumbsUp from '../../assets/img/thumbs_down.png';

// class WriteReview extends Component {
//     render() {
//         return (
//             <>
//                 <section class="form_sec">
//                     <div class="sign">
//                         <h1>Write Review</h1>
//                         <h3>Choose your thought</h3>
//                         <div class="all-button">
//                             <div class="good_button">
//                                 <img src={heartImage} alt="" />
//                                 <div class="inner_button">
//                                     <h2 id="h2">Good</h2>
//                                     <p id="p2">(15 likes)</p>
//                                 </div>
//                             </div>
//                             <div class="good_button">
//                                 <img src={heartImage} alt="" />
//                                 <div class="inner_button">
//                                     <h2 id="h2">Very Good</h2>
//                                     <p id="p2">(15 likes)</p>
//                                 </div>
//                             </div>
//                             <div class="good_button">
//                                 <img src={heartImage} alt="" />
//                                 <div class="inner_button">
//                                     <h2 id="h2">Excellent</h2>
//                                     <p id="p2">(15 likes)</p>
//                                 </div>
//                             </div>
//                             <div class="good_button">
//                                 <img src={thumbsUp} alt="" />
//                                 <div class="inner_button">
//                                     <h2 id="h2">Not Good</h2>
//                                     <p id="p2">(15 likes)</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <input id="inputbar" type="text" placeholder="Your Name" />
//                         <br />
//                         <input id="inputbar" type="text" placeholder="Enter Your Feedback" />
//                         <br />
//                         <button class="submit">Submit</button>
//                     </div>
//                 </section>
//             </>
//         );
//     }
// }

// export default WriteReview;

import React, { useState } from 'react';
import ImgIconCross from '../../assets/img/cross.svg';
import ImgReaction0 from '../../assets/img/reaction0.svg';
import ImgReaction1 from '../../assets/img/reaction1.svg';
import ImgReaction2 from '../../assets/img/reaction2.svg';
import ImgReaction3 from '../../assets/img/reaction3.svg';
import API from '../../API';

const api = new API();

const WriteReview = ({ selectedItemId, setSelectedItemId, setShowWriteReview }) => {
    const [likeCount, setLikeCount] = useState(1),
        [name, setName] = useState(''),
        [body, setBody] = useState('');

    const inputName = event => {
        setName(event.target.value);
    };

    const inputBody = event => {
        setBody(event.target.value);
    };

    const sendReviewButton = () => {
        api.writeReview(selectedItemId, name, body, likeCount).then(review => {
            alert('Your review has been sent. Thank you for your review!');
            setName('');
            setBody('');
            setLikeCount(1);
            setSelectedItemId(null);
            setShowWriteReview(false);
        });
    };

    return (
        <section class="popup">
            <div class="innter">
                <div class="popup-content">
                    <div class="innter">
                        <img src={ImgIconCross} onClick={() => setShowWriteReview(false)} class="cross" alt="" />
                        <h2>Write Review</h2>
                        <p>Choose your thought</p>
                        <ul class="reactions">
                            <li>
                                {likeCount === 1 ? (
                                    <img src={ImgReaction1} class="selected" onClick={() => setLikeCount(1)} alt="" />
                                ) : (
                                    <img src={ImgReaction1} onClick={() => setLikeCount(1)} alt="" />
                                )}
                            </li>
                            <li>
                                {likeCount === 2 ? (
                                    <img src={ImgReaction2} class="selected" onClick={() => setLikeCount(2)} alt="" />
                                ) : (
                                    <img src={ImgReaction2} onClick={() => setLikeCount(2)} alt="" />
                                )}
                            </li>
                            <li>
                                {likeCount === 3 ? (
                                    <img src={ImgReaction3} class="selected" onClick={() => setLikeCount(3)} alt="" />
                                ) : (
                                    <img src={ImgReaction3} onClick={() => setLikeCount(3)} alt="" />
                                )}
                            </li>
                            <li>
                                {likeCount === 0 ? (
                                    <img src={ImgReaction0} class="selected" onClick={() => setLikeCount(0)} alt="" />
                                ) : (
                                    <img src={ImgReaction0} onClick={() => setLikeCount(0)} alt="" />
                                )}
                            </li>
                        </ul>
                        <input onChange={inputName} type="text" name="name" placeholder="Enter your name" required />
                        <textarea onChange={inputBody} name="body" placeholder="Enter your review" required></textarea>
                        <a href="/">
                            <button onClick={sendReviewButton}>Send Review</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WriteReview;
