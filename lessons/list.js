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
    cover: {"sky":"day","map":[".{20}C..C.{8}",".{20}CWWC.{8}","s{20}CCCCs{8}","s{32}","D{32}","S{32}"],"objects":[{"s":"jar","x":17},{"s":"man","x":15,"label":"모세","shirt":"#c9b48a"},{"s":"girl","x":26,"label":"미디안의 딸","shirt":"#c98a6a","flip":true},{"s":"girl","x":28,"shirt":"#9ab8c9","flip":true},{"s":"sheep","x":30,"anim":"bob"}],"bg":"desert"}
  }
];
