const express = require('express');
const router = express();
const db = require('../config/db')


router.get('/listBoard', (req, res) => {
    db.query('SELECT * FROM t_review', (err, data) => {
        if (!err) res.send({ products: data });
        else res.send(err);
    })
})

router.post('/updateBoard', (req, res) => {
    const updatequery = 'update t_review set req_date=?, req_name=?, brand_name=?, review_date=?, bank_name=?, cost=?, pay_yn=? where idx=?';
    console.log(updatequery);
    let data = req.body.data;
    console.log(data);

    let req_date = data.req_date;
    let req_name = data.req_name;
    let brand_name = data.brand_name;
    let review_date = data.review_date;
    let bank_name = data.bank_name || "";
    let cost = data.cost;
    let pay_yn = data.pay_yn;
    let idx = data.idx;

    db.query(updatequery, [req_date, req_name, brand_name, review_date, bank_name, cost, pay_yn, idx], (err, data) => {
        if (!err) {
            console.log("success" + data)
            res.sendStatus(200);
        }
        else {
            console.log("fail" + err)
            res.send(err.response);
        }
    })
})

module.exports = router;