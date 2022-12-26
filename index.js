const item1 = document.querySelector('.item1')
const item2 = document.querySelector('.item2')
const item3 = document.querySelector('.item3')
const item4 = document.querySelector('.item4')
const item5 = document.querySelector('.item5')
const item6 = document.querySelector('.item6')
const item7 = document.querySelector('.item7')
const item8 = document.querySelector('.item8')
const item9 = document.querySelector('.item9')
const item10 = document.querySelector('.item10')
const item11 = document.querySelector('.item11')
const item12 = document.querySelector('.item12')
const item13 = document.querySelector('.item13')
const item14 = document.querySelector('.item14')
const item15 = document.querySelector('.item15')

// 1
const t11 = document.getElementById('11')
const f12 = document.getElementById('12')
const f13 = document.getElementById('13')
const f14 = document.getElementById('14')

// 2
const f21 = document.getElementById('21')
const f22 = document.getElementById('22')
const t23 = document.getElementById('23')
const f24 = document.getElementById('24')

// 3
const f31 = document.getElementById('31')
const f32 = document.getElementById('32')
const f33 = document.getElementById('33')
const t34 = document.getElementById('34')

// 4
const f41 = document.getElementById('41')
const t42 = document.getElementById('42')
const f43 = document.getElementById('43')
const f44 = document.getElementById('44')

// 5
const f51 = document.getElementById('51')
const f52 = document.getElementById('52')
const f53 = document.getElementById('53')
const t54 = document.getElementById('54')

// 6
const t61 = document.getElementById('61')
const f62 = document.getElementById('62')
const f63 = document.getElementById('63')
const f64 = document.getElementById('64')

// 7
const f71 = document.getElementById('71')
const f72 = document.getElementById('72')
const t73 = document.getElementById('73')
const f74 = document.getElementById('74')

// 8
const f81 = document.getElementById('81')
const t82 = document.getElementById('82')
const f83 = document.getElementById('83')
const f84 = document.getElementById('84')

// 9
const f91 = document.getElementById('91')
const f92 = document.getElementById('92')
const f93 = document.getElementById('93')
const t94 = document.getElementById('94')

// 10
const f102 = document.getElementById('102')
const f101 = document.getElementById('101')
const t103 = document.getElementById('103')
const f104 = document.getElementById('104')

// 11
const f111 = document.getElementById('111')
const t112 = document.getElementById('112')
const f113 = document.getElementById('113')
const f114 = document.getElementById('114')

// 12
const t121 = document.getElementById('121')
const f122 = document.getElementById('122')
const f123 = document.getElementById('123')
const f124 = document.getElementById('124')

// 13
const f131 = document.getElementById('131')
const f132 = document.getElementById('132')
const f133 = document.getElementById('133')
const t134 = document.getElementById('134')

// 14
const f141 = document.getElementById('141')
const t142 = document.getElementById('142')
const f143 = document.getElementById('143')
const f144 = document.getElementById('144')

// 15
const t151 = document.getElementById('151')
const f152 = document.getElementById('152')
const f153 = document.getElementById('153')
const f154 = document.getElementById('154')




// 1

t11.disabled = false;
f12.disabled = false;
f13.disabled = false;
f14.disabled = false;

t11.addEventListener('click', () => {
    console.log('true');
    t11.classList.add('green')
    item1.classList.add('true')
    t11.disabled = true;
    f12.disabled = true;
    f13.disabled = true;
    f14.disabled = true;
});

f12.addEventListener('click', () => {
    console.log('false');
    f12.classList.add('red')
    item1.classList.add('false')
    t11.disabled = true;
    f12.disabled = true;
    f13.disabled = true;
    f14.disabled = true;
})

f13.addEventListener('click', () => {
    console.log('false');
    f13.classList.add('red')
    item1.classList.add('false')
    t11.disabled = true;
    f12.disabled = true;
    f13.disabled = true;
    f14.disabled = true;
})

f14.addEventListener('click', () => {
    console.log('false');
    f14.classList.add('red')
    item1.classList.add('false')
    t11.disabled = true;
    f12.disabled = true;
    f13.disabled = true;
    f14.disabled = true;
})

// 2

t23.disabled = false;
f21.disabled = false;
f22.disabled = false;
f24.disabled = false;

t23.addEventListener('click', () => {
    console.log('true');
    t23.classList.add('green')
    item2.classList.add('true')
    t23.disabled = true;
    f21.disabled = true;
    f22.disabled = true;
    f24.disabled = true;
});

f21.addEventListener('click', () => {
    console.log('false');
    f21.classList.add('red')
    item2.classList.add('false')
    t23.disabled = true;
    f21.disabled = true;
    f22.disabled = true;
    f24.disabled = true;
})

f22.addEventListener('click', () => {
    console.log('false');
    f22.classList.add('red')
    item2.classList.add('false')
    t23.disabled = true;
    f21.disabled = true;
    f22.disabled = true;
    f24.disabled = true;
})

f24.addEventListener('click', () => {
    console.log('false');
    f24.classList.add('red')
    item2.classList.add('false')
    t23.disabled = true;
    f21.disabled = true;
    f22.disabled = true;
    f24.disabled = true;
})

// 3

t34.disabled = false;
f31.disabled = false;
f32.disabled = false;
f33.disabled = false;

t34.addEventListener('click', () => {
    console.log('true');
    t34.classList.add('green')
    item3.classList.add('true')
    t34.disabled = true;
    f31.disabled = true;
    f32.disabled = true;
    f33.disabled = true;
});

f31.addEventListener('click', () => {
    console.log('false');
    f31.classList.add('red')
    item3.classList.add('false')
    t34.disabled = true;
    f31.disabled = true;
    f32.disabled = true;
    f33.disabled = true;
})

f32.addEventListener('click', () => {
    console.log('false');
    f32.classList.add('red')
    item3.classList.add('false')
    t34.disabled = true;
    f31.disabled = true;
    f32.disabled = true;
    f33.disabled = true;
})

f33.addEventListener('click', () => {
    console.log('false');
    f33.classList.add('red')
    item3.classList.add('false')
    t34.disabled = true;
    f31.disabled = true;
    f32.disabled = true;
    f33.disabled = true;
})

// 4

t42.disabled = false;
f41.disabled = false;
f43.disabled = false;
f44.disabled = false;

t42.addEventListener('click', () => {
    console.log('true');
    t42.classList.add('green')
    item4.classList.add('true')
    t42.disabled = true;
    f41.disabled = true;
    f43.disabled = true;
    f44.disabled = true;
});

f41.addEventListener('click', () => {
    console.log('false');
    f41.classList.add('red')
    item4.classList.add('false')
    t42.disabled = true;
    f41.disabled = true;
    f43.disabled = true;
    f44.disabled = true;
})

f43.addEventListener('click', () => {
    console.log('false');
    f43.classList.add('red')
    item4.classList.add('false')
    t42.disabled = true;
    f41.disabled = true;
    f43.disabled = true;
    f44.disabled = true;
})

f44.addEventListener('click', () => {
    console.log('false');
    f44.classList.add('red')
    item4.classList.add('false')
    t42.disabled = true;
    f41.disabled = true;
    f43.disabled = true;
    f44.disabled = true;
})

// 5

t54.disabled = false;
f51.disabled = false;
f52.disabled = false;
f53.disabled = false;

t54.addEventListener('click', () => {
    console.log('true');
    t54.classList.add('green')
    item5.classList.add('true')
    t54.disabled = true;
    f51.disabled = true;
    f52.disabled = true;
    f53.disabled = true;
});

f51.addEventListener('click', () => {
    console.log('false');
    f51.classList.add('red')
    item5.classList.add('false')
    t54.disabled = true;
    f51.disabled = true;
    f52.disabled = true;
    f53.disabled = true;
})

f52.addEventListener('click', () => {
    console.log('false');
    f52.classList.add('red')
    item5.classList.add('false')
    t54.disabled = true;
    f51.disabled = true;
    f52.disabled = true;
    f53.disabled = true;
})

f53.addEventListener('click', () => {
    console.log('false');
    f53.classList.add('red')
    item5.classList.add('false')
    t54.disabled = true;
    f51.disabled = true;
    f52.disabled = true;
    f53.disabled = true;
})

// 6

t61.disabled = false;
f62.disabled = false;
f63.disabled = false;
f64.disabled = false;

t61.addEventListener('click', () => {
    console.log('true');
    t61.classList.add('green')
    item6.classList.add('true')
    t61.disabled = true;
    f62.disabled = true;
    f63.disabled = true;
    f64.disabled = true;
});

f62.addEventListener('click', () => {
    console.log('false');
    f62.classList.add('red')
    item6.classList.add('false')
    t61.disabled = true;
    f62.disabled = true;
    f63.disabled = true;
    f64.disabled = true;
})

f63.addEventListener('click', () => {
    console.log('false');
    f63.classList.add('red')
    item6.classList.add('false')
    t61.disabled = true;
    f62.disabled = true;
    f63.disabled = true;
    f64.disabled = true;
})

f64.addEventListener('click', () => {
    console.log('false');
    f64.classList.add('red')
    item6.classList.add('false')
    t61.disabled = true;
    f62.disabled = true;
    f63.disabled = true;
    f64.disabled = true;
})

// 7

t73.disabled = false;
f71.disabled = false;
f72.disabled = false;
f74.disabled = false;

t73.addEventListener('click', () => {
    console.log('true');
    t73.classList.add('green')
    item7.classList.add('true')
    t73.disabled = true;
    f71.disabled = true;
    f72.disabled = true;
    f74.disabled = true;
});

f71.addEventListener('click', () => {
    console.log('false');
    f71.classList.add('red')
    item7.classList.add('false')
    t73.disabled = true;
    f71.disabled = true;
    f72.disabled = true;
    f74.disabled = true;
})

f72.addEventListener('click', () => {
    console.log('false');
    f72.classList.add('red')
    item7.classList.add('false')
    t73.disabled = true;
    f71.disabled = true;
    f72.disabled = true;
    f74.disabled = true;
})

f74.addEventListener('click', () => {
    console.log('false');
    f74.classList.add('red')
    item7.classList.add('false')
    t73.disabled = true;
    f71.disabled = true;
    f72.disabled = true;
    f74.disabled = true;
})

// 8

t82.disabled = false;
f81.disabled = false;
f83.disabled = false;
f84.disabled = false;

t82.addEventListener('click', () => {
    console.log('true');
    t82.classList.add('green')
    item8.classList.add('true')
    t82.disabled = true;
    f81.disabled = true;
    f83.disabled = true;
    f84.disabled = true;
});

f81.addEventListener('click', () => {
    console.log('false');
    f81.classList.add('red')
    item8.classList.add('false')
    t82.disabled = true;
    f81.disabled = true;
    f83.disabled = true;
    f84.disabled = true;
})

f83.addEventListener('click', () => {
    console.log('false');
    f83.classList.add('red')
    item8.classList.add('false')
    t82.disabled = true;
    f81.disabled = true;
    f83.disabled = true;
    f84.disabled = true;
})

f84.addEventListener('click', () => {
    console.log('false');
    f84.classList.add('red')
    item8.classList.add('false')
    t82.disabled = true;
    f81.disabled = true;
    f83.disabled = true;
    f84.disabled = true;
})

// 9

t94.disabled = false;
f91.disabled = false;
f92.disabled = false;
f93.disabled = false;

t94.addEventListener('click', () => {
    console.log('true');
    t94.classList.add('green')
    item9.classList.add('true')
    t94.disabled = true;
    f91.disabled = true;
    f92.disabled = true;
    f93.disabled = true;
});

f91.addEventListener('click', () => {
    console.log('false');
    f91.classList.add('red')
    item9.classList.add('false')
    t94.disabled = true;
    f91.disabled = true;
    f92.disabled = true;
    f93.disabled = true;
})

f92.addEventListener('click', () => {
    console.log('false');
    f92.classList.add('red')
    item9.classList.add('false')
    t94.disabled = true;
    f91.disabled = true;
    f92.disabled = true;
    f93.disabled = true;
})

f93.addEventListener('click', () => {
    console.log('false');
    f93.classList.add('red')
    item9.classList.add('false')
    t94.disabled = true;
    f91.disabled = true;
    f92.disabled = true;
    f93.disabled = true;
})

// 10

t103.disabled = false;
f101.disabled = false;
f102.disabled = false;
f104.disabled = false;

t103.addEventListener('click', () => {
    console.log('true');
    t103.classList.add('green')
    item10.classList.add('true')
    t103.disabled = true;
    f102.disabled = true;
    f101.disabled = true;
    f104.disabled = true;
});

f101.addEventListener('click', () => {
    console.log('false');
    f101.classList.add('red')
    item10.classList.add('false')
    t103.disabled = true;
    f102.disabled = true;
    f101.disabled = true;
    f104.disabled = true;
})

f102.addEventListener('click', () => {
    console.log('false');
    f102.classList.add('red')
    item10.classList.add('false')
    t103.disabled = true;
    f102.disabled = true;
    f101.disabled = true;
    f104.disabled = true;
})

f104.addEventListener('click', () => {
    console.log('false');
    f104.classList.add('red')
    item10.classList.add('false')
    t103.disabled = true;
    f102.disabled = true;
    f101.disabled = true;
    f104.disabled = true;
})

// 11

t112.disabled = false;
f111.disabled = false;
f113.disabled = false;
f114.disabled = false;

t112.addEventListener('click', () => {
    console.log('true');
    t112.classList.add('green')
    item11.classList.add('true')
    t112.disabled = true;
    f111.disabled = true;
    f113.disabled = true;
    f114.disabled = true;
});

f111.addEventListener('click', () => {
    console.log('false');
    f111.classList.add('red')
    item11.classList.add('false')
    t112.disabled = true;
    f111.disabled = true;
    f113.disabled = true;
    f114.disabled = true;
})

f113.addEventListener('click', () => {
    console.log('false');
    f113.classList.add('red')
    item11.classList.add('false')
    t112.disabled = true;
    f111.disabled = true;
    f113.disabled = true;
    f114.disabled = true;
})

f114.addEventListener('click', () => {
    console.log('false');
    f114.classList.add('red')
    item11.classList.add('false')
    t112.disabled = true;
    f111.disabled = true;
    f113.disabled = true;
    f114.disabled = true;
})

// 12

t121.disabled = false;
f122.disabled = false;
f123.disabled = false;
f124.disabled = false;

t121.addEventListener('click', () => {
    console.log('true');
    t121.classList.add('green')
    item12.classList.add('true')
    t121.disabled = true;
    f122.disabled = true;
    f123.disabled = true;
    f124.disabled = true;
});

f122.addEventListener('click', () => {
    console.log('false');
    f122.classList.add('red')
    item12.classList.add('false')
    t121.disabled = true;
    f122.disabled = true;
    f123.disabled = true;
    f124.disabled = true;
})

f123.addEventListener('click', () => {
    console.log('false');
    f123.classList.add('red')
    item12.classList.add('false')
    t121.disabled = true;
    f122.disabled = true;
    f123.disabled = true;
    f124.disabled = true;
})

f124.addEventListener('click', () => {
    console.log('false');
    f124.classList.add('red')
    item12.classList.add('false')
    t121.disabled = true;
    f122.disabled = true;
    f123.disabled = true;
    f124.disabled = true;
})

// 13

t134.disabled = false;
f131.disabled = false;
f132.disabled = false;
f133.disabled = false;

t134.addEventListener('click', () => {
    console.log('true');
    t134.classList.add('green')
    item13.classList.add('true')
    t134.disabled = true;
    f131.disabled = true;
    f132.disabled = true;
    f133.disabled = true;
});

f131.addEventListener('click', () => {
    console.log('false');
    f131.classList.add('red')
    item13.classList.add('false')
    t134.disabled = true;
    f131.disabled = true;
    f132.disabled = true;
    f133.disabled = true;
})

f132.addEventListener('click', () => {
    console.log('false');
    f132.classList.add('red')
    item13.classList.add('false')
    t134.disabled = true;
    f131.disabled = true;
    f132.disabled = true;
    f133.disabled = true;
})

f133.addEventListener('click', () => {
    console.log('false');
    f133.classList.add('red')
    item13.classList.add('false')
    t134.disabled = true;
    f131.disabled = true;
    f132.disabled = true;
    f133.disabled = true;
})

// 14

t142.disabled = false;
f141.disabled = false;
f143.disabled = false;
f144.disabled = false;

t142.addEventListener('click', () => {
    console.log('true');
    t142.classList.add('green')
    item14.classList.add('true')
    t142.disabled = true;
    f141.disabled = true;
    f143.disabled = true;
    f144.disabled = true;
});

f141.addEventListener('click', () => {
    console.log('false');
    f141.classList.add('red')
    item14.classList.add('false')
    t142.disabled = true;
    f141.disabled = true;
    f143.disabled = true;
    f144.disabled = true;
})

f143.addEventListener('click', () => {
    console.log('false');
    f143.classList.add('red')
    item14.classList.add('false')
    t142.disabled = true;
    f141.disabled = true;
    f143.disabled = true;
    f144.disabled = true;
})

f144.addEventListener('click', () => {
    console.log('false');
    f144.classList.add('red')
    item14.classList.add('false')
    t142.disabled = true;
    f141.disabled = true;
    f143.disabled = true;
    f144.disabled = true;
})

// 15

t151.disabled = false;
f152.disabled = false;
f153.disabled = false;
f154.disabled = false;

t151.addEventListener('click', () => {
    console.log('true');
    t151.classList.add('green')
    item15.classList.add('true')
    t151.disabled = true;
    f152.disabled = true;
    f153.disabled = true;
    f154.disabled = true;
});

f152.addEventListener('click', () => {
    console.log('false');
    f152.classList.add('red')
    item15.classList.add('false')
    t151.disabled = true;
    f152.disabled = true;
    f153.disabled = true;
    f154.disabled = true;
})

f153.addEventListener('click', () => {
    console.log('false');
    f153.classList.add('red')
    item15.classList.add('false')
    t151.disabled = true;
    f152.disabled = true;
    f153.disabled = true;
    f154.disabled = true;
})

f154.addEventListener('click', () => {
    console.log('false');
    f154.classList.add('red')
    item15.classList.add('false')
    t151.disabled = true;
    f152.disabled = true;
    f153.disabled = true;
    f154.disabled = true;
})





















