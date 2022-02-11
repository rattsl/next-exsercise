// apiにfetchする関数(サーバーサイドで実行)
import fetch from "node-fetch";

// エンドポイントの定数定義
const apiUrl = "https://jsonplaceholder.typicode.com/posts";

export async function getAllPostData(){
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();
  return posts;
}