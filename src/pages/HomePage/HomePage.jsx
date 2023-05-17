import Header from '../../components/Header'
import Welcome from '../../components/Welcome'
import Projects from '../../components/Projects'
import Footer from '../../components/Footer'

const HomePage = ({ isActive, homePageContext }) => (
    <>
        <Header />
        <Welcome homePageContext={homePageContext} />
        <Projects isActive={isActive} />
        <Footer />
    </>
)
export default HomePage
