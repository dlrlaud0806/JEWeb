const express = require('express');
const router = express();
const db = require('../config/db')

// http://localhost:4000/ 으로 접속 시 응답메시지 출력
router.get('/listBoard', (req, res) => {
    db.query('SELECT * FROM t_review', (err, data) => {
        if (!err) res.send({ products: data });
        else res.send(err);
    })
})

router.post('/updateBoard', (req, res) => {
    const updatequery = 'update t_review set req_date=? req_name=? brand_name=? review_date=? bank_name=? cost=? pay_yn=? where idx=?';
    console.log(req);
    let req_date = req.body.req_date;
    let req_name = req.body.req_name;
    let brand_name = req.body.brand_name;
    let review_date = req.body.review_date;
    let bank_name = req.body.bank_name;
    let cost = req.body.cost;
    let pay_yn = req.body.pay_yn;
    let idx = req.body.idx;

    db.query(updatequery, [req_date, req_name, brand_name, review_date, bank_name, cost, pay_yn, idx], (err, data) => {
        if (!err) res.send({ products: data });
        else res.send(err);
    })
})

module.exports = router;