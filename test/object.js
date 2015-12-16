import Plasticine from './../index.js';
import { assert } from 'chai';

import objectTest0 from './object/object-0.json';
import objectTest1 from './object/object-1.json';
import objectTest2 from './object/object-2.json';
import objectTest3 from './object/object-3.json';
import objectTest4 from './object/object-4.json';
import objectTest5 from './object/object-5.json';
import objectTest6 from './object/object-6.json';
import objectTest7 from './object/object-7.json';
import objectTest8 from './object/object-8.json';

describe('Object', () => {

    it("Operator $", function() {
        assert.deepEqual(new Plasticine(objectTest0.data, objectTest0.template), objectTest0.result);
    });

    it("Operator @", function() {
        assert.deepEqual(new Plasticine(objectTest1.data, objectTest1.template), objectTest1.result);
    });

    it("Operator *", function() {
        assert.deepEqual(new Plasticine(objectTest2.data, objectTest2.template), objectTest2.result);
    });

    it("Operator ..", function() {
        assert.deepEqual(new Plasticine(objectTest3.data, objectTest3.template), objectTest3.result);
    });

    it("Operator .<name>", function() {
        assert.deepEqual(new Plasticine(objectTest4.data, objectTest4.template), objectTest4.result);
    });

    it("Operator ['<name> (, <name>)']", function() {
        assert.deepEqual(new Plasticine(objectTest5.data, objectTest5.template), objectTest5.result);
    });

    it("Operator [<number> (, <number>)]", function() {
        assert.deepEqual(new Plasticine(objectTest6.data, objectTest6.template), objectTest6.result);
    });

    it("Operator [?(<expression>)]", function() {
        assert.deepEqual(new Plasticine(objectTest7.data, objectTest7.template), objectTest7.result);
    });

    it("Operator [(<expression>)]", function() {
        assert.deepEqual(new Plasticine(objectTest8.data, objectTest8.template), objectTest8.result);
    });

});

/*
describe("Object", function() {

    describe("Dot-notated", function() {
        it("$.object.array[*].property", function() {
            assert.deepEqual(new Plasticine(DataTest1.data, DataTest1.template), DataTest1.result);
        });
        it("$..property", function() {
            assert.deepEqual(new Plasticine(DataTest2.data, DataTest2.template), DataTest2.result);
        });
        it("$.object.*", function() {
            assert.deepEqual(new Plasticine(DataTest3.data, DataTest3.template), DataTest3.result);
        });
        it("$.object..property", function() {
            assert.deepEqual(new Plasticine(DataTest4.data, DataTest4.template), DataTest4.result);
        });
        it("$..object[2]", function() {
            assert.deepEqual(new Plasticine(DataTest5.data, DataTest5.template), DataTest5.result);
        });
        it("$..array[2]", function() {
            assert.deepEqual(new Plasticine(DataTest6.data, DataTest6.template), DataTest6.result);
        });
        it("$..object[-1:]", function() {
            assert.deepEqual(new Plasticine(DataTest7.data, DataTest7.template), DataTest7.result);
        });
        it("$..array[-1:]", function() {
            assert.deepEqual(new Plasticine(DataTest8.data, DataTest8.template), DataTest8.result);
        });
        it("$..object[(@.length-1)]", function() {
            assert.deepEqual(new Plasticine(DataTest7.data, DataTest7.template), DataTest7.result);
        });
        it("$..array[(@.length-1)]", function() {
            assert.deepEqual(new Plasticine(DataTest8.data, DataTest8.template), DataTest8.result);
        });
    });

    describe("Bracket-notated", function() {
        it("$['object']['array'][*]['property']", function() {
            assert.deepEqual(new Plasticine(DataTest1.data, DataTest1.template), DataTest1.result);
        });
        it("$[*]['property']", function() {
            assert.deepEqual(new Plasticine(DataTest2.data, DataTest2.template), DataTest2.result);
        });
        it("$['object'][*]", function() {
            assert.deepEqual(new Plasticine(DataTest3.data, DataTest3.template), DataTest3.result);
        });
        it("$['object'][*]['property']", function() {
            assert.deepEqual(new Plasticine(DataTest4.data, DataTest4.template), DataTest4.result);
        });
        it("$[*]['object'][2]", function() {
            assert.deepEqual(new Plasticine(DataTest5.data, DataTest5.template), DataTest5.result);
        });
        it("$[*]['array'][2]", function() {
            assert.deepEqual(new Plasticine(DataTest6.data, DataTest6.template), DataTest6.result);
        });
        it("$[*]['object'][-1:]", function() {
            assert.deepEqual(new Plasticine(DataTest7.data, DataTest7.template), DataTest7.result);
        });
        it("$[*]['array'][-1:]", function() {
            assert.deepEqual(new Plasticine(DataTest8.data, DataTest8.template), DataTest8.result);
        });
        it("$[*]['object'][(@.length-1)]", function() {
            assert.deepEqual(new Plasticine(DataTest7.data, DataTest7.template), DataTest7.result);
        });
        it("$[*]['array'][(@.length-1)]", function() {
            assert.deepEqual(new Plasticine(DataTest8.data, DataTest8.template), DataTest8.result);
        });
    });







});*/
