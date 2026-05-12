import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then(setPlants);
  }, []);

  function handleAddPlant(newPlant) {
    setPlants((prev) => [...prev, newPlant]);
  }

  const filteredPlants = plants.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search onSearch={setSearch} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
