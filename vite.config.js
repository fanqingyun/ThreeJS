import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        react({
            jsxRuntime: 'automatic', // 默认已开启，无需显式设置（React 17+）
        }),
    ],
});