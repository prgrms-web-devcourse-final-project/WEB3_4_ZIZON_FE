import { selectedOptionIndexObject } from '@/components/molecules/selectedOptionList/SelectedOptionList';

export const commissionQuestion = (selectedOptionListProps: selectedOptionIndexObject[]): { description: { [key: string]: string }[]; region: string | null } => {
  if (!selectedOptionListProps || selectedOptionListProps.length === 0) return { description: [], region: "" };

  const type = selectedOptionListProps[0]["요청 형식"];
  let keyRenameMap: { [key: string]: string } = {};

  if (type === "이사") {
    keyRenameMap = {
      "요청 형식": "원하시는 요청 형식이 무엇인가요?",
      "이사 날짜": "원하시는 이사일이 언제인가요?",
      "이사 형태": "원하시는 이사 형태가 무엇인가요?",
      "출발 지역": "출발하시는 지역이 어디인가요?",
      "출발 층수": "출발지의 층수는 어떻게 되나요?",
      "출발지 정보": "출발지의 평수는 어떻게되나요?",
      "l.엘리베이터": "출발지에 엘리베이터가 있나요?",
      "가전제품": "옮길 가전제품의 목록은 어떻게되나요?",
      "가구": "옮길 가구의 목록은 어떻게되나요?",
      "도착 지역": "도착하시는 지역이 어디인가요?",
      "도착 층수": "도착지의 층수는 어떻게 되나요?",
      "도착지 정보": "도착지의 평수는 어떻게 되나요?",
      "a.엘리베이터": "도착지에 엘리베이터가 있나요?",
    };
  } else if (type === "과외") {
    keyRenameMap = {
      "요청 형식": "원하시는 요청 형식이 무엇인가요?",
      "과외 학생": "과외를 원하는 학생의 누구인가요?",
      "과외 형태": "원하는 과외 형태는 무엇인가요?",
      "과정 구분": "원하시는 과외의 교과 구분은 어떻게 되나요?",
      "선택 과목": "원하시는 과외의 과목은 무엇인가요?",
      "학생 성별": "과외를 원하는 학생의 성별은 무엇인가요?",
      "희망 성별": "선호하는 과외 선생님의 성별은 무엇인가요?",
      "희망 요일": "과외 받기 희망하는 요일은 언제인가요?",
      "희망 시간": "과외를 받고 싶은 시간대는 언제인가요?",
      "과외 날짜": "과외를 시작하고 싶은 날짜는 언제인가요?",
      "지역": "과외를 원하는 지역은 어디인가요?",
    };
  } else if (type === "설치 및 수리") {
    keyRenameMap = {
      "요청 형식": "원하시는 요청 형식이 무엇인가요?",
      "요청 대상": "설치 및 수리의 대상이 무엇인가요?",
      "세부 사항": "더 상세한 분류는 무엇인가요?",
      "요청 날짜": "서비스를 희망하는 날짜는 언제인가요?",
      "서비스 지역": "설치 및 수리를 원하는 지역은 어디인가요?",
    };
  } else if (type === "취미생활") {
    keyRenameMap = {
      "요청 형식": "원하시는 요청 형식이 무엇인가요?",
      "취미 분류": "취미로 삼고 있는 분류는 무엇인가요?",
      "세부 사항": "더 상세한 분류는 무엇인가요?",
      "레슨 목적": "레슨의 목적이 무엇인가요?",
      "레슨 형태": "원하시는 레슨 형태는 무엇인가요?",
      "학생 연령": "레슨을 원하시는 학생의 연령은 어떻게 되나요?",
      "학생 성별": "레슨을 원하시는 학생의 성별은 무엇인가요?",
      "희망 성별": "선호하는 레슨 선생님의 성별은 무엇인가요?",
      "희망 요일": "레슨 받기 희망하는 요일은 언제인가요?",
      "희망 시간": "레슨을 받고 싶은 시간대는 언제인가요?",
      "희망 날짜": "레슨을 시작하고 싶은 날짜는 언제인가요?",
      "지역": "레슨 받을 지역은 어디인가요?",
    };
  } else if (type === "청소") {
    keyRenameMap = {
      "요청 형식": "원하시는 요청 형식이 무엇인가요?",
      "청소 형태": "원하시는 청소 분류는 무엇인가요?",
      "건물 정보": "청소를 희망하는 건물은 어떤 형태인가요?",
      "방 개수": "방 개수는 몇 개인가요?",
      "화장실 개수": "화장실 개수는 몇 개인가요?",
      "베란다 개수": "베란다 개수는 몇 개인가요?",
      "평 수": "평 수는 어떻게 되나요?",
      "추가 서비스": "추가로 원하시는 서비스는 무엇인가요?",
      "희망 날짜": "청소를 받고 싶은 날짜는 언제인가요?",
      "지역": "청소를 받고 싶은 지역은 어디인가요?",
      "문의사항": "청소에 문의사항은 어떤게 있을까요?",
    };
  }

  // 변환된 결과와 지역 값 추출
  let region: string | null = null;

  const description = selectedOptionListProps.map(obj => {
    const newObj: { [key: string]: string } = {};

    for (const [key, value] of Object.entries(obj)) {
      const question = keyRenameMap[key];
      if (question) {
        newObj[question] = value;
      }

      if (
        (key === "지역" || key === "서비스 지역" || key === "출발 지역") &&
        typeof value === "string"
      ) {
        region = value;
      }
    }

    return newObj;
  });

  return { description, region };
};
