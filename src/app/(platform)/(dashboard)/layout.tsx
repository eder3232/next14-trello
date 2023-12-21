import type { ReactNode } from 'react'
import DashBoardNavbar from './_components/dashboard-navbar'

const DashbordLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full">
      <DashBoardNavbar />
      {children}
    </div>
  )
}

export default DashbordLayout
