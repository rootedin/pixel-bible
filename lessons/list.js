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
    week: 6, file: "lessons/06-the-fall.html", title: "아담과 하와가 죄에 빠지다", ref: "창세기 3장",
    cover: {"sky":"glory","map":[".{5}LLL.{8}LLL.{6}LLL....",".{4}L{5}.{6}L{5}.{5}L{5}..",".{4}L{5}.{6}L{5}.{5}L{5}..",".{6}T.{10}T.{8}T.{5}",".{6}T.{10}T.{8}T.{5}",".{6}T.{10}T.{8}T.{5}","G{32}","D{32}","D{32}","S{32}"],"objects":[{"s":"flower","x":11},{"s":"tuft","x":14},{"s":"man","x":16,"label":"아담","shirt":"#5a8a3a"},{"s":"woman","x":17.8,"label":"하와","hood":"#5a8a3a"},{"s":"snake","x":24.5,"label":"뱀","flip":true}],"clouds":true}
  },
  {
    week: 7, file: "lessons/07-cain-and-abel.html", title: "가인과 아벨이 제사를 드리다", ref: "창세기 4:1-15",
    cover: {"sky":"glory","map":[".{8}S{2}.{12}S{2}.{8}","D{14}G{18}","D{32}","S{32}"],"objects":[{"s":"man","x":11,"label":"가인","shirt":"#8a5a3a","beard":true},{"s":"sheaf","x":8.5,"label":"가인의 헌물"},{"s":"fruit","x":9.5},{"s":"shepherd","x":20,"label":"아벨","beard":false},{"s":"tuft","x":27},{"s":"sheep","x":23,"label":"첫 새끼"},{"s":"fire","x":22.5,"y":13}],"bg":"hills"}
  },
  {
    week: 8, file: "lessons/08-enoch.html", title: "에녹이 하나님과 동행하다", ref: "창세기 4:16-5:24",
    cover: {"sky":"glory","map":[".{22}S{10}",".{16}G{16}",".{8}G{24}","G{32}","D{32}","S{32}"],"objects":[{"s":"man","x":26,"y":9,"label":"에녹","shirt":"#4a6a8a","beard":true,"anim":"float"},{"s":"tuft","x":6},{"s":"flower","x":12},{"s":"tuft","x":19}],"bg":"mountains"}
  },
  {
    week: 9, file: "lessons/09-noah-builds-ark.html", title: "노아가 방주를 짓다", ref: "창세기 6장",
    cover: {"sky":"day","map":[".{3}LLL.{26}",".{4}T.{7}P.{6}P.{5}P.{6}",".{4}T.{6}P{18}.{3}","G{32}","D{32}","S{32}"],"objects":[{"s":"man","x":9,"label":"노아","shirt":"#6a5a3a","beard":true},{"s":"axe","x":7.5,"label":"도끼"},{"s":"jar","x":30,"label":"역청","pal":{}},{"s":"man","x":29,"label":"셈","shirt":"#5a6a7a","flip":true}],"bg":"hills"}
  },
  {
    week: 10, file: "lessons/10-the-flood.html", title: "하나님께서 홍수를 보내시다", ref: "창세기 7-9장",
    cover: {"sky":"glory","map":[".{6}S{3}.{23}","G{32}","D{32}","S{32}"],"objects":[{"s":"fire","x":7},{"s":"man","x":11,"label":"노아","shirt":"#6a5a3a","beard":true},{"s":"woman","x":13,"label":"노아의 가족","hood":"#7a6a5a"},{"s":"man","x":15,"label":"노아의 가족","shirt":"#5a6a7a"},{"s":"ship","x":25,"scale":4},{"s":"sheep","x":19},{"s":"cow","x":21,"flip":true}],"bg":"mountains"}
  },
  {
    week: 11, file: "lessons/11-tower-of-babel.html", title: "사람들이 바벨탑을 쌓다", ref: "창세기 9:18-29, 11:1-9",
    cover: {"sky":"day","map":[".{14}B{4}.{14}",".{12}B{8}.{12}",".{10}B{12}.{10}",".{8}B{16}.{8}",".{6}B{20}.{6}","s{32}","S{32}"],"objects":[{"s":"man","x":27,"label":"일꾼들","shirt":"#7a5a3a","flip":true},{"s":"man","x":29,"label":"일꾼들","shirt":"#5a6a4a","flip":true},{"s":"brick","x":30.5},{"s":"woman","x":3,"label":"일꾼들","hood":"#6a5a7a"}],"bg":"desert"}
  },
  {
    week: 12, file: "lessons/12-job-suffers.html", title: "욥이 큰 고난을 당하다", ref: "욥기 1장",
    cover: {"sky":"dusk","map":[".{24}w{4}.{4}",".{23}w{6}.{3}","s{8}G{24}","D{32}","S{32}"],"objects":[{"s":"elder","x":22,"label":"욥","robe":"#6a4a7a","flip":true}],"bg":"desert"}
  },
  {
    week: 13, file: "lessons/13-job-meets-god.html", title: "욥이 하나님을 만나다", ref: "욥기 2장과 다른 본문들",
    cover: {"sky":"storm","map":[".{13}K{3}.{16}","s{32}","S{32}","S{32}"],"objects":[{"s":"elder","x":14.5,"label":"욥","robe":"#6a6a6a"},{"s":"man","x":8,"label":"세 친구","shirt":"#5a4a6a","beard":true},{"s":"man","x":10,"label":"세 친구","shirt":"#4a5a6a","beard":true},{"s":"elder","x":20.5,"label":"세 친구","flip":true}],"bg":"mountains"}
  },
  {
    week: 14, file: "lessons/14-abram-called.html", title: "하나님께서 아브람을 부르시다", ref: "창세기 12장",
    cover: {"sky":"day","map":[".{3}LLL.{20}LLL.{3}",".{4}T.{22}T.{4}","G{32}","D{32}","S{32}"],"objects":[{"s":"man","x":13,"label":"아브람","shirt":"#6a4a3a","beard":true},{"s":"stone","x":16.5,"scale":2,"label":"제단"},{"s":"fire","x":16.5,"y":13.5},{"s":"woman","x":10,"label":"사래","hood":"#8a3a5a"},{"s":"camel","x":22,"flip":true}],"bg":"hills"}
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
  },
  {
    week: 48, file: "lessons/48-water-from-rock.html", title: "하나님께서 바위에서 물이 나게 하시다", ref: "출애굽기 17장",
    cover: {"sky":"day","map":[".{24}S{8}",".{22}S{10}","s{22}S{10}","s{32}","D{32}","S{32}"],"objects":[{"s":"soldier","x":4,"label":"여호수아","shirt":"#b8a06a"},{"s":"soldier","x":7},{"s":"soldier","x":10},{"s":"soldier","x":16,"label":"아말렉","shirt":"#7a5a4a","flip":true},{"s":"soldier","x":19,"shirt":"#6a4a3a","flip":true}],"bg":"mountains"}
  },
  {
    week: 49, file: "lessons/49-mount-sinai.html", title: "이스라엘이 시내 산에 이르다", ref: "출애굽기 19-20장",
    cover: {"sky":"storm","map":[".{20}S{12}",".{18}S{14}",".{16}S{16}","s{14}S{18}","s{32}","D{32}","S{32}"],"objects":[{"s":"man","x":7,"shirt":"#9a7b52"},{"s":"woman","x":9.5,"hood":"#8a6b4a"},{"s":"boy","x":12,"shirt":"#a98a5e","anim":"bob"},{"s":"tuft","x":2},{"s":"fire","x":24,"y":11,"scale":2},{"s":"man","x":12,"label":"이스라엘 사람","shirt":"#9a7b52"}],"bg":"mountains"}
  },
  {
    week: 50, file: "lessons/50-golden-calf.html", title: "이스라엘이 금송아지를 섬기다", ref: "출애굽기 32장",
    cover: {"sky":"day","map":["s{32}","s{32}","D{32}","D{32}","S{32}"],"objects":[{"s":"cow","x":16,"label":"금송아지","pal":{"w":"#ffe25a","k":"#c8961a","p":"#f5b82e","h":"#e0b030","e":"#6a4a10"},"scale":2},{"s":"man","x":10,"label":"아론","beard":"#3b2414","shirt":"#b89a6a"},{"s":"man","x":6,"shirt":"#9a7b52","anim":"jump"},{"s":"woman","x":22,"hood":"#8a6b4a","anim":"jump","flip":true},{"s":"boy","x":26,"shirt":"#a98a5e","anim":"jump","flip":true},{"s":"jar","x":29}],"bg":"mountains"}
  },
  {
    week: 51, file: "lessons/51-tabernacle.html", title: "이스라엘이 성막을 세우다", ref: "출애굽기 25-30장",
    cover: {"sky":"day","map":[".{20}P{8}.{4}",".{20}P.{6}P.{4}",".{20}P.{6}P.{4}",".{20}P.{6}P.{4}","s{32}","D{32}","S{32}"],"objects":[{"s":"stone","x":11,"scale":2},{"s":"fire","x":11,"y":14},{"s":"jar","x":16,"scale":2},{"s":"priest","x":18,"label":"제사장"},{"s":"man","x":10,"label":"예배하러 온 사람","shirt":"#9a7b52"}],"bg":"desert"}
  },
  {
    week: 52, file: "lessons/52-two-sins.html", title: "이스라엘이 시내 산에서 두 가지 죄를 짓다", ref: "레위기 10:1-7, 24:10-16",
    cover: {"sky":"day","map":[".{20}P{8}.{4}",".{20}P.{6}P.{4}",".{20}P.{6}P.{4}",".{20}P.{6}P.{4}","s{32}","D{32}","S{32}"],"objects":[{"s":"stone","x":11,"scale":2},{"s":"fire","x":11,"y":14},{"s":"priest","x":15,"label":"아론"},{"s":"man","x":5,"shirt":"#9a7b52"},{"s":"woman","x":7.5,"hood":"#8a6b4a"},{"s":"priest","x":17.5,"label":"나답","beard":false,"hood":"#f2f2f2"},{"s":"priest","x":19.5,"label":"아비후","beard":false,"hood":"#f2f2f2"},{"s":"censer","x":17.5,"y":12,"scale":2},{"s":"censer","x":19.5,"y":12,"scale":2}],"bg":"desert"}
  },
  {
    week: 53, file: "lessons/53-complaining.html", title: "이스라엘이 광야에서 불평하다", ref: "민수기 11장",
    cover: {"sky":"day","map":["s{32}","s{32}","D{32}","D{32}","S{32}"],"objects":[{"s":"man","x":5,"label":"모세","beard":"#5a4a3a","hair":"#6a5a4a","shirt":"#c9b48a"},{"s":"bird","x":12,"y":6,"pal":{"b":"#8a6a3a","o":"#d8a850"},"scale":2,"anim":"float"},{"s":"bird","x":16,"y":9,"pal":{"b":"#8a6a3a","o":"#d8a850"},"scale":2,"anim":"float"},{"s":"bird","x":20,"y":5,"pal":{"b":"#8a6a3a","o":"#d8a850"},"scale":2,"anim":"float"},{"s":"bird","x":24,"y":11,"pal":{"b":"#8a6a3a","o":"#d8a850"},"scale":2,"anim":"float"},{"s":"bird","x":28,"y":7,"pal":{"b":"#8a6a3a","o":"#d8a850"},"scale":2,"anim":"float"}],"bg":"desert"}
  },
  {
    week: 54, file: "lessons/54-miriam.html", title: "미리암이 죄를 짓다", ref: "민수기 12장",
    cover: {"sky":"dusk","map":["s{32}","s{32}","D{32}","D{32}","S{32}"],"objects":[{"s":"man","x":8,"label":"아론","beard":"#3b2414","shirt":"#b89a6a"},{"s":"woman","x":11,"label":"미리암","hood":"#b9765a"},{"s":"man","x":20,"label":"모세","beard":"#5a4a3a","hair":"#6a5a4a","shirt":"#c9b48a","flip":true},{"s":"jar","x":4},{"s":"tuft","x":28}],"bg":"desert"}
  },
  {
    week: 55, file: "lessons/55-twelve-spies.html", title: "모세가 열두 정탐꾼을 보내다", ref: "민수기 13-14장",
    cover: {"sky":"dusk","map":[".{22}C{10}",".{22}C.{3}C.{4}",".{22}C{10}","G{22}C{10}","D{32}","D{32}","S{32}"],"objects":[{"s":"man","x":4,"label":"정탐꾼","shirt":"#8a6b45"},{"s":"man","x":7,"shirt":"#a08a6a"},{"s":"fruit","x":10,"scale":3,"label":"그 땅의 열매"},{"s":"tuft","x":14},{"s":"tuft","x":19},{"s":"giant","x":19,"label":"아낙 자손","scale":2,"flip":true}],"bg":"hills"}
  },
  {
    week: 56, file: "lessons/56-korah.html", title: "고라와 다단과 아비람이 반역하다", ref: "민수기 16장",
    cover: {"sky":"day","map":["s{32}","s{32}","D{32}","D{32}","S{32}"],"objects":[{"s":"man","x":6,"label":"고라","beard":"#3b2414","shirt":"#7b5a8e"},{"s":"man","x":9,"label":"다단","shirt":"#8a6b45"},{"s":"man","x":12,"label":"아비람","shirt":"#6a5a4a"},{"s":"elder","x":15,"shirt":"#8a7b6a"},{"s":"man","x":24,"label":"모세","beard":"#5a4a3a","hair":"#6a5a4a","shirt":"#c9b48a","flip":true},{"s":"man","x":27,"label":"아론","beard":"#3b2414","shirt":"#b89a6a","flip":true}],"bg":"desert"}
  },
  {
    week: 57, file: "lessons/57-moses-sins.html", title: "모세가 죄를 짓다", ref: "민수기 20:1-13",
    cover: {"sky":"day","map":[".{22}S{10}",".{20}S{12}",".{20}S{12}","s{20}S{12}","s{32}","D{32}","S{32}"],"objects":[{"s":"man","x":5,"label":"모세","beard":"#c8c8c8","hair":"#d8d8d8","shirt":"#c9b48a"},{"s":"man","x":8,"label":"아론","beard":"#c8c8c8","hair":"#d0d0d0","shirt":"#b89a6a"},{"s":"tuft","x":14},{"s":"stone","x":16,"scale":2},{"s":"man","x":11,"shirt":"#9a7b52"},{"s":"woman","x":13.5,"hood":"#8a6b4a"},{"s":"man","x":16.5,"shirt":"#8a6b45"}],"bg":"mountains"}
  },
  {
    week: 58, file: "lessons/58-bronze-serpent.html", title: "하나님께서 불뱀을 보내시다", ref: "민수기 20:14 - 21:9",
    cover: {"sky":"dusk","map":["s{32}","s{32}","D{32}","D{32}","S{32}"],"objects":[{"s":"man","x":5,"label":"모세","beard":"#c8c8c8","hair":"#d8d8d8","shirt":"#c9b48a"},{"s":"man","x":9,"shirt":"#9a7b52"},{"s":"woman","x":12,"hood":"#8a6b4a"},{"s":"boy","x":15,"shirt":"#a98a5e","anim":"bob"},{"s":"tuft","x":27},{"s":"snake","x":7,"pal":{"g":"#d84a2a","d":"#8a2a12","e":"#ffd84a","t":"#ffb13b"},"anim":"bob"},{"s":"snake","x":13,"pal":{"g":"#d84a2a","d":"#8a2a12","e":"#ffd84a","t":"#ffb13b"},"anim":"bob"},{"s":"snake","x":19,"pal":{"g":"#d84a2a","d":"#8a2a12","e":"#ffd84a","t":"#ffb13b"},"anim":"bob"},{"s":"snake","x":25,"pal":{"g":"#d84a2a","d":"#8a2a12","e":"#ffd84a","t":"#ffb13b"},"anim":"bob"}],"bg":"desert"}
  },
  {
    week: 59, file: "lessons/59-balak.html", title: "모압 왕 발락이 이스라엘을 저주하려 하다", ref: "민수기 21:21 - 22:21",
    cover: {"sky":"dusk","map":[".{22}G{10}",".{22}D{10}","G{10}.{12}D{10}","D{10}.{12}D{10}","D{10}.{12}S{10}","S{32}","S{32}"],"objects":[{"s":"soldier","x":3,"label":"이스라엘","shirt":"#b8a06a"},{"s":"soldier","x":6},{"s":"man","x":26,"label":"발락","beard":"#3b2414","shirt":"#7b2fbe","crown":true,"flip":true},{"s":"soldier","x":29,"flip":true}],"bg":"hills"}
  },
  {
    week: 60, file: "lessons/60-balaam.html", title: "발람이 저주 대신 축복하다", ref: "민수기 22:22 - 24:25",
    cover: {"sky":"dusk","map":[".{8}C.{14}C.{8}",".{8}C.{14}C.{8}","s{32}","D{32}","S{32}"],"objects":[{"s":"man","x":4,"label":"발람","beard":"#5a4a3a","robe":true,"shirt":"#6b5a8e"},{"s":"donkey","x":7,"label":"나귀"},{"s":"man","x":2,"label":"종","shirt":"#8a6b45"}],"bg":"hills"}
  },
  {
    week: 61, file: "lessons/61-two-spies.html", title: "두 정탐꾼이 여리고에 들어가다", ref: "여호수아 1-2장",
    cover: {"sky":"night","map":[".{12}C{20}",".{12}C{4}ggC{14}",".{12}C{20}",".{12}C{20}","G{32}","D{32}","S{32}"],"objects":[{"s":"man","x":4,"label":"정탐꾼","shirt":"#8a6b45"},{"s":"man","x":7,"shirt":"#a08a6a"},{"s":"woman","x":10,"label":"라합","hood":"#b9765a","flip":true}],"bg":"desert"}
  },
  {
    week: 62, file: "lessons/62-jordan.html", title: "이스라엘이 요르단 강을 건너다", ref: "여호수아 3-4장",
    cover: {"sky":"day","map":["G{11}s{10}G{11}","D{11}s{10}D{11}","D{11}s{10}D{11}","S{11}s{10}S{11}","S{32}"],"objects":[{"s":"priest","x":15,"label":"제사장"},{"s":"ark","x":15,"y":11,"scale":2,"label":"언약궤"},{"s":"soldier","x":8,"label":"여호수아","shirt":"#b8a06a"},{"s":"man","x":5,"shirt":"#9a7b52"}],"bg":"hills"}
  },
  {
    week: 63, file: "lessons/63-jericho.html", title: "여리고 성벽이 무너지다", ref: "여호수아 6장",
    cover: {"sky":"glory","map":[".{18}C{12}.{2}",".{18}C{12}.{2}",".{18}C{12}.{2}",".{18}C{12}.{2}","G{32}","D{32}","S{32}"],"objects":[{"s":"soldier","x":4,"label":"여호수아","shirt":"#b8a06a"},{"s":"soldier","x":7,"label":"전사"},{"s":"soldier","x":10,"label":"전사"},{"s":"tuft","x":14}],"bg":"desert"}
  },
  {
    week: 64, file: "lessons/64-achan.html", title: "아간이 죄를 짓다", ref: "여호수아 7장",
    cover: {"sky":"dusk","map":[".{24}C{8}",".{22}S{10}",".{20}S{12}","G{20}S{12}","D{32}","S{32}"],"objects":[{"s":"soldier","x":4,"label":"여호수아","shirt":"#b8a06a"},{"s":"soldier","x":8,"label":"정탐꾼"},{"s":"tuft","x":14}],"bg":"hills"}
  },
  {
    week: 65, file: "lessons/65-ai.html", title: "이스라엘이 아이 성에서 승리하다", ref: "여호수아 8장",
    cover: {"sky":"dusk","map":[".{24}C{8}",".{24}C{4}KKC{2}",".{22}S{10}",".{20}S{12}","G{20}S{12}","D{32}","S{32}"],"objects":[{"s":"tuft","x":15},{"s":"soldier","x":4,"label":"여호수아","shirt":"#b8a06a"},{"s":"soldier","x":8,"label":"전사"},{"s":"soldier","x":11,"label":"전사"},{"s":"spear","x":5.5,"y":13,"scale":2,"label":"창"},{"s":"fire","x":26.5,"y":11,"scale":2,"anim":"bob"},{"s":"smoke","x":26.5,"y":10,"scale":3,"anim":"float"},{"s":"smoke","x":28.5,"y":8.5,"scale":3,"anim":"float"},{"s":"smoke","x":25,"y":7,"scale":2,"anim":"float"}],"bg":"hills"}
  },
  {
    week: 66, file: "lessons/66-gibeon.html", title: "기브온 사람들이 이스라엘을 속이다", ref: "여호수아 9장",
    cover: {"sky":"dusk","map":[".{26}C{6}",".{24}S{8}","G{24}S{8}","D{32}","S{32}"],"objects":[{"s":"man","x":18,"label":"기브온 사람","shirt":"#7a8a5a"},{"s":"man","x":21,"shirt":"#8a7a5a"},{"s":"tuft","x":10},{"s":"donkey","x":14},{"s":"jar","x":16},{"s":"bread","x":12},{"s":"basket","x":23}],"bg":"hills"}
  },
  {
    week: 67, file: "lessons/67-sun-stands-still.html", title: "태양이 멈추다", ref: "여호수아 10장",
    cover: {"sky":"day","map":["S{8}.{24}","S{12}.{20}","S{16}.{16}","S{20}G{12}","D{32}","S{32}"],"objects":[{"s":"soldier","x":2,"label":"이스라엘 군사","shirt":"#b8a06a"},{"s":"soldier","x":5,"shirt":"#b8a06a"},{"s":"soldier","x":14,"label":"아모리 군사","shirt":"#6a5a7a"},{"s":"soldier","x":19,"shirt":"#6a5a7a"},{"s":"soldier","x":24,"shirt":"#6a5a7a"},{"s":"sun","x":15,"y":6,"scale":3,"label":"해"},{"s":"moon","x":26,"y":7,"scale":2,"label":"달"}],"bg":"mountains"}
  },
  {
    week: 68, file: "lessons/68-joshua-dies.html", title: "여호수아가 죽다", ref: "여호수아 24장, 사사기 1:1-15",
    cover: {"sky":"glory","map":[".{6}L{3}.{23}",".{5}L{5}.{22}",".{6}LTL.{23}",".{7}T.{24}",".{7}T.{24}","G{32}","D{32}","S{32}"],"objects":[{"s":"elder","x":11,"label":"여호수아","shirt":"#b8a06a"},{"s":"man","x":17,"shirt":"#9a7b52","flip":true},{"s":"woman","x":20,"hood":"#8a6b4a","flip":true},{"s":"boy","x":22.5,"shirt":"#a98a5e","anim":"bob","flip":true},{"s":"tuft","x":27}],"bg":"hills"}
  },
  {
    week: 69, file: "lessons/69-ehud.html", title: "왼손잡이 에훗이 사사가 되다", ref: "사사기 3:12-30",
    cover: {"sky":"dusk","map":["G{32}","D{32}","D{32}","S{32}"],"objects":[{"s":"man","x":8,"shirt":"#9a7b52"},{"s":"woman","x":11,"hood":"#8a6b4a"},{"s":"boy","x":14,"shirt":"#a98a5e","anim":"bob"},{"s":"tuft","x":24},{"s":"man","x":20,"label":"에훗","shirt":"#7a6a8a","flip":true},{"s":"sword","x":16.5,"y":12,"scale":3,"label":"칼"}],"bg":"hills"}
  },
  {
    week: 70, file: "lessons/70-deborah.html", title: "드보라와 바락이 이스라엘을 다스리다", ref: "사사기 4-5장",
    cover: {"sky":"storm","map":["S{8}.{24}","S{12}.{20}","S{16}.{16}","S{18}G{4}W{4}G{6}","D{22}W{4}D{6}","S{32}"],"objects":[{"s":"woman","x":5,"label":"드보라","hood":"#c2a24a","robe":"#7a5a9a"},{"s":"chariot","x":27,"scale":2,"flip":true},{"s":"chariot","x":30.5,"scale":2,"flip":true},{"s":"chariot","x":20,"scale":2,"label":"철 병거","flip":true},{"s":"soldier","x":30,"label":"시스라","shirt":"#6a5a7a","flip":true}],"bg":"mountains"}
  },
  {
    week: 71, file: "lessons/71-gideon-called.html", title: "하나님께서 기드온을 부르시다", ref: "사사기 6장",
    cover: {"sky":"glory","map":[".{5}L{5}.{22}",".{6}LTL.{23}",".{7}T.{24}",".{7}T.{13}S{3}.{8}","G{32}","D{32}","S{32}"],"objects":[{"s":"man","x":22,"label":"기드온","shirt":"#7a8a5a","flip":true},{"s":"tuft","x":28},{"s":"angel","x":12,"label":"주의 천사"}],"bg":"hills"}
  },
  {
    week: 72, file: "lessons/72-gideon-300.html", title: "기드온이 믿음으로 승리하다", ref: "사사기 7장",
    cover: {"sky":"night","map":[".{18}T{6}.{8}",".{18}T.{4}T.{8}",".{18}T.{4}T.{8}","G{32}","D{32}","S{32}"],"objects":[{"s":"man","x":6,"label":"기드온","shirt":"#7a8a5a"},{"s":"horn","x":9,"y":13,"scale":2,"label":"나팔"},{"s":"jar","x":11.5,"scale":2,"label":"빈 항아리"},{"s":"torch","x":14,"scale":2,"label":"등불"}],"bg":"hills"}
  },
  {
    week: 73, file: "lessons/73-jephthah.html", title: "입다가 약속을 지키다", ref: "사사기 11장",
    cover: {"sky":"dusk","map":[".{22}T{8}.{2}",".{22}P.{6}P.{2}",".{22}P.{6}P.{2}","G{32}","D{32}","S{32}"],"objects":[{"s":"tuft","x":8}],"bg":"hills"}
  },
  {
    week: 74, file: "lessons/74-samson-born.html", title: "삼손이 태어나 나실인이 되다", ref: "사사기 13-14장",
    cover: {"sky":"dusk","map":["G{32}","D{32}","D{32}","S{32}"],"objects":[{"s":"boy","x":16,"label":"삼손","shirt":"#a98a5e"},{"s":"man","x":10,"label":"마노아","shirt":"#8a7a5a"},{"s":"woman","x":13,"label":"어머니","hood":"#8a6b4a"}],"bg":"hills"}
  },
  {
    week: 75, file: "lessons/75-samson-judge.html", title: "삼손이 사사가 되다", ref: "사사기 15장",
    cover: {"sky":"day","map":[".{24}S{8}",".{20}S{12}",".{16}S{16}","G{16}S{16}","D{32}","S{32}"],"objects":[{"s":"man","x":26,"label":"삼손","shirt":"#a98a5e","flip":true},{"s":"man","x":18,"label":"유다 사람","shirt":"#9a7b52"},{"s":"man","x":15,"shirt":"#8a7a5a"}],"bg":"mountains"}
  },
  {
    week: 76, file: "lessons/76-samson-dies.html", title: "삼손이 용감하게 죽다", ref: "사사기 16장",
    cover: {"sky":"day","map":["T{32}",".{18}C{2}.{4}C{2}.{6}",".{18}C{2}.{4}C{2}.{6}",".{18}C{2}.{4}C{2}.{6}","m{32}","S{32}"],"objects":[{"s":"boy","x":26,"label":"소년","shirt":"#a98a5e","flip":true},{"s":"man","x":10,"y":12,"shirt":"#5a7a8a"},{"s":"man","x":16,"y":12,"shirt":"#5a7a8a"},{"s":"woman","x":22,"y":12,"hood":"#7a8aa0"}]}
  },
  {
    week: 77, file: "lessons/77-ruth-returns.html", title: "나오미와 룻이 베들레헴으로 돌아오다", ref: "룻기 1-2장",
    cover: {"sky":"day","map":[".{26}S{6}",".{22}S{10}","G{18}S{14}","D{32}","S{32}"],"objects":[{"s":"woman","x":26,"label":"나오미","hood":"#8a6b4a","flip":true},{"s":"tuft","x":10}],"bg":"mountains"}
  },
  {
    week: 78, file: "lessons/78-ruth-boaz.html", title: "룻과 보아스가 결혼하다", ref: "룻기 3-4장",
    cover: {"sky":"night","map":["y{32}","D{32}","D{32}","S{32}"],"objects":[{"s":"woman","x":12,"label":"룻","hood":"#b9765a"},{"s":"man","x":16,"label":"보아스","shirt":"#8a7a5a","flip":true},{"s":"sheaf","x":21,"scale":3,"label":"곡식 더미"},{"s":"sheaf","x":26,"scale":2}],"bg":"hills"}
  },
  {
    week: 79, file: "lessons/79-samuel-born.html", title: "사무엘이 태어나다", ref: "사무엘상 1장",
    cover: {"sky":"day","map":[".{10}T{14}.{8}",".{10}P.{12}P.{8}",".{10}P.{12}P.{8}",".{10}P.{12}P.{8}","G{32}","D{32}","S{32}"],"objects":[{"s":"woman","x":15,"label":"한나","hood":"#8a6b4a"},{"s":"priest","x":21,"label":"엘리","flip":true},{"s":"torch","x":12,"scale":2}],"bg":"hills"}
  },
  {
    week: 80, file: "lessons/80-ark-taken.html", title: "블레셋이 하나님의 법궤를 빼앗다", ref: "사무엘상 2-4장",
    cover: {"sky":"glory","map":[".{10}T{14}.{8}",".{10}P.{12}P.{8}",".{10}P.{12}P.{8}",".{10}P.{12}P.{8}","G{32}","D{32}","S{32}"],"objects":[{"s":"boy","x":15,"label":"사무엘","shirt":"#e0d8c0"},{"s":"elder","x":19,"label":"엘리","flip":true},{"s":"torch","x":12.5,"scale":3,"label":"하나님의 등불"},{"s":"ark","x":22,"scale":2,"label":"언약궤"}],"bg":"hills"}
  },
  {
    week: 81, file: "lessons/81-ark-returns.html", title: "블레셋이 하나님의 법궤를 돌려보내다", ref: "사무엘상 5:1-6:12",
    cover: {"sky":"day","map":["T{32}",".{6}C{2}.{16}C{2}.{6}",".{6}C{2}.{16}C{2}.{6}",".{6}C{2}.{16}C{2}.{6}","m{32}","S{32}"],"objects":[{"s":"ark","x":17,"scale":2,"label":"언약궤"},{"s":"man","x":21,"label":"아스돗 사람","shirt":"#5a7a8a","flip":true},{"s":"torch","x":9,"scale":2},{"s":"stone","x":11,"scale":2,"label":"남은 몸뚱이"},{"s":"stone","x":8}],"bg":"city"}
  },
  {
    week: 82, file: "lessons/82-mizpah.html", title: "이스라엘이 미스바에 모여 회개하다", ref: "사무엘상 6:13-7:12",
    cover: {"sky":"storm","map":["G{32}","D{32}","S{32}","S{32}"],"objects":[{"s":"man","x":14,"label":"사무엘","shirt":"#e0d8c0"},{"s":"jar","x":17,"scale":2,"label":"물"},{"s":"man","x":9,"shirt":"#9a7b52"},{"s":"woman","x":21,"hood":"#8a6b4a","flip":true},{"s":"man","x":25,"shirt":"#8a7a5a","flip":true}],"bg":"mountains"}
  },
  {
    week: 83, file: "lessons/83-israel-wants-king.html", title: "이스라엘이 왕을 원하다", ref: "사무엘상 8-9장",
    cover: {"sky":"day","map":["G{32}","D{32}","D{32}","S{32}"],"objects":[{"s":"elder","x":9,"label":"사무엘","shirt":"#e0d8c0"},{"s":"man","x":14,"label":"아들","shirt":"#9a7b52"},{"s":"man","x":17,"shirt":"#8a7a5a"},{"s":"coin","x":20},{"s":"elder","x":24,"label":"장로","flip":true},{"s":"man","x":27,"shirt":"#8a7a5a","flip":true},{"s":"chariot","x":20,"scale":2,"label":"병거"}],"bg":"hills"}
  },
  {
    week: 84, file: "lessons/84-saul-made-king.html", title: "하나님께서 이스라엘에게 왕을 주시다", ref: "사무엘상 10장",
    cover: {"sky":"day","map":["G{32}","D{32}","D{32}","S{32}"],"objects":[{"s":"elder","x":7,"label":"사무엘","shirt":"#e0d8c0"},{"s":"man","x":11,"shirt":"#9a7b52"},{"s":"woman","x":14,"hood":"#8a6b4a"},{"s":"jar","x":22},{"s":"basket","x":24},{"s":"sheaf","x":26,"scale":2,"label":"물건들"}],"bg":"hills"}
  },
  {
    week: 85, file: "lessons/85-saul-jabesh.html", title: "사울이 길르앗 야베스를 돕다", ref: "사무엘상 11장",
    cover: {"sky":"day","map":["G{32}","D{32}","D{32}","S{32}"],"objects":[{"s":"tuft","x":14},{"s":"flower","x":20},{"s":"soldier","x":10,"shirt":"#9a7b52"},{"s":"soldier","x":13,"shirt":"#9a7b52"},{"s":"soldier","x":16,"shirt":"#9a7b52"},{"s":"man","x":6,"label":"사울","shirt":"#8a7a9a"}],"bg":"hills"}
  },
  {
    week: 86, file: "lessons/86-jonathan.html", title: "요나단이 이스라엘을 구하다", ref: "사무엘상 14장",
    cover: {"sky":"dawn","map":[".{20}S{12}",".{16}S{16}",".{12}S{20}","G{12}S{20}","D{32}","S{32}"],"objects":[{"s":"soldier","x":24,"shirt":"#5a7a8a","flip":true},{"s":"soldier","x":28,"shirt":"#5a7a8a","flip":true}],"bg":"mountains"}
  },
  {
    week: 87, file: "lessons/87-saul-disobeys.html", title: "사울이 하나님께 불순종하다", ref: "사무엘상 15장",
    cover: {"sky":"day","map":[".{22}S{4}.{6}","G{22}S{4}G{6}","D{32}","S{32}"],"objects":[{"s":"king","x":15,"label":"사울"},{"s":"elder","x":11,"label":"사무엘","shirt":"#e0d8c0"},{"s":"sheep","x":19,"scale":2,"label":"양"},{"s":"sheep","x":27,"scale":2},{"s":"fire","x":23.5,"y":15,"scale":2,"anim":"bob"}],"bg":"hills"}
  },
  {
    week: 88, file: "lessons/88-david-anointed.html", title: "사무엘이 다윗에게 기름을 붓다", ref: "사무엘상 16장",
    cover: {"sky":"day","map":[".{4}T{12}.{16}",".{4}P.{10}P.{16}",".{4}P.{10}P.{16}","G{32}","D{32}","S{32}"],"objects":[{"s":"elder","x":7,"label":"사무엘","shirt":"#e0d8c0"},{"s":"man","x":11,"label":"이새"},{"s":"soldier","x":17,"label":"엘리압","shirt":"#9a7b52","flip":true},{"s":"man","x":20,"shirt":"#8a7a5a","flip":true},{"s":"man","x":23,"shirt":"#8a9a6a","flip":true},{"s":"sheep","x":28,"scale":2,"label":"양 떼"}],"bg":"hills"}
  },
  {
    week: 89, file: "lessons/89-david-goliath.html", title: "다윗이 골리앗을 쓰러뜨리다", ref: "사무엘상 17장",
    cover: {"sky":"day","map":["S{6}.{26}","S{9}.{23}","S{12}.{20}","S{12}G{14}S{6}","D{32}","S{32}"],"objects":[{"s":"giant","x":24,"scale":2,"label":"골리앗","flip":true},{"s":"soldier","x":3,"shirt":"#9a7b52"},{"s":"king","x":1,"label":"사울"},{"s":"boy","x":18,"label":"다윗","shirt":"#b8724a"}],"bg":"mountains"}
  },
  {
    week: 90, file: "lessons/90-david-jonathan.html", title: "다윗과 요나단이 친구가 되다", ref: "사무엘상 18장",
    cover: {"sky":"day","map":["T{32}",".{6}C{2}.{16}C{2}.{6}",".{6}C{2}.{16}C{2}.{6}",".{6}C{2}.{16}C{2}.{6}","m{32}","S{32}"],"objects":[{"s":"king","x":10,"label":"사울"},{"s":"boy","x":15,"label":"다윗","shirt":"#b8724a"},{"s":"soldier","x":19,"label":"요나단","shirt":"#8a9a6a","flip":true},{"s":"torch","x":21.5,"scale":2},{"s":"sword","x":17,"y":14,"scale":2,"label":"요나단의 칼"}],"bg":"city"}
  },
  {
    week: 91, file: "lessons/91-saul-hunts-david.html", title: "사울이 다윗을 죽이려 하다", ref: "사무엘상 19장",
    cover: {"sky":"day","map":["T{32}",".{6}C{2}.{16}C{2}.{6}",".{6}C{2}.{16}C{2}.{6}",".{6}C{2}.{16}C{2}.{6}","m{32}","S{32}"],"objects":[{"s":"king","x":11,"label":"사울"},{"s":"soldier","x":16,"label":"요나단","shirt":"#8a9a6a","flip":true},{"s":"man","x":20,"label":"신하","shirt":"#9a7b52","flip":true},{"s":"torch","x":8,"scale":2}],"bg":"city"}
  },
  {
    week: 92, file: "lessons/92-david-jonathan-part.html", title: "다윗이 요나단과 헤어지다", ref: "사무엘상 20장",
    cover: {"sky":"dawn","map":["S{4}.{28}","S{5}.{27}","G{32}","D{32}","S{32}"],"objects":[{"s":"soldier","x":22,"label":"요나단","shirt":"#8a9a6a","flip":true},{"s":"boy","x":27,"label":"아이","shirt":"#a98a5e","flip":true},{"s":"arrow","x":16,"y":13,"scale":2,"label":"화살"}],"bg":"hills"}
  },
  {
    week: 93, file: "lessons/93-saul-pursues.html", title: "사울이 다윗을 뒤쫓다", ref: "사무엘상 23-24장",
    cover: {"sky":"cave","map":["S{7}.{18}S{7}","S{6}.{20}S{6}","S{5}.{22}S{5}","S{5}.{22}S{5}","S{32}","S{32}","S{32}"],"objects":[{"s":"king","x":20,"label":"사울","flip":true},{"s":"man","x":11,"label":"다윗","shirt":"#b8724a"},{"s":"soldier","x":8,"shirt":"#9a7b52"},{"s":"sword","x":13.5,"y":14,"scale":2,"label":"다윗의 칼"}]}
  },
  {
    week: 94, file: "lessons/94-nabal.html", title: "어리석은 나발이 죽다", ref: "사무엘상 25장",
    cover: {"sky":"dusk","map":["s{32}","D{32}","D{32}","S{32}"],"objects":[{"s":"man","x":8,"label":"다윗","shirt":"#b8724a"},{"s":"soldier","x":12,"shirt":"#9a7b52"},{"s":"soldier","x":15,"shirt":"#9a7b52"},{"s":"sword","x":19,"y":13,"scale":2,"label":"칼"}],"bg":"desert"}
  },
  {
    week: 95, file: "lessons/95-david-spares-saul.html", title: "다윗이 사울의 생명을 살리다", ref: "사무엘상 26장",
    cover: {"sky":"night","map":[".{6}T{8}.{18}",".{6}T.{6}T.{18}",".{6}T.{6}T.{18}","G{32}","D{32}","S{32}"],"objects":[{"s":"soldier","x":24,"shirt":"#8a7a9a"},{"s":"torch","x":27,"scale":2},{"s":"king","x":18,"label":"사울"},{"s":"man","x":14,"label":"다윗","shirt":"#b8724a"},{"s":"soldier","x":11,"label":"아비새","shirt":"#9a7b52"},{"s":"spear","x":20.5,"y":13,"scale":2,"label":"창"},{"s":"jar","x":22.5,"label":"물병"}],"bg":"mountains"}
  },
  {
    week: 96, file: "lessons/96-endor.html", title: "사울이 엔돌의 무당을 찾아가다", ref: "사무엘상 28장",
    cover: {"sky":"night","map":[".{20}S{12}",".{16}S{16}","G{14}S{18}","D{32}","S{32}"],"objects":[{"s":"king","x":6,"label":"사울"},{"s":"soldier","x":9,"shirt":"#8a7a9a"},{"s":"stone","x":2,"scale":2,"label":"사무엘의 무덤"},{"s":"soldier","x":24,"shirt":"#5a7a8a","flip":true},{"s":"soldier","x":28,"shirt":"#5a7a8a","flip":true},{"s":"chariot","x":21,"scale":2,"flip":true}],"bg":"mountains"}
  },
  {
    week: 97, file: "lessons/97-saul-dies.html", title: "사울이 블레셋 전투에서 전사하다", ref: "사무엘상 31장",
    cover: {"sky":"night","map":[".{14}C{18}",".{14}C{18}",".{14}C{18}","G{32}","D{32}","S{32}"],"objects":[{"s":"soldier","x":6,"shirt":"#5a7a8a","flip":true},{"s":"soldier","x":10,"shirt":"#5a7a8a","flip":true},{"s":"woman","x":2,"label":"아스다롯","skin":"#f0d264","hood":"#d8aa2c","robe":"#c2941c"}],"bg":"city"}
  },
  {
    week: 98, file: "lessons/98-david-laments.html", title: "다윗이 사울과 요나단의 죽음을 슬퍼하다", ref: "사무엘하 1장",
    cover: {"sky":"glory","map":["G{32}","D{32}","D{32}","S{32}"],"objects":[{"s":"man","x":10,"label":"다윗","shirt":"#b8724a"},{"s":"harp","x":12.5,"y":14,"scale":3,"label":"하프"},{"s":"boy","x":17,"shirt":"#a98a5e","flip":true},{"s":"man","x":20,"shirt":"#9a7b52","flip":true},{"s":"arrow","x":25,"y":13,"scale":2,"label":"활"}],"bg":"hills"}
  },
  {
    week: 99, file: "lessons/99-ark-to-jerusalem.html", title: "다윗이 법궤를 다시 찾아오다", ref: "사무엘하 6장",
    cover: {"sky":"dusk","map":["y{32}","D{32}","D{32}","S{32}"],"objects":[{"s":"chariot","x":14,"scale":2},{"s":"ark","x":14,"y":12,"scale":2,"label":"언약궤"},{"s":"cow","x":19,"scale":2},{"s":"man","x":11,"label":"웃사","shirt":"#9a7b52"},{"s":"king","x":5,"label":"다윗"}],"bg":"hills"}
  },
  {
    week: 100, file: "lessons/100-house-and-kindness.html", title: "다윗이 하나님의 집을 짓고자 하다", ref: "사무엘하 7, 9장",
    cover: {"sky":"night","map":[".{10}T{10}.{12}",".{10}T.{8}T.{12}",".{10}T.{8}T.{12}","G{32}","D{32}","S{32}"],"objects":[{"s":"ark","x":15,"scale":2,"label":"언약궤"},{"s":"priest","x":11,"label":"제사장"},{"s":"torch","x":19,"scale":2}],"bg":"hills"}
  },
  {
    week: 101, file: "lessons/101-david-sins.html", title: "다윗이 큰 죄를 저지르다", ref: "사무엘하 11-12장",
    cover: {"sky":"day","map":["T{32}",".{5}C{2}.{18}C{2}.{5}",".{5}C{2}.{18}C{2}.{5}",".{5}C{2}.{18}C{2}.{5}","m{32}","S{32}"],"objects":[{"s":"king","x":11,"label":"다윗"},{"s":"man","x":16,"label":"나단","shirt":"#e0d8c0","flip":true},{"s":"sheep","x":20,"scale":2,"label":"어린양"}],"bg":"city"}
  },
  {
    week: 102, file: "lessons/102-absalom-rebels.html", title: "압살롬이 반역하다", ref: "사무엘하 15:1-17:24",
    cover: {"sky":"glory","map":[".{22}C{10}",".{22}C{10}",".{22}C{10}","G{32}","D{32}","S{32}"],"objects":[{"s":"king","x":8,"label":"다윗"},{"s":"soldier","x":12,"shirt":"#9a7b52"},{"s":"woman","x":15,"hood":"#8a6b4a"},{"s":"boy","x":17.5,"shirt":"#a98a5e"},{"s":"priest","x":21,"label":"사독","flip":true},{"s":"ark","x":21,"y":13,"scale":2,"label":"언약궤"}],"bg":"city"}
  },
  {
    week: 103, file: "lessons/103-absalom-dies.html", title: "압살롬이 나뭇가지에 걸려 죽다", ref: "사무엘하 17:27-19:8",
    cover: {"sky":"dusk","map":[".{3}L{5}.{3}L{5}.{3}L{5}.{8}",".{4}LTL.{5}LTL.{5}LTL.{4}",".{5}T.{7}T.{7}T.{9}",".{5}T.{7}T.{7}T.{9}","G{32}","D{32}","S{32}"],"objects":[{"s":"soldier","x":14,"shirt":"#9a7b52"},{"s":"soldier","x":22,"shirt":"#8a6a9a","flip":true},{"s":"tuft","x":28},{"s":"man","x":12,"y":12,"label":"압살롬","shirt":"#8a6a9a","hair":"#3a2a18","long":true},{"s":"donkey","x":16,"flip":true}],"bg":"hills"}
  },
  {
    week: 104, file: "lessons/104-david-census.html", title: "다윗이 인구를 조사하는 죄를 짓다", ref: "사무엘하 24:1, 역대상 21장",
    cover: {"sky":"dusk","map":[".{12}S{6}.{14}","y{32}","D{32}","D{32}","S{32}"],"objects":[{"s":"king","x":8,"label":"다윗"},{"s":"man","x":20,"label":"오르난","shirt":"#8a7a5a","flip":true},{"s":"sheaf","x":24,"scale":2},{"s":"coin","x":11,"scale":2,"label":"값"}],"bg":"hills"}
  },
  {
    week: 105, file: "lessons/105-solomon-king.html", title: "솔로몬이 왕이 되다", ref: "열왕기상 1장",
    cover: {"sky":"glory","map":["G{26}W{6}","D{26}W{6}","D{32}","S{32}"],"objects":[{"s":"priest","x":22,"label":"사독","flip":true},{"s":"man","x":19,"label":"나단","shirt":"#e0d8c0","flip":true},{"s":"tuft","x":10},{"s":"boy","x":15,"label":"솔로몬","shirt":"#c8b45a"},{"s":"horn","x":17.5,"y":13,"scale":2,"label":"기름 뿔"}],"bg":"city"}
  },
  {
    week: 106, file: "lessons/106-solomon-dream.html", title: "솔로몬이 꿈을 꾸다", ref: "열왕기상 3장, 역대하 1장",
    cover: {"sky":"night","map":[".{14}S{5}.{13}",".{14}S{5}.{13}","G{32}","D{32}","S{32}"],"objects":[{"s":"boy","x":10,"label":"솔로몬","shirt":"#c8b45a"},{"s":"fire","x":16.5,"y":13,"scale":2,"anim":"bob"},{"s":"sheep","x":24,"scale":2}],"bg":"mountains"}
  },
  {
    week: 107, file: "lessons/107-solomon-temple.html", title: "솔로몬이 성전을 짓다", ref: "열왕기상 6-7장, 역대하 2장",
    cover: {"sky":"day","map":["G{32}","D{32}","D{32}","S{32}"],"objects":[{"s":"king","x":12,"label":"솔로몬"},{"s":"man","x":17,"shirt":"#9a7b52","flip":true},{"s":"stone","x":22,"scale":2}],"bg":"city"}
  },
  {
    week: 108, file: "lessons/108-queen-of-sheba.html", title: "스바 여왕이 솔로몬을 찾아오다", ref: "열왕기상 9-10장",
    cover: {"sky":"day","map":["G{32}","D{32}","D{32}","S{32}"],"objects":[{"s":"woman","x":7,"label":"세바의 여왕","crown":true,"robe":true,"shirt":"#8a3a7a"},{"s":"camel","x":13,"scale":2},{"s":"jar","x":19,"scale":2,"label":"향료"},{"s":"gem","x":22,"scale":2,"label":"보석"},{"s":"coin","x":25,"scale":2,"label":"금"}],"bg":"city"}
  },
  {
    week: 109, file: "lessons/109-solomon-dies.html", title: "솔로몬이 슬프게 죽다", ref: "열왕기상 11장",
    cover: {"sky":"day","map":["G{32}","G{32}","D{32}","S{32}"],"objects":[{"s":"man","x":24,"label":"아히야","shirt":"#e0d8c0","robe":true,"beard":true,"flip":true},{"s":"tuft","x":14},{"s":"flower","x":19}],"bg":"hills"}
  },
  {
    week: 110, file: "lessons/110-rehoboam.html", title: "르호보암이 왕이 되다", ref: "열왕기상 12장, 역대하 10장",
    cover: {"sky":"day","map":["G{32}","D{32}","D{32}","S{32}"],"objects":[{"s":"king","x":10,"label":"르호보암"},{"s":"man","x":18,"label":"여로보암","shirt":"#8a7a5a","flip":true},{"s":"man","x":22,"shirt":"#9a8a6a","flip":true},{"s":"man","x":25,"shirt":"#7a8a6a","flip":true}],"bg":"hills"}
  },
  {
    week: 111, file: "lessons/111-jeroboam-idols.html", title: "여로보암이 이스라엘에게 우상 숭배를 가르치다", ref: "열왕기상 12:25-13:32",
    cover: {"sky":"day","map":[".{13}S{6}.{13}","G{32}","D{32}","S{32}"],"objects":[{"s":"man","x":9,"label":"여로보암","shirt":"#8a7a5a","crown":true},{"s":"cow","x":15.5,"scale":2,"label":"금송아지","pal":{"w":"#f7d34a","k":"#c8961a","h":"#e8c04a","p":"#f0d878"}},{"s":"man","x":24,"shirt":"#9a8a6a","flip":true}],"bg":"hills"}
  },
  {
    week: 112, file: "lessons/112-elijah-flees.html", title: "엘리야가 아합 왕을 피해 도망치다", ref: "열왕기상 17장",
    cover: {"sky":"day","map":[".{4}S{6}.{22}","G{10}W{8}G{14}","D{32}","S{32}"],"objects":[{"s":"man","x":6,"label":"엘리야","shirt":"#8a7a5a","robe":true,"beard":true},{"s":"bird","x":20,"y":6,"anim":"fly","label":"까마귀","pal":{"b":"#1a1a20","o":"#3a3a44"}},{"s":"bread","x":24,"scale":2}],"bg":"mountains"}
  },
  {
    week: 113, file: "lessons/113-carmel.html", title: "엘리야가 갈멜 산에서 아합과 맞서다", ref: "열왕기상 18장",
    cover: {"sky":"glory","map":[".{6}S{4}.{6}S{4}.{12}","G{32}","D{32}","S{32}"],"objects":[{"s":"man","x":4,"label":"엘리야","shirt":"#8a7a5a","robe":true,"beard":true},{"s":"stone","x":8,"scale":2,"label":"열두 돌"},{"s":"jar","x":12,"scale":2,"label":"물통"},{"s":"man","x":14,"shirt":"#9a8a6a","flip":true},{"s":"fire","x":8,"y":14,"scale":2,"anim":"bob"}],"bg":"mountains"}
  },
  {
    week: 114, file: "lessons/114-elijah-horeb.html", title: "엘리야가 광야로 숨다", ref: "열왕기상 19장",
    cover: {"sky":"cave","map":["S{7}.{18}S{7}","S{6}.{20}S{6}","S{5}.{22}S{5}","S{5}.{22}S{5}","S{32}","S{32}","S{32}"],"objects":[{"s":"man","x":14,"label":"엘리야","shirt":"#8a7a5a","robe":true,"beard":true},{"s":"torch","x":20,"scale":2}]}
  },
  {
    week: 115, file: "lessons/115-naboth.html", title: "아합이 나봇의 포도원을 빼앗다", ref: "열왕기상 21장",
    cover: {"sky":"day","map":[".{4}L{3}.{3}L{3}.{3}L{3}.{10}",".{5}T.{5}T.{5}T.{14}","G{32}","D{32}","S{32}"],"objects":[{"s":"king","x":20,"label":"아합","shirt":"#6a3a6a","flip":true},{"s":"man","x":14,"label":"나봇","shirt":"#7a8a6a"},{"s":"grapes","x":8,"scale":2,"label":"포도원"}],"bg":"hills"}
  },
  {
    week: 116, file: "lessons/116-ahab-dies.html", title: "악한 아합 왕이 죽다", ref: "열왕기상 22:1-40",
    cover: {"sky":"day","map":["G{32}","D{32}","D{32}","S{32}"],"objects":[{"s":"king","x":9,"label":"아합","shirt":"#6a3a6a"},{"s":"king","x":14,"label":"여호사밧","shirt":"#3a6a8a"},{"s":"man","x":22,"label":"미가야","shirt":"#e0d8c0","robe":true,"beard":true,"flip":true}],"bg":"city"}
  },
  {
    week: 117, file: "lessons/117-fire-from-heaven.html", title: "하나님께서 하늘에서 불을 내리시다", ref: "열왕기하 1장",
    cover: {"sky":"day","map":["G{18}D{14}","D{32}","D{32}","S{32}"],"objects":[{"s":"man","x":8,"label":"사자","shirt":"#9a8a6a"},{"s":"man","x":16,"label":"엘리야","shirt":"#8a7a5a","robe":true,"beard":true,"flip":true},{"s":"cord","x":20,"scale":2,"label":"가죽띠"}],"bg":"hills"}
  },
  {
    week: 118, file: "lessons/118-elijah-taken.html", title: "엘리야가 하늘로 올라가다", ref: "열왕기하 2장",
    cover: {"sky":"glory","map":["G{32}","D{32}","D{32}","S{32}"],"objects":[{"s":"man","x":8,"label":"엘리사","shirt":"#9a8a6a"},{"s":"chariot","x":18,"y":6,"scale":2,"label":"불 병거","pal":{"k":"#a02a10","y":"#ffd24a","d":"#6a1a08","s":"#f07020"}},{"s":"man","x":24,"label":"엘리야","shirt":"#8a7a5a","robe":true,"beard":true,"flip":true}],"bg":"mountains"}
  },
  {
    week: 119, file: "lessons/119-moab-war.html", title: "이스라엘이 모압과 싸우러 나가다", ref: "열왕기하 3장",
    cover: {"sky":"dusk","map":["D{6}.{2}D{2}.{2}D{2}.{2}D{2}.{2}D{2}.{2}D{8}","D{32}","D{32}","S{32}"],"objects":[{"s":"man","x":3,"label":"엘리사","shirt":"#9a8a6a","robe":true},{"s":"soldier","x":26,"shirt":"#9a7b52","flip":true}],"bg":"desert"}
  },
  {
    week: 120, file: "lessons/120-three-miracles.html", title: "세 가지 기적이 일어나다", ref: "열왕기하 4장",
    cover: {"sky":"day","map":["T{32}",".{5}P{2}.{18}P{2}.{5}",".{5}P{2}.{18}P{2}.{5}",".{5}P{2}.{18}P{2}.{5}","P{32}","S{32}"],"objects":[{"s":"woman","x":10,"label":"과부","hood":"#8a7a6a"},{"s":"man","x":18,"label":"엘리사","shirt":"#9a8a6a","robe":true,"flip":true},{"s":"jar","x":14,"scale":2,"label":"기름 한 항아리"},{"s":"boy","x":7.5,"shirt":"#7a8a6a"}],"bg":"city"}
  },
  {
    week: 121, file: "lessons/121-naaman.html", title: "나아만이 낫다", ref: "열왕기하 5장",
    cover: {"sky":"day","map":["G{10}W{14}G{8}","D{10}W{14}D{8}","D{32}","S{32}"],"objects":[{"s":"soldier","x":6,"label":"나아만","shirt":"#5a6a8a","flip":true},{"s":"man","x":28,"label":"종","shirt":"#8a7a5a","flip":true}],"bg":"mountains"}
  },
  {
    week: 122, file: "lessons/122-blinded-army.html", title: "하나님께서 아람 사람들의 눈을 멀게 하시다", ref: "열왕기하 6:1-23",
    cover: {"sky":"dawn","map":[".{10}S{12}.{10}",".{8}S{16}.{8}","G{6}S{20}G{6}","D{32}","S{32}"],"objects":[{"s":"man","x":15,"label":"엘리사","shirt":"#9a8a6a","robe":true},{"s":"boy","x":19,"label":"종","shirt":"#8a7a5a","flip":true},{"s":"soldier","x":3,"shirt":"#4a5a7a"},{"s":"soldier","x":28,"shirt":"#4a5a7a","flip":true},{"s":"chariot","x":25,"scale":2,"flip":true}],"bg":"mountains"}
  },
  {
    week: 123, file: "lessons/123-siege-of-samaria.html", title: "아람 군대가 사마리아를 포위하다", ref: "열왕기하 6:24-7:20",
    cover: {"sky":"night","map":["s{32}","s{32}","D{32}","S{32}"],"objects":[{"s":"man","x":6,"label":"네 사람","shirt":"#8a8070"},{"s":"coin","x":12,"scale":2,"label":"은과 금"},{"s":"bread","x":17,"scale":2},{"s":"jar","x":21,"scale":2},{"s":"chariot","x":26,"scale":2,"flip":true}],"bg":"desert"}
  },
  {
    week: 124, file: "lessons/124-jehu.html", title: "예후가 왕이 되다", ref: "열왕기하 9장",
    cover: {"sky":"day","map":["G{32}","G{32}","D{32}","S{32}"],"objects":[{"s":"tuft","x":20},{"s":"flower","x":26}],"bg":"hills"}
  },
  {
    week: 125, file: "lessons/125-israel-falls.html", title: "이스라엘 왕국이 앗수르에게 멸망하다", ref: "열왕기하 13, 17장",
    cover: {"sky":"dusk","map":[".{6}S{2}.{5}S{2}.{9}S{2}.{6}","G{32}","D{32}","S{32}"],"objects":[{"s":"man","x":10,"shirt":"#8a7a5a"},{"s":"stone","x":20},{"s":"tuft","x":28}],"bg":"hills"}
  },
  {
    week: 126, file: "lessons/126-jonah-called.html", title: "하나님께서 요나를 부르시다", ref: "요나 1-2장",
    cover: {"sky":"storm","map":["W{32}","W{32}","W{32}","W{32}"],"objects":[{"s":"ship","x":14,"y":13,"scale":3,"label":"배"},{"s":"man","x":12,"y":12,"label":"선장","shirt":"#5a6a8a"}],"bg":"sea"}
  },
  {
    week: 127, file: "lessons/127-jonah-nineveh.html", title: "요나가 니느웨에서 복음을 전하다", ref: "요나 3-4장",
    cover: {"sky":"day","map":["G{32}","D{32}","D{32}","S{32}"],"objects":[{"s":"man","x":8,"label":"요나","shirt":"#7a8a6a","robe":true},{"s":"man","x":16,"shirt":"#7a5a3a","flip":true},{"s":"woman","x":20,"hood":"#8a7a6a","flip":true},{"s":"boy","x":23,"shirt":"#6a7a8a","flip":true}],"bg":"city"}
  },
  {
    week: 128, file: "lessons/128-assyria-defeated.html", title: "하나님께서 앗수르 군대를 물리치시다", ref: "열왕기하 18-19장",
    cover: {"sky":"day","map":[".{6}X{20}.{6}",".{6}m{2}.{16}m{2}.{6}",".{6}m{2}.{16}m{2}.{6}",".{6}m{2}.{16}m{2}.{6}","m{32}","S{32}"],"objects":[{"s":"king","x":15,"y":16,"label":"히스기야","shirt":"#3a6a8a"},{"s":"scroll","x":18,"y":16,"scale":2,"label":"편지"}],"bg":"city"}
  },
  {
    week: 129, file: "lessons/129-hezekiah-healed.html", title: "히스기야의 병이 낫다", ref: "열왕기하 20장",
    cover: {"sky":"glory","map":["T{32}",".{5}C{2}.{18}C{2}.{5}",".{5}C{2}.{18}C{2}.{5}",".{5}C{2}.{18}C{2}.{5}","m{32}","S{32}"],"objects":[{"s":"king","x":11,"label":"히스기야","shirt":"#3a6a8a"},{"s":"torch","x":22,"scale":2}],"bg":"city"}
  },
  {
    week: 130, file: "lessons/130-manasseh.html", title: "악한 왕 므낫세가 유다를 다스리다", ref: "열왕기하 21장",
    cover: {"sky":"cave","map":["S{8}.{16}S{8}","S{7}.{18}S{7}","S{7}.{18}S{7}","S{32}","S{32}"],"objects":[{"s":"man","x":15,"label":"므낫세","shirt":"#5a5a5a"}]}
  },
  {
    week: 131, file: "lessons/131-judah-falls.html", title: "유다 왕국이 바벨론에게 멸망하다", ref: "열왕기하 24-25장, 예레미야 38장",
    cover: {"sky":"dusk","map":["G{12}.{8}G{12}","D{12}.{8}D{12}","S{12}.{8}S{12}","S{12}.{8}S{12}","S{12}D{8}S{12}","S{32}"],"objects":[{"s":"man","x":15.5,"label":"예레미야","shirt":"#e0d8c0","robe":true,"beard":true},{"s":"cord","x":15.5,"y":13,"scale":2,"label":"밧줄"},{"s":"soldier","x":6,"shirt":"#8a7a5a"},{"s":"soldier","x":25,"shirt":"#8a7a5a","flip":true}],"bg":"city"}
  },
  {
    week: 132, file: "lessons/132-daniel-palace.html", title: "다니엘이 왕의 궁전에 서다", ref: "다니엘 1장",
    cover: {"sky":"day","map":["T{32}",".{4}m{2}.{20}m{2}.{4}",".{4}m{2}.{20}m{2}.{4}",".{4}m{2}.{20}m{2}.{4}","X{32}","S{32}"],"objects":[{"s":"boy","x":9,"label":"벨드사살","shirt":"#9a8a6a"},{"s":"man","x":23,"label":"내시장","shirt":"#6a5a8a","flip":true},{"s":"bread","x":26,"scale":2,"label":"왕의 음식"},{"s":"jar","x":28.5,"scale":2}],"bg":"city"}
  },
  {
    week: 133, file: "lessons/133-nebuchadnezzar-dream.html", title: "느부갓네살이 꿈을 꾸다", ref: "다니엘 2장",
    cover: {"sky":"glory","map":["G{32}","D{32}","D{32}","S{32}"],"objects":[{"s":"giant","x":17,"label":"큰 형상","skin":"#e8c04a","hair":"#f7d34a","shirt":"#c8ccd4","pants":"#8a6a3a"},{"s":"stone","x":5,"y":8,"scale":2,"anim":"float","label":"잘려 나온 돌"}],"bg":"mountains"}
  },
  {
    week: 134, file: "lessons/134-fiery-furnace.html", title: "다니엘의 세 친구가 풀무불에 던져지다", ref: "다니엘 3장",
    cover: {"sky":"fire","map":[".{10}B.{10}B.{10}",".{10}B.{10}B.{10}",".{10}B.{10}B.{10}",".{10}BA{10}B.{10}","G{10}B{12}G{10}","D{32}","S{32}"],"objects":[{"s":"king","x":4,"label":"느부갓네살","shirt":"#6a5a8a"},{"s":"fire","x":13,"y":14,"scale":2,"anim":"bob"},{"s":"fire","x":18,"y":14,"scale":2,"anim":"bob"},{"s":"man","x":12,"y":14,"shirt":"#8a7a5a"},{"s":"man","x":14.5,"y":14,"shirt":"#7a8a6a"},{"s":"man","x":17,"y":14,"shirt":"#8a8a6a"},{"s":"angel","x":19.5,"y":14,"label":"넷째 사람"}],"bg":"city"}
  },
  {
    week: 135, file: "lessons/135-nebuchadnezzar-humbled.html", title: "느부갓네살이 또 다른 꿈을 꾸다", ref: "다니엘 4장",
    cover: {"sky":"glory","map":["G{32}","D{32}","D{32}","S{32}"],"objects":[{"s":"man","x":12,"label":"느부갓네살","shirt":"#6a6a5a","long":true,"hair":"#5a4a3a","beard":"#5a4a3a"},{"s":"cow","x":18,"label":"들짐승"},{"s":"cow","x":23,"flip":true},{"s":"tuft","x":7}],"bg":"hills"}
  },
  {
    week: 136, file: "lessons/136-babylon-falls.html", title: "바벨론이 무너지다", ref: "다니엘 5장",
    cover: {"sky":"night","map":["T{32}",".{3}C{2}.{22}C{2}.{3}",".{3}C{2}.{22}C{2}.{3}",".{3}C{2}.{22}C{2}.{3}","X{32}","S{32}"],"objects":[{"s":"king","x":15,"label":"벨사살","shirt":"#6a5a8a"},{"s":"man","x":9,"shirt":"#8a6a9a"},{"s":"woman","x":11.5,"hood":"#9a6a7a"},{"s":"man","x":20,"shirt":"#7a6a9a","flip":true},{"s":"woman","x":23,"hood":"#8a7a9a","flip":true},{"s":"torch","x":7,"scale":2},{"s":"torch","x":25,"scale":2},{"s":"jar","x":17.5,"scale":2,"label":"성전의 금 그릇"},{"s":"scroll","x":16,"y":9,"scale":2,"label":"벽에 쓴 글"}],"bg":"city"}
  },
  {
    week: 137, file: "lessons/137-lions-den.html", title: "다니엘이 사자 굴에 던져지다", ref: "다니엘 6장",
    cover: {"sky":"glory","map":["G{10}.{12}G{10}","D{10}.{12}D{10}","S{10}.{12}S{10}","S{10}.{12}S{10}","S{10}D{12}S{10}","S{32}"],"objects":[{"s":"elder","x":16,"label":"다니엘","shirt":"#9a8a6a"},{"s":"lion","x":12.5,"scale":2},{"s":"lion","x":19.5,"scale":2,"flip":true},{"s":"angel","x":14,"label":"천사"},{"s":"king","x":5,"label":"다리오","shirt":"#4a6a5a"}]}
  },
  {
    week: 138, file: "lessons/138-return-to-jerusalem.html", title: "하나님의 백성이 이스라엘 땅으로 돌아오다", ref: "에스라 1-3장",
    cover: {"sky":"glory","map":[".{8}S{16}.{8}","G{32}","D{32}","S{32}"],"objects":[{"s":"priest","x":10,"y":14,"label":"제사장"},{"s":"man","x":14,"y":14,"shirt":"#8a7a5a"},{"s":"harp","x":18,"y":14,"scale":2},{"s":"man","x":22,"y":14,"shirt":"#9a8a6a","flip":true},{"s":"man","x":4,"shirt":"#7a8a6a"},{"s":"woman","x":27,"hood":"#8a7a6a","flip":true}],"bg":"hills"}
  },
  {
    week: 139, file: "lessons/139-esther-queen.html", title: "에스더가 왕비가 되다", ref: "에스더 1-2장",
    cover: {"sky":"glory","map":["T{32}",".{4}m{2}.{20}m{2}.{4}",".{4}m{2}.{20}m{2}.{4}",".{4}m{2}.{20}m{2}.{4}","X{32}","S{32}"],"objects":[{"s":"king","x":12,"label":"아하수에로","shirt":"#8a4a3a"},{"s":"woman","x":18,"label":"에스더","hood":"#8a6a9a","crown":true,"flip":true},{"s":"gem","x":15,"y":13,"scale":2,"label":"왕비의 관"}],"bg":"city"}
  },
  {
    week: 140, file: "lessons/140-esther-crisis.html", title: "유대인들에게 큰 위기가 닥치다", ref: "에스더 3-4장",
    cover: {"sky":"glory","map":["T{32}",".{6}P{2}.{16}P{2}.{6}",".{6}P{2}.{16}P{2}.{6}",".{6}P{2}.{16}P{2}.{6}","m{32}","S{32}"],"objects":[{"s":"woman","x":12,"label":"에스더","hood":"#8a6a9a","crown":true},{"s":"man","x":18,"label":"하닥","shirt":"#6a5a8a","flip":true}],"bg":"city"}
  },
  {
    week: 141, file: "lessons/141-mordecai-honored.html", title: "왕이 모르드개를 높이다", ref: "에스더 5-6장",
    cover: {"sky":"night","map":["T{32}",".{4}m{2}.{20}m{2}.{4}",".{4}m{2}.{20}m{2}.{4}",".{4}m{2}.{20}m{2}.{4}","X{32}","S{32}"],"objects":[{"s":"king","x":13,"label":"아하수에로","shirt":"#8a4a3a"},{"s":"man","x":18,"label":"신하","shirt":"#6a5a8a","flip":true},{"s":"scroll","x":15.5,"scale":2,"label":"연대기 책"},{"s":"torch","x":9,"scale":2}],"bg":"city"}
  },
  {
    week: 142, file: "lessons/142-jews-saved.html", title: "유대인들이 구원을 받다", ref: "에스더 7-10장",
    cover: {"sky":"glory","map":["G{32}","D{32}","D{32}","S{32}"],"objects":[{"s":"man","x":7,"shirt":"#9a8a6a"},{"s":"woman","x":10,"hood":"#8a7a6a"},{"s":"boy","x":13,"shirt":"#7a8a6a","anim":"jump"},{"s":"man","x":20,"label":"모르드개","shirt":"#7a3a8a","beard":true,"crown":true,"flip":true},{"s":"girl","x":25,"shirt":"#8a6a9a","anim":"jump","flip":true},{"s":"bread","x":16,"scale":2,"label":"나누는 음식"}],"bg":"city"}
  },
  {
    week: 143, file: "lessons/143-ezra-nehemiah.html", title: "에스라와 느헤미야가 무너진 이스라엘을 다시 세우다", ref: "에스라 7-8장, 느헤미야 1-2장",
    cover: {"sky":"day","map":["T{32}",".{4}m{2}.{20}m{2}.{4}",".{4}m{2}.{20}m{2}.{4}",".{4}m{2}.{20}m{2}.{4}","X{32}","S{32}"],"objects":[{"s":"king","x":11,"label":"아닥사스다","shirt":"#8a4a3a"},{"s":"man","x":17,"label":"느헤미야","shirt":"#5a6a8a","flip":true},{"s":"jar","x":14,"scale":2},{"s":"scroll","x":20.5,"scale":2,"label":"왕의 편지"}],"bg":"city"}
  },
  {
    week: 144, file: "lessons/144-zechariah.html", title: "천사가 사가랴를 찾아오다", ref: "누가복음 1:5-23",
    cover: {"sky":"glory","map":["X{7}.{18}X{7}","X{6}.{20}X{6}","X{6}.{20}X{6}","X{6}.{20}X{6}","X{32}","S{32}"],"objects":[{"s":"priest","x":14,"label":"사가랴"},{"s":"censer","x":18,"scale":2,"label":"분향 제단"},{"s":"angel","x":21,"label":"천사","flip":true}],"bg":"city"}
  },
  {
    week: 145, file: "lessons/145-john-born.html", title: "세례 요한이 태어나다", ref: "누가복음 1:24-80",
    cover: {"sky":"glory","map":["G{32}","D{32}","D{32}","S{32}"],"objects":[{"s":"woman","x":12,"label":"엘리사벳","hood":"#9a8a7a"},{"s":"basket","x":15,"scale":2},{"s":"man","x":20,"shirt":"#9a8a6a","flip":true},{"s":"woman","x":23,"hood":"#8a7a6a","flip":true},{"s":"elder","x":7,"label":"사가랴","shirt":"#e0d8c0"},{"s":"scroll","x":9.5,"y":14,"scale":2,"label":"글 쓰는 판"}],"bg":"hills"}
  },
  {
    week: 146, file: "lessons/146-jesus-born.html", title: "예수님께서 태어나시다", ref: "누가복음 2:1-20",
    cover: {"sky":"glory","map":["G{32}","D{32}","D{32}","S{32}"],"objects":[{"s":"shepherd","x":10,"label":"목자","shirt":"#8a7a5a"},{"s":"shepherd","x":14,"shirt":"#7a6a4a","flip":true},{"s":"sheep","x":18},{"s":"sheep","x":21,"flip":true},{"s":"sheep","x":24},{"s":"fire","x":6},{"s":"angel","x":16,"y":8,"anim":"float","label":"주의 천사"}],"bg":"hills"}
  },
  {
    week: 147, file: "lessons/147-wise-men.html", title: "동방 박사들이 예수님께 경배하다", ref: "마태복음 2:1-15",
    cover: {"sky":"night","map":["T{32}",".{6}P{2}.{16}P{2}.{6}",".{6}P{2}.{16}P{2}.{6}",".{6}P{2}.{16}P{2}.{6}","P{32}","S{32}"],"objects":[{"s":"woman","x":10,"label":"마리아","hood":"#5a7aa8"},{"s":"boy","x":12.5,"label":"어린아이","shirt":"#f0e8d8"},{"s":"coin","x":15.5,"scale":2,"label":"황금"},{"s":"jar","x":17.5,"scale":2,"label":"유향"},{"s":"jar","x":19.5,"scale":2,"label":"몰약","pal":{}},{"s":"man","x":22,"label":"지혜자","shirt":"#6a3a8a","robe":true,"crown":true,"flip":true},{"s":"star","x":15,"y":1,"anim":"bob"}],"bg":"city"}
  },
  {
    week: 148, file: "lessons/148-jesus-twelve.html", title: "예수님께서 열두 살에 성전에 오르시다", ref: "마태복음 2:16-23, 누가복음 2:40-52",
    cover: {"sky":"day","map":[".{3}m{2}.{22}m{2}.{3}",".{3}m{2}.{22}m{2}.{3}",".{3}m{2}.{22}m{2}.{3}","m{32}","S{32}"],"objects":[{"s":"priest","x":9,"shirt":"#e0d8c0"},{"s":"elder","x":12,"shirt":"#d0c8b0"},{"s":"boy","x":15.5,"label":"예수님","shirt":"#e8e0d0"},{"s":"scroll","x":17.5,"scale":2,"label":"율법 두루마리"},{"s":"elder","x":20,"shirt":"#c8c0a8","flip":true},{"s":"priest","x":23,"flip":true}],"bg":"city"}
  },
  {
    week: 149, file: "lessons/149-jesus-baptized.html", title: "예수님께서 요한에게 세례를 받으시다", ref: "마태복음 3:13-17, 요한복음 1:19-34",
    cover: {"sky":"glory","map":["G{10}W{12}G{10}","D{10}W{12}D{10}","D{32}","S{32}"],"objects":[{"s":"man","x":25,"shirt":"#9a8a6a","flip":true},{"s":"woman","x":28,"hood":"#8a7a6a","flip":true},{"s":"man","x":10,"y":15,"label":"요한","shirt":"#8a6a3a","hair":"#3a2a1a","beard":"#3a2a1a","long":true},{"s":"jesus","x":13,"y":15,"label":"예수님"},{"s":"dove","x":13,"y":7,"scale":2,"anim":"float","label":"비둘기"}],"bg":"desert"}
  },
  {
    week: 150, file: "lessons/150-temptation.html", title: "예수님께서 마귀에게 시험을 받으시다", ref: "마태복음 4:1-11, 누가복음 4:1-13",
    cover: {"sky":"dusk","map":[".{20}S{3}.{9}","s{32}","s{32}","D{32}","S{32}"],"objects":[{"s":"jesus","x":15,"label":"예수님"},{"s":"stone","x":11,"scale":2,"label":"돌들"},{"s":"man","x":24,"label":"시험하는 자","shirt":"#2a2a2e","hood":"#1a1a1e","skin":"#7a7a80","flip":true}],"bg":"desert"}
  },
  {
    week: 151, file: "lessons/151-first-miracle.html", title: "예수님께서 첫 기적을 행하시다", ref: "요한복음 1:35-2:11",
    cover: {"sky":"day","map":["T{32}",".{3}P{2}.{22}P{2}.{3}",".{3}P{2}.{22}P{2}.{3}",".{3}P{2}.{22}P{2}.{3}","P{32}","S{32}"],"objects":[{"s":"jesus","x":16,"label":"예수님"},{"s":"woman","x":19,"label":"마리아","hood":"#5a7aa8","flip":true},{"s":"jar","x":6,"scale":2,"label":"돌 항아리"},{"s":"jar","x":8.5,"scale":2},{"s":"jar","x":11,"scale":2},{"s":"man","x":23,"label":"종","shirt":"#8a7a5a","flip":true}],"bg":"city"}
  },
  {
    week: 152, file: "lessons/152-temple-nicodemus.html", title: "예수님께서 유월절에 예루살렘에 오르시다", ref: "요한복음 2:12-3:21",
    cover: {"sky":"glory","map":[".{22}P{6}.{4}",".{22}P.{4}P.{4}",".{22}P.{4}P.{4}","G{32}","D{32}","S{32}"],"objects":[{"s":"jesus","x":12,"label":"예수님"},{"s":"elder","x":17,"label":"니고데모","shirt":"#4a4a6a","robe":true,"flip":true},{"s":"torch","x":8,"scale":2}],"bg":"city"}
  },
  {
    week: 153, file: "lessons/153-samaritan-woman.html", title: "예수님께서 사마리아 여자를 만나시다", ref: "요한복음 4:1-42",
    cover: {"sky":"glory","map":[".{14}S{4}.{14}","G{14}SWWSG{14}","D{14}SWWSD{14}","S{32}"],"objects":[{"s":"jesus","x":12,"label":"예수님"},{"s":"tuft","x":24},{"s":"sun","x":16,"y":2,"scale":2},{"s":"woman","x":21,"label":"사마리아 여자","hood":"#9a6a5a","flip":true},{"s":"jar","x":19,"scale":2,"label":"물 항아리"}],"bg":"desert"}
  },
  {
    week: 154, file: "lessons/154-rejected-nazareth.html", title: "예수님께서 갈릴리에서 배척당하시다", ref: "요한복음 4:43-54, 누가복음 4:14-30",
    cover: {"sky":"glory","map":["T{32}",".{4}C{2}.{20}C{2}.{4}",".{4}C{2}.{20}C{2}.{4}",".{4}C{2}.{20}C{2}.{4}","m{32}","S{32}"],"objects":[{"s":"jesus","x":15,"label":"예수님"},{"s":"scroll","x":17.5,"y":15,"scale":2,"label":"이사야의 책"},{"s":"elder","x":9,"shirt":"#8a8a7a"},{"s":"man","x":11.5,"shirt":"#7a6a5a"},{"s":"man","x":21,"shirt":"#8a7a5a","flip":true},{"s":"elder","x":24,"shirt":"#9a9a8a","flip":true}],"bg":"city"}
  },
  {
    week: 155, file: "lessons/155-great-catch.html", title: "예수님께서 많은 물고기를 잡게 하시다", ref: "누가복음 5:1-11, 마가복음 1:16-20",
    cover: {"sky":"glory","map":["W{32}","W{32}","W{32}","W{32}"],"objects":[{"s":"ship","x":14,"y":13,"scale":3,"label":"배"},{"s":"jesus","x":12,"y":11,"label":"예수님"},{"s":"man","x":17,"y":11,"label":"시몬","shirt":"#6a5a4a","beard":true,"flip":true},{"s":"fish","x":9,"y":16,"scale":2,"anim":"swim","label":"물고기 떼"},{"s":"fish","x":13,"y":17,"scale":2,"anim":"swim","label":"물고기 떼"},{"s":"fish","x":17,"y":16,"scale":2,"anim":"swim","label":"물고기 떼","pal":{"o":"#8aa0b8","y":"#c8d8e8"}},{"s":"fish","x":21,"y":17,"scale":2,"anim":"swim","label":"물고기 떼"},{"s":"ship","x":26,"y":13,"scale":2,"flip":true}],"bg":"sea"}
  },
  {
    week: 156, file: "lessons/156-capernaum-healing.html", title: "예수님께서 귀신 들린 사람을 고치시다", ref: "마가복음 1:21-35, 누가복음 4:33-41",
    cover: {"sky":"dusk","map":[".{20}P{8}.{4}",".{20}P.{6}P.{4}",".{20}P.{6}P.{4}","G{32}","D{32}","S{32}"],"objects":[{"s":"jesus","x":18,"label":"예수님","flip":true},{"s":"man","x":14,"label":"앓는 사람","shirt":"#7a6a5a"},{"s":"woman","x":11,"label":"앓는 사람","hood":"#8a7a6a"},{"s":"boy","x":8,"label":"앓는 사람","shirt":"#9a8a6a"},{"s":"elder","x":5,"shirt":"#8a8a7a"},{"s":"torch","x":2,"scale":2}],"bg":"city"}
  },
  {
    week: 157, file: "lessons/157-leper-paralytic.html", title: "예수님께서 나병과 중풍병을 고치시다", ref: "마가복음 1:40-45, 누가복음 5:12-26",
    cover: {"sky":"day","map":[".{8}S{6}.{3}S{7}.{8}",".{8}S.{14}S.{8}",".{8}S.{14}S.{8}",".{8}S.{14}S.{8}","G{32}","D{32}","S{32}"],"objects":[{"s":"jesus","x":12,"y":15,"label":"예수님"},{"s":"priest","x":19,"y":15,"label":"율법 박사","flip":true},{"s":"man","x":10.5,"label":"친구","shirt":"#8a7a5a"},{"s":"man","x":19.5,"shirt":"#7a6a5a","flip":true},{"s":"fleece","x":15.5,"y":13,"scale":2,"label":"자리"},{"s":"man","x":3,"shirt":"#8a7a5a"},{"s":"man","x":28,"shirt":"#6a5a4a","flip":true}],"bg":"city"}
  },
  {
    week: 158, file: "lessons/158-levi-bethesda.html", title: "예수님께서 레위를 부르시고 중풍병자를 고치시다", ref: "마가복음 2:13-17, 요한복음 5:1-20",
    cover: {"sky":"glory","map":[".{3}m.{5}m.{5}m.{5}m.{5}m.{4}",".{3}m.{5}m.{5}m.{5}m.{5}m.{4}",".{3}m.{5}m.{5}m.{5}m.{5}m.{4}","m{10}W{12}m{10}","m{10}W{12}m{10}","S{32}"],"objects":[{"s":"man","x":12.5,"y":15,"shirt":"#7a6a5a"},{"s":"woman","x":24,"hood":"#8a7a6a","flip":true},{"s":"boy","x":30,"shirt":"#9a8a6a","flip":true},{"s":"elder","x":18,"y":15,"shirt":"#8a8a7a","flip":true},{"s":"jesus","x":5,"label":"예수님"},{"s":"man","x":7,"label":"일어난 사람","shirt":"#e0d8c0","anim":"jump"}],"bg":"city"}
  },
  {
    week: 159, file: "lessons/159-sabbath.html", title: "예수님께서 안식일을 가르치시다", ref: "마태복음 12:1-13, 누가복음 6:1-16",
    cover: {"sky":"glory","map":["T{32}",".{4}C{2}.{20}C{2}.{4}",".{4}C{2}.{20}C{2}.{4}",".{4}C{2}.{20}C{2}.{4}","m{32}","S{32}"],"objects":[{"s":"jesus","x":10,"label":"예수님"},{"s":"man","x":15,"label":"손 마른 사람","shirt":"#8a7a5a"},{"s":"priest","x":20,"label":"바리새인","shirt":"#6a6a4a","flip":true},{"s":"priest","x":23,"shirt":"#5a5a3a","flip":true},{"s":"elder","x":7,"shirt":"#8a8a7a"}],"bg":"city"}
  },
  {
    week: 160, file: "lessons/160-centurion-widow.html", title: "예수님께서 백부장의 종과 과부의 아들을 살리시다", ref: "누가복음 7:1-17, 마태복음 8:5-13",
    cover: {"sky":"glory","map":[".{2}C{6}.{16}C{6}.{2}",".{2}C{6}.{16}C{6}.{2}",".{2}C{6}.{16}C{6}.{2}","G{32}","D{32}","S{32}"],"objects":[{"s":"woman","x":13,"label":"과부","hood":"#3a3a3a"},{"s":"fleece","x":16.5,"scale":2,"label":"관"},{"s":"woman","x":10.5,"hood":"#4a4a4a"},{"s":"jesus","x":23.5,"label":"예수님","flip":true}],"bg":"city"}
  },
  {
    week: 161, file: "lessons/161-perfume-woman.html", title: "한 여자가 예수님께 향유를 붓다", ref: "누가복음 7:36-50, 마태복음 12:22-31",
    cover: {"sky":"dusk","map":["T{32}",".{3}P{2}.{22}P{2}.{3}",".{3}P{2}.{22}P{2}.{3}",".{3}P{2}.{22}P{2}.{3}","m{32}","S{32}"],"objects":[{"s":"priest","x":20,"label":"시몬","shirt":"#6a6a4a","flip":true},{"s":"jesus","x":15,"label":"예수님"},{"s":"woman","x":11,"label":"한 여자","hood":"#9a5a6a"},{"s":"jar","x":13,"scale":2,"label":"향유 옥합"},{"s":"elder","x":23,"shirt":"#8a8a7a","flip":true},{"s":"torch","x":8,"scale":2}],"bg":"city"}
  },
  {
    week: 162, file: "lessons/162-sower.html", title: "예수님께서 네 종류의 땅을 비유로 가르치시다", ref: "마태복음 13:1-23, 마가복음 4:2-20",
    cover: {"sky":"glory","map":["D{8}S{8}G{16}","D{32}","S{32}"],"objects":[{"s":"tuft","x":18},{"s":"tuft","x":20.5},{"s":"tuft","x":23},{"s":"tuft","x":10,"pal":{"g":"#b8a04a","d":"#8a7020"}},{"s":"tuft","x":13,"pal":{"g":"#b8a04a","d":"#8a7020"}},{"s":"tuft","x":17,"scale":2,"pal":{"g":"#3a5a2a","d":"#2a3a1a"}},{"s":"tuft","x":21.5,"scale":2,"pal":{"g":"#3a5a2a","d":"#2a3a1a"}},{"s":"sheaf","x":26,"scale":2},{"s":"sheaf","x":29,"scale":2}],"bg":"hills"}
  },
  {
    week: 163, file: "lessons/163-calms-storm.html", title: "예수님께서 폭풍을 잔잔하게 하시다", ref: "마가복음 4:35-5:20, 누가복음 8:22-40",
    cover: {"sky":"day","map":["W{32}","W{32}","W{32}","W{32}"],"objects":[{"s":"ship","x":14,"y":13,"scale":3,"label":"배"},{"s":"man","x":12,"y":11,"label":"제자들","shirt":"#6a5a4a","beard":true},{"s":"man","x":16,"y":11,"shirt":"#7a8a6a","flip":true},{"s":"jesus","x":18.5,"y":12,"label":"예수님","flip":true}],"bg":"sea"}
  },
  {
    week: 164, file: "lessons/164-jairus-daughter.html", title: "예수님께서 야이로의 딸을 살리시다", ref: "마가복음 5:21-43, 누가복음 8:41-56",
    cover: {"sky":"glory","map":["T{32}",".{5}P{2}.{18}P{2}.{5}",".{5}P{2}.{18}P{2}.{5}",".{5}P{2}.{18}P{2}.{5}","P{32}","S{32}"],"objects":[{"s":"jesus","x":10,"label":"예수님"},{"s":"priest","x":13,"label":"야이로","shirt":"#5a5a7a"},{"s":"girl","x":17,"label":"소녀","shirt":"#e8e0d0"},{"s":"woman","x":20,"label":"어머니","hood":"#5a5a5a","flip":true},{"s":"torch","x":23,"scale":2}],"bg":"city"}
  },
  {
    week: 165, file: "lessons/165-twelve-sent.html", title: "예수님께서 두 맹인을 고치시고 제자들을 보내시다", ref: "마태복음 9:27-10:22, 누가복음 9:1-6",
    cover: {"sky":"day","map":["G{10}D{12}G{10}","D{32}","D{32}","S{32}"],"objects":[{"s":"jesus","x":15.5,"label":"예수님"},{"s":"man","x":5,"label":"베드로","shirt":"#6a5a4a","beard":true},{"s":"man","x":8,"shirt":"#7a8a6a"},{"s":"man","x":11,"shirt":"#5a4a7a"},{"s":"man","x":20,"shirt":"#8a7a5a","flip":true},{"s":"man","x":23,"shirt":"#5a6a8a","flip":true},{"s":"man","x":26,"shirt":"#8a6a4a","flip":true}],"bg":"hills"}
  },
  {
    week: 166, file: "lessons/166-john-beheaded.html", title: "세례 요한이 죽임을 당하다", ref: "마태복음 14:1-13, 마가복음 6:14-32",
    cover: {"sky":"night","map":["T{32}",".{4}m{2}.{20}m{2}.{4}",".{4}m{2}.{20}m{2}.{4}",".{4}m{2}.{20}m{2}.{4}","X{32}","S{32}"],"objects":[{"s":"king","x":11,"label":"헤롯","shirt":"#6a2a4a"},{"s":"woman","x":17,"label":"헤로디아","hood":"#8a2a4a","flip":true},{"s":"torch","x":22,"scale":2}],"bg":"city"}
  },
  {
    week: 167, file: "lessons/167-feeding-5000.html", title: "예수님께서 오천 명을 먹이시고 물 위를 걸으시다", ref: "마태복음 14:13-33, 요한복음 6:1-21",
    cover: {"sky":"night","map":["W{32}","W{32}","W{32}","W{32}"],"objects":[{"s":"ship","x":6,"y":13,"scale":3,"label":"배"},{"s":"man","x":8,"y":11,"shirt":"#7a8a6a","flip":true},{"s":"jesus","x":24,"y":14,"label":"예수님","flip":true},{"s":"man","x":15,"y":14,"label":"베드로","shirt":"#6a5a4a","beard":true}],"bg":"sea"}
  },
  {
    week: 168, file: "lessons/168-canaanite-woman.html", title: "예수님께서 이방 여자의 믿음을 칭찬하시다", ref: "마태복음 15:21-31, 마가복음 7:24-37",
    cover: {"sky":"dusk","map":[".{3}C{4}.{18}C{4}.{3}",".{3}C{4}.{18}C{4}.{3}","G{32}","D{32}","S{32}"],"objects":[{"s":"jesus","x":18,"label":"예수님","flip":true},{"s":"man","x":21,"label":"제자들","shirt":"#6a5a4a","beard":true,"flip":true},{"s":"man","x":23.5,"shirt":"#7a8a6a","flip":true},{"s":"woman","x":10,"label":"가나안 여자","hood":"#8a4a6a"},{"s":"bread","x":13,"label":"빵 부스러기"}],"bg":"city"}
  },
  {
    week: 169, file: "lessons/169-feeding-4000.html", title: "예수님께서 사천 명을 먹이시고 맹인을 고치시다", ref: "마태복음 15:32-39, 마가복음 8장",
    cover: {"sky":"glory","map":["P{3}.{2}P{3}.{24}","P{3}.{2}P{3}.{24}","G{32}","D{32}","S{32}"],"objects":[{"s":"jesus","x":21,"label":"예수님"},{"s":"man","x":24,"label":"눈먼 사람","shirt":"#8a8478","flip":true},{"s":"man","x":10,"shirt":"#8a7a5a"},{"s":"woman","x":12.5,"hood":"#7a8a6a"}],"bg":"hills"}
  },
  {
    week: 170, file: "lessons/170-transfiguration.html", title: "예수님께서 산 위에서 변화되시다", ref: "누가복음 9:28-42, 마가복음 9:1-29",
    cover: {"sky":"glory","map":[".{24}S{8}",".{18}S{14}",".{12}S{20}",".{6}S{26}","G{32}","D{32}"],"objects":[{"s":"jesus","x":27.5,"label":"예수님","halo":true},{"s":"man","x":19,"label":"베드로","shirt":"#6a5a4a","beard":true},{"s":"man","x":21,"label":"야고보","shirt":"#7a6a4a"},{"s":"man","x":14,"label":"요한","shirt":"#5a6a7a"}],"bg":"mountains"}
  },
  {
    week: 171, file: "lessons/171-ten-lepers.html", title: "예수님께서 성전세를 내시고 나병 환자 열 명을 고치시다", ref: "마태복음 17:24-27, 누가복음 17:11-19",
    cover: {"sky":"day","map":["G{18}s{6}W{8}","D{18}s{6}W{8}","D{24}W{8}","S{32}"],"objects":[{"s":"man","x":21,"label":"베드로","shirt":"#6a5a4a","beard":true},{"s":"fish","x":23,"label":"물고기","scale":2},{"s":"coin","x":23.2,"y":11.5,"label":"돈 하나"},{"s":"reed","x":17}],"bg":"sea"}
  },
  {
    week: 172, file: "lessons/172-mary-martha-blind.html", title: "예수님께서 베다니를 찾으시고 맹인을 고치시다", ref: "누가복음 10:38-42, 요한복음 9장",
    cover: {"sky":"day","map":[".{2}T{28}.{2}",".{2}C.{26}C.{2}",".{2}C.{26}C.{2}","P{32}","D{32}"],"objects":[{"s":"jesus","x":10,"label":"예수님"},{"s":"woman","x":13,"label":"마리아","hood":"#5a6a9a","flip":true},{"s":"woman","x":23,"label":"마르다","hood":"#9a6a3a"},{"s":"fire","x":26},{"s":"jar","x":20.5},{"s":"bread","x":18}],"bg":"hills"}
  },
  {
    week: 173, file: "lessons/173-lazarus.html", title: "예수님께서 죽은 나사로를 살리시다", ref: "요한복음 11장",
    cover: {"sky":"dusk","map":[".{22}S{10}",".{22}S{10}",".{22}K{2}S{8}",".{22}K{2}S{8}","G{32}","D{32}"],"objects":[{"s":"jesus","x":14,"label":"예수님"},{"s":"woman","x":11.5,"label":"마르다","hood":"#9a6a3a"},{"s":"woman","x":9,"label":"마리아","hood":"#5a6a9a"},{"s":"man","x":5,"label":"유대인들","shirt":"#7a6a5a","beard":true},{"s":"woman","x":3,"hood":"#6a6a7a"},{"s":"stone","x":18.5,"scale":2}],"bg":"hills"}
  },
  {
    week: 174, file: "lessons/174-zacchaeus.html", title: "예수님께서 아이들을 축복하시고 삭개오를 만나시다", ref: "마가복음 10:13-31, 누가복음 19:1-10",
    cover: {"sky":"day","map":[".{18}L{5}.{9}",".{18}L{5}.{9}",".{20}T.{11}",".{20}T.{11}",".{20}T.{11}","G{32}","D{32}","S{32}"],"objects":[{"s":"boy","x":20.5,"y":11,"label":"삭개오","shirt":"#7a3a8a","sash":"#d9b24a","beard":true},{"s":"jesus","x":18,"label":"예수님"},{"s":"man","x":14,"label":"무리","shirt":"#8a7a5a"},{"s":"woman","x":12.5,"hood":"#7a8a6a"},{"s":"man","x":11,"shirt":"#6a5a4a"}],"bg":"desert"}
  },
  {
    week: 175, file: "lessons/175-triumphal-entry.html", title: "예수님께서 예루살렘에 들어가시다", ref: "마가복음 11:1-11, 요한복음 12:1-19",
    cover: {"sky":"glory","map":[".{29}C{3}",".{29}C{3}",".{29}C{3}","G{4}r{2}G{3}b{2}G{3}p{2}G{3}r{2}G{3}w{2}G{3}S{3}","D{32}"],"objects":[{"s":"donkey","x":10,"label":"어린 수나귀"},{"s":"jesus","x":10,"y":15.4,"label":"예수님"},{"s":"man","x":7,"label":"제자들","shirt":"#6a5a4a","beard":true},{"s":"man","x":5,"shirt":"#7a8a6a"},{"s":"man","x":16,"label":"무리","shirt":"#8a7a5a","flip":true},{"s":"reed","x":17,"label":"종려나무 가지"},{"s":"woman","x":19,"hood":"#7a8a6a","flip":true},{"s":"boy","x":21,"shirt":"#9a6a4a","flip":true},{"s":"reed","x":22},{"s":"man","x":24,"shirt":"#6a5a4a","flip":true}],"bg":"city"}
  },
  {
    week: 176, file: "lessons/176-judas-betrays.html", title: "예수님께서 유다에게 배신당하시다", ref: "마태복음 26:17-35, 요한복음 13:1-30",
    cover: {"sky":"night","map":[".{2}T{28}.{2}",".{2}C.{26}C.{2}",".{2}C.{26}C.{2}","P{32}","C{32}"],"objects":[{"s":"man","x":11,"label":"베드로","shirt":"#6a5a4a","beard":true},{"s":"man","x":13,"label":"요한","shirt":"#5a6a7a"},{"s":"man","x":18,"label":"유다","shirt":"#5a4a3a","beard":true,"flip":true},{"s":"man","x":20.5,"label":"제자들","shirt":"#7a6a4a","flip":true},{"s":"man","x":8,"shirt":"#8a7a5a"},{"s":"bread","x":16.5},{"s":"torch","x":5},{"s":"torch","x":26},{"s":"jesus","x":10,"label":"예수님","sash":"#f0ece0"},{"s":"jar","x":9,"label":"대야"}],"bg":"city"}
  },
  {
    week: 177, file: "lessons/177-gethsemane.html", title: "예수님께서 겟세마네에서 기도하시다", ref: "마가복음 14:22-41, 누가복음 22:5-46",
    cover: {"sky":"night","map":[".{3}L{3}.{8}L{3}.{10}L{3}.{2}",".{4}T.{10}T.{12}T.{3}","G{32}","D{32}","S{32}"],"objects":[{"s":"man","x":10,"label":"베드로","shirt":"#6a5a4a","beard":true},{"s":"man","x":8,"label":"야고보","shirt":"#7a6a4a"},{"s":"man","x":12,"label":"요한","shirt":"#5a6a7a"},{"s":"stone","x":23,"scale":2},{"s":"jesus","x":21.5,"label":"예수님"}],"bg":"mountains"}
  },
  {
    week: 178, file: "lessons/178-arrested.html", title: "예수님께서 사로잡히시다", ref: "누가복음 22:47-54, 요한복음 18:1-14",
    cover: {"sky":"night","map":[".{3}L{3}.{8}L{3}.{10}L{3}.{2}",".{4}T.{10}T.{12}T.{3}","G{32}","D{32}","S{32}"],"objects":[{"s":"jesus","x":13,"label":"예수님"},{"s":"man","x":10,"label":"베드로","shirt":"#6a5a4a","beard":true},{"s":"man","x":8,"label":"제자들","shirt":"#5a6a7a"},{"s":"man","x":6,"label":"제자들","shirt":"#7a6a4a"},{"s":"soldier","x":21,"label":"군대","flip":true},{"s":"torch","x":22.5,"label":"횃불"},{"s":"soldier","x":24,"label":"군대","flip":true},{"s":"priest","x":26.5,"label":"성전 경비대","flip":true},{"s":"soldier","x":28.5,"label":"군대","flip":true},{"s":"torch","x":30,"label":"횃불"},{"s":"man","x":15,"label":"유다","shirt":"#5a4a3a","beard":true,"flip":true}],"bg":"mountains"}
  },
  {
    week: 179, file: "lessons/179-trials.html", title: "예수님께서 재판을 받으시다", ref: "마태복음 26:57-27:30, 요한복음 18:28-19:12",
    cover: {"sky":"day","map":[".{3}m.{5}m.{12}m.{5}m.{3}",".{3}m.{5}m.{12}m.{5}m.{3}",".{3}m.{5}m.{12}m.{5}m.{3}","m{32}","S{32}"],"objects":[{"s":"man","x":17.5,"label":"빌라도","shirt":"#e8e4d8","sash":"#8a2a2a","flip":true},{"s":"soldier","x":11,"label":"로마 군인"},{"s":"soldier","x":20.5,"label":"로마 군인","flip":true},{"s":"jesus","x":14,"label":"예수님","shirt":"#6a2a6a"}],"bg":"city"}
  },
  {
    week: 180, file: "lessons/180-crucified.html", title: "예수님께서 십자가에 달리시다", ref: "마가복음 15:21-32, 누가복음 23:26-38",
    cover: {"sky":"dusk","map":[".{12}S{8}.{12}",".{8}S{16}.{8}","G{4}S{24}G{4}","D{32}","S{32}"],"objects":[{"s":"cross","x":13,"scale":3,"label":"십자가"},{"s":"cross","x":16,"scale":3,"label":"십자가"},{"s":"cross","x":19,"scale":3,"label":"십자가"},{"s":"soldier","x":7,"label":"로마 군인"},{"s":"soldier","x":24,"label":"로마 군인","flip":true},{"s":"jesus","x":16,"y":12,"label":"예수님","shirt":"#b8a898"},{"s":"man","x":13,"y":12,"label":"범죄자들","shirt":"#6a5a4a","beard":true},{"s":"man","x":19,"y":12,"label":"범죄자들","shirt":"#5a4a3a","beard":true}],"bg":"city"}
  },
  {
    week: 181, file: "lessons/181-jesus-dies.html", title: "예수님께서 죽으시다", ref: "누가복음 23:39-56, 요한복음 19:25-42",
    cover: {"sky":"dark","map":[".{12}S{8}.{12}",".{8}S{16}.{8}","G{4}S{24}G{4}","D{32}","S{32}"],"objects":[{"s":"cross","x":13,"scale":3,"label":"십자가"},{"s":"cross","x":16,"scale":3,"label":"십자가"},{"s":"cross","x":19,"scale":3,"label":"십자가"},{"s":"jesus","x":16,"y":12,"label":"예수님","shirt":"#b8a898"},{"s":"man","x":13,"y":12,"label":"욕하는 범죄자","shirt":"#5a4a3a","beard":true},{"s":"man","x":19,"y":12,"label":"회개한 범죄자","shirt":"#6a5a4a","beard":true},{"s":"soldier","x":7,"label":"로마 군인"},{"s":"woman","x":22.5,"label":"마리아","hood":"#4a5a8a","flip":true},{"s":"man","x":24.5,"label":"요한","shirt":"#5a6a7a","flip":true},{"s":"woman","x":27,"label":"막달라 마리아","hood":"#8a4a5a","flip":true}],"bg":"city"}
  },
  {
    week: 182, file: "lessons/182-resurrection.html", title: "예수님께서 부활하시다", ref: "마태복음 28:1-15, 요한복음 20:1-10",
    cover: {"sky":"dawn","map":[".{22}S{10}",".{3}L{3}.{16}S{10}",".{4}T.{17}K{2}S{8}",".{4}T.{17}K{2}S{8}","G{32}","D{32}"],"objects":[{"s":"stone","x":19.5,"scale":2,"label":"무덤 돌"},{"s":"angel","x":19.5,"y":14.5,"label":"천사"},{"s":"woman","x":11,"label":"막달라 마리아","hood":"#8a4a5a"},{"s":"woman","x":9.5,"label":"다른 마리아","hood":"#6a6a7a"},{"s":"fleece","x":22.5,"y":16,"label":"아마포","pal":{"w":"#f0ece0"}}],"bg":"hills"}
  },
  {
    week: 183, file: "lessons/183-first-appearances.html", title: "예수님께서 부활하신 뒤 처음 나타나시다", ref: "요한복음 20:11-18, 누가복음 24:13-35",
    cover: {"sky":"glory","map":[".{22}S{10}",".{3}L{3}.{16}S{10}",".{4}T.{17}K{2}S{8}",".{4}T.{17}K{2}S{8}","G{32}","D{32}"],"objects":[{"s":"stone","x":19.5,"scale":2,"label":"무덤 돌"},{"s":"woman","x":16,"label":"마리아","hood":"#8a4a5a","flip":true},{"s":"jesus","x":12,"label":"예수님"}],"bg":"hills"}
  },
  {
    week: 184, file: "lessons/184-appears-to-disciples.html", title: "예수님께서 제자들에게 나타나시다", ref: "누가복음 24:36-53, 요한복음 20:24-29, 21장",
    cover: {"sky":"glory","map":[".{2}T{28}.{2}",".{2}C.{26}C.{2}",".{2}C.{26}C.{2}","P{32}","C{32}"],"objects":[{"s":"man","x":16,"label":"도마","shirt":"#4a6a5a","flip":true},{"s":"man","x":10,"label":"베드로","shirt":"#6a5a4a","beard":true},{"s":"man","x":12,"label":"제자들","shirt":"#5a6a7a"},{"s":"man","x":20.5,"label":"제자들","shirt":"#8a7a5a","flip":true},{"s":"torch","x":5},{"s":"torch","x":26},{"s":"jesus","x":13.5,"label":"예수님"}],"bg":"city"}
  },
  {
    week: 185, file: "lessons/185-ascension-pentecost.html", title: "예수님께서 하늘로 오르시고 성령께서 오시다", ref: "사도행전 1-2장",
    cover: {"sky":"glory","map":[".{2}T{28}.{2}",".{2}C.{26}C.{2}",".{2}C.{26}C.{2}","P{32}","C{32}"],"objects":[{"s":"man","x":9,"label":"베드로","shirt":"#6a5a4a","beard":true},{"s":"man","x":11.5,"label":"제자들","shirt":"#5a6a7a"},{"s":"woman","x":14,"label":"마리아","hood":"#4a5a8a"},{"s":"woman","x":16.5,"label":"여자들","hood":"#8a4a5a"},{"s":"man","x":19,"label":"제자들","shirt":"#4a6a5a","flip":true},{"s":"man","x":21.5,"label":"제자들","shirt":"#7a6a4a","flip":true},{"s":"man","x":24,"label":"제자들","shirt":"#8a7a5a","flip":true},{"s":"fire","x":9,"y":13.2,"label":"불의 혀"},{"s":"fire","x":11.5,"y":13.2,"label":"불의 혀"},{"s":"fire","x":14,"y":13.2,"label":"불의 혀"},{"s":"fire","x":16.5,"y":13.2,"label":"불의 혀"},{"s":"fire","x":19,"y":13.2,"label":"불의 혀"},{"s":"fire","x":21.5,"y":13.2,"label":"불의 혀"},{"s":"fire","x":24,"y":13.2,"label":"불의 혀"}],"bg":"city"}
  },
  {
    week: 186, file: "lessons/186-peter-john-heal.html", title: "베드로와 요한이 걷지 못하는 사람을 일으키다", ref: "사도행전 3-4장",
    cover: {"sky":"glory","map":[".{12}m.{6}m.{12}",".{12}m.{6}m.{12}",".{12}m.{6}m.{12}","m{32}","S{32}"],"objects":[{"s":"man","x":10,"label":"베드로","shirt":"#6a5a4a","beard":true},{"s":"man","x":8,"label":"요한","shirt":"#5a6a7a"},{"s":"man","x":15.5,"label":"걷지 못하는 사람","shirt":"#8a8478","flip":true},{"s":"jar","x":17},{"s":"man","x":23,"shirt":"#8a7a5a"},{"s":"woman","x":26,"hood":"#7a6a6a"}],"bg":"city"}
  },
  {
    week: 187, file: "lessons/187-ananias-sapphira.html", title: "아나니아와 삽비라가 죄를 짓다", ref: "사도행전 5:1-11",
    cover: {"sky":"dusk","map":[".{2}T{28}.{2}",".{2}C.{26}C.{2}",".{2}C.{26}C.{2}","P{32}","D{32}"],"objects":[{"s":"man","x":13,"label":"아나니아","shirt":"#7a5a3a","sash":"#c8a040","beard":true},{"s":"woman","x":16,"label":"삽비라","hood":"#7a3a5a","flip":true},{"s":"coin","x":10.5,"label":"가져갈 돈"},{"s":"jar","x":22},{"s":"coin","x":23.2,"label":"감춘 돈"},{"s":"torch","x":6}],"bg":"city"}
  },
  {
    week: 188, file: "lessons/188-stephen.html", title: "스데반이 순교하다", ref: "사도행전 5-7장",
    cover: {"sky":"glory","map":[".{2}m.{26}m.{2}",".{2}m.{26}m.{2}",".{2}m.{26}m.{2}","m{32}","S{32}"],"objects":[{"s":"man","x":12,"label":"스데반","shirt":"#c8b890","sash":"#7a3a3a"},{"s":"priest","x":20,"label":"대제사장","flip":true},{"s":"priest","x":22.5,"label":"공회","flip":true},{"s":"elder","x":25,"label":"공회","flip":true},{"s":"jesus","x":16,"y":9,"label":"예수님","anim":"float"}],"bg":"city"}
  },
  {
    week: 189, file: "lessons/189-philip.html", title: "빌립이 복음을 전하다", ref: "사도행전 8장",
    cover: {"sky":"day","map":[".{24}S{3}.{5}","s{32}","S{32}"],"objects":[{"s":"chariot","x":18,"scale":2,"label":"병거"},{"s":"man","x":18.5,"y":14,"label":"내시","skin":"#7a5238","shirt":"#6a3a7a","sash":"#d9b24a"},{"s":"scroll","x":20,"y":13.5,"label":"이사야의 글"},{"s":"man","x":22.5,"label":"종","skin":"#7a5238","shirt":"#c8b890","flip":true}],"bg":"desert"}
  },
  {
    week: 190, file: "lessons/190-saul-converted.html", title: "하나님께서 사울을 변화시키시다", ref: "사도행전 9:1-31",
    cover: {"sky":"glory","map":[".{27}C{5}",".{27}C{5}","G{27}S{5}","D{32}"],"objects":[{"s":"boy","x":20,"label":"사울","shirt":"#4a4a6a","sash":"#8a2a2a"},{"s":"soldier","x":16,"label":"동행자들"},{"s":"man","x":14,"label":"동행자들","shirt":"#6a5a4a"}],"bg":"desert"}
  },
  {
    week: 191, file: "lessons/191-church-grows.html", title: "교회가 자라고 퍼져 나가다", ref: "사도행전 12장",
    cover: {"sky":"night","map":["C{2}T{28}C{2}","C{2}.{8}g.{9}g.{9}C{2}","C{2}.{8}g.{9}g.{9}C{2}","S{32}","S{32}"],"objects":[{"s":"soldier","x":4.5,"label":"군사들"},{"s":"man","x":6,"label":"베드로","shirt":"#6a5a4a","beard":true},{"s":"soldier","x":7.5,"label":"군사들","flip":true},{"s":"cord","x":6,"y":15,"label":"사슬","pal":{}},{"s":"soldier","x":13,"label":"파수꾼들"},{"s":"soldier","x":23,"label":"파수꾼들"},{"s":"torch","x":15},{"s":"torch","x":25},{"s":"angel","x":8.5,"label":"주의 천사","flip":true}],"bg":"city"}
  },
  {
    week: 192, file: "lessons/192-first-journey.html", title: "바울이 첫 번째 선교 여행을 하다", ref: "사도행전 13-14장",
    cover: {"sky":"day","map":[".{24}m.{2}m.{4}",".{24}m.{2}m.{4}","G{32}","D{32}","S{32}"],"objects":[{"s":"man","x":11,"label":"바울","shirt":"#4a4a6a","sash":"#8a2a2a","beard":true},{"s":"man","x":9,"label":"바나바","shirt":"#3a5a7a","beard":true},{"s":"man","x":15,"label":"걷게 된 사람","shirt":"#8a8478","anim":"jump","flip":true},{"s":"man","x":19,"label":"루스드라 사람들","shirt":"#8a6a3a","flip":true},{"s":"woman","x":21,"label":"루스드라 사람들","hood":"#6a7a8a","flip":true},{"s":"priest","x":25.6,"label":"제우스 제사장","robe":"#e8e0d0","flip":true},{"s":"cow","x":22,"label":"황소","flip":true},{"s":"flower","x":22.5,"y":14.5}],"bg":"hills"}
  },
  {
    week: 193, file: "lessons/193-second-journey.html", title: "바울이 두 번째 선교 여행을 하다", ref: "사도행전 16-18장",
    cover: {"sky":"glory","map":["C{2}T{28}C{2}","C{2}.{28}C{2}","C{2}.{28}C{2}","S{32}","S{32}"],"objects":[{"s":"man","x":13,"label":"바울","shirt":"#4a4a6a","sash":"#8a2a2a","beard":true},{"s":"man","x":15.5,"label":"실라","shirt":"#6a4a3a"},{"s":"man","x":5,"label":"죄수들","shirt":"#6a6a5a"},{"s":"man","x":24,"label":"죄수들","shirt":"#5a5a4a","flip":true},{"s":"soldier","x":27.5,"label":"간수","flip":true},{"s":"torch","x":20}],"bg":"city"}
  },
  {
    week: 194, file: "lessons/194-third-journey.html", title: "바울이 세 번째 선교 여행을 하다", ref: "사도행전 19장",
    cover: {"sky":"dusk","map":[".{20}m.{3}m.{3}m.{3}",".{20}m.{3}m.{3}m.{3}",".{20}m.{3}m.{3}m.{3}","m{32}","S{32}"],"objects":[{"s":"fire","x":13,"scale":2,"label":"불"},{"s":"scroll","x":11.5,"label":"마술책"},{"s":"scroll","x":14.5,"label":"마술책"},{"s":"man","x":9,"label":"믿은 사람들","shirt":"#6a5a7a"},{"s":"woman","x":7,"label":"믿은 사람들","hood":"#7a4a4a"},{"s":"man","x":17,"label":"믿은 사람들","shirt":"#5a6a4a","flip":true}],"bg":"city"}
  },
  {
    week: 195, file: "lessons/195-eutychus.html", title: "바울이 죽은 사람을 살리다", ref: "사도행전 20-22장",
    cover: {"sky":"glory","map":[".{8}B{9}.{15}",".{8}B{4}g{2}B{3}.{15}",".{8}B{9}.{15}",".{8}B{4}g{2}B{3}.{15}",".{8}B{9}.{15}",".{8}B{4}P{2}B{3}.{15}","S{32}","D{32}"],"objects":[{"s":"torch","x":12,"y":13},{"s":"torch","x":13.5,"y":13},{"s":"man","x":22,"label":"누가","shirt":"#5a6a5a"},{"s":"woman","x":5,"hood":"#7a6a5a"},{"s":"boy","x":20,"label":"유두고","shirt":"#7a8a6a"},{"s":"man","x":18,"label":"바울","shirt":"#4a4a6a","sash":"#8a2a2a","beard":true},{"s":"man","x":24,"label":"성도들","shirt":"#6a7a5a","flip":true}],"bg":"city"}
  },
  {
    week: 196, file: "lessons/196-paul-on-trial.html", title: "바울이 재판을 받다", ref: "사도행전 23-26장",
    cover: {"sky":"dusk","map":[".{3}m.{24}m.{3}",".{3}m.{24}m.{3}",".{3}m.{24}m.{3}","m{32}","S{32}"],"objects":[{"s":"man","x":11,"label":"바울","shirt":"#4a4a6a","sash":"#8a2a2a","beard":true},{"s":"cord","x":12.2,"y":15,"label":"사슬"},{"s":"king","x":19,"label":"아그립바","flip":true},{"s":"woman","x":21.5,"label":"버니게","hood":"#8a2a6a","crown":true,"flip":true},{"s":"king","x":24,"label":"베스도","crown":false,"flip":true},{"s":"soldier","x":7.5,"label":"로마 군사들"}],"bg":"city"}
  },
  {
    week: 197, file: "lessons/197-shipwreck.html", title: "바울이 탄 배가 부서지다", ref: "사도행전 27장",
    cover: {"sky":"storm","map":["W{32}","W{32}","W{32}","W{32}"],"objects":[{"s":"ship","x":16,"y":14,"scale":4,"label":"배","anim":"bob"},{"s":"man","x":13,"y":12,"label":"바울","shirt":"#4a4a6a","sash":"#8a2a2a","beard":true,"anim":"bob"},{"s":"man","x":18.5,"y":12,"label":"선원들","shirt":"#3a4a6a","anim":"bob","flip":true}],"bg":"sea"}
  },
  {
    week: 198, file: "lessons/198-rome.html", title: "바울이 로마에서 복음을 전하다", ref: "사도행전 28장",
    cover: {"sky":"glory","map":[".{2}T{28}.{2}",".{2}C.{26}C.{2}",".{2}C.{26}C.{2}","P{32}","D{32}"],"objects":[{"s":"man","x":13,"label":"바울","shirt":"#4a4a6a","sash":"#8a2a2a","beard":true},{"s":"soldier","x":9,"label":"지키는 군사"},{"s":"woman","x":17,"label":"찾아온 사람들","hood":"#8a4a5a","flip":true},{"s":"boy","x":19,"label":"찾아온 사람들","shirt":"#7a8a6a","flip":true},{"s":"man","x":21,"label":"찾아온 사람들","shirt":"#3a4a6a","flip":true},{"s":"scroll","x":24.5,"label":"편지"}],"bg":"city"}
  }
];
