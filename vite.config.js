// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/re5-0901/", // ✅ 반드시 GitHub 저장소 이름으로 설정
});
