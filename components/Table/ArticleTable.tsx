'use client'

import { articles } from '@/lib/data'
import { Button } from '@/components/ui/button'

export function ArticleTable() {
  return (
    <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
      <table className="min-w-full text-sm text-gray-800">
        <thead className="bg-gray-50 text-left border-b">
          <tr className="text-sm font-bold text-gray-600">
            <th className="px-6 py-4">Title</th>
            <th className="px-6 py-4">Keyword</th>
            <th className="px-6 py-4">Words</th>
            <th className="px-6 py-4">Created On</th>
            <th className="px-6 py-4">Publish</th>
            <th className="px-6 py-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article, i) => (
            <tr key={i} className="hover:bg-gray-50 border-b">
              <td className="px-6 py-4 font-medium">{article.title}</td>
              <td className="px-6 py-4">{article.keyword}</td>
              <td className="px-6 py-4">{article.words}</td>
              <td className="px-6 py-4">{article.createdOn}</td>

              {/* Publish column */}
              <td className="px-6 py-4 text-blue-600 font-bold text-lg">
                W
              </td>

              <td className="px-6 py-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-green-500 text-green-600 hover:bg-green-50"
                >
                  View
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
