import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Search from './components/Search/Search';
import CustomDropdown from './components/Dropdown/CustomDropdown';
import Card from './components/Card/Card';

function App() {
  const [universities, setUniversities] = useState([]);
  const [country, setCountry] = useState(null);
  const [states, setStates] = useState([]);

  const fetchUniversities = async () => {
    await axios.get('http://universities.hipolabs.com/search')
    .then((res) => {
      const x = res.data.slice(0, 5);
      setUniversities(res.data.slice(0, 20));
    })
      .catch((err) => {
        console.log(err);
      });

  }

  useEffect(() => {
    fetchUniversities();
  }, []);

  useEffect(() => {
    console.log(country);
    if (country) {
      axios.get(`http://universities.hipolabs.com/search?country=${country}`).then((res) => {
        setUniversities(res.data);
        const states = res.data.map((uni) => uni["state-province"]);
        console.log(states);
        setStates([...new Set(states)]);
      })
        .catch((err) => {
          console.log(err);
        });
    }

  }, [country])

  return (
    <>
      <div className="container">
        <section className="navbar">
          <Search setCountry={(val) => {
            setCountry(val);
          }} />
          <CustomDropdown states={states} />
        </section>
        <section className="body">
          {universities.length != 0 ? universities.map((university, index) => {
            return <Card id={index} name={university.name} country={university.country} state={university["state-province"]} />
          }) : "no university found"}
        </section>
      </div>
    </>
  )
}

export default App
