import { match } from 'ts-pattern';

import {
  categoryDetails,
  categoryOrder,
  hobbies,
  type Hobby,
  type HobbyCategory,
  type HobbyFilter,
} from '@/features/hobby/constants/hobbies';

/** 필터 값에 맞는 취미만 돌려줍니다. 전체는 18개를 그대로 반환합니다. */
export function filterHobbies(filter: HobbyFilter): Hobby[] {
  return hobbies.filter((hobby) =>
    match(filter)
      .with('all', () => true)
      .with(hobby.category, () => true)
      .otherwise(() => false),
  );
}

/** 주소의 slug가 운동형, 지능형, 예술형인지 확인합니다. */
export function getHobbyCategory(slug: string): HobbyCategory | null {
  return match(slug)
    .with(...categoryOrder, (category) => category)
    .otherwise(() => null);
}

export function getCategoryDetail(category: HobbyCategory) {
  return categoryDetails[category];
}
