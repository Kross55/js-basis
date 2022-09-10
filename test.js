describe("pow", function () {

    // it("3 в степени 3 будет 27", function () {
    //     assert.equal(pow(3, 3), 27);
    // });

    describe("возводит x в степень 3", function () {

        function makeTest(x) {
            let expected = x * x * x;
            it(`${x} в степени 3 будет ${expected}`, function () {
                assert.equal(pow(x, 3), expected);
            });
        }

        for (let x = 1; x <= 5; x++) {
            makeTest(x);
        }

    });

    it("возводит в степень n", function () {
        assert.equal(pow(2, 4), 16);
    });

    it("для отрицательных n возвращает NaN", function() {
        assert.isNaN(pow(2, -1));
    });
    
    it("для дробных n возвращает NaN", function() {
        assert.isNaN(pow(2, 1.5));
    });

});