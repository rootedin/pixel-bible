/* 이 파일은 genlist.js 가 만듭니다 — 직접 고치지 마십시오.
 * 레슨을 추가/수정한 뒤 `npm run list` (또는 `npm run build`) 를 실행하면 갱신됩니다.
 * 표지를 바꾸려면 레슨 데이터에 cover: <장면 번호> 를 넣으십시오. */
window.PB_LESSONS = [
  {
    week: 1, file: "lessons/01-light.html", title: "하나님께서 빛을 만드시다", ref: "창세기 1:1-5",
    cover: {"sky":"glory","map":["W{32}","W{32}","W{32}","W{32}","W{32}","W{32}","s{32}"],"objects":[],"clouds":false}
  },
  {
    week: 2, file: "lessons/02-sky-and-plants.html", title: "하나님께서 하늘과 식물을 만드시다", ref: "창세기 1:6-13",
    cover: {"sky":"day","map":[".{15}LLL.{10}LLL.",".{14}L{5}.{8}L{5}",".{14}L{5}.{8}L{5}",".{16}T.{12}T..",".{16}T.{12}T..",".{16}T.{5}G{5}..T..",".{13}G{9}D{5}G{5}","W{10}s{3}D{19}","W{10}s{3}D{19}","W{10}s{3}D{6}S{13}","s{11}S{21}","S{32}"],"objects":[{"s":"flower","x":14},{"s":"flower2","x":19},{"s":"tuft","x":20},{"s":"flower","x":24},{"s":"tuft","x":31},{"s":"fruit","x":15,"y":9},{"s":"fruit","x":27,"y":9}]}
  },
  {
    week: 3, file: "lessons/03-sun-moon-stars.html", title: "하나님께서 해와 달과 별을 만드시다", ref: "창세기 1:14-19",
    cover: {"sky":"dusk","map":[".{15}LLL.{10}LLL.",".{14}L{5}.{8}L{5}",".{14}L{5}.{8}L{5}",".{16}T.{12}T..",".{16}T.{12}T..",".{16}T.{5}G{5}..T..",".{13}G{9}D{5}G{5}","W{10}s{3}D{19}","W{10}s{3}D{19}","W{10}s{3}D{6}S{13}","s{11}S{21}","S{32}"],"objects":[{"s":"flower","x":14},{"s":"flower2","x":19},{"s":"tuft","x":20},{"s":"flower","x":24},{"s":"tuft","x":31},{"s":"sun","x":24,"y":4,"anim":"float"},{"s":"moon","x":6,"y":4,"anim":"float"},{"s":"star","x":11,"y":3},{"s":"star","x":16,"y":2},{"s":"star","x":29,"y":3}],"clouds":true}
  },
  {
    week: 4, file: "lessons/04-fish-birds-animals.html", title: "하나님께서 물고기와 새와 동물을 만드시다", ref: "창세기 1:20-25",
    cover: {"sky":"day","map":[".{15}LLL.{10}LLL.",".{14}L{5}.{8}L{5}",".{14}L{5}.{8}L{5}",".{16}T.{12}T..",".{16}T.{12}T..",".{16}T.{5}G{5}..T..",".{13}G{9}D{5}G{5}","W{10}s{3}D{19}","W{10}s{3}D{19}","W{10}s{3}D{6}S{13}","s{11}S{21}","S{32}"],"objects":[{"s":"sun","x":24,"y":4,"anim":"float"},{"s":"flower","x":14},{"s":"flower2","x":19},{"s":"tuft","x":20},{"s":"flower","x":24},{"s":"tuft","x":31},{"s":"fish","x":3,"y":14,"anim":"swim"},{"s":"fish","x":6,"y":15,"anim":"swim","range":2.5,"speed":0.8},{"s":"fish","x":5,"y":13,"anim":"swim","pal":{"o":"#3aa0e0","y":"#9fe0ff"}},{"s":"bird","x":4,"y":4,"anim":"fly"},{"s":"bird","x":20,"y":3,"anim":"fly","speed":1.3},{"s":"sheep","x":19,"anim":"walk","range":1},{"s":"cow","x":29,"anim":"bob"},{"s":"lion","x":24,"anim":"bob"}],"clouds":true}
  },
  {
    week: 5, file: "lessons/05-adam-and-eve.html", title: "하나님께서 아담과 하와를 만드시다", ref: "창세기 1:26 - 2:25",
    cover: {"sky":"glory","map":[".{5}LLL.{8}LLL.{6}LLL....",".{4}L{5}.{6}L{5}.{5}L{5}..",".{4}L{5}.{6}L{5}.{5}L{5}..",".{6}T.{10}T.{8}T.{5}",".{6}T.{10}T.{8}T.{5}",".{6}T.{10}T.{8}T.{5}","G{32}","D{32}","D{32}","S{32}"],"objects":[{"s":"fruit","x":26,"y":11},{"s":"sheep","x":11,"anim":"walk","range":1},{"s":"flower","x":20},{"s":"tuft","x":9},{"s":"man","x":24,"label":"아담"},{"s":"girl","x":22,"label":"하와","hair":"#5a3212","shirt":"#c7b28a","flip":true}],"clouds":true}
  },
  {
    week: 37, file: "lessons/37-moses-born.html", title: "모세가 태어나다", ref: "출애굽기 2:1-10",
    cover: {"sky":"dawn","map":["G{8}W{14}s{10}","D{8}W{14}s{10}","D{8}W{14}s{10}","D{8}W{14}s{10}","S{8}W{14}s{10}","S{8}W{14}s{10}","S{22}s{10}","S{32}"],"objects":[{"s":"reed","x":9.5},{"s":"reed","x":10.5},{"s":"reed","x":18.5},{"s":"reed","x":19.5},{"s":"reed","x":21},{"s":"reed","x":21.8},{"s":"basket","x":20,"anim":"float","label":"아기 모세"},{"s":"woman","x":24,"label":"요게벳","flip":true},{"s":"fish","x":13,"y":13,"anim":"swim"},{"s":"fish","x":16,"y":15,"anim":"swim","range":2,"speed":0.8}],"bg":"desert"}
  },
  {
    week: 38, file: "lessons/38-moses-flees.html", title: "모세가 광야로 도망치다", ref: "출애굽기 2:11-22",
    cover: {"sky":"day","map":[".{14}C..C.{14}",".{14}CWWC.{14}","s{14}CCCCs{14}","s{32}","D{32}","S{32}"],"objects":[{"s":"jar","x":9},{"s":"man","x":11,"label":"모세","shirt":"#c9b48a"},{"s":"girl","x":25,"label":"미디안의 딸","shirt":"#c98a6a","flip":true},{"s":"girl","x":27,"shirt":"#9ab8c9","flip":true},{"s":"sheep","x":30,"anim":"bob"}],"bg":"desert"}
  },
  {
    week: 39, file: "lessons/39-burning-bush.html", title: "하나님께서 불타는 떨기나무에서 모세를 찾아오시다", ref: "출애굽기 3장",
    cover: {"sky":"day","map":[".{26}S{6}",".{24}S{8}",".{22}S{10}","s{20}S{12}","s{32}","D{32}","S{32}"],"objects":[{"s":"shepherd","x":4,"label":"모세","beard":"#5a4a3a","hair":"#6a5a4a"},{"s":"sheep","x":9,"anim":"bob"},{"s":"sheep","x":13,"anim":"walk","range":1},{"s":"tuft","x":17},{"s":"stone","x":11},{"s":"tuft","x":21},{"s":"fire","x":23,"label":"떨기나무"},{"s":"tuft","x":22},{"s":"tuft","x":24.5}],"bg":"mountains"}
  },
  {
    week: 40, file: "lessons/40-moses-answers.html", title: "모세가 하나님께 대답하다", ref: "출애굽기 4장",
    cover: {"sky":"glory","map":[".{26}S{6}",".{24}S{8}",".{22}S{10}","s{20}S{12}","s{32}","D{32}","S{32}"],"objects":[{"s":"fire","x":23,"label":"떨기나무"},{"s":"tuft","x":22},{"s":"tuft","x":24.5},{"s":"stone","x":11},{"s":"shepherd","x":16,"label":"모세","beard":"#5a4a3a","hair":"#6a5a4a"},{"s":"snake","x":13,"label":"뱀","anim":"bob"}],"bg":"mountains"}
  },
  {
    week: 41, file: "lessons/41-before-pharaoh.html", title: "모세와 아론이 바로 앞에 서다", ref: "출애굽기 5:1 - 7:13",
    cover: {"sky":"day","map":[".{5}m.{6}m.{6}m.{6}m.{5}",".{5}m.{6}m.{6}m.{6}m.{5}",".{5}m.{6}m.{6}m.{6}m.{5}",".{5}m.{6}m.{6}m.{6}m.{5}","X{32}","m{32}","C{32}","S{32}"],"objects":[{"s":"torch","x":3},{"s":"torch","x":29},{"s":"man","x":9,"label":"모세","beard":"#5a4a3a","hair":"#6a5a4a","shirt":"#c9b48a"},{"s":"man","x":11,"label":"아론","beard":"#3b2414","shirt":"#b89a6a"},{"s":"king","x":24,"label":"파라오","flip":true},{"s":"man","x":21,"label":"마술사","robe":true,"shirt":"#6b5a8e","flip":true},{"s":"man","x":27,"label":"마술사","robe":true,"shirt":"#5a4a7e","flip":true},{"s":"snake","x":15,"label":"아론의 막대기","scale":2,"anim":"bob"},{"s":"snake","x":20,"anim":"bob"},{"s":"snake","x":28,"anim":"bob"}]}
  },
  {
    week: 42, file: "lessons/42-plagues-1-3.html", title: "하나님께서 애굽에 첫째·둘째·셋째 재앙을 보내시다", ref: "출애굽기 7:14 - 8:19",
    cover: {"sky":"dusk","map":["G{8}R{14}s{10}","D{8}R{14}s{10}","D{8}R{14}s{10}","D{8}R{14}s{10}","S{8}R{14}s{10}","S{8}R{14}s{10}","S{22}s{10}","S{32}"],"objects":[{"s":"man","x":24,"label":"모세","beard":"#5a4a3a","hair":"#6a5a4a","shirt":"#c9b48a","flip":true},{"s":"man","x":26,"label":"아론","beard":"#3b2414","shirt":"#b89a6a","flip":true},{"s":"king","x":30,"label":"파라오","flip":true},{"s":"fish","x":12,"y":12,"pal":{"o":"#6a6a6a","y":"#8a8a8a"}},{"s":"fish","x":16,"y":12,"pal":{"o":"#6a6a6a","y":"#8a8a8a"},"flip":true},{"s":"fish","x":19,"y":12,"pal":{"o":"#6a6a6a","y":"#8a8a8a"}}],"bg":"desert"}
  },
  {
    week: 43, file: "lessons/43-plagues-4-6.html", title: "하나님께서 애굽에 넷째·다섯째·여섯째 재앙을 보내시다", ref: "출애굽기 8:20 - 9:12",
    cover: {"sky":"dusk","map":["G{16}s{16}","D{16}s{16}","D{32}","D{32}","S{32}"],"objects":[{"s":"cow","x":7,"label":"이스라엘의 가축","anim":"bob"},{"s":"sheep","x":11,"anim":"walk","range":1},{"s":"cow","x":20,"label":"이집트의 가축","pal":{"w":"#8a8a8a","k":"#4a4a4a","p":"#9a8a8a","h":"#7a7a7a"}},{"s":"cow","x":27,"pal":{"w":"#8a8a8a","k":"#4a4a4a","p":"#9a8a8a","h":"#7a7a7a"},"flip":true}],"bg":"desert"}
  },
  {
    week: 44, file: "lessons/44-plagues-7-9.html", title: "하나님께서 애굽에 일곱째·여덟째·아홉째 재앙을 보내시다", ref: "출애굽기 9:13 - 10:29",
    cover: {"sky":"dark","map":["G{16}s{16}","D{16}s{16}","D{32}","D{32}","S{32}"],"objects":[{"s":"torch","x":6,"label":"이스라엘의 거처","scale":2},{"s":"torch","x":11,"scale":2},{"s":"man","x":8,"label":"이스라엘 사람","shirt":"#9a7b52"},{"s":"man","x":22,"label":"이집트 사람","shirt":"#6a6a6a","flip":true},{"s":"man","x":28,"shirt":"#5a5a5a","flip":true}]}
  },
  {
    week: 45, file: "lessons/45-passover.html", title: "하나님께서 애굽에 마지막 열째 재앙을 보내시다", ref: "출애굽기 11-12장",
    cover: {"sky":"night","map":[".{22}TTTTTTT...",".{22}R.....R...",".{22}R.....R...",".{22}R.....R...","s{32}","D{32}","S{32}"],"objects":[{"s":"man","x":19,"label":"이스라엘 사람","shirt":"#9a7b52"},{"s":"torch","x":16}],"bg":"desert"}
  },
  {
    week: 46, file: "lessons/46-red-sea.html", title: "이스라엘이 홍해를 건너다", ref: "출애굽기 13:17 - 14:31",
    cover: {"sky":"night","map":["W{6}.{20}W{6}","W{6}.{20}W{6}","W{6}.{20}W{6}","W{6}.{20}W{6}","W{6}.{20}W{6}","s{32}","D{32}","S{32}"],"objects":[{"s":"man","x":8,"label":"모세","beard":"#5a4a3a","hair":"#6a5a4a","shirt":"#c9b48a"}],"bg":"sea"}
  },
  {
    week: 47, file: "lessons/47-wilderness.html", title: "이스라엘이 광야를 지나다", ref: "출애굽기 15-16장",
    cover: {"sky":"dawn","map":["s{32}","s{32}","D{32}","D{32}","S{32}"],"objects":[{"s":"man","x":5,"label":"모세","beard":"#5a4a3a","hair":"#6a5a4a","shirt":"#c9b48a"},{"s":"man","x":9,"shirt":"#9a7b52"},{"s":"manna","x":14,"scale":2},{"s":"manna","x":16.5,"scale":2},{"s":"manna","x":19,"scale":2},{"s":"manna","x":21.5,"scale":2},{"s":"manna","x":24,"scale":2},{"s":"manna","x":26.5,"scale":2},{"s":"manna","x":29,"scale":2}],"bg":"desert"}
  }
];
