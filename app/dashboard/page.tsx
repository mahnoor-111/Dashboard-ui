'use client'

import { useState } from 'react'
import { ArticleTable } from '@/components/Table/ArticleTable'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const tabs = ['Generated Articles', 'Published Articles', 'Archived Articles', 'Scheduled Articles']

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('Generated Articles')

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 text-center">Articles</h2>

      {/* Tabs */}
      <div className="flex gap-4 border-b pb-2 justify-center items-center">
        {tabs.map((tab) => (
          <Button
            key={tab}
            variant="ghost"
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md font-medium ${
              activeTab === tab ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'
            }`}
          >
            {tab}
          </Button>
        ))}
      </div>

      {/* Search bar */}
      <div className="flex justify-center">
        <Input
          placeholder="Search for Title and keyword"
          className="w-full max-w-md text-sm"
        />
      </div>

      {/* Article Table */}
      <ArticleTable />
    </section>
  )
}
