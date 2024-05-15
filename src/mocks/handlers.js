import { setupWorker, rest } from 'msw'

export const handlers = [
    rest.get('/mainPage', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
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
            }),
        )
    }),
]
