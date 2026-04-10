import { defineConfig, pluginSsg, pluginBundle, pluginEntry, pluginBeautify } from 'minista'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    pluginSsg(),
    pluginBundle(),
    pluginEntry(),
    pluginBeautify(),
  ],
  ssr: {
    noExternal: ['lucide-react'],
  },
})
