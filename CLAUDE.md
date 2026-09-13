# 픽셀 성경 (중등부 주간 말씀 시각화)

마인크래프트풍 도트 그래픽으로 매주 성경 본문을 보여주는 HTML 레슨 모음.
엔진(`engine/`)은 고정, **매주 새 레슨 파일 하나만** 추가한다.

## 매주 할 일 (새 주제 요청을 받으면)
0. `node verse.js <본문 범위>` 로 이번 주 본문을 킹흠정역 마제스티로 읽기
1. `lessons/01-creation.html`을 복사해 `lessons/NN-영문슬러그.html` 생성 (NN = 주차 두 자리)
2. `PB.start({...})` 안의 데이터만 새 본문에 맞게 작성
3. `lessons/list.js`에 항목 추가 (cover = 대표 장면 하나)
4. `node serve.js` 후 브라우저로 확인 (`...html?x#5` 로 5번째 장면 바로 보기)
5. `node build.js` → `dist/`에 단일 파일 HTML 생성 (학생 배포용)

## 내용 작성 원칙
- 대상: 중학생. 한 줄 대사는 짧게(40자 안팎), 장면당 2~3줄.
- 마인크래프트 비유를 장면마다 하나 정도 (억지스럽지 않게). 비유가 본문 의미를 가볍게 만들면 빼기.
- **성경 역본: 킹흠정역 마제스티** (`C:\workspace\bible\data\킹흠정역 마제스티.bdb`, SQLite).
  verse / memory 본문은 기억으로 쓰지 말고 반드시 `node verse.js 창1:1 창1:27-28 요3:16` 출력을 그대로 붙여 넣는다.
  대사·캡션·퀴즈에서 성경 표현을 빌릴 때도 이 역본 표현을 따른다 (예: 개역개정 "태초에/심히 좋았더라" ✕ → "처음에/매우 좋았더라").
- 인용은 짧게 핵심 구절만. 장(章) 전체 인용 금지.
- 하나님을 캐릭터(스프라이트)로 그리지 않는다. 하나님의 말씀은 `{ who: '하나님', text }` 로 대사만.
  예수님은 `jesus` 프리셋 사용 가능.
- 구성: 도입(빈 월드/질문) → 본문 장면 6~10개 → 핵심 말씀(verse) → 퀴즈 2개 → 나눔 질문 2개.
- `**강조**` 는 노란색으로 표시됨. 한 대사에 1개 이하.

## 레슨 데이터 형식
```js
PB.start({
  week: 2, title: '제목', ref: '창세기 3장', splash: '노란 문구!', intro: '타이틀 화면 대사',
  memory: { text: '암송 구절', ref: '출처' },          // 마지막 화면
  achievement: { title: '업적 이름', icon: 'heart' },  // icon = 스프라이트 이름
  scenes: [ {
    caption: 'DAY 1 · 빛',       // 좌상단 큰 노란 글씨 (선택)
    sky: 'day', bg: 'hills', map: [...], objects: [...], fx: 'light',
    keep: true,                   // 이전 장면 월드를 이어받음 (sky/map/objects). add/remove 로 변경
    add: [...], remove: ['sun', '아담'],   // 스프라이트 이름 또는 label
    lines: ['내레이션', { who: '모세', text: '대사' }],   // who가 objects의 label과 같으면 얼굴 아이콘 표시
    verse: { text: '...', ref: '...' },   // 양피지 말씀 카드
    quiz: { q: '...', options: ['A','B','C','D'], answer: 1, explain: '...' }
  } ]
});
```

### 하늘 `sky`
day, dawn, dusk, night(별), dark(공허), storm, glory(금빛), cave, fire

### 먼 배경 `bg`
none, hills, mountains(시내산 등), desert, city(예루살렘 등), sea

### 효과 `fx` (문자열 또는 배열)
light(빛 번짐), rain, snow, sparkle, rainbow, flash(장면 시작 번쩍), lightning(주기적 번개), dark(어둡게)

### 맵 `map` — 가로 32칸 x 세로 최대 18칸, **아래쪽 정렬**
- 한 글자 = 블록 하나. `G{32}` 처럼 반복 표기 가능. 짧으면 오른쪽을 공기로 채움.
- 블록: `.`공기 G잔디 D흙 S돌 C돌벽돌 B벽돌 m대리석 s모래 W물 A용암 L나뭇잎 T통나무 P나무판자
  g유리 X금 O흑요석 N눈 w흰양털 r빨간양털 b파란양털 p보라양털 y건초 K검정 #기반암 c구름
- 나무 = T 세로 3칸 + 위에 L 덩어리. 방주/성전/제단은 P, C, m, X 로 쌓기.
- 캐릭터는 x열에서 가장 위의 단단한 블록 위에 자동으로 섬 (L, T, g, c 는 통과).

### 오브젝트 `objects` / `add`
`['sheep', 10]` 또는 `{ s: 'sheep', x: 10, y: 14, anim: 'walk', label: '이름', flip: true, scale: 2 }`
- x: 열(0~31, 소수 가능), y: 발 위치 행(생략 시 땅 위). 공중/물속은 y 지정.
- anim: bob(살짝 들썩), walk(좌우 걷기, range=칸수), swim, fly(화면 가로질러 날기), float(둥실), jump
- 사람 프리셋: boy girl man woman elder shepherd king priest soldier giant jesus angel
  옵션으로 덮어쓰기: skin hair shirt pants sash beard long robe hood crown halo wings staff
  예) `{ s: 'shepherd', x: 8, label: '다윗', beard: false, hair: '#8a4b1c' }`
- 동물/사물: sheep cow lion snake fish bird dove sun moon star heart cross fire tablets
  scroll bread fruit flower flower2 tuft torch stone jar coin
  - `pal: { 글자: '#색' }` 으로 색 변경 (예: 물고기 색)

## 새 스프라이트/블록 추가
- 스프라이트: `engine/sprites.js` 의 `SPR` 에 `{ pal, px }` (또는 `frames`) 추가. 오른쪽을 바라보게 그림.
- 블록: `engine/world.js` 의 `TILES` 에 `f(x,y,r,frame)` 추가.
- 추가하면 이 문서 목록도 갱신. 기존 레슨이 깨지지 않게 이름 변경 금지.

## 조작 (수업 중)
→ / Space / Enter / 클릭 / 프레젠터 PageDown = 다음, ← / PageUp = 이전, F = 전체화면
