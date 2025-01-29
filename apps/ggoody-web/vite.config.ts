import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactRouterPlugin from "vite-plugin-next-react-router";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    reactRouterPlugin({
      pageDir: "app/pages",
      extensions: ["js", "jsx", "ts", "tsx"],
      // like '_app' in Next.js, `_document` is not supported since all rendering is done in client side
      layout: "_layout",
    }),
  ],
  server: {
    host: "0.0.0.0", // 모든 네트워크 인터페이스에서 접근 가능
    port: 5173, // 기본 포트 (필요 시 변경 가능)
  },
});
