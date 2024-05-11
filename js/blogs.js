const baseUrl = "https://www.straumstra.no/wp-json/wp/v2/posts";
const allPost = document.querySelector(".post-container");
const leftPost = document.querySelector(".post-left");
const rightPost = document.querySelector(".post-right");

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


const leftPosts = async () => {
  const response = await fetch("https://www.straumstra.no/wp-json/wp/v2/posts/167");
  if (!response.ok) {
    throw new Error (`HTTP Error! status ${response.status}`);
  }
  const data = await response.json();
  postLeft(data);
}

leftPosts();

function postLeft(posters) {
   leftPost.innerHTML += `
    <div class="left-posts">
      <div class="card-image">
        <img src="${posters.featured_media_src_url}" alt="${posters.title.rendered}" class="img">
      </div>
      <div class="card-content">
        <h2>${posters.title.rendered}</h2>
        <p class="phone-away">${posters.excerpt.rendered}</p>
        <div class="button">
          <a href="blogspecific.html?id=${posters.id}" class="read-more-btn btn">Read More</a>
        </div>
      </div>
    </div>`
  
};


const rightPosts = async () => {
  const response = await fetch("https://www.straumstra.no/wp-json/wp/v2/posts/175");
  if (!response.ok) {
    throw new Error (`HTTP Error! status ${response.status}`);
  }
  const data = await response.json();
  postRight(data);
}

rightPosts();

function postRight(posters) {
  rightPost.innerHTML += `
    <div class="left-posts">
      <div class="card-image">
        <img src="${posters.featured_media_src_url}" alt="${posters.title.rendered}" class="img">
      </div>
      <div class="card-content">
        <h2>${posters.title.rendered}</h2>
        <p>${posters.excerpt.rendered}</p>
        <div class="button">
        <a href="blogspecific.html?id=${posters.id}" class="read-more-btn btn">Read More</a>
        </div>
      </div>
    </div>`
  
};

function showMore() {
  var x = document.getElementById("two-posts");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
} 