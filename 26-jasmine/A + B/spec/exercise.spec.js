describe("", function(){
    it("should say it block 1", function(){
        console.log("I am the it block 1!")
    });
    it("should say it block 2",function(){
        console.log("I am the it block 2!")
    });
    it("should say it block 3",function(){
        console.log("I am the it block 3!")
    });
    it("should say it block 4 and fail",function(){
        console.log("I am the it block 4 but i fail!");
        throw new Error();
    });
})