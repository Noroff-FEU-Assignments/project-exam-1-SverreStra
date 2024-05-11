const baseUrl = "https://www.straumstra.no/wp-json/wp/v2/posts?page=2&per_page=10";
const allPost = document.querySelector(".post-container");
const olderPosts = document.querySelector(".older-posts");

const getPosts = async () => {
  const response = await fetch(baseUrl);
  if (!response.ok) {
    throw new Error (`HTTP Error! status ${response.status}`);
  }
  const data = await response.json();
  createPosts(data);
}

getPosts();

function createPosts(posts) {
  posts.forEach(function(post){
    allPost.innerHTML += `
    <div class="posts">
    <h2>${post.title.rendered}</h2>
    <img src="${post.featured_media_src_url}" alt="${post.title.rendered}">
    <h4>${post.date}</h4>
    <a href="blogspecific.html?id=${post.id}" class="read-more-btn btn">Read More</a>
    </div>`
  })
};