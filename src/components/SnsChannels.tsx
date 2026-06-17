
import { Video, BookOpen, MessageSquare, Heart, Share2 } from 'lucide-react';


export default function SnsChannels() {
  const socialLinks = [
    {
      name: '공식 유튜브 채널',
      description: '인수위원회 공식 브리핑 및 영상 자료',
      icon: Video,
      color: 'bg-red-600 hover:bg-red-700 text-white',
      href: 'https://www.youtube.com/@tv5493',
      ariaLabel: '정명희 당선인 공식 유튜브 바로가기'
    },
    {
      name: '당선인 네이버 블로그',
      description: '민생 행보와 일일 의정 활동 스케치',
      icon: BookOpen,
      color: 'bg-emerald-600 hover:bg-emerald-700 text-white',
      href: 'https://blog.naver.com/bukgu_jmh',
      ariaLabel: '정명희 당선인 네이버 블로그 바로가기'
    },
    {
      name: '공식 페이스북',
      description: '실시간 메시지 및 동향 공유',
      icon: MessageSquare,
      color: 'bg-blue-600 hover:bg-blue-700 text-white',
      href: 'https://www.facebook.com/profile.php?id=61580792288586',
      ariaLabel: '정명희 당선인 페이스북 바로가기'
    },
    {
      name: '공식 인스타그램',
      description: '구민과 나누는 친근한 사진 소통',
      icon: Heart,
      color: 'bg-pink-600 hover:bg-pink-700 text-white',
      href: 'https://www.instagram.com/myeonghyi.j?igsh=bWhtdW41NXZmOG5o',
      ariaLabel: '정명희 당선인 인스타그램 바로가기'
    }
  ];

  return (
    <section id="sns" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1.5 text-base font-semibold text-[#1E3A8A]">
            <Share2 className="h-5 w-5" /> 실시간 소통망
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            SNS 채널 모아보기
          </h2>
          <p className="text-lg text-gray-600 sm:text-xl">
            유튜브 최신 브리핑 영상부터 블로그, SNS 소식까지 정명희 당선인과 가장 빠르게 소통할 수 있는 거점입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Block: Youtube Embed Player */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-gray-50 rounded-2xl border border-gray-200 p-4 sm:p-6 shadow-sm">
            <div className="space-y-2 mb-4">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
                인수위원회 공식 브리핑 영상
              </h3>
              <p className="text-gray-500 text-sm sm:text-base">
                당선인의 첫 출근 소감 발표 및 인수위 활동 기본 추진 목표 핵심 보고
              </p>
            </div>
            
            {/* Clickable thumbnail container */}
            <a 
              href="https://www.youtube.com/@tv5493"
              target="_blank"
              rel="noopener noreferrer"
              className="relative block w-full overflow-hidden rounded-xl bg-black aspect-video shadow-md group focus:outline-none"
              aria-label="인수위원회 공식 브리핑 영상 유튜브로 보기"
            >
              <img 
                src="/images/youtube_sumnail_02.png" 
                alt="인수위원회 공식 브리핑 영상 썸네일" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-colors duration-300">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white shadow-xl transform transition-transform duration-300 group-hover:scale-110">
                  <svg className="h-8 w-8 fill-current ml-1" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </a>
          </div>

          {/* Right Block: Interactive SNS buttons */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 px-1">
                직접 연결 채널
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.ariaLabel}
                      className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50 transition duration-200 group min-h-[56px] focus:outline-none"
                    >
                      <div className={`p-3.5 rounded-xl ${link.color} transition duration-200`}>
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="block text-lg font-bold text-gray-900 group-hover:text-[#1E3A8A] transition">
                          {link.name}
                        </span>
                        <span className="block text-sm text-gray-500 truncate">
                          {link.description}
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
