import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'



// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),

  ],
  server:{
    port: 3000,
  },
  // Add Tailwind CSS plugin configuration here if needed
  // tailwindcss() is not valid in this context

})
