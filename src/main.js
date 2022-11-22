const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log('服务启动成功\n正在监听数据')
});

app.get('/', (req, rep) => {
    rep.send('欢迎');
});

const data = [
    {
        id: 1,
        title: '雪饮狂刀',
        content: '聂风专用'
    },
    {
        id: 2,
        title: '绝世好剑',
        content: '步惊云专用'
    },
    {
        id: 3,
        title: '麒麟剑',
        content: '断浪随便用用'
    }
];

app.get('/posts', (req, rep) => {
    rep.send(data);
});


app.get('/posts/:postId', (req, rep) => {
    const { postId } = req.params;
    const posts = data.filter(item => item.id == postId);
    rep.send(posts[0]);
});