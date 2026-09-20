import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* 顺序依 S0 信息优先级：能做什么 → 案例 → 凭什么信 → 怎么联系 → 你是谁。
            原顺序把「关于/品牌故事」（优先级 5）排在「他们信任我们」（优先级 3）之前。 */}
        <Hero />
        <Services />
        <Projects />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
