/* 기본 팩 — 동물·자연·사물 */
(function (PB) {
  PB.addSprites({
      sheep: { pal: { w: '#f2f2f2', v: '#d6d6d6', f: '#d8c2a6', e: '#222', l: '#b8a58e' }, px: [
        '...wvwwww...', '.wwwwwwwwwff', 'wwvwwwwwwfef', 'wwwwwwvwwfff', 'wwwwwwwwww..', '.wwvwwwwww..', '.ll....ll...', '.ll....ll...'] },
      cow: { pal: { w: '#eeeeee', k: '#3a2a22', p: '#e8a0a0', e: '#111', h: '#cfc7b8' }, px: [
        'h.........h.', 'kkwwkkkkwkkk', 'kwwkkkkwwkek', 'kkkkwwkkkkpp', 'kwwkkkkwwkpp', 'kkkkkkkkkk..', '.kk....kk...', '.kk....kk...'] },
      donkey: { pal: { g: '#9a9088', d: '#6a625c', e: '#222', m: '#d8d2cc' }, px: [
      'g.........g.', 'ggddggggdggg', 'gddggggddgeg', 'ggggddggggmm', 'gddggggddgmm', 'gggggggggg..', '.dd....dd...', '.dd....dd...'] },
    lion: { pal: { m: '#8a4b1c', y: '#d9a23c', e: '#222', n: '#5a3212' }, px: [
        '........mmm.', '.......mmyym', 'y......mmyey', 'yyyyyyymmyyn', 'yyyyyyyymyy.', 'yyyyyyyyy...', '.yy....yy...', '.yy....yy...'] },
      snake: { pal: { g: '#4f9e2c', d: '#2f6a18', e: '#ff3', t: '#d33' }, px: [
        '........ggg.', '.......ggegt', 'gdg...gdg...', '.gdgggdg....', '..ggg.......'] },
      fish: { pal: { o: '#f08a24', y: '#ffc04a', e: '#111' }, px: [
        '...ooo..', 'o.oyyoeo', 'oooyyooo', 'o..ooo..'] },
      bird: { pal: { b: '#3b3b46', o: '#f0a020' }, frames: [
        ['b.....b', 'bb...bb', '.bbobb.', '..bbb..'],
        ['.......', '..bob..', '.bbbbb.', 'b.....b']] },
      dove: { pal: { b: '#ffffff', o: '#f0a020' }, frames: [
        ['b.....b', 'bb...bb', '.bbobb.', '..bbb..'],
        ['.......', '..bob..', '.bbbbb.', 'b.....b']] },
      sun: { pal: { y: '#ffe25a', w: '#fff7c2', o: '#f5b82e' }, px: [
        'oooooooooooo', 'oyyyyyyyyyyo', 'oyyyyyyyyyyo', 'oyyywwwwyyyo', 'oyywwwwwwyyo', 'oyywwwwwwyyo', 'oyywwwwwwyyo', 'oyywwwwwwyyo', 'oyyywwwwyyyo', 'oyyyyyyyyyyo', 'oyyyyyyyyyyo', 'oooooooooooo'] },
      moon: { pal: { m: '#e8ecf5', d: '#b9c0d0' }, px: [
        'mmmmmmmmmm', 'mmmdmmmmmm', 'mmddmmmmmm', 'mmmmmmmddm', 'mmmmmmmddm', 'mdmmmmmmmm', 'mmmmmdmmmm', 'mmmmddmmmm', 'mmmmmmmmmm', 'mmmmmmmmmm'] },
      star: { pal: { y: '#fff6a0', w: '#ffffff' }, px: ['..y..', '..y..', 'yywyy', '..y..', '..y..'] },
      heart: { pal: { r: '#e53b3b', p: '#ff8a8a', d: '#a61f1f' }, px: [
        '.rr.rr.', 'rpprrrr', 'rprrrrr', '.rrrrd.', '..rrd..', '...d...'] },
      cross: { pal: { w: '#8a5a2e', d: '#5e3b1b' }, px: [
        '..ww...', '..wd...', 'wwwwwww', 'dddwddd', '..wd...', '..wd...', '..wd...', '..wd...', '..wd...', '..wd...', '..wd...'] },
      fire: { pal: { r: '#e0401a', o: '#f28a1e', y: '#ffd84a' }, frames: [
        ['..r...', '.rr.r.', '.ror.r', 'rooorr', 'royyor', 'royyor', '.rooo.', '..rr..'],
        ['...r..', '.r.rr.', 'r.ror.', 'rroooo', 'royyor', 'ryyyor', '.rooo.', '..rr..']] },
      tablets: { pal: { s: '#a9a9a9', d: '#6f6f6f', l: '#555' }, px: [
        '.sss..sss.', 'sssss.ssss', 'slll..slls', 'sssss.ssss', 'sllls.slls', 'sssss.ssss', 'sllls.slls', 'sssss.ssss', 'ddddd.dddd'] },
      scroll: { pal: { p: '#f1e2b8', d: '#c9a96a', b: '#8a5a2e', l: '#9a8a6a' }, px: [
        'bb......bb', 'bpppppppbb', '.plllllp..', '.pppppppp.', '.plllllp..', 'bpppppppbb', 'bb......bb'] },
      bread: { pal: { b: '#c98a3e', l: '#e6b264', d: '#8e5a22' }, px: ['..bbbb..', '.blllbb.', 'bbbbbbbb', '.dddddd.'] },
      fruit: { pal: { r: '#d8262a', l: '#ff6a6a', g: '#3b8f2a', b: '#6b4a2a' }, px: ['..b..', '.gb..', 'rrlrr', 'rrrlr', 'rrrrr', '.rrr.'] },
      flower: { pal: { r: '#e8433b', y: '#ffd84a', g: '#3b8f2a' }, px: ['.r.', 'ryr', '.r.', '.g.', 'gg.'] },
      flower2: { pal: { r: '#ffd84a', y: '#f28a1e', g: '#3b8f2a' }, px: ['.r.', 'ryr', '.r.', '.g.', '.gg'] },
      tuft: { pal: { g: '#4f9530', l: '#6bb847' }, px: ['g.l.g', '.glg.', 'gglgg'] },
      torch: { pal: { f: '#ffd84a', o: '#f28a1e', w: '#6b4a2a' }, frames: [['.f.', 'fof', '.w.', '.w.', '.w.'], ['f..', 'of.', '.w.', '.w.', '.w.']] },
      stone: { pal: { s: '#9a9a9a', d: '#6f6f6f', l: '#bdbdbd' }, px: ['.lss.', 'lsssd', 'ssssd', '.ddd.'] },
      jar: { pal: { c: '#b86a3c', d: '#8a4a26', l: '#d88a5c' }, px: ['.cc.', 'cddc', 'clcc', 'clcc', '.cc.'] },
      coin: { pal: { y: '#ffd84a', o: '#c8961a' }, px: ['.yy.', 'yooy', 'yooy', '.yy.'] },
      basket: { pal: { r: '#d9b26a', d: '#a8813f', w: '#f5f0e4', s: '#c99066', e: '#1b1b2b' }, px: [
        '....sss.....', '...seses....', '...wwwww....', 'rrrrrrrrrrrr', '.rdrrdrrdrr.', '.rrddrrddrr.', '..dddddddd..'] },
      reed: { pal: { g: '#5aa03a', d: '#37701f', b: '#8a5a2e' }, px: [
        '..b..', '..b..', '..b..', 'g.b.g', 'gdbdg', 'gdbdg', '.gbg.', '.dbd.', '..d..'] }
    });
})(window.PB);
