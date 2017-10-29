/**
 * Created by web-01 on 2017/10/29.
 */
const os=require('os');
console.log(os.tmpDir()); //临时文件的目录
console.log(os.EOL.length); //结束字符
console.log(os.hostname()); //主机名
console.log(os.uptime()); //系统运行时间s

console.log(os.totalmem()); //总内存
console.log(os.freemem()); //空闲内存

console.log(os.cpus()); //cpu个数

console.log(os.networkInterfaces()); //当前网络信息

console.log(os.constants.signals.SIGINT);
console.log(os.constants.errno.EADDRINUSE);

