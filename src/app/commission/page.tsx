'use client'
import React from 'react';
import CommissionTemplate from '@/components/templates/commissionTemplate/CommissionTemplate';


export const testCommissioFetch = [
  {
    "id" : 33,
    "client_id" : 6,
    "category_id" : 1000,
    "title" : "원룸 이사 청소 요청",
    "description" : {"subtitle": "원룸 이사 후 청소가 필요합니다. 침대, 주방, 욕실 중심으로 부탁드립니다.", "location": "서울특별시 강남구"},
    "budget" : 120000.00,
    "deadline" : "2025-04-15 18:00:00",
    "created_at" : "2025-04-01 10:00:00",
    "expert_id" : null,
    "summary" : "좋은 전문가를 찾고 있습니다.",
    "updated_at" : null
  },
  {
    "id" : 34,
    "client_id" : 13,
    "category_id" : 1000,
    "title" : "이사 청소 진행 중",
    "description" : "2룸 아파트 이사 후 청소 중입니다. 마무리 청소 요청드립니다.",
    "budget" : 150000.00,
    "deadline" : "2025-04-10 15:00:00",
    "created_at" : "2025-03-30 09:30:00",
    "expert_id" : null,
    "summary" : "좋은 전문가를 찾고 있습니다.",
    "updated_at" : null
  },
  {
    "id" : 35,
    "client_id" : 14,
    "category_id" : 1000,
    "title" : "이사 후 청소 완료",
    "description" : "이사 당일 청소가 잘 마무리되었습니다. 다음에도 이용하고 싶습니다.",
    "budget" : 130000.00,
    "deadline" : "2025-03-25 12:00:00",
    "created_at" : "2025-03-20 11:00:00",
    "expert_id" : null,
    "summary" : "좋은 전문가를 찾고 있습니다.",
    "updated_at" : null
  },
  {
    "id" : 36,
    "client_id" : 7,
    "category_id" : 1000,
    "title" : "청소 요청 취소",
    "description" : "고객 사정으로 인해 이사 청소 요청을 취소합니다.",
    "budget" : 100000.00,
    "deadline" : "2025-04-05 10:00:00",
    "created_at" : "2025-03-28 14:00:00",
    "expert_id" : null,
    "summary" : "좋은 전문가를 찾고 있습니다.",
    "updated_at" : null
  },
  {
    "id" : 37,
    "client_id" : 8,
    "category_id" : 2000,
    "title" : "벽걸이 TV 설치 요청",
    "description" : "TV 설치와 선 정리까지 원합니다. 벽 고정 가능한지 확인해주세요.",
    "budget" : 90000.00,
    "deadline" : "2025-04-03 14:00:00",
    "created_at" : "2025-04-01 09:00:00",
    "expert_id" : null,
    "summary" : "좋은 전문가를 찾고 있습니다.",
    "updated_at" : null
  },
  {
    "id" : 38,
    "client_id" : 15,
    "category_id" : 2000,
    "title" : "에어컨 수리 진행 중",
    "description" : "에어컨에서 이상한 소음 발생하여 전문가 배정되어 수리 중입니다.",
    "budget" : 180000.00,
    "deadline" : "2025-04-06 11:00:00",
    "created_at" : "2025-03-29 16:00:00",
    "expert_id" : null,
    "summary" : "좋은 전문가를 찾고 있습니다.",
    "updated_at" : null
  },
  {
    "id" : 39,
    "client_id" : 16,
    "category_id" : 2000,
    "title" : "세탁기 설치 완료",
    "description" : "신혼집 세탁기 설치를 빠르게 도와주셔서 감사합니다.",
    "budget" : 70000.00,
    "deadline" : "2025-03-27 13:00:00",
    "created_at" : "2025-03-25 12:30:00",
    "expert_id" : null,
    "summary" : "좋은 전문가를 찾고 있습니다.",
    "updated_at" : null
  },
  {
    "id" : 40,
    "client_id" : 9,
    "category_id" : 2000,
    "title" : "가전 설치 요청 취소",
    "description" : "날짜 조율이 어려워 설치 요청을 취소합니다.",
    "budget" : 80000.00,
    "deadline" : "2025-04-02 16:00:00",
    "created_at" : "2025-03-31 08:30:00",
    "expert_id" : null,
    "summary" : "좋은 전문가를 찾고 있습니다.",
    "updated_at" : null
  },
  {
    "id" : 41,
    "client_id" : 10,
    "category_id" : 3000,
    "title" : "초등학생 수학 과외 요청",
    "description" : "초등학교 5학년 수학 과외 선생님을 찾고 있습니다. 주 2회 희망합니다.",
    "budget" : 250000.00,
    "deadline" : "2025-04-20 17:00:00",
    "created_at" : "2025-04-01 10:30:00",
    "expert_id" : null,
    "summary" : "좋은 전문가를 찾고 있습니다.",
    "updated_at" : null
  },
  {
    "id" : 42,
    "client_id" : 17,
    "category_id" : 3000,
    "title" : "영어 과외 수업 진행 중",
    "description" : "중학생 대상 영어 과외 수업이 진행 중입니다. 회화 중심입니다.",
    "budget" : 300000.00,
    "deadline" : "2025-04-18 15:00:00",
    "created_at" : "2025-03-30 17:00:00",
    "expert_id" : null,
    "summary" : "좋은 전문가를 찾고 있습니다.",
    "updated_at" : null
  },
  {
    "id" : 43,
    "client_id" : 18,
    "category_id" : 3000,
    "title" : "수능 국어 과외 완료",
    "description" : "고3 수험생 대상 국어 과외를 마무리하였습니다.",
    "budget" : 350000.00,
    "deadline" : "2025-03-29 19:00:00",
    "created_at" : "2025-03-20 13:00:00",
    "expert_id" : null,
    "summary" : "좋은 전문가를 찾고 있습니다.",
    "updated_at" : null
  },
  {
    "id" : 44,
    "client_id" : 13,
    "category_id" : 3000,
    "title" : "과외 일정 문제로 취소",
    "description" : "과외 스케줄 조정이 어려워 요청을 취소합니다.",
    "budget" : 200000.00,
    "deadline" : "2025-04-05 09:00:00",
    "created_at" : "2025-03-27 11:00:00",
    "expert_id" : null,
    "summary" : "좋은 전문가를 찾고 있습니다.",
    "updated_at" : null
  },
  {
    "id" : 45,
    "client_id" : 19,
    "category_id" : 4000,
    "title" : "기타 레슨 희망",
    "description" : "성인을 위한 일대일 기타 레슨을 원합니다. 주말에 수업을 듣고 싶어요.",
    "budget" : 100000.00,
    "deadline" : "2025-04-12 14:00:00",
    "created_at" : "2025-04-01 09:30:00",
    "expert_id" : null,
    "summary" : "좋은 전문가를 찾고 있습니다.",
    "updated_at" : null
  },
  {
    "id" : 46,
    "client_id" : 6,
    "category_id" : 4000,
    "title" : "드로잉 클래스 진행 중",
    "description" : "온라인 드로잉 클래스가 진행 중입니다. 꾸준히 참여하고 있어요.",
    "budget" : 150000.00,
    "deadline" : "2025-04-08 17:00:00",
    "created_at" : "2025-03-31 10:00:00",
    "expert_id" : null,
    "summary" : "좋은 전문가를 찾고 있습니다.",
    "updated_at" : null
  },
  {
    "id" : 47,
    "client_id" : 7,
    "category_id" : 4000,
    "title" : "요가 클래스 완료",
    "description" : "초급 요가 수업이 끝났습니다. 만족도 매우 높아요.",
    "budget" : 130000.00,
    "deadline" : "2025-03-30 10:00:00",
    "created_at" : "2025-03-25 09:30:00",
    "expert_id" : null,
    "summary" : "좋은 전문가를 찾고 있습니다.",
    "updated_at" : null
  },
  {
    "id" : 48,
    "client_id" : 8,
    "category_id" : 4000,
    "title" : "자기계발 수업 취소",
    "description" : "일정 문제로 클래스 참여가 어려워 취소 요청 드립니다.",
    "budget" : 120000.00,
    "deadline" : "2025-04-04 13:00:00",
    "created_at" : "2025-03-29 08:00:00",
    "expert_id" : null,
    "summary" : "좋은 전문가를 찾고 있습니다.",
    "updated_at" : null
  }
]

export default function CommissionPage() {
  const [searchBar, setSearchBar] = React.useState<string>('')
  return (
    <CommissionTemplate
      value={searchBar}
      onChange={setSearchBar}
      onReset={() => {}}
    />
  );
}