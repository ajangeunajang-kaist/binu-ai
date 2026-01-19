"use client";

import Footer from "@/components/Footer";
import { useState, useRef } from "react";

export default function Quasar() {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("video/")) {
      handleFileUpload(file);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
    setUploadProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsAnalyzing(true);
          // Simulate analysis
          setTimeout(() => setIsAnalyzing(false), 2000);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const resetUpload = () => {
    setUploadedFile(null);
    setUploadProgress(0);
    setIsAnalyzing(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024 * 1024) {
      return (bytes / 1024).toFixed(1) + " KB";
    }
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-fuchsia-50">
      {/* Background Effects - Aurora Blobs for Glass Effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-gradient-to-br from-[#A755F6]/25 to-[#8B5CF6]/20 rounded-full blur-[100px] animate-aurora" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#C084FC]/20 to-[#A755F6]/15 rounded-full blur-[100px] animate-aurora-reverse" />
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-gradient-to-br from-fuchsia-300/15 to-violet-300/20 rounded-full blur-[100px] animate-aurora-slow" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-300/10 rounded-full blur-[80px] animate-aurora"
          style={{ animationDelay: "-5s" }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
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
                  fill="#18181B"
                />
                <path
                  d="M34.5096 0.00450516H27.3057V19.593H34.5096V0.00450516Z"
                  fill="#18181B"
                />
                <path
                  d="M45.0441 0.00450516L52.8259 11.3945L52.7162 0.00450516H59.481V19.593H51.6992L44.1078 8.25691L44.1369 19.593H37.4258V0.00450516H45.0441Z"
                  fill="#18181B"
                />
                <path
                  d="M69.5457 0.00450516V12.8533C69.5457 16.1861 75.8716 16.1166 75.8716 12.8533V0.00450516H83.1315V12.4673C82.6252 19.2519 75.1436 20.8813 69.5457 19.8421C65.5249 19.097 62.194 16.8437 62.2881 12.3573V0.00450516H69.5457Z"
                  fill="#18181B"
                />
                <path
                  d="M94.6245 19.593L103.45 0L111.613 0.0112217L120.143 19.593H112.334L111.308 16.8504L103.423 16.8684L102.433 19.593H94.6245ZM104.964 12.4942H109.859L107.413 5.67142L104.964 12.4942Z"
                  fill="#18181B"
                />
                <path
                  d="M129 0.00450516H121.74V19.593H129V0.00450516Z"
                  fill="#18181B"
                />
              </svg>
            </a>
            <a
              href="/"
              className="px-5 py-2 rounded-full bg-white/50 hover:bg-white/80 backdrop-blur-sm border border-white/30 text-zinc-700 text-sm font-medium transition-all"
            >
              Back to Home
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
            <span className="bg-gradient-to-r from-[#A755F6] to-[#8B5CF6] bg-clip-text text-transparent">
              QUASAR
            </span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            숏폼 콘텐츠의 빈 공간을 AI로 분석하고,
            <br />
            브랜드에 최적화된 광고 배치를 제안합니다.
          </p>

          {/* Upload Card - Glass Card */}
          <div className="bg-white/60 backdrop-blur-2xl rounded-3xl p-8 md:p-12 max-w-3xl mx-auto border border-white/70 shadow-2xl shadow-purple-300/20">
            {/* Upload Area */}
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => !uploadedFile && fileInputRef.current?.click()}
              className={`relative aspect-[9/16] max-h-[500px] mx-auto rounded-2xl flex items-center justify-center mb-8 border-2 border-dashed transition-all cursor-pointer overflow-hidden ${
                isDragging
                  ? "border-[#A755F6] bg-[#A755F6]/10"
                  : uploadedFile
                  ? "border-white/50 bg-white/50"
                  : "border-zinc-300/50 bg-white/70 hover:border-[#A755F6]/50 hover:bg-[#A755F6]/5"
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="video/*"
                onChange={handleFileSelect}
                className="hidden"
              />

              {!uploadedFile ? (
                // Upload Prompt
                <div className="text-center p-6">
                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transition-all ${
                      isDragging
                        ? "bg-[#A755F6]/20 scale-110"
                        : "bg-[#A755F6]/10"
                    }`}
                  >
                    <svg
                      className={`w-10 h-10 transition-colors ${
                        isDragging ? "text-[#A755F6]" : "text-[#A755F6]/70"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-zinc-800 mb-2 text-lg">
                    숏폼 영상 업로드
                  </h3>
                  <p className="text-zinc-500 text-sm mb-4">
                    드래그 앤 드롭 또는 클릭하여 업로드
                  </p>
                  <div className="flex items-center justify-center gap-2 text-xs text-zinc-400">
                    <span className="px-2 py-1 rounded-full bg-zinc-100">
                      MP4
                    </span>
                    <span className="px-2 py-1 rounded-full bg-zinc-100">
                      MOV
                    </span>
                    <span className="px-2 py-1 rounded-full bg-zinc-100">
                      WebM
                    </span>
                  </div>
                  <p className="text-zinc-400 text-xs mt-3">
                    최대 500MB · 9:16 세로형 권장
                  </p>
                </div>
              ) : (
                // Uploaded File Preview
                <div className="absolute inset-0 flex flex-col">
                  {/* Video Preview */}
                  <div className="flex-1 bg-zinc-900 flex items-center justify-center relative">
                    <video
                      src={URL.createObjectURL(uploadedFile)}
                      className="max-h-full max-w-full object-contain"
                      controls={uploadProgress === 100 && !isAnalyzing}
                    />

                    {/* Upload Progress Overlay */}
                    {uploadProgress < 100 && (
                      <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center">
                        <div className="w-16 h-16 rounded-full border-4 border-white/20 border-t-[#A755F6] animate-spin mb-4" />
                        <p className="text-white font-medium">
                          업로드 중... {uploadProgress}%
                        </p>
                        <div className="w-48 h-1.5 bg-white/20 rounded-full mt-3 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#A755F6] to-[#8B5CF6] rounded-full transition-all duration-300"
                            style={{ width: `${uploadProgress}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Analyzing Overlay */}
                    {isAnalyzing && (
                      <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center">
                        <div className="relative w-20 h-20 mb-4">
                          <div className="absolute inset-0 rounded-full border-4 border-[#A755F6]/30" />
                          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#A755F6] animate-spin" />
                          <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-[#C084FC] animate-spin animation-delay-150" />
                          <div className="absolute inset-4 rounded-full border-4 border-transparent border-t-[#8B5CF6] animate-spin animation-delay-300" />
                        </div>
                        <p className="text-white font-medium">AI 분석 중...</p>
                        <p className="text-white/60 text-sm mt-1">
                          빈 공간을 찾고 있습니다
                        </p>
                      </div>
                    )}
                  </div>

                  {/* File Info Bar */}
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-[#A755F6]/10 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-4 h-4 text-[#A755F6]"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-zinc-800 truncate">
                          {uploadedFile.name}
                        </p>
                        <p className="text-xs text-zinc-500">
                          {formatFileSize(uploadedFile.size)}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        resetUpload();
                      }}
                      className="p-2 rounded-lg hover:bg-zinc-100 transition-colors"
                    >
                      <svg
                        className="w-4 h-4 text-zinc-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Action Button */}
            {uploadedFile && uploadProgress === 100 && !isAnalyzing && (
              <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#A755F6] to-[#8B5CF6] hover:from-[#C084FC] hover:to-[#A755F6] text-white font-medium transition-all shadow-lg shadow-[#A755F6]/30 mb-8">
                AI 영상 분석 시작
              </button>
            )}

            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white/50 backdrop-blur-md rounded-2xl p-5 border border-white/60 hover:bg-white/70 hover:shadow-lg hover:shadow-purple-200/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#A755F6]/15 flex items-center justify-center mb-3">
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
                <h3 className="font-semibold text-zinc-800 mb-1">
                  AI 공간 분석
                </h3>
                <p className="text-zinc-500 text-sm">
                  영상 속 빈 공간과 최적의 타이밍을 자동으로 감지
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-md rounded-2xl p-5 border border-white/60 hover:bg-white/70 hover:shadow-lg hover:shadow-purple-200/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/15 flex items-center justify-center mb-3">
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
                <h3 className="font-semibold text-zinc-800 mb-1">
                  브랜드 매칭
                </h3>
                <p className="text-zinc-500 text-sm">
                  콘텐츠와 어울리는 브랜드 자동 추천
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-md rounded-2xl p-5 border border-white/60 hover:bg-white/70 hover:shadow-lg hover:shadow-purple-200/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#C084FC]/15 flex items-center justify-center mb-3">
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
                <h3 className="font-semibold text-zinc-800 mb-1">성과 분석</h3>
                <p className="text-zinc-500 text-sm">
                  실시간 광고 효과 리포트 제공
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <a
              href="/#contact"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#A755F6] to-[#8B5CF6] hover:from-[#C084FC] hover:to-[#A755F6] text-white font-medium transition-all shadow-lg shadow-[#A755F6]/30 inline-block"
            >
              QUASAR 도입 문의
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
