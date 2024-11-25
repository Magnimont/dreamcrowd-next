'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function UnsubscribeButton({ email, token }: { email: string, token: string }) {
  const router = useRouter()
  const [unsubscribed, setUnsubscribed] = useState(false)

  const handleUnsubscribe = async () => {
    const response = await fetch(`/api/newsletter?email=${email}&token=${token}`, {
      method: 'DELETE',
    })

    if (response.ok) {
      setUnsubscribed(true)
      setTimeout(() => {
        router.push('/')
      }, 4000)
    }
  }

  return (
    <div>
      {unsubscribed ? (
        <div className="text-xl text-gray-600">Sad to see you go :( </div>
      ) : (
        <button
          onClick={handleUnsubscribe}
          type="button"
          className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors"
        >
          Unsubscribe
        </button>
      )}
    </div>
  )
}
