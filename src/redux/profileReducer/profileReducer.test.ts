import profileReducer, { actions } from "./index";

let state = {
    profile: null,
    status: null ,
    posts: [
        {id: 1, message: "post1", likesCount: 0},
        {id: 2, message: "post2", likesCount: 23},
        {id: 3, message: "post3", likesCount: 12},
        {id: 4, message: "post4", likesCount: 108},
    ],
};

it('posts length should be incremeted', () => {
    // 1. test data
    let action = actions.addPostCreator('portador')

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    // @ts-ignore
    expect(newState.posts.length).toBe(5);
})


it('message of new post should be correct', () => {
    // 1. test data
    let action = actions.addPostCreator('portador')

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    // @ts-ignore
    expect(newState.posts[4].message).toBe('portador');
})

it('new post likes count should be 0', () => {
    // 1. test data
    let action = actions.addPostCreator('portador')

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    // @ts-ignore
    expect(newState.posts[4].likesCount).toBe(0);
})

it('after deleting length of posts should be decrement', () => {
    // 1. test data
    let action = actions.deletePostCreator(1)

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    // @ts-ignore
    expect(newState.posts.length).toBe(3);
})

it('length of posts shouldn`t be changed if id isn`t correct', () => {
    // 1. test data
    // @ts-ignore
    let action = actions.deletePostCreator("1")

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    // @ts-ignore
    expect(newState.posts.length).toBe(4);
})