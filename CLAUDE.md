# 픽셀 성경 (중등부 주간 말씀 시각화)

마인크래프트풍 도트 그래픽으로 매주 성경 본문을 보여주는 HTML 레슨 모음.
엔진(`engine/`)은 고정, **매주 새 레슨 파일 하나만** 추가한다.

## 전체 목차 (구약 143강 + 신약 55강 = 198강)
- `lessons/curriculum.js` = 198강 전체 목차(제목·본문). 배열 순서 = 강 번호. **이 파일이 강 번호의 기준.**
- `lessons/list.js` = 실제로 만들어진 레슨만. 여기 있으면 목록에서 "열림", 없으면 "오픈 예정"으로 표시된다.
- `index.html` 이 둘을 합쳐 구약/신약 섹션으로 그린다 (전체 / 열린 강의만 / 구약 / 신약 필터).

## 매주 할 일 (새 주제 요청을 받으면)
0. `node verse.js <본문 범위>` 로 이번 주 본문을 킹흠정역 마제스티로 읽기
   (`lessons/curriculum.js`에서 그 본문이 몇 강인지 확인 → 파일 이름과 `week`에 사용)
1. `lessons/01-creation.html`을 복사해 `lessons/NN-영문슬러그.html` 생성 (NN = 강 번호 두 자리)
2. `PB.start({...})` 안의 데이터만 새 본문에 맞게 작성
3. `lessons/list.js`에 항목 추가 (week = 강 번호, cover = 대표 장면 하나)
4. `node serve.js` 후 브라우저로 확인 (`...html?x#5` 로 5번째 장면 바로 보기)
5. `node build.js` → `dist/`에 단일 파일 HTML 생성 (학생 배포용)

## 내용 작성 원칙
- 대상: **중·고등부**. 한 줄 대사는 짧게(40자 안팎), 장면당 2~3줄.
- **말투는 합니다체.** 어린이용 해요체("만드셨어요", "~했죠?")를 쓰지 않는다.
  - ✕ "하나님은 빛을 만드셨어요!"  ○ "하나님께서 빛을 창조하셨습니다."
  - ✕ "정말 신기하죠?"  ○ "이것이 창조입니다."
  - 감탄사·느낌표·이모지를 남발하지 않는다. 느낌표는 장면당 1개 이하.
  - 질문은 진짜 질문으로 던진다: "무엇이 달라졌습니까?" (수사의문문 금지)
  - 학생을 "여러분"으로 부르지 않는다. 필요하면 "우리".
- 마인크래프트 비유를 장면마다 하나 정도 (억지스럽지 않게). 비유가 본문 의미를 가볍게 만들면 빼기.
- **성경 역본: 킹흠정역 마제스티** (`C:\workspace\bible\data\킹흠정역 마제스티.bdb`, SQLite).
  verse / memory 본문은 기억으로 쓰지 말고 반드시 `node verse.js 창1:1 창1:27-28 요3:16` 출력을 그대로 붙여 넣는다.
  대사·캡션·퀴즈에서 성경 표현을 빌릴 때도 이 역본 표현을 따른다 (예: 개역개정 "태초에/심히 좋았더라" ✕ → "처음에/매우 좋았더라").
- 인용은 짧게 핵심 구절만. 장(章) 전체 인용 금지.
- 하나님을 캐릭터(스프라이트)로 그리지 않는다. 하나님의 말씀은 `{ who: '하나님', text }` 로 대사만.
  예수님은 `jesus` 프리셋 사용 가능.
- 구성: 도입(빈 월드/질문) → 본문 장면 6~10개 → 핵심 말씀(verse) → 퀴즈 2개 → 나눔 질문 2개.
- **상호작용을 레슨당 최소 2개 넣는다** (find / choose / blank / walk 중에서).
  화면만 보는 시간이 길면 집중이 끊긴다. 다만 본문 의미를 가볍게 만들면 빼기.
  - find : 본문에서 "무엇이 새로 생겼는가"를 눈으로 찾게 할 때
  - walk : 인물이 실제로 이동하는 본문(여정·탈출·따라감)에서만. 정적인 본문에 억지로 넣지 않는다
  - choose: "너라면 어떻게 하겠는가"를 물어 토론을 열 때
  - blank : 암송 구절을 마지막에 굳힐 때
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
    quiz: { q: '...', options: ['A','B','C','D'], answer: 1, explain: '...' },

    /* ----- 상호작용 (아래 4종, 한 장면에 여러 개 가능) ----- */

    // 찾기: 장면 안의 오브젝트를 직접 클릭. target = 스프라이트 이름 또는 label (배열 가능)
    find: { q: '넷째 날에 새로 생긴 것을 클릭하십시오.', target: 'sun',
            hint: '하늘을 보십시오.', explain: '큰 광체, 곧 해입니다.' },

    // 선택 분기: goto = 이동할 장면 번호(1부터). 생략하면 다음 장면
    choose: { q: '당신이라면 어떻게 하겠습니까?',
              options: [{ text: '먹는다', goto: 12 }, { text: '돌아선다', goto: 14 }] },

    // 빈칸 채우기: text 의 ___ 를 answers 순서대로 채운다. extra = 오답 보기
    blank: { text: '처음에 하나님께서 ___과 ___을 창조하시니라.',
             answers: ['하늘', '땅'], extra: ['바다', '빛'], ref: '창세기 1:1' },

    // 걷기: 방향키/화면 버튼으로 이동. goal 열에 tol 칸 이내로 닿으면 통과
    walk: { player: 'boy', name: '나', from: 2, goal: 27, tol: 1,
            q: '강가까지 이동하십시오.', say: '도착했습니다.' }
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
- 블록: `.`공기 G잔디 D흙 S돌 C돌벽돌 B벽돌 m대리석 s모래 W물 A용암 R피 L나뭇잎 T통나무 P나무판자
  g유리 X금 O흑요석 N눈 w흰양털 r빨간양털 b파란양털 p보라양털 y건초 K검정 #기반암 c구름
- 나무 = T 세로 3칸 + 위에 L 덩어리. 방주/성전/제단은 P, C, m, X 로 쌓기.
- 캐릭터는 x열에서 가장 위의 단단한 블록 위에 자동으로 섬 (L, T, g, c 는 통과)
  → **실내 장면 주의**: 지붕/천장을 P·m 같은 단단한 블록으로 덮으면 사람이 지붕 위에 선다.
    지붕은 T(서까래)로 만들거나, 사람이 설 열 위쪽을 비워 둘 것..

### 오브젝트 `objects` / `add`
`['sheep', 10]` 또는 `{ s: 'sheep', x: 10, y: 14, anim: 'walk', label: '이름', flip: true, scale: 2 }`
- x: 열(0~31, 소수 가능), y: 발 위치 행(생략 시 땅 위). 공중/물속은 y 지정.
- anim: bob(살짝 들썩), walk(좌우 걷기, range=칸수), swim, fly(화면 가로질러 날기), float(둥실), jump
- 사람 프리셋: boy girl man woman elder shepherd king priest soldier giant jesus angel
  옵션으로 덮어쓰기: skin hair shirt pants sash beard long robe hood crown halo wings staff
  예) `{ s: 'shepherd', x: 8, label: '다윗', beard: false, hair: '#8a4b1c' }`
- 동물/사물: sheep cow donkey lion snake fish bird dove sun moon star heart cross fire tablets
  scroll bread fruit flower flower2 tuft torch stone jar coin basket reed frog brick fly locust chariot manna ark censer cord horn spear smoke basket(갈대 궤+아기) reed(부들/갈대)
  - `pal: { 글자: '#색' }` 으로 색 변경 (예: 물고기 색)

## 새 스프라이트/블록 추가
- 스프라이트: `engine/sprites.js` 의 `SPR` 에 `{ pal, px }` (또는 `frames`) 추가. 오른쪽을 바라보게 그림.
- 블록: `engine/world.js` 의 `TILES` 에 `f(x,y,r,frame)` 추가.
- 추가하면 이 문서 목록도 갱신. 기존 레슨이 깨지지 않게 이름 변경 금지.

## 조작 (수업 중)
→ / Space / Enter / 클릭 / 프레젠터 PageDown = 다음, ← / PageUp = 이전, F = 전체화면

- **걷기(walk) 장면에서는 ← → 와 A·D 가 캐릭터 이동**이 된다 (A·D 는 한글 입력 상태에서도 동작).
  목표에 도착한 뒤에도 좌우 키로는 장면이 넘어가지 않는다. 넘어가려면 Space·Enter·PageDown·`다음 ▶`.
- 키를 누르고 있어도 장면이 연달아 넘어가지 않는다 (자동 반복 무시).
- 상호작용이 끝나지 않으면 화면/대화창 클릭으로 건너뛰어지지 않는다.
  막히면 교사가 `다음 ▶` 버튼으로 언제든 넘길 수 있다.
- `lessons/_smoke.html` = 상호작용 4종 점검용 픽스처. 엔진을 고쳤으면 여기부터 확인한다.
