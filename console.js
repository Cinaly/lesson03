/**
 * Created by web-01 on 2017/10/29.
 */
const fs=require('fs');
const Console=require('console').Console;

const out=fs.createWriteStream('./out.log');
const err=fs.createWriteStream('./err.log');

const logger=new Console(out,err);

logger.log('log1...');
logger.error('err1...');

console.log('log2...');
console.error('err2...');
