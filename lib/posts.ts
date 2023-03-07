// サーバーサイドで実行される、APIにフェッチするためのコードをかく

// Postを使う時に渡される型を定義
interface Post {
    userId: string
    id: number
    title: string
    body: string
}

const apiUrl = 'https://jsonplaceholder.typicode.com/posts'

// asyncとawaitで同期化
// https://jsonplaceholder.typicode.com/posts からfetchでデータを取得
export async function getAllPostsData() {
    const res = await fetch(new URL(apiUrl))
    const posts = await res.json()
    return posts
}

// idの一覧を取得
export async function getAllPostsIds() {
    const res = await fetch(new URL(apiUrl))
    const posts = await res.json()

    return posts.map((post: Post) => {
        return {
            // getStaticPaths()を使うため、paramsとする
            params: {
                // idの要素だけ取り出す
                id: String(post.id),
            },
        }
    })
}

// 特定のidを使って、ビルド時にデータベースから情報を取得
// idは取得したいデータの引数
export async function getPostData(id: number) {
    const res = await fetch(new URL(`${apiUrl}/${id}/`))
    const post = await res.json()
    return post
}
