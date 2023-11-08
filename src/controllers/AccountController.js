const db = require('../config/db');

class AccountController {

    // [GET] /account/information
    information(req, res) {
        if (!req.session.email) {
            res.status(404).json({ message: 'Không tìm thấy email!!!' });
            return;
        }

        const sql = `
            SELECT *
            FROM view_authuser
            WHERE au_user_email = ?`;
        const params = [req.session.email];

        db.query(sql, params, async (err, result, fields) => {
            if (err) {
                res.status(500).json({ message: 'Lỗi truy vấn!!!' });
                throw err;
            }
            if (result.length > 0) {
                res.status(200).render('./pages/account/index', {
                    message: 'Lấy thông tin tài khoản thành công',
                    data: {
                        first_name: result[0].au_user_first_name,
                        last_name: result[0].au_user_last_name,
                        email: result[0].au_user_email,
                        birthday: result[0].au_user_birthday,
                        sex: result[0].au_user_sex,
                        avatar: result[0].au_user_avt_url
                    }
                });
            } else {
                res.status(404).json({ message: 'Không tìm thấy tài khoản!!!' });
            }
        });
    }

    // [PUT] /account/information
    informationPut(req, res) {
        const {
            account_first_name,
            account_last_name,
            account_birthday,
            account_sex } = req.body;

        if (!req.session.email) {
            res.status(404).json({ message: 'Không tìm thấy email!!!' });
            return;
        }

        const sql = `
            UPDATE VIEW_AUTHUSER
            SET au_user_first_name = ?,
                au_user_last_name = ?,
                au_user_birthday = ?,
                au_user_sex = ?
            WHERE au_user_email = ?;`;
        const params = [
            account_first_name,
            account_last_name,
            account_birthday,
            account_sex,
            req.session.email];

        db.query(sql, params, (err, result, fields) => {
            if (err) {
                res.status(500).json({ message: 'Lỗi truy vấn!!!' });
                throw err;
            } else {
                if (result.affectedRows === 0) {
                    res.status(404).json({ message: 'Không tìm thấy tài khoản!!!' });
                } else {
                    res.status(200).json({ message: 'Cập nhật thông tin tài khoản thành công' });
                }
            }
        })
    }

    // [GET] /account/history
    history(req, res) {
        res.render('./pages/account/history')
    }

    // [GET] /account/payment
    payment(req, res) {
        res.render('./pages/account/payment')
    }

    // [POST] /account/payment/addBank
    addBank(req, res) {
        res.send("addBank")
    }

    // [POST] /account/payment/addDebit
    addDebit(req, res) {
        res.send("addDebit")
    }

    // [POST] /account/payment/delBank
    delBank(req, res) {
        res.send("delBank")
    }

    // [POST] /account/payment/delDebit
    delDebit(req, res) {
        res.send("delDebit")
    }

    // [GET]  /account/change
    change(req, res) {
        const title = 'Đổi mật khẩu'
        res.render('./pages/account/change-password', { title })
    }

    // [PUT] /account/change-password
    changePassword(req, res) {
        const { oldPassword, newPassword } = req.body;
        if (!req.session.email) {
            res.status(404).json({ message: 'Không tìm thấy email!!!' });
            return;
        }

        const sql = 'UPDATE authuser SET au_user_pass = ? WHERE au_user_email = ? AND au_user_pass = ?';
        const params = [newPassword, req.session.email, oldPassword];

        db.query(sql, params, (err, result, fields) => {
            if (err) {
                res.status(500).json({ message: 'Đổi mật khẩu thất bại', });
                throw err;
            } else {
                if (result.affectedRows === 0) {
                    res.status(404).json({ message: 'Không tìm thấy tài khoản!!!', });
                } else {
                    res.status(200).json({ message: 'Đổi mật khẩu thành công' });
                }
            }
        });
    }

}

module.exports = new AccountController()