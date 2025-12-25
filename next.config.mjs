/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... config เดิมของคุณ ...

  // เพิ่มส่วนนี้เข้าไป
  experimental: {
    serverComponentsExternalPackages: [
      'libsql',
      '@libsql/client',
      'better-sqlite3',
      '@payloadcms/db-sqlite',
      'jose',
    ],
  },

  // หรือถ้าเป็น Next.js เวอร์ชั่นเก่าหน่อยอาจใช้วิธี webpack
  webpack: (config) => {
    config.externals.push({
      libsql: 'commonjs libsql',
      '@libsql/client': 'commonjs @libsql/client',
      'better-sqlite3': 'commonjs better-sqlite3',
    })
    return config
  },
}

export default nextConfig
