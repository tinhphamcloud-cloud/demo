import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-8 shadow-sm">
          <Sparkles className="w-4 h-4 mr-2" />
          Công nghệ AI 2.0 mới nhất
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
          Thiết kế Website <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
            trong vài giây
          </span>
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600 mb-10 leading-relaxed">
          Không cần biết lập trình. Không cần kỹ năng thiết kế. Chỉ cần mô tả ý tưởng của bạn, AI sẽ xây dựng toàn bộ website chuyên nghiệp, tối ưu SEO ngay lập tức.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#demo"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1"
          >
            Tạo Website Miễn Phí
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <a 
            href="#features"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-all"
          >
            Tìm hiểu thêm
          </a>
        </div>
        
        <div className="mt-16 relative mx-auto max-w-5xl">
            <div className="rounded-xl bg-slate-900/5 p-2 lg:p-4 ring-1 ring-inset ring-slate-900/10">
                <img 
                    src="https://picsum.photos/1200/600?random=1" 
                    alt="App Dashboard" 
                    className="rounded-lg shadow-2xl block w-full bg-slate-100"
                />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;