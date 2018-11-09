const starwars = require('./starwars');

const Jedi = starwars.Jedi;
const Sith = starwars.Sith;
const duel = starwars.duel;


describe("Obijuan and Anaquan duel testing", function () { // should use ES6 syntax with latest jasmine
    // establish our undefined variables
    var fakeObi, fakeAna;

    beforeEach(function () {
        // create our new instances beforeEach
        fakeObi = new Jedi('Obijuan', 10, 100);
        fakeAna = new Sith('Anaquan', 10, 100);

        jasmine.clock().install();

        // test cases (methods) we want to spyOn
        spyOn(fakeObi,'attack');
        spyOn(fakeAna,'attack');
        // spyOn(fakeObi,'injure');
        spyOn(fakeAna,'injure'); //.and.callThrough();
        // spyOn(fakeObi,'dead');
        spyOn(fakeAna,'dead');
    })

    afterEach(function() {
        jasmine.clock().uninstall();
    })

    it("tests whether the functions in duel are called", function() {
        // call the duel function
        duel(fakeObi, fakeAna);
        // what we expect to happen - test case
        // method following format of the spyOn parameter
        expect(fakeObi.attack).toHaveBeenCalledTimes(6);
        expect(fakeObi.attack).toHaveBeenCalledWith(fakeAna);
        expect(fakeAna.attack).toHaveBeenCalledTimes(6);
        expect(fakeAna.attack).toHaveBeenCalledWith(fakeObi);
        
    })

    it("tests whether Anaquan is an idiot and compromises himself", function() {
        duel(fakeObi, fakeAna);
        // predefined conditions based on test scenario - technically cheating
        fakeAna.injure(fakeAna.health-10);
            // we set the if(dead) statement to true
        fakeAna.dead();

        expect(fakeAna.injure).toHaveBeenCalled();
        expect(fakeAna.injure).toHaveBeenCalledWith(fakeAna.health-10);
        expect(fakeAna.dead).toBeTruthy();

    })

    it("checks whether Anaquan is saved by Darth Sidjesus after 5000 ms", function() {
        duel(fakeObi,fakeAna);
        // console.log(fakeAna.health);
        jasmine.clock().tick(4999);
        expect(fakeAna.health).toEqual(100);
        expect(fakeAna.power).toEqual(10);
    })

})