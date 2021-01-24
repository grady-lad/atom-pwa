import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import path from 'path'

export default defineConfig({
  optimizeDeps: { include: ['firebase/app', 'firebase/analytics', '@material-ui/core/ButtonBase'], exclude: ['hammerjs'] },
  plugins: [reactRefresh(), svgr()],
  alias: {
    '@': path.resolve('./src')
  }
})