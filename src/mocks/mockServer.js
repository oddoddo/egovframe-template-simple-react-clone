const express = require('express')
const app = express()
const port = 3001

app.use(express.json())

app.get('/mainPage', (req, res) => {
    res.json({
        result: {
            notiList: [
                { nttId: 1, bbsId: 'notice', nttSj: '공지사항 제목 1', frstRegisterPnttm: '2024-05-01' },
                { nttId: 2, bbsId: 'notice', nttSj: '공지사항 제목 2', frstRegisterPnttm: '2024-05-02' },
            ],
            galList: [
                { nttId: 1, bbsId: 'gallery', nttSj: '갤러리 제목 1', frstRegisterPnttm: '2024-05-01' },
                { nttId: 2, bbsId: 'gallery', nttSj: '갤러리 제목 2', frstRegisterPnttm: '2024-05-02' },
            ],
        },
    })
})

app.listen(port, () => {
    console.log(`Mock server is running on http://localhost:${port}`)
})
