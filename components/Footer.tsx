import React from 'react';
import { Cpu, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
               <Cpu className="h-6 w-6 text-blue-500" />
               <span className="font-bold text-xl text-white">AI WebBuilder</span>
            </div>
            <p className="text-sm text-slate-400">
              Nền tảng xây dựng website thông minh, giúp hàng ngàn doanh nghiệp lên sóng internet chỉ trong vài giây.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Sản phẩm</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Website Builder</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">AI Content</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Templates</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Hosting</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Hỗ trợ</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Trung tâm trợ giúp</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Tài liệu API</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Cộng đồng</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Liên hệ</a></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Kết nối</h4>
             <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-colors"><Facebook size={20}/></a>
                <a href="#" className="hover:text-white transition-colors"><Twitter size={20}/></a>
                <a href="#" className="hover:text-white transition-colors"><Instagram size={20}/></a>
                <a href="#" className="hover:text-white transition-colors"><Linkedin size={20}/></a>
             </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; 2024 AI WebBuilder. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-300">Điều khoản</a>
            <a href="#" className="hover:text-slate-300">Bảo mật</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;