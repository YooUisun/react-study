import './NewsBlog.css';
import { useState } from 'react';
import Modal from './Modal';

function NewsBlog() {

    //javascript 코드
    let title = 'React Study';

    // 아래 3개의 state 변수를 하나의 news 배열로 통합
    let [news, setNews] = useState(['오늘의 뉴스', '어제의 뉴스', '내일의 뉴스']); 
    // 좋아요 갯수 정보를 하나의 likeCount 배열로 통합
    let [likeCount, setLikeCount] = useState([0, 0, 0]);
    
    let [modalFlag, setModalFlag] = useState(false);

    let [selectedTitle, setSelectedTitle] = useState('');
    let [selectedLikeCount, setSelectedLikeCount] = useState(0);
    let [inputText, setInputText] = useState('');

    // 뉴스 항목 삭제 기능을 위한 deleteNews 함수 추가
    const deleteNews = (index) => {
        let temp = [...news];
        temp.splice(index, 1);
        setNews(temp);

        let tempLike = [...likeCount];
        tempLike.splice(index, 1);
        setLikeCount(tempLike);
    };

    return (
        <div>
            <div className='black-nav'>
                <h4>Blog Header</h4>
                <div style={{ color: "orange", fontSize: "20px" }}>{title}</div>
            </div>

            {
                news.map((item, index) => {
                    return (
                        <div className="post-list">
                            <h4 onClick={() => { 
                                setModalFlag(!modalFlag);
                                setSelectedTitle(item);
                                setSelectedLikeCount(likeCount[index]);
                            }}>
                                {item} <span onClick={(event) => {
                                    event.stopPropagation();
                                    let temp = [...likeCount];
                                    temp[index]++;
                                    setLikeCount(temp);
                                }}>❤</span> {likeCount[index]}
                            </h4>
                            <p>내용 무</p>
                            <button onClick={()=>{
                                //누른 내용 데이터가 삭제

                                //index 활용
                                //splice 활용
                                let temp = [...news];
                                temp.splice(index, 1);
                                setNews(temp);

                                likeCount.splice(index, 1);


                            }}>삭제</button>

                        </div>
                    )
                })
            }

            <div>
                <input type="text" id="input_news" value={inputText} onChange={(event)=>{
                    setInputText(event.target.value);
                }}/>
                <button onClick={()=>{
                    if( inputText.trim() === ''){
                        alert('값을 입력하세요');
                        return;
                    }

                    let temp = [...news];
                    temp.push(inputText);
                    setNews(temp);
                    
                    likeCount.push(0);

                    setInputText('');
                }}>발행</button>
            </div>

            {
                modalFlag && <Modal title={selectedTitle} likeCount={selectedLikeCount} news={news} setNews={setNews} bgColor={'lightcyan'} />
            }

        </div>
    )
}

export default NewsBlog;