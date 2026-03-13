'use client'

/**
 * SANITY STUDIO (Embedded)
 * Accessible at /studio — this embeds Sanity Studio directly in the Next.js app.
 * Staff can manage all content (suites, menus, gallery, V-Club, events) from here.
 *
 * Note: In production, consider restricting access via middleware or auth.
 */

// TODO: Uncomment when next-sanity is installed and configured
// import { NextStudio } from 'next-sanity/studio'
// import config from '@/sanity/sanity.config'

export default function StudioPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Sanity Studio</h1>
        <p className="text-gray-600">
          Studio will be embedded here once Sanity is configured.
        </p>
        <p className="text-sm text-gray-400 mt-2">
          Run <code className="bg-gray-200 px-2 py-1 rounded">npx sanity init</code> to set up your project.
        </p>
      </div>
    </div>
  )
  // TODO: Replace with: return <NextStudio config={config} />
}
