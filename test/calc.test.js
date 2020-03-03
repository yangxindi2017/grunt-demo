const add = require('../calc.js'),
      expect = require('chai').expect;

describe('加法函数的单元测试',function(){
  //一个it就是一个测试用例
  it('0+0=0',function(){
    expect(add(0,0)).to.be.equal(0);
  });

  it('1+0 =1',function(){
    expect(add(0,1)).to.be.equal(1);
  });

  it('a+b=NaN',function(){
    expect(isNaN(add('a','b'))).to.be.ok;
  });
});
