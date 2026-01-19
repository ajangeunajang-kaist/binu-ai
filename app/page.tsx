export default function Home() {
  return (
    <div className="min-h-screen animated-gradient">
      {/* Background Effects - Aurora Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#A755F6]/30 rounded-full blur-[120px] animate-aurora" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#8B5CF6]/25 rounded-full blur-[120px] animate-aurora-reverse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#C084FC]/20 rounded-full blur-[100px] animate-aurora-slow" />
        <div
          className="absolute top-3/4 left-1/3 w-[350px] h-[350px] bg-[#7C3AED]/20 rounded-full blur-[100px] animate-aurora"
          style={{ animationDelay: "-5s" }}
        />
        <div
          className="absolute top-1/3 right-1/3 w-[450px] h-[450px] bg-[#D8B4FE]/15 rounded-full blur-[130px] animate-aurora-reverse"
          style={{ animationDelay: "-8s" }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a href="#" className="text-xl font-bold">
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
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#about"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#services"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Services
              </a>
              <a
                href="#technology"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Technology
              </a>
              <a
                href="#contact"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
            <button className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-sm font-medium transition-all">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-zinc-400">
              Now accepting early partners
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
            <span className="gradient-text-blue">AI의 미래를</span>
            <br />
            <span className="text-white">함께 만들어갑니다</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            BINU AI는 차세대 인공지능 기술로 비즈니스의 한계를 넘어서는 혁신적인
            솔루션을 제공합니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[#A755F6] to-[#8B5CF6] hover:from-[#C084FC] hover:to-[#A755F6] text-white font-medium transition-all glow">
              무료 상담 신청
            </button>
            <button className="px-8 py-4 rounded-full glass hover:bg-white/10 font-medium transition-all flex items-center gap-2">
              <span>제품 데모 보기</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-zinc-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Our Services</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              비즈니스 성장을 가속화하는 AI 솔루션
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Card 1 */}
            <div className="glass-card rounded-3xl p-8 hover:bg-white/5 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI 자동화</h3>
              <p className="text-zinc-400 leading-relaxed">
                반복적인 업무를 AI로 자동화하여 생산성을 극대화하고 비용을
                절감합니다.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="glass-card rounded-3xl p-8 hover:bg-white/5 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">커스텀 LLM 솔루션</h3>
              <p className="text-zinc-400 leading-relaxed">
                기업 맞춤형 언어 모델을 구축하여 고객 서비스와 내부 업무를
                혁신합니다.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="glass-card rounded-3xl p-8 hover:bg-white/5 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-7 h-7 text-white"
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
              <h3 className="text-xl font-semibold mb-3">데이터 분석</h3>
              <p className="text-zinc-400 leading-relaxed">
                빅데이터를 활용한 심층 분석으로 비즈니스 인사이트를 도출합니다.
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="glass-card rounded-3xl p-8 hover:bg-white/5 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">모바일 AI</h3>
              <p className="text-zinc-400 leading-relaxed">
                온디바이스 AI로 빠르고 프라이버시가 보장되는 모바일 솔루션을
                제공합니다.
              </p>
            </div>

            {/* Service Card 5 */}
            <div className="glass-card rounded-3xl p-8 hover:bg-white/5 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI 보안</h3>
              <p className="text-zinc-400 leading-relaxed">
                기업 데이터를 안전하게 보호하면서 AI의 이점을 누릴 수 있습니다.
              </p>
            </div>

            {/* Service Card 6 */}
            <div className="glass-card rounded-3xl p-8 hover:bg-white/5 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">실시간 AI</h3>
              <p className="text-zinc-400 leading-relaxed">
                실시간 데이터 처리와 즉각적인 AI 응답으로 비즈니스 민첩성을
                높입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                최첨단 기술로
                <br />
                <span className="gradient-text-blue">새로운 가능성을</span>
              </h2>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                BINU AI는 자체 개발한 고성능 AI 모델과 최신 클라우드 인프라를
                결합하여 엔터프라이즈급 솔루션을 제공합니다.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#A755F6]/20 flex items-center justify-center flex-shrink-0">
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">99.9% 업타임 보장</h4>
                    <p className="text-zinc-500 text-sm">
                      글로벌 분산 인프라로 안정적인 서비스 제공
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/20 flex items-center justify-center flex-shrink-0">
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">밀리초 단위 응답</h4>
                    <p className="text-zinc-500 text-sm">
                      최적화된 모델로 빠른 추론 속도 실현
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C084FC]/20 flex items-center justify-center flex-shrink-0">
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">ISO 27001 인증</h4>
                    <p className="text-zinc-500 text-sm">
                      국제 표준 보안 인증으로 데이터 보호
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="glass-card rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#A755F6]/10 to-transparent" />
                <div className="relative z-10">
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {[...Array(9)].map((_, i) => (
                      <div
                        key={i}
                        className="aspect-square rounded-2xl bg-white/5 flex items-center justify-center animate-pulse"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      >
                        <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#A755F6] to-[#8B5CF6]" />
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 bg-white/10 rounded-full w-full" />
                    <div className="h-3 bg-white/10 rounded-full w-4/5" />
                    <div className="h-3 bg-white/10 rounded-full w-3/5" />
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 glass rounded-2xl animate-float flex items-center justify-center">
                <span className="text-3xl font-bold gradient-text">AI</span>
              </div>
              <div
                className="absolute -bottom-4 -left-4 w-20 h-20 glass rounded-2xl animate-float flex items-center justify-center"
                style={{ animationDelay: "2s" }}
              >
                <svg
                  className="w-8 h-8 text-[#A755F6]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Why <span className="gradient-text">BINU AI</span>?
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-16">
            우리는 AI가 모든 비즈니스의 핵심 경쟁력이 될 것이라 믿습니다. BINU
            AI는 복잡한 기술을 쉽게 접근할 수 있도록 하여, 모든 기업이 AI의
            혜택을 누릴 수 있게 합니다.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="text-5xl font-bold gradient-text-blue mb-3">
                50+
              </div>
              <p className="text-zinc-400">기업 파트너</p>
            </div>
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="text-5xl font-bold gradient-text-blue mb-3">
                99%
              </div>
              <p className="text-zinc-400">고객 만족도</p>
            </div>
            <div className="glass-card rounded-3xl p-8 text-center">
              <div className="text-5xl font-bold gradient-text-blue mb-3">
                24/7
              </div>
              <p className="text-zinc-400">기술 지원</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#A755F6]/10 via-transparent to-[#8B5CF6]/10" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                지금 바로 시작하세요
              </h2>
              <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
                AI 전환의 첫 걸음을 BINU AI와 함께하세요. 전문 컨설턴트가
                비즈니스에 맞는 최적의 솔루션을 제안해 드립니다.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[#A755F6] to-[#8B5CF6] hover:from-[#C084FC] hover:to-[#A755F6] text-white font-medium transition-all glow">
                  무료 상담 예약
                </button>
                <button className="px-8 py-4 rounded-full glass hover:bg-white/10 font-medium transition-all">
                  contact@binuai.com
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <svg
                  width="89"
                  height="14"
                  viewBox="0 0 89 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5146 6.49555C14.5038 6.54665 14.5532 6.53891 14.5903 6.5513C14.7819 6.61788 15.0029 6.6411 15.1977 6.70459C17.1186 7.32395 17.8218 9.15727 17.1619 11.0231C16.5051 12.8781 14.666 13.4092 12.8671 13.5207H0.0168144C0.00445086 13.5192 -0.00327633 13.5068 0.00135999 13.4959L4.96222 0.0185446C4.96222 0.0185446 4.97149 0.00770569 4.97767 0.00770569L12.7466 0.0417708C12.7466 0.0417708 12.7466 0.0417708 12.7481 0.0417708C14.0138 0.171837 15.5083 0.489262 16.3104 1.56386C17.7322 3.46531 16.6797 5.86999 14.5115 6.49555H14.5146ZM7.85991 5.12831H10.7499C11.6756 5.12831 12.2505 4.05371 11.6787 3.32595C11.382 2.94659 10.9415 2.88466 10.4732 2.87227C9.88135 2.85678 9.27399 2.90324 8.68054 2.90633C8.67281 2.90633 8.66663 2.91098 8.66509 2.91717L7.84446 5.10508C7.83982 5.11592 7.8491 5.12831 7.85991 5.12831ZM5.8323 10.6097C5.82766 10.6205 5.83693 10.6329 5.84775 10.6329H10.6247C12.7157 10.7119 13.0062 8.12603 10.7762 7.97429H6.80902C6.80902 7.97429 6.79511 7.97893 6.79356 7.98513L5.8323 10.6097Z"
                    fill="white"
                  />
                  <path
                    d="M23.809 0.00310516H18.8389V13.5176H23.809V0.00310516Z"
                    fill="white"
                  />
                  <path
                    d="M31.0768 0.00310516L36.4457 7.8613L36.37 0.00310516H41.0372V13.5176H35.6683L30.4308 5.69662L30.4509 13.5176H25.8208V0.00310516H31.0768Z"
                    fill="white"
                  />
                  <path
                    d="M47.9812 0.00310516V8.86777C47.9812 11.1672 52.3455 11.1192 52.3455 8.86777V0.00310516H57.3543V8.60144C57.005 13.2823 51.8433 14.4064 47.9812 13.6895C45.2072 13.1755 42.9091 11.6208 42.974 8.52557V0.00310516H47.9812Z"
                    fill="white"
                  />
                  <path
                    d="M65.2837 13.5176L71.3727 0L77.0043 0.00774206L82.8893 13.5176H77.5019L76.7941 11.6255L71.3542 11.6379L70.6711 13.5176H65.2837ZM72.4174 8.62001H75.7942L74.1066 3.91284L72.4174 8.62001Z"
                    fill="white"
                  />
                  <path
                    d="M89 0.00310516H83.9912V13.5176H89V0.00310516Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p className="text-zinc-500 max-w-xs">
                AI의 미래를 함께 만들어가는 기업, BINU AI입니다.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#about"
                    className="text-zinc-500 hover:text-white transition-colors text-sm"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-zinc-500 hover:text-white transition-colors text-sm"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-zinc-500 hover:text-white transition-colors text-sm"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-zinc-500 hover:text-white transition-colors text-sm"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-zinc-500 hover:text-white transition-colors text-sm"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-zinc-500 hover:text-white transition-colors text-sm"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-zinc-600 text-sm">
              © 2025 BINU AI. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
