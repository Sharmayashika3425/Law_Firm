import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import PracticeAreasSection from '@/components/PracticeAreasSection'
import AchievementSection from "@/components/AchievementSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      {/* <PracticeAreasSection />
      <AchievementSection /> */}
    </main>
  )
}