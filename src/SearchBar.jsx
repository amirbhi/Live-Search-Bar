// import React, { useEffect, useState } from "react";
// import axios from 'axios';
// function SearchBar() {
//   const [charcter, setCharcter] = useState([]);
//   const [query, setQuery] = useState("");
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const { data } = await axios.get(
//           `https://rickandmortyapi.com/api/character/?name=${query}`
//         );
//         setCharcter(data.results);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, [query]);

//   return (
//     <div>
//       <div className="search">
//         <input
//           type="text"
//           placeholder={"Search Character"}
//           className={"input"}
//           onChange={(event) => setQuery(event.target.value)}
//           value={query}
//         />
//       </div>
//       <div className="results">
//         {charcter.map((character) => (
//           <div key={character.id}>
//             <img src={character.image} alt={character.name} />
//             {character.name}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SearchBar;


import React, { useState } from 'react';

const CONTACTS = [
  {
    id: 1,
    name: 'Apple',
    phoneNumber: 'IOS',
    image: 'https://cdn.worldvectorlogo.com/logos/apple.svg'
  },
  {
    id: 2,
    name: 'Google',
    phoneNumber: 'Android',
    image: 'https://cdn.worldvectorlogo.com/logos/android.svg'
  },
  {
    id: 3,
    name: 'Microsoft',
    phoneNumber: 'Windows mobile',
    image: 'https://cdn.worldvectorlogo.com/logos/windows.svg'
  },
  {
    id: 4,
    name: 'Blackberry',
    phoneNumber: 'Blackberry OS',
    image: 'https://cdn.worldvectorlogo.com/logos/bbm-blackberry-messenger.svg'
  }
];

const Contact = ({ name, phoneNumber, image }) => (
  <li className="contact">
    <img src={image} width="60px" height="60px" className="contact-image" />
    <div className="contact-info">
      <div className="contact-name">{name}</div>
      <div className="contact-number">{phoneNumber}</div>
    </div>
  </li>
);

const ContactsList = () => {
  const [displayedContacts, setDisplayedContacts] = useState(CONTACTS);

  const handleSearch = (event) => {
    const searchQuery = event.target.value.toLowerCase();
    const displayedContacts = CONTACTS.filter((el) => {
      const searchValue = el.name.toLowerCase();

      return searchValue.indexOf(searchQuery) !== -1;
    });

    setDisplayedContacts(displayedContacts);
  };

  return (
    <div className="contacts">
      <input type="text" className="search-field" onChange={handleSearch} />
      <ul className="contacts-list">
        {displayedContacts.map((el) => (
          <Contact
            key={el.id}
            name={el.name}
            phoneNumber={el.phoneNumber}
            image={el.image}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;

