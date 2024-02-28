import React from 'react'
import styles from './WhatIDo.module.css'
import html from "../../img/html.png"
import css from "../../img/css.png"
import chart from "../../img/chart.png"
import js from "../../img/js.png"
import bootstrap from "../../img/bootstrap.png"
import php from "../../img/php.png"
import heroku from "../../img/heroku.png"
import git from "../../img/git.png"
import firebase from "../../img/firebase.png"
import mongo from "../../img/mongo.png"
import mysql from "../../img/mysql.png"
import nodejs from "../../img/nodejs.png"
import netlify from "../../img/netlify.png"
import python from "../../img/python.png"
import react from "../../img/react.png"
import linux from "../../img/linux.png"
import cpp from "../../img/cpp.png"
import github from "../../img/github.png"
import express from "../../img/express.png"
import working from "../../img/working.png"
// import Project from '../Project/Project';
// import ContactScreen from '../ContactScreen/ContactScreen';
// import GitubRepos from '../GitubRepos/GitubRepos';

const Images = [
    html,
    css,
    chart,
    js,
    bootstrap,
    php,
    heroku,
    css,
    git,
    firebase,
    mongo,
    mysql,
    nodejs,
    netlify,
    python,
    react,
    linux,
    cpp,
    github,
    express
]

const WhatIDo = () => {
    return (
        <>
            <section className={styles.whatiDoSection}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className={`${styles.whatiDo}`}>What I Do ?
                            </h1>
                        </div>
                        <div className="col-md-8">
                            <div className={styles.imgWrapper}>
                                {Images.map(image => {
                                    return <img className={`${styles.icons}`} src={image} key="uniqueImages" alt="images"/>
                                })}
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className={`mx-auto`}>
                                <img src={`${working}`} key="working" className={`${styles.whatIDoIMG} rounded mx-auto d-block`} alt="" />
                            </div>
                        </div>

                    </div>
                </div >

            </section >
            {/* <Project />
            <GitubRepos />
            <ContactScreen /> */}
        </>
    )
}

export default WhatIDo
