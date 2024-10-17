const {sequelize} = require('./db')
const {Restaurant, Menu} = require('./models/index')
const {
    seedRestaurant,
    seedMenu,
  } = require('./seedData');

describe('Restaurant and Menu Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    });

    test('can create a Restaurant', async () => {
        // TODO - write test
        expect(allRestaurants[0]).toEqual(expect.objectContaining(seedRestaurant[0]));
        expect(allRestaurants[1]).toEqual(expect.objectContaining(seedRestaurant[1]));
        expect(allRestaurants[2]).toEqual(expect.objectContaining(seedRestaurant[2]));
    });

    test('can create a Menu', async () => {
        // TODO - write test
        expect(allMenus[0]).toEqual(expect.objectContaining(seedMenu[0]));
        expect(allMenus[1]).toEqual(expect.objectContaining(seedMenu[1]));
        expect(allMenus[2]).toEqual(expect.objectContaining(seedMenu[2]));
    });

    test('can find Restaurants', async () => {
        // TODO - write test
        expect(findRestraunt).toEqual(expect.objectContaining(seedRestaurant[2]));
        expect('NO TEST').toEqual('EXPECTED DATA')
    });

    test('can find Menus', async () => {
        // TODO - write test
        expect(findMenu).toEqual(expect.objectContaining(seedMenus[1]));
        expect('NO TEST').toEqual('EXPECTED DATA')
    });

    test('can delete Restaurants', async () => {
        // TODO - write test
        expect(deleteRestaurant).toEqual(expect.objectContaining(seedRestaurant[2]));
        expect('NO TEST').toEqual('EXPECTED DATA')
    });
})