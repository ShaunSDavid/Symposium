import "./App.css";
import Header from "./components/header";
import Department from "./components/department";
import Footer from "./components/footer";

function App() {
  const dept_details = [
    {
      name: "CSE",
      image:
        "https://static.vecteezy.com/system/resources/previews/021/000/069/original/cse-letter-logo-design-in-illustration-logo-calligraphy-designs-for-logo-poster-invitation-etc-vector.jpg",
    },
    {
      name: "ECE",
      image:
        "https://static.vecteezy.com/system/resources/previews/021/000/069/original/cse-letter-logo-design-in-illustration-logo-calligraphy-designs-for-logo-poster-invitation-etc-vector.jpg",
    },
    {
      name: "EEE",
      image:
        "https://static.vecteezy.com/system/resources/previews/021/000/069/original/cse-letter-logo-design-in-illustration-logo-calligraphy-designs-for-logo-poster-invitation-etc-vector.jpg",
    },
    {
      name: "Mech",
      image:
        "https://static.vecteezy.com/system/resources/previews/021/000/069/original/cse-letter-logo-design-in-illustration-logo-calligraphy-designs-for-logo-poster-invitation-etc-vector.jpg",
    },
    {
      name: "IT",
      image:
        "https://static.vecteezy.com/system/resources/previews/021/000/069/original/cse-letter-logo-design-in-illustration-logo-calligraphy-designs-for-logo-poster-invitation-etc-vector.jpg",
    },
  ];
  return (
    <div className="App">
      <Header />
      <div className="depts">
        {dept_details.map((department) => (
          <Department depart={department} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
