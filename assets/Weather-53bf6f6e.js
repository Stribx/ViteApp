import{r as n,c as i,F as d,j as c}from"./index-8e283668.js";function p(){const[a,h]=n.useState({}),[e,o]=n.useState({}),s="0f2b8b7394023311a04c0d2b955df119";return n.useEffect(()=>{let t=!1;return fetch("https://ipapi.co/json/").then(r=>r.json()).then(r=>{t||h(r)}).catch(r=>{r&&h({city:"Error fetching location disable adblock"})}),()=>{t=!0}},[]),n.useEffect(()=>{a.latitude&&a.longitude&&fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${a.latitude}&lon=${a.longitude}&appid=${s}&units=metric`).then(t=>t.json()).then(t=>{o(t)}).catch(t=>{o({main:{temp:"Error fetching weather"}})})},[a]),i(d,{children:c("div",{className:"container",children:[i("h1",{children:"Weather for"}),i("p",{children:a.city}),c("div",{className:"data",children:[e.weather&&e.weather[0]&&i("img",{src:`http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`,alt:e.weather[0].description}),e.main&&c("div",{children:[c("h1",{children:[e.main.temp,"°C"]}),e.weather&&e.weather[0]&&i("p",{children:e.weather[0].description})]})]})]})})}export{p as default};
