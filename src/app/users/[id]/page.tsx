import { useRouter } from 'next/router'

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <div className="flex items-center flex-col justify-center">{params.id}</div>
  )
}

export default Page
