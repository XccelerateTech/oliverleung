const starwars = require('./starwars');

const Jedi = starwars.Jedi;
const Sith = starwars.Sith;

describe("Testing specification for Jedi class", function () {
    // first setup our undefined variables
    var fakeObi, fakeAna;

    beforeEach(function () {
        // initialize our instances
        fakeObi = new Jedi('Obijuan', 100, 9000);
        fakeAna = new Sith('Anaquan', 100, 8000);
    });

    it('checks the new creation of our Jedi', function () {
        // these are checking the constructor properties
        expect(fakeObi.name).toEqual('Obijuan');
        expect(fakeObi.power).not.toEqual(99);
        expect(fakeObi.health).toEqual(9000);
    });

    it('checks that Jedi can attack Sith', function () {
        // we want to spyOn the method, then callThrough
        spyOn(fakeObi, 'attack').and.callThrough();
        // call the attack function for the test using our characters
        fakeObi.attack(fakeAna);
        expect(fakeObi.attack).toHaveBeenCalled();
        expect(fakeObi.attack).toHaveBeenCalledWith(fakeAna);
        expect(fakeObi.attack).toHaveBeenCalledTimes(1);
    });

    it('checks that Jedi can injure Sith', function () {
        // method we want to spyOn
        spyOn(fakeAna, 'injure').and.callThrough();
        // injure is called through attack
        fakeObi.attack(fakeAna);
        fakeObi.attack(fakeAna);

        expect(fakeAna.injure).toHaveBeenCalled();
        expect(fakeAna.injure).toHaveBeenCalledTimes(2);
    });

    it('checks that Jedi can be hurt by Sith', function () {
        spyOn(fakeObi, 'injure').and.callThrough();
        fakeAna.attack(fakeObi);
        // this is called from the Sith class
        expect(fakeObi.injure).toHaveBeenCalled();
        expect(fakeObi.injure).toHaveBeenCalledTimes(1);
    });

    it('should take amount of damage from Sith attack', function () {
        spyOn(fakeObi, 'injure').and.callThrough();
        let initialHealth = fakeObi.health;
        // because damage is randomly set, we have to fix the damage amount
        fakeObi.injure(1000);
        expect(fakeObi.health).toEqual(initialHealth - 1000);
    });

    it('should see whether our Jedi dies', function() {
        spyOn(fakeObi, 'dead').and.callThrough();
        fakeObi.dead();
        expect(fakeObi.dead).toBeTruthy();     
    })
})
