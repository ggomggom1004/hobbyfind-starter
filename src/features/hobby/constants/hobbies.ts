export const categoryOrder = ['exercise', 'intellectual', 'artistic'] as const;

export type HobbyCategory = (typeof categoryOrder)[number];

export type HobbyFilter = 'all' | HobbyCategory;

export type Hobby = {
  id: string;
  name: string;
  category: HobbyCategory;
  description: string;
  imageUrl: string;
};

export const categoryDetails: Record<
  HobbyCategory,
  { label: string; description: string; href: string }
> = {
  exercise: {
    label: '운동형',
    description: '몸을 움직이며 활력을 찾는 여섯 가지 취미입니다.',
    href: '/category/exercise',
  },
  intellectual: {
    label: '지능형',
    description: '생각하고 배우며 몰입할 수 있는 여섯 가지 취미입니다.',
    href: '/category/intellectual',
  },
  artistic: {
    label: '예술형',
    description: '만들고 표현하며 감각을 깨우는 여섯 가지 취미입니다.',
    href: '/category/artistic',
  },
};

export const hobbyFilters: { value: HobbyFilter; label: string }[] = [
  { value: 'all', label: '전체' },
  { value: 'exercise', label: '운동형' },
  { value: 'intellectual', label: '지능형' },
  { value: 'artistic', label: '예술형' },
];

export const fallbackHobbyImage = '/easynext.png';

const imageFiles: Record<number, string> = {
  1074: 'running.jpg',
  1015: 'yoga.jpg',
  1039: 'swimming.jpg',
  146: 'cycling.jpg',
  29: 'climbing.jpg',
  106: 'dance.jpg',
  24: 'reading.jpg',
  201: 'puzzle.jpg',
  160: 'chess.jpg',
  180: 'programming.jpg',
  367: 'foreign_language_learning.jpg',
  250: 'photography.jpg',
  1025: 'drawing.jpg',
  1080: 'instrument_playing.jpg',
  292: 'cooking.jpg',
  1084: 'calligraphy.jpg',
  175: 'pottery.jpg',
  306: 'gardening.jpg',
};

const hobbyImage = (id: number) =>
  imageFiles[id]
    ? `/thumbnails/${imageFiles[id]}`
    : fallbackHobbyImage;



export const hobbies: Hobby[] = [
  {
    id: 'jogging',
    name: '조깅/러닝',
    category: 'exercise',
    description: '일정한 속도로 달리며 몸과 마음을 가볍게 하는 활동입니다.',
    imageUrl: hobbyImage(1074),
  },
  {
    id: 'yoga',
    name: '요가',
    category: 'exercise',
    description: '호흡과 자세로 유연함과 집중을 기르는 활동입니다.',
    imageUrl: hobbyImage(1015),
  },
  {
    id: 'swimming',
    name: '수영',
    category: 'exercise',
    description: '물속에서 전신을 움직이며 체력을 키우는 활동입니다.',
    imageUrl: hobbyImage(1039),
  },
  {
    id: 'cycling',
    name: '자전거',
    category: 'exercise',
    description: '바람을 맞으며 길을 따라 페달을 밟는 활동입니다.',
    imageUrl: hobbyImage(146),
  },
  {
    id: 'climbing',
    name: '클라이밍',
    category: 'exercise',
    description: '손과 발을 사용해 벽을 오르며 도전하는 활동입니다.',
    imageUrl: hobbyImage(29),
  },
  {
    id: 'dance',
    name: '댄스',
    category: 'exercise',
    description: '음악에 맞춰 몸을 움직이며 표현하는 활동입니다.',
    imageUrl: hobbyImage(106),
  },
  {
    id: 'reading',
    name: '독서',
    category: 'intellectual',
    description: '이야기를 읽으며 생각의 폭을 넓히는 활동입니다.',
    imageUrl: hobbyImage(24),
  },
  {
    id: 'puzzle',
    name: '퍼즐',
    category: 'intellectual',
    description: '조각을 맞추며 집중력과 관찰력을 키우는 활동입니다.',
    imageUrl: hobbyImage(201),
  },
  {
    id: 'chess',
    name: '체스',
    category: 'intellectual',
    description: '수를 읽고 전략을 세우는 보드 게임입니다.',
    imageUrl: hobbyImage(160),
  },
  {
    id: 'programming',
    name: '프로그래밍',
    category: 'intellectual',
    description: '문제를 나누고 코드로 해결하는 활동입니다.',
    imageUrl: hobbyImage(180),
  },
  {
    id: 'language',
    name: '외국어 학습',
    category: 'intellectual',
    description: '새로운 말과 문화를 익히는 활동입니다.',
    imageUrl: hobbyImage(367),
  },
  {
    id: 'photography',
    name: '사진 촬영',
    category: 'intellectual',
    description: '순간을 프레임 안에 담아 보는 활동입니다.',
    imageUrl: hobbyImage(250),
  },
  {
    id: 'drawing',
    name: '그림 그리기',
    category: 'artistic',
    description: '색과 선으로 마음속 장면을 표현하는 활동입니다.',
    imageUrl: hobbyImage(1025),
  },
  {
    id: 'music',
    name: '악기 연주',
    category: 'artistic',
    description: '소리를 쌓아 곡을 만들어 가는 활동입니다.',
    imageUrl: hobbyImage(1080),
  },
  {
    id: 'cooking',
    name: '요리',
    category: 'artistic',
    description: '재료를 다듬어 한 접시를 완성하는 활동입니다.',
    imageUrl: hobbyImage(292),
  },
  {
    id: 'calligraphy',
    name: '서예',
    category: 'artistic',
    description: '붓과 먹으로 글자에 힘을 담는 활동입니다.',
    imageUrl: hobbyImage(1084),
  },
  {
    id: 'pottery',
    name: '도자기 만들기',
    category: 'artistic',
    description: '흙을 빚어 쓸모 있는 형태를 만드는 활동입니다.',
    imageUrl: hobbyImage(175),
  },
  {
    id: 'gardening',
    name: '정원 가꾸기',
    category: 'artistic',
    description: '식물을 돌보며 계절의 변화를 보는 활동입니다.',
    imageUrl: hobbyImage(306),
  },
];
