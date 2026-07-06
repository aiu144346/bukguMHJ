import { useState } from 'react';
import { 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  User, 
  Search, 
  FileText, 
  Lightbulb, 
  CheckCircle2
} from 'lucide-react';

interface Proposal {
  id: number;
  proposer: string;
  topic: string;
  detail: string;
  tag: string;
}

const proposalsData: Proposal[] = [
  { id: 151, proposer: "임성수", topic: "행정기관 및 유량 기업체 유치를 통한 인구 증가 도모", detail: "인구 감소에 대응하기 위해 북구 내 대규모 인구가 모일 수 있는 번듯한 행정기관 또는 유량 기업체를 적극 유치할 것을 제안함.", tag: "경제/일자리" },
  { id: 152, proposer: "석준형", topic: "소상공인 및 예술가를 위한 빈 점포 활용 '문화 공실 뱅크' 사업", detail: "상권 내 늘어나는 빈 점포를 구청이 단기 임대하여 소상공인 팝업스토어나 로컬 예술가 전시 공간으로 활용하는 침체 골목상권 활성화 방안을 건의함.", tag: "주거/상권" },
  { id: 153, proposer: "남기찬", topic: "백양산 등산로 개척 및 인근 전통시장 연계 활성화", detail: "만덕정상에서 백양산, 운수사 등의 등산로를 개척·보완하여 등산 유동인구를 유입하고, 이를 구포시장 및 감동길 등과 연계하여 지역 경제 활성화를 도모함.", tag: "관광/문화" },
  { id: 154, proposer: "김명수", topic: "화명생태공원 유휴공간 활용 구민 화합 행사 개최", detail: "화명생태공원에서 구민단합대회, 문화체육대회 등 다채로운 주민 참여형 대규모 축제 및 행사를 개최하여 지역 공동체의 결속력을 다질 것을 건의함.", tag: "관광/문화" },
  { id: 155, proposer: "김경은", topic: "일상 속 보행 환경 개선 및 스토리 기반 북구 고유 굿즈 제작", detail: "자전거도로-보행로 혼용 좁은 구간의 표시 명확화, 현수막 게시 방향 보행자 배려, 일본 고양이 인형 대신 북구만의 세련된 스토리 굿즈 보급을 통한 도시 활력 제고를 건의함.", tag: "환경/안전" },
  { id: 156, proposer: "이금순", topic: "낙동강 자연환경을 활용한 친환경 레저 관광 콘텐츠 및 여가 공간 개발", detail: "낙동강변 환경을 보존하는 범위 내에서 유람선, 수상스키, 테마 카페 등 볼거리를 개발하고 여가 축제의 거리를 조성하여 상권 활성화와 일자리 창출을 도모할 것을 건의함.", tag: "관광/문화" },
  { id: 157, proposer: "최인정", topic: "구포역 인근 방치된 유휴 공간 및 공가 정비", detail: "구포역 주변의 슬럼화를 막고 도시 미관을 개선하기 위해 오래된 빈 공간과 방치된 공가들을 효율적으로 정비하고 활용하는 방안 마련을 요청함.", tag: "주거/상권" },
  { id: 158, proposer: "손충규", topic: "신호등 기둥을 활용한 시인성 높은 교차로 및 삼거리 명칭 표기판 설치", detail: "장소와 환경에 어울리지 않거나 명칭이 없는 교차로·삼거리의 신호등 기둥을 활용해 스케치북 크기의 뛰어난 시인성을 가진 표기판을 달아 보행자와 운전자의 편의를 높일 것을 제안함.", tag: "환경/안전" },
  { id: 159, proposer: "백승진", topic: "북구 신청사 건립 계획의 다각도 타당성 검토", detail: "북구 발전의 거점이 될 신청사 건립 사업 추진 시 행정적, 재정적, 기술적 관점에서 다각도의 정밀한 검토와 검증 절차를 거쳐 추진해 줄 것을 건의함.", tag: "행정/참여" },
  { id: 160, proposer: "이경숙", topic: "청소년 안전 여가 및 문화 활동 전용 공간 조성", detail: "자라나는 아동·청소년들이 방과 후나 주말에 건전하고 안전하게 문화적 니즈를 충족하고 소통할 수 있는 전용 문화활동 공간 구축을 요청함.", tag: "돌봄/복지" },
  { id: 161, proposer: "심정민", topic: "기존 청소년 문화 공간 인프라 및 참여형 프로그램 활성화", detail: "북구 관내에 마련된 기존 청소년 문화 공간의 노후 인프라를 정비하고, 청소년들이 선호하는 트렌디한 자치 및 문화 프로그램을 도입하여 활용도를 극대화할 것을 건의함.", tag: "교육/학습" },
  { id: 162, proposer: "윤충현", topic: "생성형 AI 기술 접목 미래 인재 교육 및 지역 불균형 해소", detail: "북구의 교육 환경 개선과 지역 간 격차를 줄이기 위해 생성형 AI를 활용한 미래 인재 교육 프로그램을 선도적으로 추진하고, 국립공원 지정을 계기로 자연환경의 가치를 높일 것을 제안함.", tag: "교육/학습" },
  { id: 163, proposer: "허세갑", topic: "관료주의 관행 타파를 위한 공무원 적극행정 및 구정 안내 단순화", detail: "구민 중심 거버넌스 실현을 위해 공급자 위주의 행정 편의주의적 관행을 탈피하고 공무원 적극행정을 유도하며 구민이 알기 쉬운 구정 업무 체계를 구축할 것을 제안함.", tag: "행정/참여" },
  { id: 164, proposer: "한일우", topic: "고유 문화 자산 육성 및 주민 문화 향유 기회 확대를 위한 인프라 구축", detail: "지역 문화원의 사료 발굴 역량을 강화하고, 금정산 국립공원 지정에 따른 생태·민속 고유 문화 자산을 체계적으로 육성하여 주민들의 문화 향유 기회를 확대할 것을 건의함.", tag: "관광/문화" },
  { id: 165, proposer: "김태목", topic: "구포역 앞 교통 무질서 정비 및 랜드마크 둘레길·도서 문화 활성화", detail: "구포역 앞 공간의 일방통행 등 특단 교통 통제, 타 지자체 벤치마킹을 통한 랜드마크 둘레길 개발, 독서마라톤 및 북토크 등 도서 문화 프로그램 활성화를 건의함.", tag: "환경/안전" },
  { id: 166, proposer: "김은정", topic: "아동 통학로 환경 개선 및 청소년 구립 인프라 지원 확대", detail: "화명중·명덕초 통학로 횡단보도 정비 및 이륜차 속도 저감 대책 마련, 주택가 골목길 정비, 청소년 진로 교육 강화 및 구립 청소년 오케스트라 예산 지원 확대를 요청함.", tag: "환경/안전" },
  { id: 167, proposer: "정명혜", topic: "산성로 주변 인도 보행로 및 데크 시설 안전 전수 정비", detail: "산성로 주변 콘크리트 보도 타설 및 데크 시설물의 보행 안전 상태를 철저히 확인하여 구민들이 안전하고 편리하게 걸을 수 있는 보행 환경 정비를 건의함.", tag: "환경/안전" },
  { id: 168, proposer: "김보민", topic: "안전한 야간 통행을 위한 어둡고 외진 골목길 방범 강화", detail: "구민, 특히 아동과 여성이 안심하고 다닐 수 있도록 관내 주택가 노후 골목길의 야간 위험 요소를 조사하여 보안등 및 방범 시설을 보완할 것을 요청함.", tag: "환경/안전" },
  { id: 169, proposer: "최재민", topic: "생활권 밀착형 건강생활지원센터 등 필수 구민 복지 시설 확충", detail: "만성질환 예방과 일상적 건강 증진 관리를 위해 타 지자체의 선례를 참고하여 북구 관내에 접근성이 뛰어난 건강생활지원센터 등 복지 거점 시설 구축을 건의함.", tag: "돌봄/복지" },
  { id: 170, proposer: "장윤선", topic: "북구 관문인 구포다리 진입 구간 야간 경관 조명 대폭 개선", detail: "공항 등 외지에서 구포다리를 거쳐 북구로 진입하는 메인 도로 구간이 매우 어두우므로 시인성이 뛰어난 야간 경관 조명 및 가로등을 확충하여 도시 이미지를 밝게 개선할 것을 제안함.", tag: "환경/안전" },
  { id: 171, proposer: "현숙경", topic: "블록체인 기술을 접목한 관내 어린이집 스마트 영유아 급식관리 서비스 도입", detail: "어린이집 급식 식자재의 생산·유통·공급 전반을 블록체인 기반으로 관리하여 데이터 위변조를 막고 학부모가 원산지와 안전 현황을 투명하게 확인하는 스마트 보육 시스템 구축을 제안함.", tag: "돌봄/복지" },
  { id: 172, proposer: "김봉식", topic: "노인복지시설 내 체력 증진 운동기구 확충 및 커뮤니티 클럽 활성화", detail: "어르신들의 건강 향상과 건전한 여가 생활 지원을 위해 노인복지시설 내 생활체육용 운동기구를 확충하고 행정적 지원을 통해 시니어 소통 모임 클럽을 활성화할 것을 건의함.", tag: "돌봄/복지" },
  { id: 173, proposer: "박선홍", topic: "고령화 대응 지역 시니어 돌봄 체계 및 향토 문화정책 강화", detail: "북구의 고령인구 및 지역 격차 문제 해결을 위해 낙동문화원 연구 기능을 연계한 전문적인 노인 돌봄 강화 정책과 고유 문화정책을 확대 추진할 것을 건의함.", tag: "돌봄/복지" },
  { id: 174, proposer: "김영근", topic: "낙동강변 생태체험 및 금정산 국립공원 개발제한구역 불법행위 단속 강화", detail: "구포재래시장 및 낙동강 유역의 에코 체험 활성화와 더불어 금정산 국립공원 개발제한구역 내 무분별한 불법행위 단속·예방을 통해 청정하고 살기 좋은 북구를 만들 것을 제안함.", tag: "환경/안전" },
  { id: 175, proposer: "최정숙", topic: "만덕-센텀 도심 지하고속도로(대심도) 공사 주변 연계 도로 교통 흐름 개선", detail: "대심도 터널 공사 진행 및 완료에 따른 인근 주택가·상가 밀집 지역의 극심한 교통 체증과 병목 현상을 완화할 수 있는 도로교통망 최적화 대책 마련을 촉구함.", tag: "주거/상권" },
  { id: 176, proposer: "최홍석", topic: "어르신 복지 증진을 위한 화명생태공원 내 맞춤형 인프라 활성화", detail: "증가하는 관내 고령 인구가 쾌적한 자연 속에서 여가를 즐길 수 있도록 화명생태공원 공간을 정비하고 노인 특화 여가 및 건강 향상 지원 프로그램을 적극 실행할 것을 건의함.", tag: "돌봄/복지" },
  { id: 177, proposer: "김유순", topic: "구포시장 글로벌 관광 성장을 위한 야간 미식 및 문화 콘텐츠 고도화", detail: "구포시장을 방문하는 외국인 관광객들의 체류 시간을 늘리고 야간 경제를 활성화하기 위해 시장 내 야간 미식 골목 정비 및 다채로운 야간 문화 버스킹 공연 개최를 제안함.", tag: "관광/문화" },
  { id: 178, proposer: "라종임", topic: "저출생 대응 부모 양육 역량 강화 및 지역사회 돌봄 공동체 구축", detail: "영유아 자녀를 둔 가족 and 예비 부모를 대상으로 자연놀이, 그림책 활용 긍정 양육 교육 프로그램을 체계적으로 운영하여 양육 부담을 덜고 이웃 간 돌봄 네트워크를 활성화함.", tag: "돌봄/복지" },
  { id: 179, proposer: "이복조", topic: "북구 도시 브랜딩을 위한 구명 변경 및 우량 기업 유치·명품 학군 조성", detail: "도시 가치와 활력을 높이기 위해 '북구' 자치구 명칭 변경을 추진하고, 유량 중견기업 유치 및 우수 교육 여건 확충을 통해 청년 인구 이탈 방지와 영유아 가구 유입을 유도함.", tag: "경제/일자리" },
  { id: 180, proposer: "설승동", topic: "공무원 실무 및 구민 행정 서비스 내 실질적 AI 스마트 활용 방안 점검", detail: "단순 선언적 AI 도입이 아닌 실제 현장 실무(예: CAD 도면의 PDF 자동 변환 프로그램 등)에서 구민 편의를 획기적으로 높이는 실질적인 AI 적용 사례를 발굴하고 기존 시스템을 철저히 점검할 것을 건의함.", tag: "행정/참여" },
  { id: 181, proposer: "문정애", topic: "복지관 문화·체육 프로그램 신설 확대 및 지하철 보행로 휴식용 의자 확충", detail: "주민 참여 유도를 위해 복지관 내 라인댄스 등 선호 프로그램을 대폭 신설하고, 노인 등 보행 약자의 편의를 위해 지하철 개찰구 및 주요 보행로 중간중간에 휴식용 의자 배치를 요청함.", tag: "돌봄/복지" },
  { id: 182, proposer: "이영주", topic: "영유아 및 아동 유입을 위한 만덕 권역 맞춤형 문화·복지 인프라 활성화", detail: "젊은 부부 가구의 유입을 유도하고 아이들이 행복하게 자랄 수 있도록 만덕 지역 내 아동·청소년 대상 문화 예술 프로그램 및 맞춤형 복지 서비스를 대폭 확대 제공할 것을 요청함.", tag: "돌봄/복지" },
  { id: 183, proposer: "박남수", topic: "화명생태공원 명품 강변산책로 조성 및 외곽순환도로 금곡IC 진출입로 신설", detail: "화명생태공원의 강변 조망을 가리는 잡목을 정비하고 전망 데크를 설치해 명품 산책로를 조성하며, 화명·금곡 권역 교통난 완화를 위해 금곡IC 진출입로 개설 타당성 조사를 요청함.", tag: "관광/문화" },
  { id: 184, proposer: "박소윤", topic: "저출생 위기 극복을 위한 타 구·군 수준의 실질적 출산지원금 지급 및 확대", detail: "영유아 가구 유출을 방지하고 아이 키우기 좋은 환경을 선점하기 위해 부산 내 타 지자체의 성공 사례처럼 북구 자체의 실질적인 출산지원금 및 육아 장려 예산 편성을 촉구함.", tag: "돌봄/복지" },
  { id: 185, proposer: "김현주", topic: "투명한 지방정부 실현을 위한 시·구의원 의정활동 구민 모니터링 시스템 구축", detail: "선출직 의원들이 실질적으로 구민을 위한 입법 및 의정활동을 펼치고 있는지 검증하고 소통할 수 있도록 구민 주도의 의정 활동 모니터링 평가 창구 개설을 제안함.", tag: "행정/참여" },
  { id: 186, proposer: "박승진", topic: "구정 공모사업 대폭 활성화 및 평생학습 프리랜서 강사 처우 개선", detail: "다각적인 시책 공모사업 유치로 구 재정 부담을 완화하고, 구민 교육의 질을 높이기 위해 프리랜서 강사들의 강사료 현실화 등 처우 개선과 북구신문 활성화를 건의함.", tag: "행정/참여" },
  { id: 187, proposer: "김혜민", topic: "만덕 권역 내 장기 미집행 유휴 임야의 주민 힐링 공원화 사업 조속 추진", detail: "공원 개발 계획 수립 후 수십 년간 방치되어 작은 동산에 불과한 만덕동 일대 소유 임야를 조속히 정비·개발하여 자연친화적 주민 휴식공간 및 산책로로 조성할 것을 건의함.", tag: "관광/문화" },
  { id: 188, proposer: "김지훈", topic: "청년 인구 이탈 방지를 위한 실질적 청년 주거·취업 정착 지원 패키지 확대", detail: "청년들이 북구에 지속 정착할 수 있도록 단순 취업 정보 제공을 넘어 주거비 부담 완화, 청년 전용 커뮤니티 공간 조성, 자기계발 및 자격증 응시료 지원 등 실질적 혜택을 확충할 것을 건의함.", tag: "경제/일자리" },
  { id: 189, proposer: "진상우", topic: "사회복지와 골목상권 연계를 통한 취약계층 돌봄 및 지역순환경제 구축", detail: "독거노인·장애인 대상 배달 연계 '행복장보기 사업', 저소득층 복지상품권 발행, 편의점·식당 중심 '우리동네 돌봄가게' 지정 등 복지와 골목 경제의 시너지를 내는 모델을 제안함.", tag: "돌봄/복지" },
  { id: 190, proposer: "곽배열", topic: "차량 통행량 및 거리 특성을 고려한 횡단보도 보행자 버튼식 신호 체계 도입", detail: "차량 통행이 드물고 횡단보도 거리가 짧아 신호 위반이 잦은 아파트 주변 도로 구간의 기존 신호등을 보행자 버튼식 신호 체계로 전환하여 합리적인 보행 안전을 확보할 것을 건의함.", tag: "환경/안전" },
  { id: 191, proposer: "이명진", topic: "화명신도시 일원 극심한 주야간 주차난 해소를 위한 별도 주차시설 확보 및 정비", detail: "화명신도시 상가 및 주거지 일대의 상습 주야간 주차난 문제를 해결하기 위해 구청 차원의 유휴 부지 확보, 별도 공영 주차 시설 신설 및 합리적인 단속 체계 구축을 요청함.", tag: "주거/상권" },
  { id: 192, proposer: "안은진", topic: "고령인구 고독사 예방을 위한 ICT 기반 아파트형 시니어 돌봄 통합 플랫폼 구축", detail: "아파트 독거노인 고립 해소를 위해 간호·복지 경력자를 관리사무소 복지 코디(시니어 홈닥터)로 배치하고, 원격 화상 건강 상담 시스템을 도입하며 안심 보안관 신고 체계를 운영할 것을 제안함.", tag: "돌봄/복지" },
  { id: 193, proposer: "박병호", topic: "인도 및 신호등 주변 무분별한 무인 전동킥보드 방치 민원 단속 및 거치대 확충", detail: "반려견 순찰대 활동 등 현장에서 목격되는 심각한 무인 전동킥보드의 인도 및 횡단보도 주변 무단 방치 문제를 해결하기 위해 철저한 불법 주차 단속 및 전용 거치구역 설정을 강력 촉구함.", tag: "환경/안전" },
  { id: 194, proposer: "송형숙", topic: "관내 화명·금곡도서관 내 생성형 AI 기술 활용 시낭송 및 창작 무료 강좌 개설", detail: "구민들의 정서적 감성을 깨우고 도서관 활용도를 높이기 위해 도서관 유휴 공간에서 AI 프로그램(챗GPT 등)을 활용해 시를 짓고 낭송하는 장기 주민 문화 교육 강좌 신설을 제안함.", tag: "교육/학습" },
  { id: 195, proposer: "강길성", topic: "광역 교통 요지 장점을 활용한 대규모 서부산 복합 고객상담 콜센터 허브 유치", detail: "북구, 사상구, 강서구, 김해를 아우르는 다국적·대기업 서브 콜센터 허브를 구축해 다수 기업을 유치함으로써 청년 및 중장년 일자리를 창출하고 체계적인 전문 상담 인력을 양성할 것을 제안함.", tag: "경제/일자리" },
  { id: 196, proposer: "정영식", topic: "청년 유출 방지 및 정착 기반 마련을 위한 북구 맞춤형 청년 일자리 확대", detail: "청년 인구의 급격한 유출을 막고 지역 활력을 높일 수 있도록 구청 주도의 청년 혁신 일자리 인프라를 확충하고 실질적인 고용 파이프라인을 구축해 줄 것을 촉구함.", tag: "경제/일자리" },
  { id: 197, proposer: "문동민", topic: "정보 격차 해소와 미래 역량 강화를 위한 구민 실무형 AI 교육 프로그램 확대", detail: "인공지능이 보편화되는 급변하는 환경 속에서 디지털 취약계층의 도태를 방지하고 실무 능력을 기를 수 있도록 아동·청소년 및 중장년 대상 맞춤형 AI 활용 강좌를 대폭 확대할 것을 건의함.", tag: "교육/학습" },
  { id: 198, proposer: "변욱현", topic: "행정의 투명성과 구민 거버넌스 신뢰 제고를 위한 인수위원회 백서 발간", detail: "민선 9기 구민참여인수위원회의 체계적인 활동 성과와 주민들이 직접 건의한 소중한 정책 제안 과제들을 총망라하여 투명하게 기록하고 구민에게 공개하는 공식 백서 발간을 요청함.", tag: "행정/참여" },
  { id: 199, proposer: "김주영", topic: "아파트 단지 중심의 스마트 시니어 상호 돌봄 시스템 및 안심 보안관 제도 구축", detail: "아파트 독거노인 고독사 예방을 위해 ICT 기반 치매 예방 기기와 원격 화상 상담을 지원하는 스마트 경로당 매니저를 운영하고, 이상 징후 발생 시 앱으로 즉시 신고하는 원클릭 안심 보안관 제도를 제안함.", tag: "돌봄/복지" },
  { id: 200, proposer: "강보걍", topic: "화명생태공원 인프라를 활용한 54홀 규모 고품격 파크골프장 조성 및 대회 유치", detail: "전구장 잔디 도포 및 나무그늘 그늘집 쉼터를 갖춘 54홀 규모의 명품 파크골프장을 설치하고, 국내외 유명 파크골프 대회를 적극 유치하여 고령 인구 건전 스포츠 활성화와 관광 수익 확대를 건의함.", tag: "관광/문화" },
  { id: 201, proposer: "진용복", topic: "취약계층 돌봄 복지·교육 현실적 사각지대 해소 및 심야 마을버스 저변 확대", detail: "실생활 현장에서 발생하는 복지와 교육의 틈새 사각지대를 꼼꼼히 메우고, 대중교통 접근성 및 취약시간대 이동 편의 향상을 위해 심야 교통 활성화 및 마을버스 노선 저변 확대를 제안함.", tag: "돌봄/복지" },
  { id: 202, proposer: "장민호", topic: "낙동강 벨트와 구포시장을 유기적으로 묶는 지역 맞춤형 문화관광 축제 고도화", detail: "단순 단발성 축제에서 탈피하여 북구만의 천혜 낙동강 수변 자원과 영남 최대 전통시장 콘텐츠를 긴밀히 연결해 실질적인 관광 유동인구 증가와 소상공인 매출 증대를 이끄는 대안 마련을 건의함.", tag: "관광/문화" },
  { id: 203, proposer: "진동욱", topic: "덕천도서관 및 SWAI 거점센터 유휴 공간을 연계한 AI 진로·취업 성장센터 구축", detail: "우수한 인프라를 지닌 덕천도서관과 SWAI 거점센터 공간을 활용해 실제 전문 강사들이 청년 및 중장년층에게 트렌디한 AI 활용 교육과 밀착형 취업 컨설팅·상담 프로그램을 통합 제공할 것을 제안함.", tag: "경제/일자리" },
  { id: 204, proposer: "이경화", topic: "올바른 자녀 양육과 가족 가치관 정립을 위한 출산신고 및 초등 입학 시 의무 부모 교육 도입", detail: "18년 이상의 풍부한 아동 돌봄 현장 경험을 바탕으로, 자녀 발달에 대한 이해를 높이고 복지 사각지대 아동 방임을 예방하기 위해 출산신고 및 초등학교 입학 단계에서 의무적인 부모 교육 체계를 구축할 것을 제안함.", tag: "돌봄/복지" }
];

export default function CommitteeProposalsPart4() {
  const [currentProposalCard, setCurrentProposalCard] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState('전체');

  const tags = ['전체', '돌봄/복지', '경제/일자리', '관광/문화', '환경/안전', '행정/참여', '주거/상권', '교육/학습'];

  const filteredProposals = proposalsData.filter((item) => {
    const matchesTag = activeTag === '전체' || item.tag === activeTag;
    const matchesSearch = item.proposer.includes(searchQuery) || 
                          item.topic.includes(searchQuery) || 
                          item.detail.includes(searchQuery);
    return matchesTag && matchesSearch;
  });

  const nextProposal = () => {
    setCurrentProposalCard((prev) => (prev + 1) % proposalsData.length);
  };

  const prevProposal = () => {
    setCurrentProposalCard((prev) => (prev - 1 + proposalsData.length) % proposalsData.length);
  };

  const goBack = () => {
    if ((window as any).customNavigate) {
      (window as any).customNavigate('/');
    } else {
      window.location.pathname = '/';
    }
  };

  const getTagColor = (tag: string) => {
    switch (tag) {
      case '돌봄/복지': return 'bg-purple-50 text-purple-700 border-purple-100';
      case '경제/일자리': return 'bg-blue-50 text-blue-700 border-blue-100';
      case '관광/문화': return 'bg-violet-50 text-violet-700 border-violet-100';
      case '환경/안전': return 'bg-emerald-50 text-emerald-700 border-emerald-100';
      case '행정/참여': return 'bg-indigo-50 text-indigo-700 border-indigo-100';
      case '주거/상권': return 'bg-amber-50 text-amber-700 border-amber-100';
      case '교육/학습': return 'bg-green-50 text-green-700 border-green-100';
      default: return 'bg-slate-50 text-slate-700 border-slate-100';
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Top Banner Header */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white py-12 px-4 shadow-md">
        <div className="max-w-4xl mx-auto space-y-4">
          <button 
            onClick={goBack}
            className="flex items-center gap-2 text-xs sm:text-sm font-extrabold text-blue-200 hover:text-white transition duration-200 cursor-pointer min-h-[44px]"
          >
            <ArrowLeft className="h-4.5 w-4.5" /> 홈으로 돌아가기
          </button>
          
          <div className="flex items-center gap-3">
            <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-black uppercase tracking-wider">구민 정책 제안</span>
            <span className="text-slate-400 text-xs font-bold">민선 9기 부산 북구</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-extrabold leading-snug tracking-tight" style={{ fontFamily: "'Gowun Batang', serif" }}>
            「구민참여위원회」 위원 정책제안 Part IV
          </h2>
          <p className="text-slate-350 text-xs sm:text-sm leading-relaxed max-w-2xl">
            부산 북구의 도약을 위해 151번부터 204번까지 제안된 구민들의 소중한 정책제안입니다. 복지, 환경, 교육, 일자리 등 더욱 다채로운 아이디어로 가득한 북구의 미래 비전을 만나보세요.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-8 space-y-12">
        {/* Section 1: Card News Presentation with Generated Banner Image */}
        <section className="space-y-4">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-md aspect-[21/9] sm:aspect-[24/9]">
            <img 
              src="/images/proposals_part4_thumbnail.png" 
              alt="구민참여위원회 정책제안 Part IV 썸네일" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/45 to-transparent flex items-center p-6 sm:p-10">
              <div className="max-w-md space-y-2 text-white">
                <span className="inline-block bg-blue-600 text-white text-[9px] sm:text-xs font-black px-2.5 py-1 rounded-md uppercase tracking-wider">구민 미래 제안</span>
                <h3 className="text-base sm:text-2xl font-black leading-tight">주민 주도형 정책제안 Part IV</h3>
                <p className="text-[10px] sm:text-xs text-slate-300 leading-relaxed">
                  지역 복지, 소상공인 지원, 스마트 AI 교육 등 일상의 행복과 도시의 가치를 높이는 54가지의 혁신 제안을 카드뉴스로 간편히 확인해 보세요.
                </p>
              </div>
            </div>
          </div>

          {/* Carousel Card News slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-center px-1">
              <h3 className="text-lg font-black text-slate-800 flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-blue-550 animate-pulse" />
                구민참여위원회 정책제안 카드뉴스 (151번 ~ 204번)
              </h3>
              <span className="text-xs font-bold text-slate-500 bg-slate-200 px-3 py-1 rounded-full">
                {currentProposalCard + 1} / {proposalsData.length}
              </span>
            </div>

            <div className="relative min-h-[340px] bg-gradient-to-br from-slate-900 to-indigo-950/90 text-white border border-blue-900/40 rounded-3xl p-6 sm:p-10 shadow-xl flex flex-col justify-between overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
                <FileText className="h-64 w-64 translate-x-12 translate-y-12" />
              </div>

              <div className="space-y-5 relative z-10">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <User className="h-4.5 w-4.5 text-blue-300" />
                    <span className="text-sm font-black text-blue-200">{proposalsData[currentProposalCard].proposer} 위원</span>
                  </div>
                  <span className="bg-blue-950/80 border border-blue-700/50 text-blue-300 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full">
                    {proposalsData[currentProposalCard].tag}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wide block">주요 제안 주제</span>
                  <h3 className="text-lg sm:text-2xl font-black leading-snug text-white">
                    {proposalsData[currentProposalCard].topic}
                  </h3>
                </div>

                <div className="h-px bg-white/10 my-2" />

                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wide block">제안 핵심 내용</span>
                  <p className="text-slate-350 text-xs sm:text-sm leading-relaxed whitespace-pre-line font-semibold">
                    {proposalsData[currentProposalCard].detail}
                  </p>
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex justify-between items-center mt-6 pt-5 border-t border-white/10 relative z-10">
                <button 
                  onClick={prevProposal}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white/10 text-white hover:bg-white/20 font-bold rounded-xl text-xs active:scale-95 transition cursor-pointer min-h-[40px]"
                >
                  <ChevronLeft className="h-4 w-4" /> 이전 제안
                </button>
                
                <div className="flex gap-1.5 overflow-x-auto max-w-[150px] sm:max-w-none scrollbar-none py-1">
                  {proposalsData.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentProposalCard(idx)}
                      className={`h-2 rounded-full transition-all duration-300 shrink-0 ${
                        currentProposalCard === idx ? 'w-5 bg-blue-400' : 'w-2 bg-white/30 hover:bg-white/50'
                      } cursor-pointer`}
                      aria-label={`제안 ${idx + 1}`}
                    />
                  ))}
                </div>

                <button 
                  onClick={nextProposal}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-blue-600 text-white hover:bg-blue-700 font-bold rounded-xl text-xs active:scale-95 transition cursor-pointer min-h-[40px]"
                >
                  다음 제안 <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Interactive Proposals search and grid */}
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h3 className="text-lg font-black text-slate-800 flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-600" />
              정책 제안 전체 리스트
            </h3>

            {/* Search bar */}
            <div className="relative w-full md:max-w-xs">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-4.5 w-4.5 text-slate-400" />
              </span>
              <input
                type="text"
                placeholder="제안자 또는 키워드 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-[#2563EB] transition shadow-sm placeholder-slate-400"
              />
            </div>
          </div>

          {/* Tags filters */}
          <div className="overflow-x-auto scrollbar-none flex gap-1.5 pb-2">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 rounded-full text-xs font-bold shrink-0 border transition-all ${
                  activeTag === tag
                    ? 'bg-blue-600 text-white border-blue-700 shadow-sm'
                    : 'bg-white text-slate-650 border-slate-100 hover:bg-slate-50'
                } cursor-pointer`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {filteredProposals.length > 0 ? (
              filteredProposals.map((item) => (
                <div 
                  key={item.id}
                  className="bg-white border border-slate-200/60 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-slate-350 transition duration-300 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-7 w-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                          <User className="h-4 w-4" />
                        </div>
                        <span className="text-sm font-extrabold text-slate-800">{item.proposer} 위원</span>
                      </div>
                      <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold border ${getTagColor(item.tag)}`}>
                        {item.tag}
                      </span>
                    </div>

                    <h5 className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug">
                      {item.topic}
                    </h5>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                      {item.detail}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-50 flex justify-between items-center text-[10px] text-slate-350 font-bold">
                    <span>북구 민선 9기 구민참여위원회</span>
                    <span>제안 번호 [{item.id}]</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-16 text-center bg-white rounded-2xl border border-slate-150">
                <Search className="h-8 w-8 text-slate-300 mx-auto mb-2" />
                <p className="text-sm text-slate-700 font-extrabold">검색 조건에 맞는 제안이 없습니다.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA section */}
        <section className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-10 text-center shadow-lg space-y-6">
          <h3 className="text-xl sm:text-2xl font-black">북구의 새로운 미래, 당신의 참여로 시작됩니다!</h3>
          <p className="text-xs sm:text-sm text-blue-200 max-w-xl mx-auto leading-relaxed">
            주민이 정책의 주인이 되어 더 나은 북구를 함께 설계하는 '구민참여인수위원회'에 구민 여러분의 값진 의견과 참여를 보태어 주십시오.
          </p>
          <div>
            <a
              href="https://forms.gle/QMTcmjm9YZscTMav6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white text-blue-900 px-6 py-3.5 text-sm sm:text-base font-black shadow-lg hover:bg-slate-100 transition duration-300 min-h-[46px]"
            >
              <CheckCircle2 className="h-5 w-5 text-blue-600" />
              구민참여인수위원회 신청하기
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
