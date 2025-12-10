import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export interface SiteSuggestion {
  tagline: string;
  description: string;
  colorScheme: string[];
}

export const generateSiteIdea = async (businessDescription: string): Promise<SiteSuggestion> => {
  try {
    const prompt = `
      Bạn là một chuyên gia UX/UI và Marketing. Người dùng muốn tạo một website cho doanh nghiệp với mô tả: "${businessDescription}".
      Hãy đề xuất các thông tin sau bằng tiếng Việt dưới dạng JSON:
      1. Một slogan (tagline) ấn tượng.
      2. Một đoạn mô tả ngắn về website (khoảng 2 câu).
      3. Một bảng màu (color scheme) gồm 3 mã màu hex phù hợp.
      
      Trả về JSON thuần túy, không markdown.
      Ví dụ format:
      {
        "tagline": "...",
        "description": "...",
        "colorScheme": ["#ffffff", "#000000", "#ff0000"]
      }
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");

    return JSON.parse(text) as SiteSuggestion;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Không thể tạo gợi ý lúc này. Vui lòng thử lại.");
  }
};