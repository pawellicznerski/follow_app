// increment
export function incrementLikes(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

export function incrementFollows(index) {
  return {
    type: 'INCREMENT_FOLLOWS',
    index
  }
}

// add comment
export function addComment(postId, author, comment, date) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment,
    date
  }
}

// remove comment
export function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}

//hide comments

//show comments

// show address
