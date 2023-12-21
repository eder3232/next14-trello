import Logo from '@/components/branding/logo'
import { Button } from '@/shadcnui/ui/button'

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full border-t shadow-sm bg-slate-100 px-4">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button size="sm" variant="ghost">
            Privary policy
          </Button>
          <Button size="sm" variant="ghost">
            Terms of service
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Footer
