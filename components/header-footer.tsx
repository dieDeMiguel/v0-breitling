import Header from "@/components/header"
import Footer from "@/components/footer"

export default function HeaderFooter() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 overflow-auto bg-white">{/* Main content area intentionally left blank */}</main>
      <Footer />
    </div>
  )
} 