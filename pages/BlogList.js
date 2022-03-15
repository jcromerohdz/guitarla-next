import React from 'react'
import Feed from "../components/Feed";
import styles from '../styles/Blog.module.css'

const BlogList = ({feeds}) => {
  console.log(feeds)
  return (
    <>
      <h2 className="heading">Blog</h2>
        <div className={styles.blog}>
          {feeds.map(feed => (
            <Feed
              key={feed.id}
              feed={feed}
            />
          ))}
        </div>
    </>
  )
}

export default BlogList