const SET_POSTS = 'setPosts';
const DELETE_POST = 'deletePost';
const DELETE_COMMENT = 'deleteComment';

export const setPosts = posts => ({
  type: SET_POSTS,
  posts,
});

export const deletePost = postId => ({
  type: DELETE_POST,
  postId,
});

export const deleteComment = (postId, commentId) => ({
  type: DELETE_COMMENT,
  postId,
  commentId,
});

const postsReducer = (posts = [], action) => {
  switch (action.type) {
    case SET_POSTS:
      return action.posts;
    case DELETE_POST:
      return posts.filter(post => post.id !== action.postId);
    case DELETE_COMMENT:
      return posts.map((post) => {
        if (post.id === action.postId) {
          return {
            ...post,
            comments: post.comments.filter(
              comment => comment.id !== action.commentId
            ),
          };
        }

        return post;
      });
    default:
      return posts;
  }
};

export default postsReducer;
