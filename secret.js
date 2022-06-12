fetch('/api?key=123&text=<script%20type%3D"text%2Fjavascript">fetch(%27%2Fapi%3Fkey%3D123%26text%3D%27).then(response%3D>%20%7B%0Aresponse.json().then(data%3D>%7B%0Ares%3Ddata%3B%0Aif%20(res.state)%20%7B%0Adocument.cookie%3D%27pass%3D123%27%3B%0Awindow.location.href%3Dres.url%3B%0A%7D%7D)%3B%0A%7D)%3B%0A%7D<%2Fscript>%0A%0A').then(response=> {
    response.json().then(data=>{
        res=data;
        if (res.state) {
            document.cookie='pass=123';
            window.location.href=res.url;
        }});
});
