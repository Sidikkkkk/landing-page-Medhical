export async function fetchPost() {
  const res = await fetch("https://dummyjson.com/posts");
  const data = await res.json();
  return data;
}
