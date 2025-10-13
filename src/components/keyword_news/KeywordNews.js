import {DefaultBorder, Column} from "../../styles/layout";
import styled from "styled-components";
import {Plus, Enter} from "../../assets/keyword_news";
import {useState} from "react";
import { motion } from "framer-motion";


export const LayoutKeywordNews = styled(DefaultBorder)`
    width: 24%;
`;

export function KeywordNews({keyword, description}) {
    // keyword 는 8글자 까지만 가능하게 해야한다.
    // 제공 데이터 쿼리는 : https://news.google.com/search?q=${keyword} when:1d
    return (
        <LayoutKeywordNews>
            <Column>
                <a href={`https://news.google.com/search?q=${keyword}`}
                   style={{flex:0, fontSize: "23px", fontWeight: "bold"}}>
                    {keyword}
                </a>
                <hr/>
                <div style={{flex:1}}>{description}</div>
            </Column>
        </LayoutKeywordNews>
    )
}


export const LayoutEmptyKeywordNews = styled(LayoutKeywordNews)`
    display: flex;
    justify-content: center;
    transition: transform 0.2s ease;
    
    &>button {
        width: 150px;
        height: 150px;
    }
    &>button:hover {
        transform: scale(1.05);
    }
`;

export function EmptyKeywordNews(){
    const [isEditing, setIsEditing] = useState(false);
    const [keyword, setKeyword] = useState("");

    const handleClick = () => setIsEditing(!isEditing);
    const handleKeyPress = (e) => setKeyword(e.target.value.slice(0, 8));

    const handleSubmit = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            console.log("등록할 키워드:", keyword);
            setIsEditing(false);
            setKeyword("");
        }
    }

    return (
        <LayoutEmptyKeywordNews>
            {isEditing ? (
                <motion.form onSubmit={handleSubmit}
                             key="input"
                             initial={{opacity: 0, scale: 0.9}}
                             animate={{opacity: 1, scale: 1}}
                             exit={{opacity: 0, scale: 0.9}}
                             transition={{duration: 0.2}}
                >
                    <Column style={{height:"100%", justifyContent:"space-evenly"}}>
                        <input
                            type="text"
                            value={keyword}
                            onChange={handleKeyPress}
                            placeholder="키워드 (최대 8자)"
                            autoFocus
                            style={{width:'100%'}}
                        />
                        <button>
                            <Enter/>
                        </button>
                    </Column>
                </motion.form>
            ) : (
                <motion.button onClick={handleClick}
                               key="button"
                               initial={{opacity: 0}}
                               animate={{opacity: 1}}
                               exit={{opacity: 0}}
                               transition={{duration: 0.2}}
                >
                    <Plus/>
                </motion.button>
                )
            }
        </LayoutEmptyKeywordNews>
    );
}