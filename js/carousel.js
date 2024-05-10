const prev = document.getElementById('prev-btn');
const next = document.getElementById('next-btn');
const list = document.getElementById('carousel');

const itemWidth = 350
const padding = 10

prev.addEventListener('click',()=>{
  list.scrollLeft -= itemWidth + padding
})

next.addEventListener('click',()=>{
  list.scrollLeft += itemWidth + padding
})