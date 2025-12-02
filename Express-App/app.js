const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const path = require("path");

app.set("view engine", "pug");
app.set("views", "./views");

//const connection = require("./utility/database");

const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/shop");

const errorController = require("./controllers/errors");
const sequelize = require("./utility/database");

const Category = require("./models/category");
const Product = require("./models/product");
const User = require("./models/user");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findByPk(1)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => {
      console.log(err);
    });
});

// routes
app.use("/admin", adminRoutes);
app.use(userRoutes);

/*
connection
  .execute("SELECT name,price FROM products")
  .then((result) => {
    console.log(result[0]);
  })
  .catch((err) => {
    console.log(err);
  });
*/

app.use(errorController.get404Page);

//ilişki türü belirleme
//Product.hasOne(Category);
Product.belongsTo(Category, {
  foreignKey: {
    allowNull: false,
  },
});
Category.hasMany(Product);

Product.belongsTo(User);
User.hasMany(Product);

sequelize
  //.sync({ force: true })
  .sync()
  .then(() => {
    User.findByPk(1)
      .then((user) => {
        if (!user) {
          return User.create({
            name: "sahinkaraoglan",
            email: "email@gmail.com",
          });
        }
        return user;
      })
      .then((user) => {
        Category.count().then((count) => {
          if (count === 0) {
            Category.bulkCreate([
              { name: "Telefon", description: "Telefon kategorisi" },
              { name: "Bilgisayar", description: "Bilgisayar kategorisi" },
              { name: "Elektronik", description: "Elektronik kategorisi" },
            ]);
          }
        });
      });
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("listening on port 3000");
});
