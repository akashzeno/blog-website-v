/**
 * TODO (Together): Create getPostIdParam to get the id of the post to use in the request later
 * TODO: Complete getPost function to get post data from API
 * TODO: Complete buildPost function to fill in the post data in the post.html file using ids
 */

const API_URL = "https://blog-app-api-1.herokuapp.com/api/posts/";
const API_BASE_URL = "https://blog-app-api-1.herokuapp.com/";

window.onload = () => {
    getPost();
}
const getPostIdParam = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('id');
}

const getPost = () => {
    // CODE GOES HERE
    const postId = getPostIdParam();
    fetch(API_URL + postId,{method: "GET"}).then(response => response.json()).then(data => buildPost(data));

}

const buildPost = (data) => {
    // HINT: Convert the date number to a Date string
    const postDate = new Date(parseInt(data.added_date)).toDateString();
    const postImage = API_BASE_URL + data.post_image;
    blogPostContent =  `<div id="individual-post-title">${data.title}</div>
                        <div id="individual-post-date">${postDate}</div>
                        <div id="individual-post-content">${data.content}</div>`;
    document.querySelector(".post-container").innerHTML = blogPostContent;
    document.querySelector("header").style.backgroundImage = `url(${postImage})`;
}

const deletePost = () => {
    const postId = getPostIdParam();
    fetch(API_URL+postId,{method: "DELETE"}).then(()=>{
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);
    });
}
