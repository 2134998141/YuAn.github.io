var posts=["2025/11/06/hello-world/","2025/11/07/使用hexo搭建个人博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };