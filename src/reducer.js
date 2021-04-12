function postReducer(state, action) {
    switch (action.type) {
        case "ADD_POST": {
          const newPost = action.payload.post
          return {posts: [newPost, ...state.posts]}
        }
    }
}

export default postReducer
