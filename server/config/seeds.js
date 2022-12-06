const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Cookies' },
    { name: 'Muffins' },
    { name: 'Empanadas' },
    { name: 'Scones' }
    ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Cochitos',
      category: categories[0]._id,
      description:
        'A staple of any panaderia. A soft and chewy cinnamon gingerbread cookie with a kick of molasses. Packaged in a bag of three mini cochitos.',
      image: 'bolita-bakery-cochitos.jpg',
      price: 6.00,
      quantity: 0
    },
    {
      name: 'Cowboy Cookie',
      category: categories[0]._id,
      description:
        'Six ounce cookie packed with pecans, chocolate chunks, oats, and shredded coconut.',
      image: 'bolita-bakery-cowboy.webp',
      price: 6.00,
      quantity: 0      
    },
    {
      name: 'Browned Butter Chocolate Chip Cookie',
      category: categories[0]._id,
      description:
        'A classic with a little something extra. Depth of flavor coming from the browned butter and blend of milk and dark chocolate chunks.',
      image: 'bolita-bakery-choco-chip.jpg',
      price: 2.00,
      quantity: 0
    },
    {
      name: 'Agave Dulce de Leche Blondie',
      category: categories[0]._id,
      description:
        'A decadent and chewy blondie with layers of flavor and texture in a 4.5" by 4.5" slice. Browned butter. Hints of agave rum. Swirls of dulce de leche. The crunch of the Lotus Biscoff cookie on top. If you are only getting one thing, this is it.',
      image: 'bolita-bakery-blondie.webp',
      price: 10.00,
      quantity: 0
    },
    {
      name: "S'mores Brownie",
      category: categories[0]._id,
      description:
        'Chewy and fudgy brownie with a graham cracker crust on the bottom and a delicious marshmallow layer on top. A 4.5" x 4.5" slice ready to share or keep all to yourself.',
      image: 'bolita-bakery-brownie.jpg',
      price: 12.00,
      quantity: 0
    },
    {
      name: 'Muffins',
      category: categories[1]._id,
      description:
        'Coming soon.',
      image: 'camera.jpg',
      price: 1.00,
      quantity: 0
    },
    {
      name: 'Empanadas',
      category: categories[2]._id,
      description:
        'Coming soon.',
      image: 'tablet.jpg',
      price: 1.00,
      quantity: 0
    },
    {
      name: 'Scones',
      category: categories[3]._id,
      description:
        'Coming soon.',
      image: 'bedtime-book.jpg',
      price: 1.00,
      quantity: 0
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
