const calcModule = require('./../calc');
const chai = require('chai');
const expect = chai.expect;

const sinon = require('sinon');

describe('calc.sum(2, 2)', () => {

    it('retorno deve ser 4', (done) => {
        let result = calcModule.sum(2, 2);
        expect(result).to.equal(4);
        done();
    });

    it('retorno deve ser 4 - mock', (done) => {
        let mock = sinon.mock(calcModule);
        mock.expects('sum').yields(null, 4);

        calcModule.sum(2, 2, (err, result) => {
            mock.verify();
            mock.restore();
            expect(result).to.be.equal(4);
            done();
        });
    });

    it('retorno deve ser 5 - stub', (done) => {
        let stub = sinon.stub(calcModule, 'sum');

        stub.returns(5);

        var result = calcModule.calc(4, 1);
        // expect(calcModule.sum).to.have.been.calledOnce;
        expect(result).to.equal(5);
        stub.restore();
        done();
    });
});
