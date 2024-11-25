import UnsubscribeButton from './UnsubscribeButton'

export default async function UnsubscribePage({
  searchParams,
}: {
  searchParams: Promise<{ email?: string; token?: string }>
}) {
  const params = await searchParams
  const email = params.email
  const token = params.token

  if (!email || !token) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Invalid Unsubscribe Link</h1>
          <p className="text-gray-600">The unsubscribe link is invalid or expired.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Unsubscribe from Newsletter</h1>
        <p className="text-gray-600 mb-8">
          Are you sure you want to unsubscribe {email} from our newsletter?
        </p>
        <UnsubscribeButton email={email} token={token} />
      </div>
    </div>
  )
}