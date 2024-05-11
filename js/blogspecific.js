const singleBlog = document.querySelector(".single-blog");

const queryString = document.location.search;
const newParam = new URLSearchParams(queryString);


const id = newParam.get("id");
console.log(id);

const postUrl = "https://www.straumstra.no/wp-json/wp/v2/posts/" + id;

console.log(postUrl);

const getPosts = async() => {
  const response = await fetch(postUrl);
  if(!response.ok) {
    throw new Error(`HTTP Error! Status ${response.status}`);
  }

  const data = await response.json();
  createPosts(data);
}

getPosts();

function createPosts(post) {
  singleBlog.innerHTML = `
  <div class="solo-post">
    <div class="solo-post-img">
      <img src="${post.featured_media_src_url}" alt="${post.title.rendered}">
    </div>
    <div class="solo-post-text">
      <h2>${post.title.rendered}</h2>
      <p>${post.content.rendered}</p>
      <h4>${post.date}</h4>
    </div>
  </div>`
}