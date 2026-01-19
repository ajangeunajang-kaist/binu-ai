export default function Quasar() {
  return (
    <div className="min-h-screen animated-gradient">
      {/* Background Effects - Aurora Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#A755F6]/30 rounded-full blur-[120px] animate-aurora" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#8B5CF6]/25 rounded-full blur-[120px] animate-aurora-reverse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#C084FC]/20 rounded-full blur-[100px] animate-aurora-slow" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <svg
                width="129"
                height="21"
                viewBox="0 0 129 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.038 9.41492C21.0223 9.48898 21.094 9.47776 21.1478 9.49572C21.4255 9.59222 21.7458 9.62589 22.0281 9.7179C24.8124 10.6156 25.8316 13.2729 24.8752 15.9773C23.9231 18.666 21.2575 19.4359 18.6501 19.5974H0.0243714C0.00645126 19.5952 -0.00474884 19.5772 0.00197122 19.5615L7.19243 0.0268836C7.19243 0.0268836 7.20587 0.0111732 7.21483 0.0111732L18.4754 0.0605485C18.4754 0.0605485 18.4754 0.0605485 18.4777 0.0605485C20.3122 0.249072 22.4783 0.70916 23.6409 2.26673C25.7017 5.02276 24.1763 8.50821 21.0335 9.41492H21.038ZM11.3925 7.43317H15.5813C16.9231 7.43317 17.7564 5.87561 16.9276 4.82077C16.4975 4.27091 15.8591 4.18114 15.1803 4.16318C14.3224 4.14074 13.4421 4.20807 12.5819 4.21256C12.5707 4.21256 12.5618 4.21929 12.5595 4.22827L11.3701 7.39951C11.3634 7.41522 11.3768 7.43317 11.3925 7.43317ZM8.45357 15.3781C8.44685 15.3938 8.46029 15.4118 8.47597 15.4118H15.3999C18.4306 15.5262 18.8517 11.7782 15.6194 11.5583H9.86926C9.86926 11.5583 9.8491 11.565 9.84686 11.574L8.45357 15.3781Z"
                  fill="#ffffff"
                />
                <path
                  d="M34.5096 0.00450516H27.3057V19.593H34.5096V0.00450516Z"
                  fill="#ffffff"
                />
                <path
                  d="M45.0441 0.00450516L52.8259 11.3945L52.7162 0.00450516H59.481V19.593H51.6992L44.1078 8.25691L44.1369 19.593H37.4258V0.00450516H45.0441Z"
                  fill="#ffffff"
                />
                <path
                  d="M69.5457 0.00450516V12.8533C69.5457 16.1861 75.8716 16.1166 75.8716 12.8533V0.00450516H83.1315V12.4673C82.6252 19.2519 75.1436 20.8813 69.5457 19.8421C65.5249 19.097 62.194 16.8437 62.2881 12.3573V0.00450516H69.5457Z"
                  fill="#ffffff"
                />
                <path
                  d="M94.6245 19.593L103.45 0L111.613 0.0112217L120.143 19.593H112.334L111.308 16.8504L103.423 16.8684L102.433 19.593H94.6245ZM104.964 12.4942H109.859L107.413 5.67142L104.964 12.4942Z"
                  fill="#ffffff"
                />
                <path
                  d="M129 0.00450516H121.74V19.593H129V0.00450516Z"
                  fill="#ffffff"
                />
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-5xl mx-auto text-center">
         
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
            <span className="gradient-text-blue">QUASAR</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            숏폼 콘텐츠의 빈 공간을 AI로 분석하고,
            <br />
            브랜드에 최적화된 광고 배치를 제안합니다.
          </p>

          {/* Demo Preview */}
          <div className="glass-card rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
            <div className="aspect-video bg-white/5 rounded-2xl flex items-center justify-center mb-8">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-[#A755F6]/20 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-10 h-10 text-[#A755F6]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-zinc-500">Demo Video Coming Soon</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#A755F6]/20 flex items-center justify-center mb-3">
                  <svg
                    className="w-5 h-5 text-[#A755F6]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold mb-1">AI 공간 분석</h3>
                <p className="text-zinc-500 text-sm">
                  영상 내 빈 공간을 자동으로 감지
                </p>
              </div>
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/20 flex items-center justify-center mb-3">
                  <svg
                    className="w-5 h-5 text-[#8B5CF6]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold mb-1">브랜드 매칭</h3>
                <p className="text-zinc-500 text-sm">
                  콘텐츠와 어울리는 광고 자동 추천
                </p>
              </div>
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#C084FC]/20 flex items-center justify-center mb-3">
                  <svg
                    className="w-5 h-5 text-[#C084FC]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold mb-1">성과 분석</h3>
                <p className="text-zinc-500 text-sm">
                  실시간 광고 효과 리포트 제공
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <a
              href="/#contact"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#A755F6] to-[#8B5CF6] hover:from-[#C084FC] hover:to-[#A755F6] text-white font-medium transition-all glow inline-block"
            >
              QUASAR 도입 문의
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
