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
  }
];
