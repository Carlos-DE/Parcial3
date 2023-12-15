"use client";

import { useEffect, useState } from 'react';
//import Figure from "react-bootstrap/Figure";
import React from "react";
import LazyMap, {LazyMarker} from "@/components/Map.lazy";
import { notFound } from "next/navigation";
import { ImageForm } from "@/components/ImageForm";

interface Eventos {
  _id: string;
  imagen: string;
  nombre: string;
  lat: number;
  lon: number;
}
//no funciona porque el import da error
//<Figure.Image
//                    style={{ objectFit: "cover", objectPosition: "center", width: "100%", height: "250px" }}
//                    src={`${registration.imagen}`} />

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

  //<div style={{height: "500px"}}>
  //              <LazyMap center={[registration.lon, registration.lat]} zoom={15}>
  //                  <LazyMarker position={[registration.lon, registration.lat]}></LazyMarker>
  //              </LazyMap>
  //          </div>

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
