import { useEffect, useState } from 'react';
import Intro from './Intro';
import Navbar from '../../components/Navbar';
import About from './About';
import Experiences from './Experiences';
import Projects from './Projects';
import Stats from './Stats';
import ContactMe from './Contact';
import Loader from '../../components/Loader';

function Home() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/get-portfolio-data');
        const res = await response.json();
        console.log(res);
        if (res.success) {
          setPortfolioData(res.data);
        } else {
          throw new Error(res.message || 'Error fetching data');
        }
      } catch (error) {
        try {
          const localResponse = await fetch('/portfolioData.json');
          const localData = await localResponse.json();
          setPortfolioData(localData);
        } catch (localError) {
          setError('Error fetching portfolio data');
        }
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!portfolioData) {
    return <Loader/>;
  }

  return (
    <div className="no-scrollbar h-screen overflow-auto scroll-smooth">
      <Navbar />
      <section id='home'>
        <Intro data={portfolioData.intro} />
      </section>
      <section id='about'>
        <About data={portfolioData.about} />
      </section>
      <section id='experiences'>
        <Experiences data={portfolioData.experiences} />
      </section>
      <section id='projects'>
        <Projects data={portfolioData.projects} />
      </section>
      <section id='stats'>
        <Stats/>
      </section>
      <section id='contact'>
        <ContactMe data={portfolioData.socials} />
      </section>
    </div>
  );
}

export default Home;
