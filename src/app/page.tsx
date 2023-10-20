'use client'

import React, { useState, FormEvent } from 'react';
import styles from './page.module.css';
import Link from "next/link";

const Home: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");

    const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Save the searchTerm to the database
        fetch('http://ec2-3-39-126-15.ap-northeast-2.compute.amazonaws.com:1323/save-search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ searchTerm })
        }).then(response => {
            // After saving the searchTerm, redirect to Naver
            if(response.ok) {
                window.location.href = `https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=${encodeURIComponent(searchTerm)}`;
            } else {
                console.error("Failed to save the searchTerm");
            }
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.searchBar}>
                <Link href='https://www.naver.com/'>
                    <svg width="20px" height="20px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M9 32V480H181.366V255.862L331.358 480H504V32H331.358V255.862L181.366 32H9Z"></path></svg>
                </Link>
                <form onSubmit={handleSearchSubmit}>
                    <input
                        type="text"
                        placeholder="검색어를 입력하세요"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </form>
            </div>
        </div>
    );
}

export default Home;
