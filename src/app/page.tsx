'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from './page.module.css';

const Home: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");

    const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        window.location.href = `https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=${encodeURIComponent(searchTerm)}`;
    };

    return (
        <div className={styles.container}>
            <div className={styles.searchBar}>
                <a href='https://www.naver.com/'>
                    <svg width="20px" height="20px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M9 32V480H181.366V255.862L331.358 480H504V32H331.358V255.862L181.366 32H9Z"></path></svg>
                </a>
                <form onSubmit={handleSearchSubmit}>
                    <input
                        type="text"
                        placeholder="검색어를 입력하세요"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)} // added the onChange event to update the state
                    />
                </form>
            </div>
        </div>
    );
}

export default Home;
