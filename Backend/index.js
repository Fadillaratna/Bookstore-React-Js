const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const mysql = require("mysql")
const db = mysql.createConnection({
    host: "localhost",
    password: "",
    user: "root",
    database: "rest_api"
})

db.connect(err => {
    if (err) console.log(err.message)
    else console.log("koneksi berhasil")
})

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// GET: /pegawai --> end point untuk mengakses data pegawai
app.get("/pegawai", (req, res) => {
    let sql = "select * from pegawai"
    db.query(sql, (err, result) => {
        if (err) {
            throw err
        }
        else {
            let response = {
                count: result.length,
                pegawai: result
            }
            res.setHeader("Content-Type", "application/json")
            res.send(JSON.stringify(response))
        }
    })
})

//get customer
app.get("/customer", (req, res) => {
    let sql = "select * from customer"
    db.query(sql, (err, result) => {
        if (err) {
            throw err
        }
        else {
            let response = {
                count: result.length,
                customer: result
            }
            res.setHeader("Content-Type", "application/json")
            res.send(JSON.stringify(response))
        }
    })
})


// POST: /pegawai --> end point untuk pencarian data pegawai
app.post("/pegawai", (req, res) => {
    let find = req.body.find
    let sql = "select * from pegawai where nip like '%" + find + "%' or nama like '%" + find + "%' or alamat like '%" + find + "%'"
    db.query(sql, (err, result) => {
        if (err) {
            throw err
        } else {
            let response = {
                count: result.length,
                pegawai: result
            }
            res.setHeader("Content-Type", "application/json")
            res.send(JSON.stringify(response))
        }
    })
})

// POST: /customer --> end point untuk pencarian data pegawai
app.post("/customer", (req, res) => {
    let find = req.body.find
    let sql = "select * from customer where id like '%" + find + "%' or nama like '%" + find + "%' or alamat like '%" + find + "%'"
    db.query(sql, (err, result) => {
        if (err) {
            throw err
        } else {
            let response = {
                count: result.length,
                customer: result
            }
            res.setHeader("Content-Type", "application/json")
            res.send(JSON.stringify(response))
        }
    })
})


// POST: /pegawai/save --> end point untuk insert data pegawai
app.post("/pegawai/save", (req, res) => {
    let data = {
        nip: req.body.nip,
        nama: req.body.nama,
        alamat: req.body.alamat
    }
    let message = ""
    let sql = "insert into pegawai set ?"
    db.query(sql, data, (err, result) => {
        if (err) {
            message = err.message
        } else {
            message = result.affectedRows + " row inserted"
        }
        let response = {
            message: message
        }
        res.setHeader("Content-Type", "application/json")
        res.send(JSON.stringify(response))
    })
})

// POST: /pegawai/save --> end point untuk insert data pegawai
app.post("/customer/save", (req, res) => {
    let data = {
        id: req.body.id,
        nama: req.body.nama,
        alamat: req.body.alamat
    }
    let message = ""
    let sql = "insert into customer set ?"
    db.query(sql, data, (err, result) => {
        if (err) {
            message = err.message
        } else {
            message = result.affectedRows + " row inserted"
        }
        let response = {
            message: message
        }
        res.setHeader("Content-Type", "application/json")
        res.send(JSON.stringify(response))
    })
})

// POST: /pegawai/update --> end point untuk update data pegawai
app.post("/pegawai/update", (req, res) => {
    let data = [{
        nip: req.body.nip,
        nama: req.body.nama,
        alamat: req.body.alamat
    }, req.body.nip]
    let message = ""
    let sql = "update pegawai set ? where nip = ?"
    db.query(sql, data, (err, result) => {
        if (err) {
            message = err.message
        } else {
            message = result.affectedRows + " row updated"
        }
        let response = {
            message: message
        }
        res.setHeader("Content-Type", "application/json")
        res.send(JSON.stringify(response))
    })
})

// POST: /customer/update --> end point untuk update data pegawai
app.post("/customer/update", (req, res) => {
    let data = [{
        id: req.body.id,
        nama: req.body.nama,
        alamat: req.body.alamat
    }, req.body.id]
    let message = ""
    let sql = "update customer set ? where id = ?"
    db.query(sql, data, (err, result) => {
        if (err) {
            message = err.message
        } else {
            message = result.affectedRows + " row updated"
        }
        let response = {
            message: message
        }
        res.setHeader("Content-Type", "application/json")
        res.send(JSON.stringify(response))
    })
})

// DELETE: /pegawai/:nip --> end point untuk hapus data pegawai
app.delete("/pegawai/:nip", (req, res) => {
    let data = {
        nip: req.params.nip
    }
    let message = ""
    let sql = "delete from pegawai where ?"
    db.query(sql, data, (err, result) => {
        if (err) {
            message = err.message
        } else {
            message = result.affectedRows + " row deleted"
        }
        let response = {
            message: message
        }
        res.setHeader("Content-Type", "application/json")
        res.send(JSON.stringify(response))
    })
})

// DELETE: /customer/:id --> end point untuk hapus data pegawai
app.delete("/customer/:id", (req, res) => {
    let data = {
        id: req.params.id
    }
    let message = ""
    let sql = "delete from customer where ?"
    db.query(sql, data, (err, result) => {
        if (err) {
            message = err.message
        } else {
            message = result.affectedRows + " row deleted"
        }
        let response = {
            message: message
        }
        res.setHeader("Content-Type", "application/json")
        res.send(JSON.stringify(response))
    })
})

app.listen(2910, () => {
    console.log("Server run on port 2910");
})