const db = require('../models');
const Login = db.login;

exports.create = (req, res) => {
    if (!req.body.email) {
        res.status(400).send({message: "Email entry required!  \nYou fucking twat waffle..."});
        return;
    }

    const Login = new Login({
        email: req.body.email,
        password: req.body.password,
    });

    login.save(login)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "What the fuck is going?!"
            });
        });
};

exports.findAll = (req, res) => {
    const email = req.query.email;
    const condition = email ? {email: {$regex: new RegExp(email), $options: "i"}} : {};

    Login.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some shit is not working!"
            });
        });
}

exports.findOne = (req, res) => {
    const id = req.params.id;

    Login.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({message: "Nope!  No email here with id: " + id});
        })
        .catch(err => {
            res.status(500).send({message: "Error retrieving Email: " + id});
        });
};

exports.update = (req, res) => {
    if(!req.body) {
        return res.status(400).send({message: "Data to update can not be empty!"});
    }

    const id = req.params.id;

    Login.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data => {
            if(!data) {
                res.status(404).send({message: `Cannot update Login with id=${id}. Maybe Login wasnt' found... stupid fuck head.`})
            }
            else res.send({message: "Login was updated successfully."});
        })
        .catch(err => {
            res.status(500).send({message: "Error updating Login with id=" + id});
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Login.findByIdAndRemove(id)
        .then(data => {
            if(!data) {
                res.status(404).send({
                    message: `Cannot delete Login Item with id=${id}. Maybe you need a fucking hobby, bitch ass...`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Login Item with id=" + id
            });
        });
};

exports.deleteAll = (req, res) => {
    Login.deleteMany({})
        .then(data => {
            res.send({message: `${data.deletedCount} Login item deleted properly!`});
        })
        .catch(err => {
            res.status(500).send({message: err.message || "Some shit is fucked up and I don't approve..."});
        })
};
