import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import TrustBadges from '@/components/TrustBadges'
import GuidedTour from '@/components/GuidedTour'
import ComfortSection from '@/components/ComfortSection'
import PowerfulSection from '@/components/PowerfulSection'
import TerrainSection from '@/components/TerrainSection'
import SafetySection from '@/components/SafetySection'
import ComponentsSection from '@/components/ComponentsSection'
import ExpertReviews from '@/components/ExpertReviews'
import ComparisonTable from '@/components/ComparisonTable'
import Specifications from '@/components/Specifications'
import UserReviews from '@/components/UserReviews'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <TrustBadges />
      <GuidedTour />
      <ComfortSection />
      <PowerfulSection />
      <TerrainSection />
      <SafetySection />
      <ComponentsSection />
      <ExpertReviews />
      <ComparisonTable />
      <Specifications />
      <UserReviews />
      <FAQ />
      <Footer />
    </div>
  )
}
