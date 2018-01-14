import React from "react";
import { Button } from 'rmwc/Button';
import Link from "gatsby-link";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.datePublished,
        description: postEdge.node.frontmatter.description,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <div>
        {/* Your post list here. */
        postList.map(post => (
          <div>
            <Link to={post.path} key={post.title}>
              <h1>{post.title}</h1>
            </Link>
            <Button>Easy</Button>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default PostListing;
