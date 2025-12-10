import React, { useState } from 'react';
import { Sparkles, Loader2, ArrowRight } from 'lucide-react';
import { generateSiteIdea, SiteSuggestion } from '../services/geminiService';

const AiDemo: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SiteSuggestion | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!input.trim()) return;
    
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const data = await generateSiteIdea(input);
      setResult(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="demo" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
             <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[100px]"></div>
             <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[100px]"></div>
        </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold mb-4 border border-blue-500/30">
            Trải nghiệm ngay
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Thử sức mạnh của AI</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Nhập mô tả ngắn về ý tưởng kinh doanh của bạn, chúng tôi sẽ phác thảo ý tưởng website ngay lập tức.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ví dụ: Tiệm cà phê sách ấm cúng tại Đà Lạt..."
              className="flex-1 px-6 py-4 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
            />
            <button
              onClick={handleGenerate}
              disabled={loading || !input.trim()}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-bold text-lg hover:shadow-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[160px]"
            >
              {loading ? <Loader2 className="animate-spin" /> : <>Tạo ngay <Sparkles className="ml-2 w-5 h-5" /></>}
            </button>
          </div>

          {error && (
             <div className="mt-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200">
                {error}
             </div>
          )}

          {result && (
            <div className="mt-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-blue-400 font-semibold mb-2">Tagline Đề xuất</h3>
                    <p className="text-2xl md:text-3xl font-serif italic text-white leading-relaxed">"{result.tagline}"</p>
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-purple-400 font-semibold mb-2">Mô tả Website</h3>
                    <p className="text-slate-300 leading-relaxed">{result.description}</p>
                  </div>
                </div>
                
                <div className="bg-slate-800/50 rounded-xl p-6 border border-white/5">
                   <h3 className="text-sm uppercase tracking-wider text-slate-400 font-semibold mb-4">Bảng màu đề xuất</h3>
                   <div className="space-y-4">
                      {result.colorScheme.map((color, idx) => (
                        <div key={idx} className="flex items-center gap-4">
                            <div 
                                className="w-16 h-16 rounded-lg shadow-lg" 
                                style={{ backgroundColor: color }}
                            ></div>
                            <div>
                                <p className="text-white font-mono">{color}</p>
                                <p className="text-xs text-slate-400">Màu chủ đạo {idx + 1}</p>
                            </div>
                        </div>
                      ))}
                   </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-white/10 text-center">
                  <p className="text-slate-400 mb-4">Bạn thích ý tưởng này?</p>
                  <button className="text-white font-semibold hover:text-blue-400 inline-flex items-center transition-colors">
                      Tiến hành xây dựng website đầy đủ <ArrowRight className="ml-2 w-4 h-4"/>
                  </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AiDemo;