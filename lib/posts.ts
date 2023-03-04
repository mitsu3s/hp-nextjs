// サーバーサイドで実行される、APIにフェッチするためのコードをかく

const apiUrl = 'https://jsonplaceholder.typicode.com/posts'

// asyncとawaitで同期化
// https://jsonplaceholder.typicode.com/posts からfetchでデータを取得
export async function getAllPostsData() {
    const res = await fetch(new URL(apiUrl))
    const posts = await res.json()
    return posts
}
