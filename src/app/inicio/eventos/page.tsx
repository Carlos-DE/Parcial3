"use client";

import { useEffect, useState } from 'react';

interface Eventos {
  _id: string;
  imagen: string;
  nombre: string;
}

function Directions() {
  const [Directions, setDirections] = useState<Eventos[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/directions');
        const data = await response.json();
        setDirections(data);
      } catch (error) {
        console.error('Error fetching Directions:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mx-auto mt-8 max-w-screen-xl px-4">
      <h2 className="text-2xl font-bold mb-4">Nuestros eventos:</h2>
      <div className="grid gap-4">
        {Directions.map((registration) => (
          <div key={registration._id} className="p-4 border rounded-md">
            <p>Nombre: {registration.nombre}</p>
            <p>Foto:</p><img src={registration.imagen}></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Directions;
