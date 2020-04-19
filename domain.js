function domainName(url) {
    let noHttp = url.split('/')[2];
    console.log(noHttp);

    if (!noHttp) {
        noHttp = url.split('.')[1]
        console.log(noHttp);
    }

    if (noHttp.split('.').length === 3) {
        noHttp = noHttp.split('.')[1]
        console.log(noHttp);
    }
    const domainName = noHttp.split('.')[0];
    return domainName;
}

console.log(domainName("http://google.com"));
console.log(domainName("http://google.co.jp"));
console.log(domainName("www.xakep.ru"));
console.log(domainName("https://youtube.com"));
console.log(domainName("http://www.3-f936474ky34z2qbw9a41eypskqe.tv/warez/"));


