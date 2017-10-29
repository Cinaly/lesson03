/**
 * Created by web-01 on 2017/10/29.
 */
const dns=require('dns');
//DNS Domain Name Server 域名服务器 把域名解析为IP地址
console.log(dns.resolve("github.com",(err,ip)=>{
    console.log(ip);
}));

console.log(dns.lookup("github.com",(err,ip,family)=>{
    console.log(ip,family);
}));

console.log(dns.reverse("192.30.255.112",(err,hostname)=>{
    console.log(hostname);
}));